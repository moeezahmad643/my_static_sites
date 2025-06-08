function about(){
    gsap.from("#about", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 90%",
            end: "bottom 40%",
        },
    });

    gsap.from("#about div", {
        x: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 90%",
            end: "bottom 40%",
        },
    });
}
about()