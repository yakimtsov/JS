let a = prompt('Enter first number');
let b = prompt('Enter second number');
if (a > b) {
    alert('Numder '+(a)+' bigger than numder '+(b))
} else if (b > a) {
    alert('Numder '+(a)+' less than numder '+(b))
}else if(a == b) {
    alert('They are the same')
};


// Calculator

let c = Number(prompt('Enter the first number'));
let d = Number(prompt('Enter the second number'));
let action = prompt('Enter the action whick you want +, -, /, *');

switch (action){
    case '+':
        alert(c + d);
        break;
    case '-':
        alert(c - d);
        break;
    case '*':
        alert(c * d);
        break;
    case '/':
        alert(c / d);
        break;
    default:
        alert('You make a mistake, try again');
        break;
}

// Attractions

let ageVisitor = Number(prompt('Enter you age to visit the Attraction'));

if (ageVisitor < 12 || ageVisitor >= 80) {
    alert('Were sorry, you cant enter here')
}else if (ageVisitor < 18 || ageVisitor >= 60){
    alert('Sorry, just with Adult')
} else if (ageVisitor >= 18){
    alert('Youre Welcome!')
}