let about = gsap.timeline();

about.from("#about h1, #about p", {
  x: -300,
  duration: 1,
  stagger: 0.2,
  opacity:0,
  scrollTrigger: {
    trigger: "#about",
    start:'top 70%',
    end: "top 30%",
    scrub:2,
    // markers:true,
  },
});
