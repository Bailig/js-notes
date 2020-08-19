// currying using bind

function add(num1, num2) {
  return num1 + num2;
}

const addOne = add.bind(this, 1);

console.log(addOne(1)); // 2
