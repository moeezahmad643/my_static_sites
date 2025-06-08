function achievement() {
  gsap.from("#achivements .achievement h2, #achivements .achievement p", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    delay: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#achivements",
      start: "top 80%",
      end: "bottom 20%",
    },
  });
}
achievement();

  gsap.from("#achivements", {
    opacity: 0,
    scale: 0,
    duration: 0,
    delay: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#achivements",
      start: "top 80%",
      end: "bottom 20%",
    },
  });

