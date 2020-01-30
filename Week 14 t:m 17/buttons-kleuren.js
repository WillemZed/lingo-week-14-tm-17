/* lab 1 kleuren
var container = document.getElementById("container");


function createButton() {
    var button = document.createElement("button")
    button.innerHTML = i;
    container.appendChild(button)
    button.onclick = color;
}

for(i = 1; i <=30; i++) {
    createButton();
}

function color() {
    this.style.backgroundColor = "red"
}
*/




var container = document.getElementById("container");


function createButton() {
    var button = document.createElement("button")
    button.innerHTML = i;
    container.appendChild(button)
    button.onclick = color;
}

for(i = 1; i <=30; i++) {
    createButton();
}

function color() {
    this.style.backgroundColor = "red"
    this.onclick = color2;
}

function color2() {
    this.style.backgroundColor = "purple"
    this.onclick = color3;
}

function color3() {
    this.style.backgroundColor = "blue"
    this.onclick = color4;
}

function color4() {
    this.style.backgroundColor = "black"
    this.onclick = color5;
}

function color5() {
    this.onclick = container.removeChild(this)
}



/*
var container = document.getElementById("container");

var color = ["green", "red", "blue", "black"]

var countClicks = []


function buttomCreate() {
    container.appendChild(button)
    button.createElement("button")
}
*/

