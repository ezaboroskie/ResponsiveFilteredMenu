
const DessertsUL = document.getElementById('DessertsUL')


const filterDesserts = dishes.filter(dish => dish.course === 'Desserts')


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
