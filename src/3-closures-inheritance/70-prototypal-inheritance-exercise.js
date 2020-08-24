// add a method getLastYear to Date
Date.prototype.getLastYear = function () {
  return this.getFullYear() - 1;
};
const now = new Date();
console.log(now.getLastYear());

// print emoji when map
Array.prototype.map = function (mapper) {
  const array = [];
  this.forEach((item) => array.push(`${mapper(item)}🗺`));
  return array;
};

console.log([1, 2, 3].map((i) => i + 1));
