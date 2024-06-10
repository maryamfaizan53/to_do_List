

import inquirer from "inquirer";

let toDoList = [];
let while_condition = true;

while (while_condition) {
    // Options
    let option = await inquirer.prompt([{
        type: "list",
        name: "useroption",
        message: "Select an option",
        choices: ["Add", "Remove"]
    }]);

    // Add
    if (option.useroption === "Add") {
        let ans = await inquirer.prompt([{
            type: "input",
            name: "user_ans",
            message: "Write something to add to the task list."
        }]);

        if (ans.user_ans !== "") {
            toDoList.push(ans.user_ans);
            console.log("Current To-Do List:", toDoList);
        } else {
            console.log("Please write something to add to the to-do list.");
        }
    } 
    // Remove
    else if (option.useroption === "Remove") {
        if (toDoList.length > 0) {
            let removeChoice = await inquirer.prompt([{
                type: "list",
                name: "removeItem",
                message: "Select item to remove.",
                choices: toDoList,
            }]);
            let index_to_remove = toDoList.indexOf(removeChoice.removeItem);
            if (index_to_remove >= 0) {
                toDoList.splice(index_to_remove, 1);
                console.log("You removed:", removeChoice.removeItem);
                console.log("Current To-Do List:", toDoList);
            }
        } else {
            console.log("No items to remove.");
        }
    }

    // Confirmation
    let user_ans = await inquirer.prompt([{
        type: "confirm",
        name: "selection",
        message: "Do you want to continue?",
        default: true
    }]);

    if (user_ans.selection === false) {
        while_condition = false;
    }
}

console.log("Thank you for using TO_DO_LIST");
