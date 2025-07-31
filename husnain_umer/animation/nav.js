let navbar = gsap.timeline({
    delay: 1
});

navbar.from(
  "nav span",
  {
    x: -100,
    opacity: 0,         
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
    },
    "0"
);

navbar.from(
  "nav div, nav a",
  {
    x: 100,
    opacity: 0,         
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
    },
    "0"
);

navbar.from(
  "nav ul li",
  {
    y: -100,
    opacity: 0,         
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
    },
    "0"
);