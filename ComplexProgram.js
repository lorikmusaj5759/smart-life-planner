/* Filename: ComplexProgram.js */

// This is a complex program that demonstrates a variety of JavaScript concepts and features
// It includes object-oriented programming, inheritance, asynchronous functions, error handling, and more

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'dog');
  }

  bark() {
    console.log(`${this.name} is barking...`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'cat');
  }

  meow() {
    console.log(`${this.name} is meowing...`);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeProgram() {
  try {
    const dog = new Dog('Max');
    const cat = new Cat('Luna');

    dog.eat();
    await delay(1000);
    cat.eat();

    await delay(2000);
    dog.bark();
    await delay(500);
    cat.meow();

    await delay(1500);
    dog.sleep();
    await delay(800);
    cat.sleep();
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

executeProgram();