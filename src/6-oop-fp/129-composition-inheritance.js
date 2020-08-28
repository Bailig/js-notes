// inheritance is about what it is (e.g. person, teacher)

// drawback of inheritance
// 1. derived class and base class are tightly coupled
//   -> when we modify the base class, all derived class will be effected
// 2. fragile base class problem
//   -> because of the tight couple, it is really easy to break the code down the path
// 3. hierarchy
//   -> derived class must inherit all the functionality of base class; however, down the hierarchy some child class probably should not have all that.

// to solve above problems, we can remove the methods from the classes

// from
class Character {
  constructor(name, weapon = "bow") {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon); // calls Character's constructor
    this.type = type; // if we want to use 'this', we must call super first
  }
  greet() {
    return `${this.name} hi`;
  }
}

// to
function assignAttack(character) {
  return {
    ...character,
    attack: () => `${this.name} attacks with ${this.weapon}`,
  };
}
function assignGreet(elf) {
  return {
    ...elf,
    greet: () => `${this.name} hi`,
  };
}
function Character2(name, weapon = "bow") {
  this.name = name;
  this.weapon = weapon;
  return assignAttack(this);
}
function Elf2(name, weapon = "bow", type = "house") {
  this.name = name;
  this.weapon = weapon;
  this.type = type;
  return assignGreet(assignAttack(this));
}

console.log(new Elf2("hi"));
