const fs = require("fs");

try {
  const addData = fs.appendFileSync(
    "log.txt",
    `\n2025-03-28 12:20:05 [INFO] Scheduled database backup completed`
  );
  console.log('data appended successfully')
} catch (error) {
    console.error('error to adding data to file', error)
}
