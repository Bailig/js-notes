var favoriteFood = "Kiwi";

var foodToughs = function () {
  console.log(`Original favorite food: ${favoriteFood}`); // undefined
  var favoriteFood = "Burger";
  console.log(`New favorite food: ${favoriteFood}`);
};

foodToughs();

// hoisting happens on every execution context
// every time a function gets run, a naw execution context will be created and variables and functions inside that function will be hoisted

// above function after hoisting will look like this
var foodToughs = function () {
  var favoriteFood = undefined;
  console.log(`Original favorite food: ${favoriteFood}`); // undefined
  favoriteFood = "Burger";
  console.log(`New favorite food: ${favoriteFood}`);
};

foodToughs();

// hoisting is not good
// to avoid hoisting:
let favoriteFood2 = "Kiwi";

const foodToughs2 = function () {
  console.log(`Original favorite food: ${favoriteFood2}`); // Kiwi
  favoriteFood2 = "Burger";
  console.log(`New favorite food: ${favoriteFood2}`);
};

foodToughs2();
