const createManagerCard = (manager) => {
    return `<div class="card col-12 col-md-5 col-lg-2">
    <div class="card-body">
      <h5 class="card-title p-3 mb-0 bg-info text-dark">${manager.name}</h5>
      <h6 class="card-title p-3 mt-0 bg-info text-dark"><i class="fa-solid fa-desktop"></i></i> Manager</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
    </div>
    </div>`
};

const createEngineerCard = (engineer) => {
    return `<div class="card col-12 col-md-5 col-lg-2">
    <div class="card-body">
      <h5 class="card-title p-3 mb-0 bg-info text-dark">${engineer.name}</h5>
      <h6 class="card-title p-3 mt-0 bg-info text-dark"><i class="fa-solid fa-screwdriver-wrench"></i> Engineer</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">GitHub: ${engineer.github}</li>
    </ul>
    </div>
    </div>`
    
    
};

const createInternCard = (intern) => {
    return `<div class="card col-12 col-md-5 col-lg-2">
    <div class="card-body">
      <h5 class="card-title p-3 mb-0 bg-info text-dark">${intern.name}</h5>
      <h6 class="card-title p-3 mt-0 bg-info text-dark"><i class="fa-solid fa-book-open"></i> Intern</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
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
        <script src="https://kit.fontawesome.com/0cf2322ab7.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h1 class="text-center.bg-success.bg-gradient">My Team</h1>
        </header>
        <main class="d-flex justify-content-center">`
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





