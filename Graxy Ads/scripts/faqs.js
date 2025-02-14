let elementArray = document.getElementsByClassName("questions");

Array.from(elementArray).forEach((element) => {
  element.setAttribute("data-open", "false"); // Set initial state as closed

  // Initially hide the paragraph
  let paragraph = element.querySelector('p');
  paragraph.style.display = "none";  // Hide the paragraph on page load

  // Add click event listener to the + icon inside each question
  element.getElementsByClassName("bi-plus")[0].addEventListener("click", () => {
    
    // Get the current state of the clicked element
    let condition = element.getAttribute("data-open");

    // Loop through all elements to close them before opening the clicked one
    Array.from(elementArray).forEach((el) => {
      if (el !== element && el.getAttribute("data-open") === "true") {
        // Close all other elements if they are open
        el.setAttribute("data-open", "false");
        gsap.to(el, {
          maxHeight: "65px", // Collapse other questions
          ease: "power2.inOut",
        });

        // Reset the icon to '+' and color of h3
        gsap.to(el.getElementsByClassName("bi-plus")[0], {
          rotation: 0,  // Reset the icon rotation
        });
        gsap.to(el.getElementsByTagName("h3")[0], {
          color: "white", // Reset h3 color
        });

        // Hide the paragraph for other closed questions
        gsap.to(el.querySelector('p'), {
          opacity: 0,  // Fade out the paragraph
          display: "none", // Ensure it's hidden when collapsed
          ease: "power2.inOut",
        });
      }
    });

    // Toggle the clicked element
    if (condition === "true") {
      // If it is open, close it
      element.setAttribute("data-open", "false");
      gsap.to(element, {
        maxHeight: "65px", // Collapse the clicked question
        ease: "power2.inOut",
      });

      // Reset the icon to '+' and color of h3
      gsap.to(element.getElementsByClassName("bi-plus")[0], {
        rotation: 0,  // Reset the icon rotation
      });
      gsap.to(element.getElementsByTagName("h3")[0], {
        color: "white", // Reset h3 color
      });

      // Hide the paragraph for the clicked question
      gsap.to(paragraph, {
        opacity: 0,
        display: "none", // Hide paragraph
        ease: "power2.inOut",
      });
    } else {
      // If it is closed, open it
      element.setAttribute("data-open", "true");
      gsap.to(element, {
        maxHeight: "1000px", // Use a large max-height for smooth expansion (adjust as needed)
        ease: "power2.inOut",
      });

      // Rotate the icon to 45 degrees and change h3 color
      gsap.to(element.getElementsByClassName("bi-plus")[0], {
        rotation: 45,  // Rotate the icon 45 degrees
        ease: "power2.inOut",
      });
      gsap.to(element.getElementsByTagName("h3")[0], {
        color: "#e100ff", // Change h3 color
        ease: "power2.inOut",
      });

      // Show the paragraph and apply the fade-in effect
      gsap.to(paragraph, {
        opacity: 1,
        display: "block", // Make paragraph visible
        ease: "power2.inOut",
      });
    }
  });
});
