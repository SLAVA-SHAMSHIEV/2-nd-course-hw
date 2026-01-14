let a = Number(prompt("Введите число 10"));
alert(a);
a = Number (prompt("Введите число 20"));
alert(a);

const god = 2007;
alert (`Год выпуска первого iPhone ${god}`);
const name = `Брендан Эйх`;
alert (`Имя создателя языка JavaScript ${name}`);

a = 10;
let b = Number(2);
let sum = a + b;
alert(`Сумма значений a + b = ${sum}`);
let difference = a - b;
alert(`Разность значений a - b = ${difference}`);
let product = a * b;
alert(`Произведение значений a * b = ${product}`);
let quotient = a / b;
alert(`Частное значений a / b = ${quotient}`);
let result = 2 ** 5;
alert(`Результат возведения 2 в 5-ю степень ${result}`);
a = 9;
let remainder = a % b;
alert(`Остаток от деления a / b = ${remainder}`);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = prompt("Сколько вам лет?");
alert(`Ваш возраст ${age}`);

const user = {
    name: 'Grek',
    age: 27,
    isAdmin: true };
    
let name1 = String(prompt(`Введите ваше имя`));
alert(`Привет, ${name1}!`);
