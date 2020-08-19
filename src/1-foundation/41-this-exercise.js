const dave = {
  name: "Dave",
  say() {
    console.log(this); // dave
  },
};

const mike = {
  name: "Mike",
  say() {
    return function () {
      console.log(this); // window
    };
  },
};

const dan = {
  name: "Dan",
  say() {
    return () => {
      console.log(this); // dan
    };
  },
};

dave.say();
mike.say()();
dan.say()();
