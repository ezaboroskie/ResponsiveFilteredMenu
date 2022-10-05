
const StartersUL = document.getElementById('StartersUL')
const EntreesUL = document.getElementById('EntreesUL')
const DessertsUL = document.getElementById('DessertsUL')



const filterStarters = dishes.filter(dish => dish.course === 'Starters')
const filterEntrees = dishes.filter(dish => dish.course === 'Entrees')
const filterDesserts = dishes.filter(dish => dish.course === 'Desserts')


for(let index=0; index<filterStarters.length; index++){
    const dish = filterStarters[index]
    const dishItem =
        `
        <div class="dish-container">
            <h2>${dish.title}</h2>
            <div class="descript">${dish.description}</div>
            <p>$ ${dish.price}</p>
            <img class="img-resize" src=${dish.imageURL}>
        </div>
        `

        StartersUL.insertAdjacentHTML('beforeend', dishItem)
}

for(let index=0; index<filterEntrees.length; index++){
    const dish = filterEntrees[index]
    const dishItem =
        `
        <div class="dish-container">
            <h2>${dish.title}</h2>
            <div class="descript">${dish.description}</div>
            <p>$ ${dish.price}</p>
            <img class="img-resize" src=${dish.imageURL}>
        </div>
        `

    EntreesUL.insertAdjacentHTML('beforeend', dishItem)
}

for(let index=0; index<filterDesserts.length; index++){
    const dish = filterDesserts[index]
    const dishItem =
        `
        <div class="dish-container">
            <h2>${dish.title}</h2>
            <div class="descript">${dish.description}</div>
            <p>$ ${dish.price}</p>
            <img class="img-resize" src=${dish.imageURL}>
        </div>
        `

    DessertsUL.insertAdjacentHTML('beforeend', dishItem)
}
