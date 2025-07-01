const container = document.querySelector(".container");
const numOfDivs = 256;
const changeGridSizebtn = document.querySelector(".changebtn")

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div); 
    }
}
createGrid(numOfDivs)

const divhover = document.querySelectorAll(".square");
divhover.forEach(hoverEffect);

function hoverEffect(item) {
    item.addEventListener("mouseenter", () => {
        item.classList.add("hover-item")
    })
}

function allSquares () {
    const squares = document.querySelectorAll(".square");
    return squares;
}

function changeSquareSize (numOfSquares) {

    let squareSize = 480 / numOfSquares;
    let squares = allSquares()

    squares.forEach((square) => {
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
    })

    squares.forEach(hoverEffect)
}

changeGridSizebtn.addEventListener("click", ()=> {
    let newGridSize = window.prompt("Please enter the number of squares per side for the new grid");
    if (newGridSize < 1 || newGridSize > 100) {
        alert("Please enter a number between 1 and 100")
    } else {
        let numOfSquarePerSide = Number(newGridSize)
        newGridSize = Number(newGridSize * newGridSize)

        const squares = allSquares()
        
        squares.forEach((divsquare) => {
            divsquare.remove();
        })

        createGrid(newGridSize);
        changeSquareSize(numOfSquarePerSide);
    }
})
