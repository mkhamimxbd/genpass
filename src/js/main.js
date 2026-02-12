const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

document.querySelector('.btn').addEventListener('click', () => {
  console.log(generatePassword());
})

function generatePassword() {
  let password = '';
  for (let i = 0; i < 12; i ++) {
    const randomNum = Math.floor(Math.random() * 25) + 1;
    password += uppercase.charAt(randomNum);
  }

  return password;
}