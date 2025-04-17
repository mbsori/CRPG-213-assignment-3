document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitButton = document.getElementById("submit-button");
  const contactPage = document.getElementById("contact-page");

  form.addEventListener("submit", function (event) {
    contactPage.innerHTML = "<p>Thank you for your message</p>";
    const thankYouMessage = contactPage.querySelector("p");
    thankYouMessage.style.fontSize = "24px";
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.marginTop = "20px";
  });
});
