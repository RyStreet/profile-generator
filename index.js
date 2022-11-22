//import employee profiles
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')


//import required node modules
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./src/generateMarkdown.js')
const { getSystemErrorName } = require('util')
const { default: Choices } = require('inquirer/lib/objects/choices')

//array for team members
const teamArray = []
//creates manager profile and pushes profile to teamArray
const addManager = ()=>{
   return inquirer
   .prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Who is the team manager?'
    },
    {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?',    
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
    },
    {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
    },
    ])
    .then((managerInput) =>{
        const { name, id, email, officeNumber } = managerInput
        //creates manager profile
        const manager = new Manager (name, id, email, officeNumber )
        //pushes profile to array
        teamArray.push(manager)
})}

//add employee function
const addEmployee = ()=> {
    console.log("Add Employee Profile")
    return inquirer
    .prompt([
    {
    type: "list",
    name: "role",
    message: "Choose your employee's role:",
    choices: ['Intern','Engineer']
    },
    {
    type: "input",
    name: 'name',
    message: "Enter your employee's name:"
    },
    {
    type:'input',
    name:'id',
    message: "Enter employee ID:"
    },
    {
    type: 'input',
    name: "email",
    message: "Enter employee email:"
    },
    {
    type: 'input',
    when: (input) => input.role === "Intern",
    name: 'school',
    message: "Enter Intern's School:"
    },
    {
    type: 'input',
    when: (input) => input.role === "Engineer",
    name: 'github',
    message: "Enter Engineer's Github:" 
    },
    //prompt for manager to add additional team members
    {
    type: 'confirm',
    name: "addAnotherEmployee",
    message: "Would you like to add another Employee?",
    default: false
    },
])
.then(employeeData => {

    //creates employee object
    let {role, name, id, email, school, github, addAnotherEmployee } = employeeData
    let employee;
    //creates intern profile if choice is selected
    if (role === "Intern"){
    employee = new Intern (name, id, email, school)
    }
    //creates engineer profile if choice is selected
    if(role === "Engineer"){
    employee = new Engineer (name, id, email, github);
    }
    //pushes employee profile to teamArray
    teamArray.push(employee);
    //if user wants to add another employee on the y/n prompt, it will re-run employee questions
    if(addAnotherEmployee){
    return addEmployee(teamArray);
    }
    //if user chooses not to add another employee profile, the current team array will return
    else{
        return teamArray;
    }
})};



//initializes function to create manager profile
addManager()
    //initializes function to add more employees
    .then(addEmployee)
    //once employees are added, data is pushed to team array
    .then((teamArray) =>{
    console.log(teamArray)
        const mark = generateMarkdown(teamArray)
        fs.writeFile("./dist/index.html", mark, err =>{
            if(err){
                console.log('Error', err)
            }
            else{
                console.log('Generating HTML')
            }
        })
    
    
    });
