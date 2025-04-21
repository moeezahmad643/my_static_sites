let open = false;
let middle = document.getElementsByClassName("middle");
let right = document.getElementsByClassName("right");
let secondery = document.getElementsByClassName("secondery-nav");

function changeNavbar(open) {
  if (window.innerWidth >= 700) {
    middle[0].setAttribute("style", "display:flex;");
    right[0].setAttribute("style", "display:flex;");
    secondery[0].setAttribute("style", "display:none;");
  } else if (open) {
    middle[0].setAttribute("style", "display:flex;");
    right[0].setAttribute("style", "display:flex;");
    secondery[0].setAttribute("style", "display:block;");
    secondery[0].innerHTML = "<i class='bi bi-x'></i>";
  } else {
    middle[0].setAttribute("style", "display:none;");
    right[0].setAttribute("style", "display:none;");
    secondery[0].setAttribute("style", "display:block;");
    secondery[0].innerHTML = "<i class='bi bi-list'></i>";
  }
}

window.addEventListener("resize", () => {
  changeNavbar(open);
});

changeNavbar(open);

secondery[0].addEventListener("click", () => {
  open = !open;
  changeNavbar(open);
});