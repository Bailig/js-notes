// parallel -> run at the same time
// sequential -> run one by one
// race -> run whichever comes first

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(item);
    }, delay)
  );

const a = () => promisify("a", 1000);
const b = () => promisify("b", 2000);
const c = () => promisify("c", 3000);

const parallel = async () => {
  const promises = [a(), b(), c()];
  const [outputA, outputB, outputC] = await Promise.all(promises);
  return `parallel: ${outputA} ${outputB} ${outputC}`;
};

// this will log after 3000 ms
parallel().then((data) => console.log(data)); // parallel: a b c

const race = async () => {
  const promises = [a(), b(), c()];
  const [outputA, outputB, outputC] = await Promise.race(promises);
  return `race: ${outputA} ${outputB} ${outputC}`;
};

// this will log after 1000 ms
race().then((data) => console.log(data)); // race: a undefined undefined

const sequence = async () => {
  const outputA = await a();
  const outputB = await b();
  const outputC = await c();
  return `sequence: ${outputA} ${outputB} ${outputC}`;
};

// this will log after 1000 + 2000 + 3000ms
sequence().then((data) => console.log(data)); // sequence: a b c
