
const EntreesUL = document.getElementById('EntreesUL')

const filterEntrees = dishes.filter(dish => dish.course === 'Entrees')


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


