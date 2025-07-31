let whyUs = gsap.timeline();

whyUs.from(".why-us span, .why-us h2 ", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".why-us h2",
    start: "top 60%",
    end: "top 40%",
    scrub: true,
  },
});

whyUs.from(".why-us .cards ", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".why-us .cards",
    start: "top 60%",
    end: "top 40%",
    scrub: true,
  },
});
