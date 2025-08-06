let testimonials = gsap.timeline();

testimonials.from(".testimonials span, .testimonials h2 ", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".testimonials h2",
    start: "top 80%",
    end: "top 60%",
    scrub: true,
  },
});

testimonials.from(".testimonials .cards ", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".testimonials .cards",
    start: "top 80%",
    end: "top 60%",
    scrub: true,
  },
});
