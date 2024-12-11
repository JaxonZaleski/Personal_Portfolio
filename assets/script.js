const display = document.getElementById("display");
const button = document.getElementById("button");
const consoleDisplay = document.getElementById("consoleDisplay");



function appendToDisplay(value) {
    console.log(value);
    consoleDisplay.style.backgroundColor = "rgb(30, 192, 30)";
    consoleDisplay.style.color = "rgb(250, 250, 250)";
    consoleDisplay.style.padding = "2px";
    consoleDisplay.textContent = `Your email and password has been saved.`;

    displayClear()

}
function displayClear() {
    display.textContent = "";
}