var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your team members name?"
    },
    {
        type: "list",
        message: "What position is your team member have?",
        name: "position",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        message: "What is your team member's git id name?",
        name: "github",
    },

    {
        type: "input",
        message: "What is your team member's email?",
        name: "email",
    },
    

])

    function generateHTML(answers) {
        return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Hi! Team member name is ${answers.name}</h1>
          <p class="lead">Position: ${answers.position}.</p>
          <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
          <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${answers.github}</li>
            <li class="list-group-item">Email: ${answers.email}</li>
          </ul>
        </div>
      </div>
      </body>
      </html>`;
      }

    promptUser()
     .then(function (data) {

        var html = generateHTML(data.name.toLowerCase().split(' ').join('') + ".json");

        fs.appendFile(`index.html`,html, JSON.stringify(data, null, '\t'), function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("You added a team member!");

        });
    })  
    //   promptUser()
    //     .then(function(answers) {
    //       const html = generateHTML(answers);
      
    //       return writeFileAsync("index.html", html);
    //     })
    //     .then(function() {
    //       console.log("Successfully wrote to index.html");
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });
      
        //Trying to get it connected to git repo
// .then(function (answers) {
//             inquirer.prompt(questions).then(answers => {
//                 console.log(JSON.stringify(answers, null, '  '));
//             });


//             const queryUrl = `https://api.github.com/users/${answers.username}`;

//             axios
//                 .get(queryUrl).then(res => {
//                     console.log(res);

//                     fs.appendFile("main.html", `User: ${answers.username}, \n repos: ${names.join(", ")}`,
//                         err => {
//                             if (err) throw err;
//                             console.log(`Username ${answers.username} found`)
//                         })
//                 })
//         })

//     });

// // // const fs = require("fs")
// // const inquirer = require("inquirer")
// // // const axios = require("axios");

// // // var questions = [
// // // inquirer
// // //     .prompt( {
// // //         type:'input',
// // //         message: 'What is your name?',
// // //         name: 'name',
// // //     }, 
// // //     // {
// // //     //     type:'input',
// // //     //     message: 'Enter your GitHub username',
// // //     //     name: 'username',
// // //     // },
// // //     )
// // //   ]


