// Practice and task from homework

const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;
    do{
        for (let i = 2; i >= 0 ; i--){

            userLogin = prompt('Login:');
            if(!userLogin){
                alert('Enter you login');
                continue;
            }

            userPassword = prompt('Password:');
            if(!userPassword){
                alert('Enter you password');
                continue;
            }

            if(userLogin === LOGIN || userPassword === PASSWORD){
                isAuthSuccess = true;
                alert('Welcome')
                break;
            }else if(!i == false){
                alert('It is not correct! Try again. '+ i + ' tries');
                continue;
            }else{
                alert('You dont have any tries!!!')
            }
        }
    } while (!isAuthSuccess && i == 0)
}
authorize();



// Task n2

const lowerNumber = Number(prompt('Enter lower number: '));
const higherNumber = Number(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}