// Modul Package CORE, EXTERNAL, FILE. 

// CORE
// setTimeout(function() {
//     console.log("ishga tushdi");
// }, 1000);

// let number = 0;
// setInterval(function() {
//     console.log("Hisob", number);
//     number++;

// }, 1000);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("**********");

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Dostonbek`);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);


//EXTERNAL 

// const moment = require('moment');
// const time = moment().format();
// console.log(time);

// const moment = require('moment');
// setInterval(() => {
//     const time = moment().format();
//     console.log(`Hozirgi vaqt ${time}`);

// }, 1000);

// const inquirer = require("inquirer");
// inquirer.prompt([{type: "input", name: "raqam", message: "Raqamni kiriting!"}]).then((answer) => {
//     console.log("man kiritgan raqam qiymati", answer.raqam);
//     }).catch((err) => console.log(err));



// const validator = require("validator");
// // const test = validator.isEmail("foo@bar.com");
// // const test = validator.isInt("100");
// const test = validator.isIP("114.200.35.154");
// console.log("test:", test);

// const  { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random", random);

// const chalk = require("chalk");
// const log = console.log;
// log(chalk.blue(`uuid creates ${random}`));



//==========================================


// if (cluster.isMaster) {
//     console.log(`MASTER thread with process id => ${process.pid}`);
  
//     instanceCPUs.map((ele) => {
//       cluster.fork();
//     });
//   } else {
//     console.log(`WORKER thread with process id => ${process.pid}`);
//   }

//==============================================



// FILE

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytrish(80, 20);
// console.log("natija", natija);
// console.log("============");

// const natija1 = calculate.ayirish(80, 20);
// console.log("natija", natija1);
// console.log("============");

// const natija2 = calculate.kopaytrish(80, 20);
// console.log("natija", natija2);


// hisob.js =>

// let hisob = {};

// hisob.kopaytrish = (a, b) => {
//     return a * b;
// };

// hisob.qoshish = (a, b) => {
//     return a + b;
// };

// hisob.ayirish = (a, b) => {
//     return a - b;
// };

// module.exports = hisob;

//============================================


// const Account = require("./account");
// Account.tellMeAboutClass();
// Account.tellMeTime();

// const myAccount = new Account('Danny', 200000, 123456789123);
// myAccount.tellMeBalance();
// myAccount.makeDeposit(1000000);
// myAccount.withDrawMoney(500000);
// myAccount.giveMeDetails();



