import sumofTwo from "./sum.js";
import diffofTwo from "./substract.js";
import productofTwo from "./product.js";

console.log(sumofTwo(2,4));
console.log(diffofTwo(2,4));
console.log(productofTwo(2,4));

import chalk from "chalk"
console.log(chalk.blue("Hello World"));
console.log(`Hello World ${chalk.red("!")}`)
console.log(`${chalk.bgBlue("Hello")} ${chalk.bgCyan("World")} ${chalk.underline("!")}`);

// import showBanner from "node-banner"
// (async () => {
//       await showBanner ("Title", "Tagline")
// })

// 

import result from "./result.js"
import {Q1,Q2} from "./inquirer.js"

let answer1 = await Q1();
let score = await result(answer1);

let answer2 = await Q2();
score = await result(answer2)

console.log(score);



