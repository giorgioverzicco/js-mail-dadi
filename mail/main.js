const authorizedEmails = ["samumadrigali@gmail.com", "nikmosca@gmail.com", "marcoacciarri@gmail.com"];
const userEmail = prompt("Digita la tua email:");

for (let i = 0; i < authorizedEmails.length; i++) {
  if (userEmail === authorizedEmails[i]) {
    alert("Sei autorizzato ad accedere!");
    break;
  }
}
