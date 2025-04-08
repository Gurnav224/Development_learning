// que 1
let fetch = new Promise((resolve, reject) => {
  const dataRecieved = true;
  if (dataRecieved) {
    resolve("data recieved successfully");
  } else {
    reject("failed to fetch the data");
  }
});

fetch.then((res) => console.log(res)).catch((err) => console.error(err));

// que 2

const checkNumber = new Promise((resolve, reject) => {
  const number = 15;
  if (number > 10) {
    resolve("number is valid");
  } else {
    reject("number is too small");
  }
});

checkNumber.then((res) => console.log(res)).catch((err) => console.error(err));

// que3

const checkUser = new Promise((resolve, reject) => {
  const isLogin = true;
  if (isLogin) {
    resolve("user logged in");
  } else {
    reject("user is rejected");
  }
});

checkUser.then((res) => console.log(res)).catch((err) => console.log(err));

// que4

const IsExist = new Promise((resolve, reject) => {
  const exist = true;
  if (exist) {
    resolve({
      name: "arjune",
      role: "admin",
    });
  } else {
    reject("user not found");
  }
});

IsExist.then((res) => console.log(res)).catch((err) => console.error(err));

const resolveLater = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

resolveLater.then((res) => console.log(res));

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(500);
  }, 3000);
});

rejectPromise.catch((err) => console.log(err));

const checkPassword = (password) => {
  let checkPass = new Promise((resolve, reject) => {
    if (password === "123456") {
      resolve("Password accepted");
    } else {
      reject("password rejected");
    }
  });

  return checkPass;
};

checkPassword("123456")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const checkEmail = (email) => {
  let validation = new Promise((resolve, reject) => {
    if (email.includes("@")) {
      resolve("email is valid");
    } else {
      reject("invalid email");
    }
  });

  return validation;
};

checkEmail("user1@email")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const fetchTemperature = (temperature) => {
  return new Promise((resolve, reject) => {
    if (temperature > 15) {
      resolve("Temperature is 20c");
    } else {
      reject("Temperature too low");
    }
  });
};

fetchTemperature(20)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
