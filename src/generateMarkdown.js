
const generateManager = function(manager){
return`

<div class="col-3">
<div class ='card mt-4 ml-4 ' style="width: 300px">
    <div class = 'card-header bg-primary' >
    <h3>${manager.name}</h3>
    <h4>Manager <i class="fa-solid fa-mug-hot"></i></h4>
    </div>
    <div class = 'card-body'>
    <p>ID: ${manager.id}</p>
    <p>Email: <a href ="mailto:${manager.email}">${manager.email}</a></p>
    <p>Office: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    
    `
}

const generateEngineer = function(engineer){
    return`
    <div class="col-3">
    <div class ='card mt-4 ml-4 ' style="width: 300px">
        <div class = 'card-header bg-primary' >
        <h3>${engineer.name}</h3>
        <h4>Engineer <i class="fa-solid fa-wrench"></i></h4>
        </div>
        <div class = 'card-body'>
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href ="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>GitHub: <a href ="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
        </div>
        </div>
        `
    }

const generateIntern = function(intern){
        return`
        <div class="col-3">
        <div class ='card mt-4 ml-4 ' style="width: 300px">
            <div class = 'card-header bg-primary' >
            <h3>${intern.name}</h3>
            <h4>Intern <i class="fa-solid fa-graduation-cap"></i></h4>
            </div>
            <div class = 'card-body'>
            <p>ID: ${intern.id}</p>
            <p>Email: <a href ="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
            </div>
            </div>
            </div>
            `
        }


function generateMarkdown(teamArray){
cardArray = [];

for (let i=0; i<teamArray.length; i++){
    const employee = teamArray[i]
    const role = employee.getRole();

    if(role === "Manager"){
        const managerCard = generateManager(employee)

        cardArray.push(managerCard)
    }
    if(role === "Engineer"){
        const engineerCard = generateEngineer(employee)
        
        cardArray.push(engineerCard)
    }
    if(role === "Intern"){
        const internCard = generateIntern(employee)

        cardArray.push(internCard)
    }
}

const employeeCards = cardArray.join('')

const generateTeam = generateTeamCard(employeeCards)

return generateTeam;
}


const generateTeamCard = function(employeeCards){
return `    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/c0ba172c73.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
    <title>Team Profile Generator</title>
</head>

<body>
    <header id='header'  style="height: 100px;" class = " border-bottom border-dark align-items-center" >

        <h1 class = "text-center text-monospace  ">Team Profile Generator</h1>

        <p  class="row justify-content-center lead"></p>
    </header>
    <div id = 'employeeCards' class=" row container-fluid">
   

      ${employeeCards}
     
 
 </div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>`
;
}

module.exports = generateMarkdown;