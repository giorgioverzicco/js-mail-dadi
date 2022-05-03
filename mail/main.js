const authorizedEmails = ["samumadrigali@gmail.com", "nikmosca@gmail.com", "marcoacciarri@gmail.com"];
const userEmail = prompt("Digita la tua email:");
const isAuthorized = authorizedEmails.some((mail) => mail === userEmail);

alert(isAuthorized ? "Sei autorizzato ad accedere!" : "Non sei autorizzato ad accedere!");
