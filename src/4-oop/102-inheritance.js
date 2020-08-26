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

const elf = new Elf("elf", "bow", "house");
console.log(elf); // Elf {name: "elf", weapon: "bow", type: "house"} -> inherits Elf
console.log(elf.__proto__); // Character {constructor: ƒ, greet: ƒ} -> inherits Character
console.log(elf.__proto__.__proto__); // {constructor: ƒ, attack: ƒ} -> inherits object
console.log(elf.__proto__.__proto__.__proto__); // object -> inherits null
console.log(elf.__proto__.__proto__.__proto__.__proto__); // null

console.log(elf.__proto__ === Elf.prototype); // true
console.log(elf.__proto__.__proto__ === Character.prototype); // true
console.log(elf.__proto__.__proto__.__proto__ === Object.prototype); // true

console.log(Elf.prototype.isPrototypeOf(elf)); // true
console.log(Character.prototype.isPrototypeOf(Elf.prototype)); // true

console.log(elf instanceof Elf); // true
console.log(elf instanceof Character); // true
console.log(Elf.prototype instanceof Character); // true
