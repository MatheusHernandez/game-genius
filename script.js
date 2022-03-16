let order = []
let clickedOrder = []
let score = 0

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//create an order random of colors
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4)
    order[order.length] = colorOrder
    clickedOrder = [];

    for(let i in order) {
        let elementColor=createColorElement (order[i])
        lightColor(elementColor,Number(i) + 1)
    }
}

//light in the next color
let lightColor = (element, number)=>{
    number=number *500;
    setTimeout(()=> {
        element.classList.add('selected')
    }, number - 250);
    setTimeout(()=> {
        element.classList.remove('selected');
    })
}


// checks the buttons clicked was the same order generaded in the game
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order [i]) {
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
        nextLevel()
    }
}
//func for the usuario click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)
}


//func that return the color
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return yellow;
    } else if (color == 2) {
        return red;
    } else if (color == 3) {
        return blue;
    }
}

//func for the next game
let nextLevel = () => {
    score++;
    shuffleOrder();
}
//func for gameover
let gameOver=() =>{
    alert(`Score: ${score}!\nYou've lost the game!\nClick in OK to start a new game`)
    order= []
    clickedOrder = []

    playGame()
}

//func for start play
let playGame =() =>{
    alert('Welcome to the Genesis! Start a new game')
    score = 0
    nextLevel()
}

//events of click in the colors

green.onclick = () => click(0);
yellow.onclick = () => click(1);
red.onclick = () => click(2);
blue.onclick = () => click(3);

//start game
playGame()