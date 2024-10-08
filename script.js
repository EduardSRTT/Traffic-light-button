let buttonColor = 0;

function changeButtonAppearance(buttonColor) {
    let trafficLightButton = document.getElementById("lightButton");
    if (buttonColor === 0) {
        trafficLightButton.style.background = "yellow";
        trafficLightButton.innerHTML = "Prep!";
    } else if (buttonColor === 1) {
        trafficLightButton.style.background = "green";
        trafficLightButton.innerHTML = "Move!";
    } else {
        trafficLightButton.style.background = "red";
        trafficLightButton.innerHTML = "Stop!";
    }
}

function trafficLight() {
    if (buttonColor === 3) {
        buttonColor = 0;
    }
    changeButtonAppearance(buttonColor);
    ++buttonColor;
}

setInterval(trafficLight, 5000);
