import inquirer from "inquirer";
//Inuirer Calculator
export async function Q1() {
    const ans1 = await inquirer.prompt([{
            name: "Question1",
            type: "list",
            message: "Who discovered Gravity?",
            choices: ["Newton", "Einstein", "Moseley"]
        }]);
    return (ans1.Question1 == "Newton");
}
export async function Q2() {
    const ans2 = await inquirer.prompt([{
            name: "Question2",
            type: "list",
            message: "How many planets are there?",
            choices: ["5", "10", "8"]
        }]);
    return (ans2.Question2 == "8");
}
