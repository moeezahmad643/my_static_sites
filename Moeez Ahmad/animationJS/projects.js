  gsap.from(".card", {
    scale: 1.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      start: "top 70%",
      trigger: ".card",
      scroller: "body",
      end: "top 30%",
      scrub: 1,
    },
  });
