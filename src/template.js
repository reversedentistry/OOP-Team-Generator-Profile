const createManagerCard = (manager) => {
    return `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: ${manager.email}</li>
      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
    </div>
    </div>`
};

const createEngineerCard = (engineer) => {
    return `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: ${engineer.email}</li>
      <li class="list-group-item">Office number: ${engineer.github}</li>
    </ul>
    </div>
    </div>`
    
    
};

const createInternCard = (intern) => {
    return `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: ${intern.email}</li>
      <li class="list-group-item">Office number: ${intern.school}</li>
    </ul>
    </div>
    </div>`
};

const startHTML = () => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main id="profiles">`
}; 

const endHTML = () => {
    return `</main>
    </body>
    
    </html>`
}


module.exports = {
    createManagerCard,
    createEngineerCard,
    createInternCard,
    startHTML,
    endHTML
}





