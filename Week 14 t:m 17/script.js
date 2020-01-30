//document.getElementById variables
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var backgroundcolor = document.body;

button1.onclick = click1;
button2.onclick = click2;
button3.onclick = click3;


function click1() {
    document.body.style.backgroundColor = "green"
}

function click2() {
    document.body.style.backgroundColor = "red"
}


function click3() {
    document.body.style.backgroundColor = "blue"
}
