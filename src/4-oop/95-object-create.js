// this is how to manually create the method only once

const elfMethods = {
  attack() {
    return `${this.name} attack with ${this.weapon}`;
  },
};

function createElf(name, weapon = "bow") {
  return {
    name,
    weapon,
  };
}

const elf = createElf("elf");
elf.attack = elfMethods.attack;
console.log(elf.attack());

// object.create creates the prototype chain between 'elfMethods' and the 'newElf'. that means it makes newElf inherent elfMethods
function createElf2(name, weapon = "bow") {
  newElf = Object.create(elfMethods);
  console.log(newElf.__proto__); // {attack: ƒ}
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}
const elf2 = createElf2("elf2");
console.log(elf2.attack());
