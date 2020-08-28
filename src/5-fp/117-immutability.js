// Immutability -> not changing the data/state

const user = {
  name: "Dave",
};

// mutation
function updateNameMutate(user, name) {
  user.name = name;
  return user;
}

// not mutation
function updateNameNotMutate(user, name) {
  const userClone = { ...user };
  userClone.name = name;
  return userClone;
}

// it seems very memory inefficient, but it's not
// structural sharing makes it efficient
// e.i. only the changes that are made to the state are copied. things that don't change are not copied
