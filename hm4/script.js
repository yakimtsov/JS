// // First task

const a = 34;
const b = 23;

function sumNumbers(a , b){
    const sum = a + b;
    console.log('sum: ', sum );
}

sumNumbers(a, b);
sumNumbers(2, 1);
sumNumbers(70, 56);

const summary = (a, b) => a + b;
    const firstResult = summary(23, 67);
    const secondResult = summary(78, 890);
    const thirdResult = summary(567, 67);


console.log(firstResult);
console.log(secondResult);
console.log(thirdResult);



// // Second task

function userGreeting(){
    let userName = prompt('Enter you name:');
    let userAge = Number(prompt('Enter your age:'));
    if (userAge >= 30){
        alert('Здраствуйте ' + userName)
    }
    else{
        alert('Привет ' + userName)
    }
}

userGreeting();


// Third task

function degreeNum(){
    let a = Number(prompt('Enter number: '));
    let b = Number(prompt('Enter degree (not important Default: 2)'));
    let result = (b) ? a ** b : a ** 2;
    alert(result);
}

degreeNum();