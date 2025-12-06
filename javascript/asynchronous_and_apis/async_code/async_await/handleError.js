const makeSafe = (fn) => {
  return (...args) => {
    return fn(...args).catch((error) => console.log(error));
  };
};

async function getData(url) {
  const res = await fetch(url);
  return res.json();
}
