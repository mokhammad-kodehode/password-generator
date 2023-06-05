let letters = "abcdefghijklmnopqrstuvwxyz";
let symbols = "~!@#$%^&*_-+={[}]|:;<>.?/";
let numbers = "123456789";
let chars = letters;

function generatorPassword(size) {
  if (document.querySelector("#checksym").checked) chars += symbols;
  if (document.querySelector("#checknum").checked) chars += numbers;

  let password = "";
  for (let i = 0; i < size; i++) {
    const randomIdx = Math.floor(Math.random() * chars.length);
    password += chars[randomIdx];
  }

  if (document.querySelector("#checkcap").checked) {
    password = password[0].toUpperCase() + password.slice(1);
  }

  if (document.querySelector("#checkonesym").checked) {
    password = password.slice(0, -1) + "!";
  }

  return password;
}

const passouts = document.querySelectorAll(".passout");
const genPassword = document.querySelector("#generate");
const inputNum = document.querySelector("#inputum");

genPassword.addEventListener("click", function () {
  const size = inputNum.value;
  for (const passout of passouts) passout.textContent = generatorPassword(size);
});

function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
    let copyDone = document.querySelector("#copySuccess");
    copyDone.style.display = "block";
    setTimeout(() => (copyDone.style.display = "none"), 1000);
  });
}

for (const passout of passouts) {
  passout.addEventListener("click", function () {
    copy(this.textContent);
  });
}

// Generate two random passwords when the user clicks the button

// Each password should be 15 characters long

// Ability to set password lenght

// Add copy on click

// Toggle "symbols" and " numbers" on /off
