class Elf {
  constructor(name, weapon = "bow") {
    this.name = name;
    this.weapon = weapon;
  }

  // if we move 'attack' into constructor, every time a new instance is created, the attack method will be created too, which will take up memory space
  attack() {
    return `${this.name} attacks with ${this.weapon}`;
  }
}

const elf = new Elf("elf");

console.log(elf); // Elf {name: "elf", weapon: "bow"}
console.log(elf.attack()); // elf attacks with bow
console.log(elf instanceof Elf);
