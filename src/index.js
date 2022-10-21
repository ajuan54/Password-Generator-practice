const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];

let box1El = document.getElementById("box1");
let box2El = document.getElementById("box2");
let box3El = document.getElementById("box3");
let box4El = document.getElementById("box4");

let password = document.getElementById("password");

function generatePassword1() {
  const passwordAr = [];

  for (let i = 0; i <= 1; i++) {
    let password = "";
    for (let j = 0; j <= 14; j++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    passwordAr.push(password);
  }
  return (box1El.textContent = passwordAr[0]);
}
function generatePassword2() {
  const passwordAr = [];

  for (let i = 0; i <= 1; i++) {
    let password = "";
    for (let j = 0; j <= 14; j++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    passwordAr.push(password);
  }
  return (box2El.textContent = passwordAr[1]);
}
function generatePassword3() {
  const passwordAr = [];

  for (let i = 0; i <= 1; i++) {
    let password = "";
    for (let j = 0; j <= 14; j++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    passwordAr.push(password);
  }
  return (box3El.textContent = passwordAr[1]);
}
function generatePassword4() {
  const passwordAr = [];

  for (let i = 0; i <= 1; i++) {
    let password = "";
    for (let j = 0; j <= 14; j++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    passwordAr.push(password);
  }
  return (box4El.textContent = passwordAr[1]);
}

password.addEventListener("click", function () {
  generatePassword1();
  generatePassword2();
  generatePassword3();
  generatePassword4();
});
