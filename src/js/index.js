// task 1
let drink;
const cosenDrink = "Кава";

switch (cosenDrink) {
  case "Кава":
    drink = "Ви обрали Каву";
    break;
  case "Чай":
    drink = "Ви обрали Чай";
    break;
  case "Сік":
    drink = "Ви обрали Сік";
    break;
}
console.log(drink);
// task 2
let day;
const weekDay = "Субота";

switch (weekDay) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "Пʼятниця":
    day = "Робочий день";
    break;
  case "Субота":
  case "Неділя":
    day = "Вихідний";
    break;
}
console.log(day);
// task 3
let month;
const numberOfMonth = "10";

switch (numberOfMonth) {
  case "12":
  case "01":
  case "02":
    month = "Зима";
    break;
  case "03":
  case "04":
  case "05":
    month = "Весна";
    break;
  case "06":
  case "07":
  case "08":
    month = "Літо";
    break;
  case "09":
  case "10":
  case "11":
    month = "Осінь";
    break;
}
console.log(month);
// task 4
let color;
const currentColor = "Зелений";

switch (currentColor) {
  case "Червоний":
    color = "стоп";
    break;
  case "Жовтий":
    color = "чекати";
    break;
  case "Зелений":
    color = "Йти";
    break;
}
console.log(color);
// task 5
const numberOne = 15;
const numberTwo = 3;
const currentSimbol = "+";

switch (currentSimbol) {
  case "+":
    console.log(numberOne + numberTwo);
    break;
  case "-":
    console.log(numberOne - numberTwo);

    break;
  case "*":
    console.log(numberOne * numberTwo);
    break;
  case "/":
    console.log(numberOne / numberTwo);
    if (numberTwo === 0) {
      console.log("Помилка");
    }
    break;
}
