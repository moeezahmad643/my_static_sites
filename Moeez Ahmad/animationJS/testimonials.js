gsap.from(".testimonials .cards", {
    scale: 1.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      start: "top 70%",
      trigger: ".cards",
      scroller: "body",
      end: "top 30%",
      scrub: 1,
    },
  });
