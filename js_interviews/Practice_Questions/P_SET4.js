const sortWord = (str) => {
  return str.split("").sort().join("");
};
console.log(sortWord("webmaster"));

const countVowels = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("No pain, no gain"));
// que 3
const convertNumToArray = (num) => {
  return num
    .toString()
    .split("")
    .map((n) => Number(n));
};
console.log(convertNumToArray(1234));

let prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});
prom.then((res) => console.log(res));
