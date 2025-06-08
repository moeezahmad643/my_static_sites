document.addEventListener("DOMContentLoaded", function () {
  // Configuration
  const SCROLL_DURATION = 600; // Slightly longer for smoother feel
  const EASING_FUNCTION = (t) => t<.5 ? 2*t*t : -1+(4-2*t)*t; // Enhanced easeInOutQuad

  // Cache elements
  const main = document.querySelector(".videos .main");
  const videos = main.querySelectorAll("iframe");
  const rightArrows = document.querySelectorAll(".bi-arrow-right-circle");
  const leftArrow = document.querySelector(".bi-arrow-left-circle");

  // Calculate scroll amount with proper gap detection
  const getScrollAmount = () => {
    if (!videos.length) return 300;
    const style = window.getComputedStyle(main);
    const gap = parseInt(style.gap) || 20;
    return videos[0].offsetWidth + gap;
  };

  // Advanced smooth scroll function
  const smoothScroll = (element, target) => {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    let requestId;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);
      const easeProgress = EASING_FUNCTION(progress);
      
      element.scrollLeft = start + change * easeProgress;
      
      if (progress < 1) {
        requestId = requestAnimationFrame(animateScroll);
      }
    };

    // Cancel any ongoing animation
    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(animateScroll);
  };

  // Enhanced arrow click handlers
  const handleArrowClick = (direction) => {
    const currentScroll = main.scrollLeft;
    const scrollAmount = getScrollAmount();
    const maxScroll = main.scrollWidth - main.clientWidth;
    const target = direction === 'right' 
      ? Math.min(currentScroll + scrollAmount, maxScroll)
      : Math.max(currentScroll - scrollAmount, 0);
    
    smoothScroll(main, target);
  };

  rightArrows.forEach(arrow => {
    arrow.addEventListener("click", () => handleArrowClick('right'));
  });

  leftArrow.addEventListener("click", () => handleArrowClick('left'));

  // Improved boundary detection
  const updateArrowStates = () => {
    const tolerance = 5; // Pixel tolerance for boundary detection
    const atStart = main.scrollLeft <= tolerance;
    const atEnd = main.scrollLeft + main.clientWidth >= main.scrollWidth - tolerance;

    leftArrow.style.opacity = atStart ? '0.5' : '1';
    leftArrow.style.pointerEvents = atStart ? 'none' : 'all';
    leftArrow.style.cursor = atStart ? 'default' : 'pointer';

    rightArrows.forEach(arrow => {
      arrow.style.opacity = atEnd ? '0.5' : '1';
      arrow.style.pointerEvents = atEnd ? 'none' : 'all';
      arrow.style.cursor = atEnd ? 'default' : 'pointer';
    });
  };

  // Throttled scroll event
  let isScrolling;
  main.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(updateArrowStates, 100);
  }, false);

  // Initialize
  updateArrowStates();
});