const btnGenerate = document.querySelector('#btn');
const changeColor = document.querySelector('#color');
const btnCode = document.querySelector('#btn-code');
const colorCode = document.querySelector('#color-code');

let red;
let green;
let blue;


btnGenerate.addEventListener('click', generateRGB);
btnCode.addEventListener('click', changeCodeColor);



function generateRGB() {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);

    changeColor.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    if (btnCode.classList.contains('hidden')) {
        btnCode.classList.remove('hidden');
        btnCode.textContent = "HEX";
    }
    red = R;
    green = G;
    blue = B;

    colorCode.textContent = `RGB(${R}, ${G}, ${B})`;
    btnCode.textContent = "HEX";
}

function changeCodeColor() {
    if (btnCode.textContent === "HEX") {
        btnCode.textContent = "RGB";
        rgbToHex(red, green, blue);
    } else if (btnCode.textContent === "RGB") {
        btnCode.textContent = "HEX";
        colorCode.textContent = `RGB(${red}, ${green}, ${blue})`;
    }
}
function rgbToHex(r, g, b) {
    const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    colorCode.textContent = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

