// encapsulation
function a() {
  let num = 0; // this is this is private
  const addOne = () => num++;
  const logNum = () => console.log(num);
  return { addOne, logNum };
}

const a1 = a(); // a1 don not have direct access to num

a1.addOne();
a1.logNum();
