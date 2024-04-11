let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"},
    {name: "watermelon", color: "green", shape: "oval", emoji: "🍉"}
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
}

function runProgram() {
    console.log("Program is running");

    let lessThan6Button = document.createElement('button');
    lessThan6Button.textContent = "Fruits with less than 6 letters";
    lessThan6Button.addEventListener('click', filterByLessThan6);

    let buttonsContainer = document.querySelector('#buttonsContainer');
    buttonsContainer.appendChild(lessThan6Button);

    for(const fruit of fruitObjects) {
        addFruitCard(fruit);

    }


}
function fruitIsLessThan6(fruit) {
    if(fruit.name.length < 6) {
        return true;
    }
    return false;
}


function filterByLessThan6(){
    clearCards();

    let lessThan6Fruits = [];

    for(const fruit of fruitObjects) {
        if(fruitIsLessThan6(fruit)){
            lessThan6Fruits.push(fruit);
        }
    }
    console.log(lessThan6Fruits);

    for (const fruit of lessThan6Fruits) {
        addFruitCard(fruit);
    }
}



function addFruitCard(fruit) {
    let newFruitCard = document.createElement('div');
    // heading
    let fruitHeading = document.createElement('h3');
    fruitHeading.textContent = fruit.name;
    newFruitCard.appendChild(fruitHeading);

    //color
    let fruitColor = document.createElement('p');
    fruitColor.textContent = `Color: ${fruit.color}`;
    fruitColor.style.color = fruit.color;
    newFruitCard.appendChild(fruitColor);

    let fruitShape = document.createElement('p');
    fruitShape.textContect = `Shape: ${fruit.shape}`;
    newFruitCard.appendChild(fruitShape);

    let fruitEmoji = document.createElement('p');
    fruitEmoji.textContent = `Emoji: ${fruit.emoji}`;
    newFruitCard.appendChild(fruitEmoji);


    let fruitContainer = document.querySelector('#cards');
    newFruitCard.classList.add('fruitCard');
    fruitContainer.appendChild(newFruitCard);
   
}

document.addEventListener('DOMContentLoaded', runProgram);