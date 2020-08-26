const elf = {
  name: "Elf1",
  weapon: "bow",
  attack() {
    return `attack with ${this.weapon}`;
  },
};

const elf2 = {
  name: "Elf2",
  weapon: "bow",
  attack() {
    return `attack with ${this.weapon}`;
  },
};

// change above code to factory functions
// factory functions are functions creates objects
function createElf(name, weapon = "bow") {
  return {
    name,
    weapon,
    attack() {
      return `attack with ${this.weapon}`;
    },
  };
}

const elf3 = createElf("elf3");
const elf4 = createElf("elf4");

// a problem with createElf is that it creates new 'attack' method in memory for every elf
// this could be solved by prototypal inheritance
