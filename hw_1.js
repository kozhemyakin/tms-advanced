var _ = require('lodash');

// исходный
const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
  ];
  const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
  ];

// задача 1
/* Нужно найти и сохранить в переменную индекс пользователя в массиве data1, у которого возраст равен 23 года. (ожидаемый результат: 1), 
все остальное нужно искать в документации к пакету lodash */  

const userIndex = _.findIndex(data1, ['age', 23]);

console.log(userIndex);

// задача 2
/* Объединить два массива data1 и data2 в один и записать этот результат в новую переменную 
( ожидаемый результат - это новый массив длиной 6 элементов) */

const data3 = _.concat(data1, data2);
 
console.log(data3, data3.length);

// задача 3
/* Взять любой объект из любого массива и на его основе создать новый объект, но выкинув из него поле “age”. 
Опять же нужно использовать функцию из библиотеки lodash. Пример исходного объекта и результата см. во вложениях. */

const object4 = _.omit(data1[0], ['age']);

console.log(object4);

// задача 3 without lodash

let objectFromArray = data1[0];

const newObject = Object.keys(objectFromArray).reduce((object, key) => {
  if (key !== 'age') {
    object[key] = objectFromArray[key]
  }
  return object
}, {})

console.log(newObject);