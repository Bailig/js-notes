const a = {
  name: "a",
  a() {
    return 1;
  },
  b() {
    return this.name;
  },
  c() {
    return `${this.name} ${this.a()}`;
  },
};

const b = {
  name: "b",
  a() {
    return 2;
  },
};
// 1.
console.log("1. ---");
// brow one method from another object
console.log(a.b.bind(b)()); // b

// inherit all properties and methods from another object
b.__proto__ = a; // caution: should not be used in real project
console.log(b.b()); // b
console.log(b.c()); // b 2

// when we call 'b.b()', js engin first checks if object 'b' has that method. if not, it'll go up a chain and check

// 2.
console.log("2. ---");
for (const prop in b) {
  if (b.hasOwnProperty(prop)) {
    console.log("own prop: ", prop);
  } else {
    console.log("inherited prop: ", prop);
  }
}
// own prop:  names
// own prop:  a
// inherited prop:  b
// inherited prop:  c
