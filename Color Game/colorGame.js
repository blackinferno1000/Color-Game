let numCircles = 6;
let colors;
let pickedColor;
let circles = document.querySelectorAll(".circle");
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    //mode button behavior
    setUpModeButtons();
    //circle button behavior
    setUpCircles();
    //setup beginning
    reset();
}


function reset() {
    colors = generateRandomColors(numCircles);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors'
    for (let i = 0; i < circles.length; i++) {
        if (colors[i]) {
            circles[i].style.backgroundColor = colors[i];
            circles[i].style.display = 'block';
        } else {
            circles[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener('click', function () {
    reset();
});

function setUpModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add("selected");
            this.textContent === 'Easy' ? numCircles = 3 : numCircles = 6;
            reset();
        });
    }
}

function setUpCircles() {
    for (let i = 0; i < circles.length; i++) {
        //add event listeners
        circles[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = 'Play Again?'
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function changeColors(color) {
    for (let i = 0; i < colors.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}