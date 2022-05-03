const numbers = [];
for (let i = 0; i < 2; i++) {
  numbers[i] = Math.floor(Math.random() * 6) + 1;
}

const user = numbers[0];
const cpu = numbers[1];

const userElement = document.querySelector(".user");
userElement.innerHTML = user;

const cpuElement = document.querySelector(".cpu");
cpuElement.innerHTML = cpu;

const title = document.querySelector(".title");

if (user === cpu) {
  // alert("Pareggio!");
  console.log("Pareggio!");
  title.innerHTML = "Pareggio!";
} else if (user > cpu) {
  // alert("Hai vinto!");
  console.log("Hai vinto!");
  title.innerHTML = "Hai vinto!";
} else {
  // alert("Hai perso!");
  console.log("Hai perso!");
  title.innerHTML = "Hai perso!";
}
