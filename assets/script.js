const container = document.querySelector(".container");
const numOfDivs = 256;

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div); 
    }
}

createGrid(numOfDivs)