gsap.from("footer  a", {
  y: 20,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "footer ",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
    // markers:true,
  },
});
