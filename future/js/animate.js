gsap.to(".stoper span", {
  y: "-100vh",
  duration: 1,
  ease: "power2.inOut", 
  stagger: 0.2,
  onComplete: () => {
    document.querySelector(".stoper").style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling after the animation
  }
});

let headerAnimations = gsap.timeline({
  delay: 1.5,
});

headerAnimations.from("header img", {
  top: "100px",
  opacity: 0,
});

headerAnimations.from(
  "header img",
  {
    transform: "translate(-50%, -50%) rotate(360deg)",
  },
  "0"
);

headerAnimations.from(
  "header .content",
  {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  "0"
);

let aboutAnimations = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 40%",
    end: "top 20%",
    scrub: 5,
  },
});

aboutAnimations.from(
  ".about .img img",
  {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  "0"
);

aboutAnimations.from(
  ".about .content",
  {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  "0"
);

let servicesAnimations = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top 40%",
    end: "top 20%",
    scrub: 5,
  },
});

servicesAnimations.from(
  ".services > span, .services >   h1, .services > p",
  {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  "0"
);

servicesAnimations.from(
  ".services main div",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.2,
  },
  "0"
);

let packagesAnimations = gsap.timeline({
  scrollTrigger: {
    trigger: ".pakages",
    start: "top 40%",
    end: "top 20%",
    scrub: 5,
  },
});

packagesAnimations.from(
  ".pakages > span, .pakages >   h1, .pakages > p",
  {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  "0"
);

packagesAnimations.from(
  ".pakages main div",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.2,
  },
  "0"
);

let contactAnimations = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%",
    end: "top 60%",
    scrub: 5,
  },
});

contactAnimations.from(
  ".contact .content > span, .contact  .content >   h1, .contact .content > p",
  {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  "0"
);

contactAnimations.from(
  ".contact form input, .contact form textarea, .contact form button",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.2,
  },
  "0"
);

contactAnimations.from(
  ".contact .img-box img",
  {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.2,
  },
  "0"
);
