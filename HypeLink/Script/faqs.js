document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const panel = accordion.nextElementSibling;
    
    // Initialize all panels as closed
    gsap.set(panel, {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0
    });
    

    

    accordion.addEventListener('click', function() {
      this.classList.toggle('active');
      const isActive = this.classList.contains('active');
      
      if (isActive) {
        // Opening animation
        gsap.to(panel, {
          height: 'auto',
          opacity: 1,
          paddingTop: 18,
          paddingBottom: window.innerWidth < 768 ? 180 : 75,
          marginTop: 10,
          marginBottom: 10,
          duration: 0.5,
          ease: 'ease.inOut'
        });
      } else {
        // Closing animation
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
          duration: 0.3,
          ease: 'ease.inOut'
        });
      }
    });
  });
});