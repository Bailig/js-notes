// before object.create exist, people use constructor functions to do inheritance

function Elf(name, weapon = "bow") {
  this.name = name;
  this.weapon = weapon;
}
// the prototype will be automatically created
Elf.prototype.attack = function () {
  return `${this.name} attacks with ${this.weapon}`;
};
console.log(Elf.prototype);

// new keyword is required to use constructor functions
const elf = new Elf("elf");
console.log(elf.__proto__); // {attack: ƒ, constructor: ƒ}

console.log(elf.__proto__ === Elf.prototype); // true
console.log(elf instanceof Elf); // true
console.log(elf); // Elf {name: "elf", weapon: "bow"}
console.log(elf.attack()); // elf attacks with bow

// the new key work returns the object we have in the constructor functions

// normally the 'this' keyword will point to the window object by default
function a() {
  console.log(this); // Window
  console.log(this === window); // true
}
a();

// however the new keyword will create a object and point the 'this' keyword to the object
function A() {
  console.log(this); // A {}
  console.log(this === window); // false
}
new A();
