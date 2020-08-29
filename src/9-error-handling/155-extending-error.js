class DataError extends Error {
  name = "DataError";
}

const dataError = new DataError("Oops");
console.log(dataError.name);
console.log(dataError.message);
console.log(dataError.stack);
