#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    { message: "Enter your first number:",
        type: "number",
        name: "first_number" },
    {
        message: "Enter your second number:",
        type: "number",
        name: "second_number",
    },
    { message: "Select the type of calculation",
        type: "list",
        name: "operator",
        choices: [("Addition: (+)"), ("Subtraction: (-)"), ("Multiplication: (*)"), ("Division: (/)")]
    },
]);
if (ans.operator === "Addition: (+)") {
    console.log(`\nAnswer is: ${ans.first_number + ans.second_number}\n`);
}
else if (ans.operator === "Subtraction: (-)") {
    console.log(`\nAnswer is: ${ans.first_number - ans.second_number}\n`);
}
else if (ans.operator === "Multiplication: (*)") {
    console.log(`\nAnswer is: ${ans.first_number * ans.second_number}\n`);
}
else if (ans.operator === "Division: (/)") {
    console.log(`\nAnswer is: ${ans.first_number / ans.second_number}\n`);
}
