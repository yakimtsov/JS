const userAge = Number(prompt("Возраст: "));

if ((userAge >= 12 && userAge < 18) || (userAge >= 60 && userAge < 80)) {
  const isAdults = confirm("Родители разрешили?");
  if (isAdults) {
    alert("Проходите");
  } else {
    alert("Нельзя");
  }
} else if (userAge < 12 || userAge >= 80) {
  alert("Нельзя");
} else {
  alert("Проходите");
}