gsap.from("nav", {
  duration: 1,
  y: -50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from("header div", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
});

gsap.from("header img", {
  duration: 2,
  delay: 2,
  scale: 0,
  opacity: 0,
  ease: "power2.out",
});

gsap.from("header .header-text", {
  duration: 2,
  x: -30,
  delay: 2,
  ease: "power2.out",
});

gsap.from("#wordDone div", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#wordDone",
    start: "top 80%",
  },
});

document.querySelectorAll("#wordDone span").forEach((el) => {
  const finalValue = parseInt(el.textContent);
  const obj = { val: 0 };

  gsap.to(obj, {
    val: finalValue,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
    },
    onUpdate: () => {
      el.innerText = Math.floor(obj.val);
    },
  });
});

gsap.from("#services h2", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
});

gsap.from("#services div div", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
  },
});

const follower1 = document.querySelector(".circle.pointer1");
const follower2 = document.querySelector(".circle.pointer2");

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let pos1 = { x: mouse.x, y: mouse.y };
let pos2 = { x: mouse.x, y: mouse.y };

// Show on first mouse move
window.addEventListener("mousemove", (e) => {
  follower1.style.display = "block";
  follower2.style.display = "block";
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Animate follower1 (outer ring)
gsap.ticker.add(() => {
  pos1.x += (mouse.x - pos1.x) * 0.05;
  pos1.y += (mouse.y - pos1.y) * 0.05;

  gsap.set(follower1, {
    x: pos1.x,
    y: pos1.y,
  });
});

// Animate follower2 (inner dot) — more responsive
gsap.ticker.add(() => {
  pos2.x += (mouse.x - pos2.x) * 0.15;
  pos2.y += (mouse.y - pos2.y) * 0.15;

  gsap.set(follower2, {
    x: pos2.x,
    y: pos2.y,
  });
});

gsap.from(".waiter div h2", {
  y: -50,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

gsap.from(".waiter div img", {
  y: 50,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  onComplete: () => {
    document.querySelector(".waiter").style.display = "none";
    document.querySelector("body").style.height = "auto";
    document.querySelector("body").style.overflowY = "auto";
  },
});
