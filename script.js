function changeButtonAppearance(buttonColor) {
    if (buttonColor === 0) {
        document.getElementById("lightButton").style.background
        = "yellow";
        document.getElementById("lightButton").innerHTML = "Prep!"; 
    } else if (buttonColor === 1) {
        document.getElementById("lightButton").style.background
        = "green";
        document.getElementById("lightButton").innerHTML = "Move!";
    } else {
        document.getElementById("lightButton").style.background
        = "red";
        document.getElementById("lightButton").innerHTML = "Stop!";
    }
}

let buttonColor = 0;

function trafficLight() {
    if (buttonColor === 0) {
        changeButtonAppearance(buttonColor);
        buttonColor = 1;
    } else if (buttonColor === 1) {
        changeButtonAppearance(buttonColor);
        buttonColor = 2;
    } else {
        changeButtonAppearance(buttonColor);
        buttonColor = 0;
    }
}

setInterval(trafficLight, 5000);
