console.log('Coding snake game in javascript');

// game contants 
let direction = { x: 0, y: 0 };
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
let food = { x: 5, y: 7 };

// game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine() {

    // display the snake and food
    // display the snake
    board.innHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    // display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}



// main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    direction = { x: 0, y: 1 };  // starts game here!
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log('ArrowUp pressd');
            direction.x = 0;
            direction.y = -1;
            break;
        case "ArrowDown":
            console.log('ArrowDown pressd');
            direction.x = 0;
            direction.y = 1;
            break;
        case "ArrowLeft":
            console.log('ArrowLeft pressd');
            direction.x = -1;
            direction.y = 0;
            break;
        case "ArrowRight":
            console.log('ArrowRight pressd');
            direction.x = 1;
            direction.y = 0;
            break;

        default:
            break;
    }
});