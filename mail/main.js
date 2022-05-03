const authorizedEmails = ["samumadrigali@gmail.com", "nikmosca@gmail.com", "marcoacciarri@gmail.com"];
const userEmail = prompt("Digita la tua email:");
const isAuthorized = authorizedEmails.includes(userEmail);

const title = document.querySelector(".title");
if (isAuthorized) {
  title.innerHTML = `Bentornato ${userEmail}!`;
} else {
  const card = document.querySelector(".card");
  card.style.backgroundColor = "rgba(87, 46, 46, 0.65)";
  title.innerHTML = `Accesso non autorizzato!`;
}
