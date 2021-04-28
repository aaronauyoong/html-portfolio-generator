const inquirer = require('inquirer');
const fs = require('fs');

const generatePortfolio = (answers) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link 
    rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous">
    <title>Portfolio</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Hello world! My name is ${answers.name}.</h1>
            <p class="lead">I am based in ${answers.location}.</p>
            <p class="lead">I specialise in ${answers.languages}.</p>
            <h3>Want to work together? <span class="badge badge-secondary">Connect with me below!</span></h3>
            <p class="lead">My GitHub profile is ${answers.github}.</p>
            <p class="lead">My LinkedIn profile is ${answers.linkedin}.</p>
        </div>
    </div>
    
</body>
</html>
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Which city and country are you currently living in?',
        },
        {
            type: 'input',
            name: 'languages',
            message: 'What coding languages do you specialise in?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub profile URL.',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Please enter your LinkedIn profile URL.',
        },
    ])
    .then((answers) => {
        const portfolioPageContent = generatePortfolio(answers);

        fs.writeFile('index.html', portfolioPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created your profile - index.html!')
        );
    });