import chalk from "chalk"
let marks = 0;
export default async function result (a: boolean){
    if (a == true){
        console.log(chalk.blue("Your answer is correct"));
       return marks+=10;
    }else {
        console.log(chalk.red("Oops!, Try Again"))
       return marks;
    }
}
