// 1. new keyword binding constructor function this
function Person(name) {
  this.name = name;
}

const p1 = new Person("p1");
console.log(p1.name);

// 2. implicit binding
const p2 = {
  name: "p2",
  greet() {
    return `${this.name} hi`;
  },
};

console.log(p2.greet());

// 3. explicit binding with call, apply, or bind
const p3 = {
  name: "p3",
  greet() {
    function _greet() {
      return `${this.name} hi`;
    }
    return _greet.call(this);
  },
};

console.log(p3.greet());

// 4. arrow function
const p4 = {
  name: "p4",
  greet() {
    const _greet = () => {
      return `${this.name} hi`;
    };
    return _greet();
  },
};

console.log(p4.greet());
