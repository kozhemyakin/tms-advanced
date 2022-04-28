// 1. Data access operators
// Исходные данные:

const str = "abcdefg";

const arr = [1, 2, 3];

const obj = {
one: "X",
two: "Y",
three: "Z"
}

const person = {
age: 30,
name: "Vladilen",
sayHi: () => {
console.log("Hi I'm Vladilen and I'm 30")
}
}

// Выводить ответы в консоль с помощью console.log

// 1) Вывести число 2 из массива arr, используя [ ] и нужный индекс; вывести элемент с индексом 2 из массива arr используя [ ] 
console.log(arr[1])

// 2) Вывести слово cabbage используя отдельные буквы строки str, используя [ ] 
console.log(str[2] + str[0] + str[1] + str[1] + str[0] + str[(str.length-1)] + str[4])

// 3) Вывести строку XYZ используя значения объекта obj и оператор " . "
console.log(obj.one + obj.two + obj.three)

// 4) Вывести имя человека из объекта person используя оператор [ ]
console.log(person['name'])

// 5) Вызвать метод в объекте person
console.log(person.sayHi())