const container = document.querySelector(".container");
const sizeText = document.querySelector("span");
const resizeButton = document.querySelector(".resize");
let size = 16;

function addEventListener(element, event, callback) {
    const wrapper = e => {
        callback(e , () => element.removeEventListener(event, wrapper));
    }
    element.addEventListener(event, wrapper);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateGrid = gridSize => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.opacity = 0;

            box.addEventListener("mouseover", () => {
                if (Number(box.style.opacity) < 1) {
                    box.style.opacity = Number(box.style.opacity) + 0.1;
                }
                box.style.backgroundColor = getRandomColor();
            });

            row.appendChild(box);
        }
        container.appendChild(row);
    }
    sizeText.textContent = size;
}

resizeButton.addEventListener("click", () => {
    let newSize = prompt("new size? (1-100)");
    if (newSize > 0 && newSize <= 100) {
        container.textContent = "";
        size = newSize;
        generateGrid(size);
    }
});



generateGrid(size);

