// Define the character sets for generating passwords

let letters = "abcdefghijklmnopqrstuvwxyz";
let symbols = "~!@#$%^&*_-+={[}]|:;<>.?/";
let numbers = "123456789";
let chars = letters;

// Function to generate a password based on selected options

function generatorPassword(size) {
  // Include symbols if the corresponding checkbox is checked
  if (document.querySelector("#checksym").checked) chars += symbols;

  // Include numbers if the corresponding checkbox is checked
  if (document.querySelector("#checknum").checked) chars += numbers;

  let password = "";
  // Generate password of the given size using the selected character set
  for (let i = 0; i < size; i++) {
    const randomIdx = Math.floor(Math.random() * chars.length);
    password += chars[randomIdx];
  }

  // Capitalize the first letter if the corresponding checkbox is checked
  if (document.querySelector("#checkcap").checked) {
    password = password[0].toUpperCase() + password.slice(1);
  }

  // Replace the last character with an exclamation mark if checkbox is checked
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

// Function to copy text to clipboard
function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
    let copyDone = document.querySelector("#copySuccess");
    copyDone.style.display = "block";
    copyDone.style.setTimeout(() => (copyDone.style.display = "none"), 1000);
  });
}

// Add click event listener to each password output element for copying

for (const passout of passouts) {
  passout.addEventListener("click", function () {
    copy(this.textContent);
  });
}
