const numbers = [];
for (let i = 0; i < 2; i++) {
  numbers[i] = Math.floor(Math.random() * 6) + 1;
}

const user = numbers[0];
const cpu = numbers[1];

if (user === cpu) {
  alert("Pareggio!");
} else if (user > cpu) {
  alert("Hai vinto!");
} else {
  alert("Hai perso!");
}
