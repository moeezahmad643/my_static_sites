gsap.from("#services section div",{
    sacle:2,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        start:"top 60%",
        end:"top 30%",
        scrub:1,
        trigger: "#services section div",
        // markers:true,
    }
})