const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userLogin = prompt('Enter your login');
    let userPassword = prompt('Enter your password');
    let isAuthSuccess = false;
    do{
        let i = 3
        while(i >= 0){
            i--
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
    }while(!isAuthSuccess && i == 0)
}
authorize();