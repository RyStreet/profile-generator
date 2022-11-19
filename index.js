
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')



const fs = require('fs')
const inquirer = require('inquirer')
const { getSystemErrorName } = require('util')
const { default: Choices } = require('inquirer/lib/objects/choices')

const teamArray = []

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
        const manager = new Manager (name, id, email, officeNumber )
        console.log(manager)
        teamArray.push(manager)
        

    })
   

}

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
{
type: 'confirm',
name: "addAnotherEmployee",
message: "Would you like to add another Employee?",
default: false

},

])
.then(employeeData => {
console.log(employeeData)

let {role, name, id, email, school, github, addAnotherEmployee } = employeeData
let employee;

if (role === "Intern"){
employee = new Intern (name, id, email, school)
console.log(employee)
}
if(role === "Engineer"){
employee = new Engineer (name, id, email, github);
console.log(employee)
}

teamArray.push(employee);

if(addAnotherEmployee){
return addEmployee(teamArray);
}
else{
    return teamArray;
}

})};


addManager()
.then(addEmployee)
.then(teamArray =>{
    
    console.log(teamArray)
})
