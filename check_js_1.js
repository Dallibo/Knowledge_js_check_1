let name = prompt(`Введите ваше имя`)
alert (`Привет, ${name}`)

let year = +prompt(`Введите ваш год рождения`)
const newYear = 2023 - year
alert(`Вам ${newYear} лет`)

let square = +prompt(`Введите сторону квадрата`)
const P = square * 4
alert(`Периметр кварата ровняеться ${P}`)

let circle = +prompt(`Введите радиус круга`)
const S = 3.14 * (circle*circle)
alert (S)

let distance = +prompt(`Введите дистанцию в (км)`)
let time = +prompt(`Введите время за которое вы хотите добраться до города`)
const speed = distance / time
alert(`Скорость должна ровняться ${speed} км/час`)

let dollar = +prompt(`Введите колличество долларов для обмена в евро`)
const euro = dollar * 1.09
alert(`Количчество евро при обмене ${euro.toFixed(2)}`)

let flash = +prompt(`Введите колличество гигабайт на флешке`)
const mbFlash = flash * 1000
const file = Math.floor(mbFlash / 820)
alert(`Колличество файов которое поместиться на флешку = ${file}`)

let money = +prompt(`Введите колличество денег в кошельке`)
let chocolateСost = +prompt(`Введите стоимость шоколадки`)
let howManyChocolate = Math.floor(money / chocolateСost)
let remainder = money % howManyChocolate
alert(`Можно купть ${howManyChocolate} шоколадок, и останеться ${remainder}grn`)

let palindrom = +prompt(`Введите трехзначное число что бы узнать его палиндром`)
let numb1 = Math.floor(palindrom /100)
let numb2 = Math.floor((palindrom /10) % 10)
let numb3 = palindrom % 10
alert(`${numb3}${numb2}${numb1}`)

let number = +prompt(`Введите число`)
let isEven = number % 2 === 0;
alert("Введенное число является " + (isEven ? "парным" : "непарным"));

