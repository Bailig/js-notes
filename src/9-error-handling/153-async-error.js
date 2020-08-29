async function asyncError() {
  try {
    await Promise.reject("hi");
  } catch (error) {
    console.log(error);
  }
}
asyncError();
