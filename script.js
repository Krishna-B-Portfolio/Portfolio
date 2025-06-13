document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic form validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formResponse").textContent = "Thanks for your message!";
    this.reset();
  } else {
    document.getElementById("formResponse").textContent = "Please fill in all fields.";
  }
});
