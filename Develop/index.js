import generateMarkdown from "./utils/generateMarkdown.js";
import inquirer from "inquirer";
import fs from "fs";

//import generateMakrdown from "utils"
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter project title: ",
    },
    {
      type: "input",
      name: "description",
      message: "Enter project description:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter Installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage details:",
    },
    {
      type: "input",
      name: "contributions",
      message: "Enter contribution details:",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter testing details:",
    },
    {
      type: "input",
      name: "credits",
      message: "Enter additional credits:",
    },
    {
      type: "list",
      message: "Please select a license Type:",
      name: "license",
      choices: ["none" ,"GPL" ,"Apache" ,"BSD" ,"ISC" ,"MIT"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter Github identification:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter email Address:",
    },
  ];

async function inquiry(questions){
    let data = await inquirer.prompt(questions);
    return (data);
   
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}


// TODO: Create a function to initialize app
async function init() {
    try{
        let data = await inquiry(questions)
        
        writeToFile("readme.md", generateMarkdown(data))

    }
    catch(err){
        (err) => console.log(err);
    }

}

// Function call to initialize app
init();
