let cta = gsap.timeline();

cta.from(".cta h2, .cta p, .cta a, .cta .cta-background", {
  y: -100,
  opacity: 0,   
    duration: 2,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".cta h2",
        start: "top 60%",
        end: "top 40%",
        scrub: true,
    },
});