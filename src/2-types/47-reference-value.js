// 1. primitive types are passed by value
let a = 5;
let b = a; // copy value of a to b
b++;
console.log(a); // 5
console.log(b); // 6

// 2. objects are passed by reference
let obj1 = { a: "a" };
let obj2 = obj1; // assign the address of obj1's value to obj2
obj2.a = "b";
console.log(obj1); // {a: "b"}
console.log(obj2); // {a: "b"}

// 3. to pass object's value
let obj3 = { a: "a" };
let obj4 = Object.assign({}, obj3); // {...obj3}
obj4.a = "b";
console.log(obj3);
console.log(obj4);

let array1 = [1];
let array2 = [].concat(array1); // [...array1]
array2.push(2);
console.log(array1);
console.log(array2);

// 4. child objects will not be cloned
let obj5 = { a: "a", b: { c: "c" } };
let obj6 = Object.assign({}, obj5); // {...obj5}
obj6.b.c = "e";
console.log(obj5); // {a: "a", b: {c: "e"}}
console.log(obj6); // {a: "a", b: {c: "e"}}

// 5. deep clone. bad for performance
let obj7 = { a: "a", b: { c: "c" } };
let obj8 = JSON.parse(JSON.stringify(obj7));
obj8.b.c = "e";
console.log(obj7); // {a: "a", b: {c: "c"}}
console.log(obj8); // {a: "a", b: {c: "e"}}
