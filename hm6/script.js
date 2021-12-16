// task n1 regiter

const register = () => {
    let userName;
    let userSurname;
    let userPassword;
    let isRegisterSuccess = false;

    do{
            userName = prompt(`Enter your name`);
            if(!userName){
                alert(`Enter your name`);
                continue;
            }
            userSurname = prompt(`Enter your surname`);
            if(!userSurname){
                alert(`Enter your surname`)
                continue;
            }
            userPassword = prompt(`Create a password`);
            if(!userPassword){
                alert(`Create a password!`)
                continue;
            }
            
            const minimum8Chars = /^.{6,}$/;
            const containsDownLetters = /^.*[a-z]+.*$/;
            const containsUpLetters = /^.*[A-Z]+.*$/;

            if(minimum8Chars.test(userPassword) &&
            containsDownLetters.test(userPassword)&&
            containsUpLetters.test(userPassword))
            {
                isRegisterSuccess= true;
                continue;
            }else{
                alert(`Your password should be min 6 symbols with [0-9] and [a-z,A-Z]`)
            }
    }while(!isRegisterSuccess){
         alert(`Hello! \nWelcome ${userName} ${userSurname}`)
    }

}
register()