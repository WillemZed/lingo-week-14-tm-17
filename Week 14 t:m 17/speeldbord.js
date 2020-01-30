var typebalk = document.getElementById("balk1")
var letterbalk = document.getElementById("balk2")
var button = document.getElementById("Check");

button.onclick = checkwoord;

function checkwoord(){
    var ingevuldWoord = typebalk.value;
    var ingevuldLetter = letterbalk.value;

    var arrayWoord = ingevuldWoord.split('');
    var arrayLetter = ingevuldLetter.split('');

    for(var i = 1; i <= 5; i++){
        var div = document.getElementById("vak" + i)

        div.style.backgroundColor = "white"
            div.innerHTML = arrayLetter[i - 1]

        if (arrayWoord[i - 1] == arrayLetter[i - 1]) {
            div.style.backgroundColor = "green"
        }
    }

    for(var i = 1; i <= 5; i++){
        var div = document.getElementById("vak" + i)
            if (div.style.backgroundColor != "green") {
                if(arrayWoord.indexOf(arrayLetter[i - 1]) > -1){
                    div.style.backgroundColor = "yellow"
                }
            }
    }

}
