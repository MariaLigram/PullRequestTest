//Prototype. УРОК 1
//Очевидное создание объекта. Переменная person является инстансом (Экземпляр класса (англ. instance) ) класса Object
const person = new Object({
  name: "Maxim",
  age: 26,
  greet: function () {
    console.log(`Greet, ${this.name}!`);
  },
});
//Обращение к глобальному классу, его свойству, и создание нового поля sayHello
Object.prototype.sayHello = function () {
  console.log("Hello!");
  //Теперь у person есть функция
};
//create() метод создает новые объекты. Объект person будет являться прототипом для объекта lena
const lena = Object.create(person);
//Изменить имя на Елена, чтобы не было Максим
lena.name = "Elena";
//Очевидное создание объекта строка
const str = new String("I am string");

//Event Loop. УРОК 4
console.log("Start");
setTimeout(function () {
  console.log("Inside setTimeout");
}, 3000);
console.log("End");
console.log("End2");
console.log("End3");
console.log("End4");

//проверка
//проверка2 из гитхаба
