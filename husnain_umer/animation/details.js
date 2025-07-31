let details = gsap.timeline();

details.from(".details  div ", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".details div",
    start: "top 60%",
    end: "top 40%",
    scrub: true,
  },
});