const passwordLengthInput = document.querySelector('.js-password-length-input');
const generatePasswordBtn = document.querySelector('.js-generate-password-btn');
const passwordDiv = document.querySelector('.js-password-div');
const copyBtn = document.querySelector('.js-copy-btn');
const copyIcon = document.querySelector('.js-copy-icon');
const messageDiv = document.querySelector('.js-message-div');

const includeUppercase = document.querySelector('.js-include-uppercase');
const includeLowercase = document.querySelector('.js-include-lowercase');
const includeNumbers = document.querySelector('.js-include-numbers');
const includeSymbols = document.querySelector('.js-include-symbols');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '1234567890';
const symbolChars = `'~!@#$%^&*(){}[]_-+=/<>,.;:'`;

let timeoutId;

timeoutId = setTimeout(() => {
  messageDiv.textContent = ``;
}, 4000);
messageDiv.textContent = `Programmed and Designed by M. K. Hamim`;

generatePasswordBtn.addEventListener('click', () => {
  passwordDiv.textContent = `${generatePassword()}`;
});

copyIcon.addEventListener('click', copyPassword);

function generatePassword(uppercase, lowercase, numbers, symbols) {
  uppercase = includeUppercase.checked;
  lowercase = includeLowercase.checked;
  numbers = includeNumbers.checked;
  symbols = includeSymbols.checked;

  let allowedChars = '';

  allowedChars += uppercase ? uppercaseChars : '';
  allowedChars += lowercase ? lowercaseChars : '';
  allowedChars += numbers ? numberChars : '';
  allowedChars += symbols ? symbolChars : '';

  const length = Number(passwordLengthInput.value);
  let password = '';

  if (length <= 0) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      messageDiv.textContent = ``;
      messageDiv.classList.remove('message-div-error');
    }, 2000);

    messageDiv.classList.add('message-div-error');
    messageDiv.textContent = `Length cannot be less than 1.`;
  } else if (allowedChars.length === 0) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      messageDiv.textContent = ``;
      messageDiv.classList.remove('message-div-error');
    }, 2000);

    messageDiv.classList.add('message-div-error');
    messageDiv.textContent = `Select at least one Charset.`;
  }

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * allowedChars.length) + 1;
    password += allowedChars.charAt(randomNum);
  }

  return password;
}

function copyPassword() {
  const password = passwordDiv.textContent;

  if (password.length !== 0) {
    navigator.clipboard.writeText(password);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      messageDiv.textContent = ``;
    }, 2000);

    messageDiv.textContent = `Password copied to clipboard!`
  }
}