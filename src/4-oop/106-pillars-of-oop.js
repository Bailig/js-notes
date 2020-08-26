// 1. Encapsulation - group related stuff together
// 2. Abstraction - create simple interfaces, hiding complexity
// 3. Inheritance - shared code
// 4. Polymorphism - call methods on different objects and each object acts differently

class A {
  greet() {
    return "hi";
  }
}

class B extends A {
  greet() {
    return "hello";
  }
}

class C extends A {
  greet() {
    return "hey " + super.greet();
  }
}

const b = new B();
const c = new C();

// Polymorphism
console.log(b.greet()); // hello
console.log(c.greet()); // hey hi
