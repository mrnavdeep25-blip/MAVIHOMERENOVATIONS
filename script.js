document.getElementById("year").textContent = new Date().getFullYear();

function sendQuote(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thanks, ${name}! Your quote request is ready. Add your real email/phone to connect this form to your business.`);
}
