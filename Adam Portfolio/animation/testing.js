document.querySelectorAll("section").forEach((sec, i) => {
    gsap.from(sec, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 80%",  // start animation when section is 80% into the viewport
        toggleActions: "play none none none"
      }
    });
  });

document.querySelectorAll("section img").forEach((sec, i) => {
    gsap.from(sec, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 80%",  // start animation when section is 80% into the viewport
        toggleActions: "play none none none"
      }
    });
  });