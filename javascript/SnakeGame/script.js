const canvas = document.getElementById('canvas');
//use rendering context - check mdn site to know more 
const pen = canvas.getContext('2d');


// let init_x = 50;
// let init_y = 50;

const cellSize = 45;
const W = 1100;
const height = 500;
let food = null;
let score = 0;

const snake = {
    init_len: 4,
    direction: 'right',
    cells: [],
    createSnake: function(){
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({
                x: i,
                y: 0
            });
        }
    },
    drawSnake: function () {
        for (let cell of this.cells) {
            pen.fillRect(cell.x*cellSize, cell.y*cellSize, cellSize-1, cellSize-1);
        }
    },
    updateSnake: function () {
        //getting head ie last cell
        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        //collision of head of snake with food 
        if (headX === food.x && headY === food.y) {
            food = getRandomFood();
            score++;
        } else {
            //remove first cell
            this.cells.shift();
        }

        let nextX;
        let nextY;

        if (this.direction === 'down') {
            nextX = headX;
            nextY = headY + 1;
            
            if (nextY * cellSize >= height - cellSize) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }

        } else if (this.direction === 'up') {
            nextX = headX;
            nextY = headY - 1;

            if (nextY * cellSize < 0) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }
        }
        else if(this.direction === 'left'){
            nextX = headX - 1;
            nextY = headY;

            if (nextX * cellSize < 0) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }
        }
        else if(this.direction === 'right'){
            nextX = headX + 1;
            nextY = headY;

            if (nextX * cellSize > (W-20)) {
                pen.fillStyle = 'red';
                pen.fillText('Game Over',100,100);
                clearInterval(id);
            }
        }


        //add new cell after the head inside the cells array 
        this.cells.push({
            x: nextX,
            y: nextY
        })
    }

}

//initialize the game
function init() {
    snake.createSnake();

    food = getRandomFood();
    //creating rectangle
    // pen.fillRect(init_x, init_y, 50, 50);

    function keypressed(e) {
        if(e.key === 'ArrowRight'){
            snake.direction = 'right';
        }
        else if(e.key === 'ArrowLeft'){
            snake.direction = 'left';
        }
        else if(e.key === 'ArrowUp'){
            snake.direction = 'up';
        }
        else if(e.key === 'ArrowDown'){
            snake.direction = 'down';
        }
    }

    document.addEventListener('keydown', keypressed);
    
}

//update the game
function update() {

    // init_x += 50;
    snake.updateSnake();

}


//draw something on canvas
function draw() {
    // pen.clearRect(0,0,1100,500);
    // pen.fillRect(init_x, init_y, 50, 50);
    pen.clearRect(0, 0, W, height);
    pen.font = '40px sans-serif';
    pen.fillText('Score: ' + score, 100, 50);
    pen.fillStyle = 'blue';
    pen.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);
    
    pen.fillStyle = 'pink';
    snake.drawSnake();

}


function gameLoop() {
    draw();
    update();
}

function getRandomFood() {
    const foodX = Math.round(Math.random()*(W-cellSize)/cellSize);
    const foodY = Math.round(Math.random()*(height-cellSize) / cellSize);
    food ={
        x: foodX,
        y: foodY
    }
    return food;
}

init();

const id = setInterval(gameLoop,200)