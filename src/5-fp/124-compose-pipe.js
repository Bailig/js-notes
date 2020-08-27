const compose = (...fns) => (data) => {
  return fns.reduceRight((result, fn) => fn(result), data);
};

const multiplyBy3 = (n) => n * 3;
const absolute = (n) => Math.abs(n);
const toString = (n) => `${n}`;

const composeResult = compose(toString, absolute, multiplyBy3)(-1);
console.log(composeResult); // 3
console.log(typeof composeResult); // string

const pipe = (...fns) => (data) => {
  return fns.reduce((result, fn) => fn(result), data);
};
const pipeResult = pipe(multiplyBy3, absolute, toString)(-1);

console.log(pipeResult === composeResult);
true;
