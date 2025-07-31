let stoper = gsap.timeline();

stoper.to(
  ".stoper .part1",
  {
    duration: 1,
    width: "100%",
    ease: "power2.inOut",
    stagger: 0.2,
    backgroundColor: "#ff4500",
  },
  "start"
);

stoper.to(
  ".stoper .part2",
  {
    duration: 1,
    width: "100%",
    ease: "power2.inOut",
    stagger: 0.2,
    backgroundColor: "#000000ff",
  },
  "start"
);

stoper.from(
  ".stoper span",
  {
    x: "100vw",
    duration: 1,
    width: "100vw",
    ease: "power2.inOut",
    stagger: 0.2,
    backgroundColor: "#000000ff",
  },
  "start"
);

stoper.to(".stoper ", {
  duration: 1,
  gap: "100vh",
  ease: "power2.inOut",
  stagger: 0.2,
  backgroundColor: "transparent",

  onComplete: () => {
    document.querySelector(".stoper").style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto";
  },
});
