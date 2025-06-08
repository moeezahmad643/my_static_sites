function header(){
    gsap.from("header .header-content img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from("header h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out"
  });

  gsap.from("header h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
  });

  gsap.from("header p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power3.out"
  });

  gsap.from("header > img", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    delay: 1,
    ease: "power2.out"
  });
}
header();