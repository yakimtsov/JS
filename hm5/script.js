// Practice

const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;

    do{
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
        }else{
            alert('It is not correct! try again.')
        }
    } while (!isAuthSuccess)
    alert('Welcome!')
}

authorize();