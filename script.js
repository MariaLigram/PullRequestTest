    //Event Loop
    console.log("Start");
    setTimeout(function () {
      console.log("Inside setTimeout");
    }, 3000);
    console.log("End");
    console.log("End2");
    console.log("End3");
    console.log("End4");

  //Prototype
    const person = new Object({
      name: "Maxim",
      age: 26,
      greet: function () {
        console.log(`Greet, ${this.name}!`);
      },
    });
    Object.prototype.sayHello = function () {
      console.log("Hello!");
    };
    const lena = Object.create(person);
    lena.name = "Elena";
    const str = new String("I am string");