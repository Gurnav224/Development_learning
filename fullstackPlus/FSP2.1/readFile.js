const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "log.txt");

try {
  const file = fs.readFileSync(filePath, "utf-8");
  console.log(file);
} catch (error) {
  console.error("error", error);
}
