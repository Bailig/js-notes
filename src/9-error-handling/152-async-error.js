Promise.resolve("hi")
  .then((res) => {
    console.log("1 then");
    error();
    return res;
  })
  .then((res) => {
    console.log("2 then"); // this one is skipped
    return res;
  })
  .catch((err) => {
    console.log("1 catch");
    return err;
  })
  .then((res) => {
    console.log("3 then");
    console.log(res);
  });

// result
// 1 then
// 1 catch
// 3 then
// ReferenceError: error is not defined
//     at 152-async-error.js:4
