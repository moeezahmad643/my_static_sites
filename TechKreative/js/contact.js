document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.send === 1) {
        window.location.href = "success.html";
      } else {
        alert("Email failed to send: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      alert("Error sending form: " + error.message);
    }
  });
});
