function breakText(myElement) {
  let newText = "";
  for (let i = 0; i < myElement.innerText.length; i++) {
    parseInt(myElement.innerText.length / 2);
    newText += `<span class="${
      parseInt(myElement.innerText.length / 2) < i ? "right" : "left"
    }">${myElement.innerText[i]}</span>`;
  }
  myElement.innerHTML = newText;
}
breakText(document.getElementById("main-heading"));

gsap.from(
  "h1 .right",
  {
    y: 100,
    stagger: -0.1,
    opacity: 0,
  }
  
);
gsap.from(
  "h1 .left",
  {
    y: 100,
    stagger: 0.1,
    opacity: 0,
  }
);

gsap.from("#imageBox", {
  scale: 1.4,
  opacity: 0,
});

gsap.from("header .mini-text", {
  x: -20,
  opacity: 0,
});

gsap.from("header .cursiveHeading", {
  x: -20,
  opacity: 0,
});

gsap.from("header #buttonArea a", {
  x: -20,
  opacity: 0,
  stagger: 0.5,
});

gsap.from("header #IconBox a", {
  y: 20,
  opacity: 0,
  stagger: 0.3,
});
