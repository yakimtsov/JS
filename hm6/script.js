// task n1 regiter
const formatUserName = (data) =>
    data[0].toUpperCase() + data.slice(1).toLowerCase();

function register() {
    let userName;
    let userSurname;
    let userPassword;
    let isRegisterSuccess = false;

    do {
        userName = prompt(`Enter your name`);
        if (!userName) {
            alert(`Enter your name`);
            continue;
        }
        userSurname = prompt(`Enter your surname`);
        if (!userSurname) {
            alert(`Enter your surname`);
            continue;
        }
        userPassword = prompt(`Create a password`);
        if (!userPassword) {
            alert(`Create a password!`);
            continue;
        }

        const minimum6Chars = /^.{6,}$/;
        const containsDownLetters = /^.*[a-z]+.*$/;
        const containsUpLetters = /^.*[A-Z]+.*$/;

        if (minimum6Chars.test(userPassword) &&
            containsDownLetters.test(userPassword) &&
            containsUpLetters.test(userPassword)) {
            isRegisterSuccess = true;
            continue;
        } else {
            alert(`Your password should be min 6 symbols with [0-9] and [a-z,A-Z]`);
        }
    } while (!isRegisterSuccess); {
        const validName = formatUserName(userName);
        const validSurname = formatUserName(userSurname);
        alert(`Hello! \nWelcome ${validName} ${validSurname}`);
    }

}
register()


// Task 2

let min = prompt(`Enter the number from:`)
let max = prompt(`Enter the number to:`)

function randomInteger(min, max) {
    let rand = Math.random() * (max - min + 1) - min;
    return Math.floor(rand);
  }
  
  alert(randomInteger(min, max));