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

const createHTML = (html) => {}; 


module.exports = {
    createManagerCard,
    createEngineerCard,
    createInternCard
}





