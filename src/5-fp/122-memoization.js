// caching is a way to store values that we can use later on
// memoization is a way of caching

// without caching
function addOne(n) {
  console.log("addOne long time"); // 3 call runs 3 times
  return n + 1;
}

addOne(1);
addOne(1);
addOne(1);

// with caching
const cache = {};
function addOneMemo(n) {
  const cachedResult = cache[n];
  if (cachedResult) return cachedResult;

  console.log("addOneMemo long time"); // 3 call runs 1 time
  const result = n + 1;
  cache[n] = result;
  return result;
}

addOneMemo(1);
addOneMemo(1);
addOneMemo(1);

// with cache in the function with closure
function createAddOneMemo() {
  const cache = {};
  return function (n) {
    const cachedResult = cache[n];
    if (cachedResult) return cachedResult;

    console.log("createAddOneMemo long time"); // 3 call runs 1 time
    const result = n + 1;
    cache[n] = result;
    return result;
  };
}

const addOneSelfMemo = createAddOneMemo();
addOneSelfMemo(1);
addOneSelfMemo(1);
addOneSelfMemo(1);
