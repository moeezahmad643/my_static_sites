let header = gsap.timeline();

let mainText = document.querySelector(".mainHeading").innerHTML;

mainTextArray = mainText.split("");

document.querySelector(".mainHeading").innerHTML = "";

for (let i = 0; i < mainTextArray.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = mainTextArray[i];
  document.querySelector(".mainHeading").appendChild(span);
}

header.from(
  "header .header-text h1 span",
  {
    y: 100,
    delay: 2,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
  },
  "0"
);

header.from("header .header-text > span", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
});

header.from(
  "header img",
  {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "power2.out",
  },
  "0"
);
