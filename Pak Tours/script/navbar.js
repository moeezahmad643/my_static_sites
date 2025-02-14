let showNavbar = false;
document.getElementById("nav-icon").addEventListener("click", () => {
  showNavbar = !showNavbar;
  if (showNavbar == true) {
    document
      .getElementById("nav-list")
      .setAttribute("style", "display:flex !important;");
  } else {
    document.getElementById("nav-list").removeAttribute("style");
  }
});
