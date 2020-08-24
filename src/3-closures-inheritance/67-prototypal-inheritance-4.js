// never use __proto__ for performance reasons

// so one way to do inheritance is to use Object.create
const human = {
  gender: "",
};

const teacher = Object.create(human);
console.log(teacher.gender === ""); // true
console.log(human.isPrototypeOf(teacher)); // true
