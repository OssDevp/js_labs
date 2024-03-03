const button = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");

document.addEventListener("DOMContentLoaded", number)


function calculate() {
    display.innerText = eval(display.innerText);
}
function number() {
    button.forEach(item => {
        item.onclick = () => {
            if (item.id == "clear") {
                display.innerText = "";
            } else if (item.id == "backspace") {
                display.innerText = display.innerText.slice(0, -1);
            } else if (display.innerText == "" && item.id == "=") {
                display.innerText = "Error..";
                setTimeout(() => {
                    display.innerText = "";
                }, 2000)
            } else if (item.id == "=" && display.innerText != "") {
                calculate();
            } else {
                display.innerText += item.id;
            }
        }
    });
}