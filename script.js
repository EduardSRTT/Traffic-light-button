// ~~change button color and text on click
let buttonColor = 0;

function changeColorAndText() {
    if (buttonColor === 0) {
        document.getElementById("lightButton").style.background
        = "yellow";
        document.getElementById("lightButton").innerHTML = "Prep!";
        buttonColor = 1;
    } else if (buttonColor === 1) {
        document.getElementById("lightButton").style.background
        = "green";
        document.getElementById("lightButton").innerHTML = "Move!";
        buttonColor = 2;
    } else {
        document.getElementById("lightButton").style.background
        = "red";
        document.getElementById("lightButton").innerHTML = "Stop!";
        buttonColor = 0;
    }
}

setInterval(changeColorAndText, 5000);
//~~~~~~~~~~~~~