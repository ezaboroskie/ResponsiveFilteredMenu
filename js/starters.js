const StartersUL = document.getElementById('StartersUL')

const filterStarters = dishes.filter(dish => dish.course === 'Starters')


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

