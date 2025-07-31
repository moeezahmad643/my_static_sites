let about = gsap.timeline();

about.from(".about .about-image", {
  x: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".about .about-image",
    start: "top 60%",
    end: "top 40%",
    scrub: true,
  },
});

about.from(".about .text-box", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".about .text-box",
    start: "top 60%",
    end: "top 40%",
    scrub: true,
  },
});
