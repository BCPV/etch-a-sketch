let color = "black";

document.addEventListener("DOMContentLoaded", () => {
    makeGrid(16);
 
    let button_popup = document.querySelector(".changeGridSize");

    button_popup.addEventListener("click", () => {
        let size = getGridSize();
        makeGrid(size);
    })
})

function makeGrid(size) {
    let container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let cellNum = size ** 2;

    for (let i = 0; i < cellNum; i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", cellColor)
        container.insertAdjacentElement("beforeend", cell);
    }
}

function getGridSize() {
    let input = parseInt(prompt("Enter the grid size: "));

    if (input < 1 || input > 100) {
        alert("Provide number between 1 and 100");
    }

    return input;
}

function cellColor() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = "black";
    }
}

function changeColor(colorChoice) {
    color = colorChoice;
}

function resetContainer() {
    let cells = document.querySelectorAll("div");
    cells.forEach((div) => div.style.backgroundColor = "white");
}