// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

let a = prompt('Напишите первое число');
let b = prompt('Напишите второе число');

function min(a, b) {
    return a < b ? a : b;
};
console.log(min(a, b));

// Напишіть функцію pow(x, n), яка повертає число x в n степені.

let x = prompt('Напишите число, которое будет возводиться в степень, пожалуйста');
let n = prompt('Напишите число, которое будет степенью, и также будет больше нуля');

function pow(x, n) {
    return x >= 1 && n >= 1 ? x ** n : alert('Пожалуйста, введите числа больше нуля');
};
console.log(pow(x, n));

// Условие возраста

function func() {
    let elem = prompt('Напишите ваш возраст для допуска на сайт');
    return elem < 19 || elem > 65 ? alert('Тебе нет 18 лет, подожди еще немного!') : alert('Добро пожаловать!');
};
console.log(func());