const name = ["bakasur", "danavraj", "heman"];

console.log(name);

const uppercaseName = name.map((item) => {
  return item[0].toUpperCase() + item.slice(1);
});

console.log(uppercaseName);
