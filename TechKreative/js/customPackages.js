// Toggle active class for dropdowns
document.querySelectorAll(".customPackages main div .top").forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.classList.toggle("active");
  });
});

// Single event listener on parent (event delegation) instead of attaching on every input repeatedly
document.querySelector(".customPackages").addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    updatePrice();
  }
});

function updatePrice() {
  let price = 0;
  document.querySelectorAll(".customPackages main div input").forEach((input) => {
    if (input.checked) {
      let selectedPrice = input.closest("li").querySelector("p").innerText;
      price += parseInt(selectedPrice);
    }
  });

  document.getElementById("totalPrice").innerText = `$${price}`;
}

// Initial Price Update
updatePrice();

function sendMessage() {
  let services = [];
  let price = 0;

  document.querySelectorAll(".customPackages main div input").forEach((input) => {
    if (input.checked) {
      let label = input.closest("li").querySelector("label").innerText.trim();
      let servicePrice = input.closest("li").querySelector("p").innerText.trim();
      services.push(`${label} ($${servicePrice})`);
      price += parseInt(servicePrice);
    }
  });

  if (services.length === 0) {
    alert("Please select at least one service before proceeding.");
    return;
  }

  let message = `Hi bro, I want to create a custom package with the following services:\n\n`;
  message += services.map(service => `- ${service}`).join("\n");
  message += `\n\nTotal Price: $${price}`;

  window.location.href = `https://api.whatsapp.com/send?phone=923259491349&text=${encodeURIComponent(message)}`;
}