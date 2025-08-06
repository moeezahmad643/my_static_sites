let footer = gsap.timeline();

footer.from("footer div", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "footer div",
   start: "top 80%",
    end: "top 60%",
    scrub: true,
  },
});
