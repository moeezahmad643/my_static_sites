let current_width = window.innerWidth;

window.addEventListener("resize", resizeNavbar);
window.addEventListener("load", resizeNavbar);

function resizeNavbar() {
  let nav1 = document.querySelector("#nav-1");
  let nav2 = document.querySelector("#nav-2");

  // Update the current width inside the function
  current_width = window.innerWidth;

  if (current_width < 750) {
    nav1.setAttribute("style", "display:none !important;");
    nav2.setAttribute("style", "display:flex !important;");
  } else {
    nav1.setAttribute("style", "display:flex !important;");
    nav2.setAttribute("style", "display:none !important;");
  }
}

 gsap.to("#nav-2-ul", {
    left: "-100lvw",
    duration: 0,
  });

document.querySelector(".bi-list").addEventListener("click", function () {
  gsap.to("#nav-2-ul", {
    left: 0,
  });

  gsap.to("body", {
    height: "100vh",
    overflow: "hidden",
  });
});

document.querySelector(".x").addEventListener("click", function () {
  gsap.to("#nav-2-ul", {
    left: "-100lvw",
  });
    gsap.to("body", {
        height: "auto",
        overflow: "auto",
    });
});

