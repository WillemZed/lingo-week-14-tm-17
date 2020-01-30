makeSquare();
makeButton();
makeInput();

var woordBalk = document.getElementById("input");
var body = document.getElementsByTagName("body")[0];
var button = document.getElementById("button");
var conainer = document.getElementById("container");
var antwoord = document.getElementById("antwoord");
var woorden = ["appel","aldus","afwas","aftel","aarde","armen","actie","apart","adres","avond","aders","alarm","boten","balen","beter","bomen","boren","boven","boxen","brood","broek","brand","breed","benen","beeld","brief","beten","basis","blauw","beren","buren","banen","bloed","broer","blond","boter","beleg","breng","baken","beker","blind","bezig","baden","bedel","bazen","bazin","baren","beden","beken","bezem","baard","bidet","breuk","conus","cello","creme","cloud","cacao","cadet","cavia","ceder","combi","china","clown","draai","deden","dalen","derde","delen","dwaas","daden","dader","dames","diner","datum","dozen","dreun","duits","dagen","deren","dwerg","dwaal","dwing","druil","droog","draad","dweil","drank","duren","dwars","drugs","daten","daler","doorn","disco","degen","droom","dient","drone","dadel","duwen","druif","deken","deler","elven","eigen","enger","engel","elder","enkel","effen","email","egaal","fiets","files","forel","films","feest","fruit","falen","flora","fauna","feeen","freak","forum","fusie","geven","gaven","groen","graai","getal","grens","grond","groef","graal","gewei","games","grote","groet","garen","gebak","graag","genre","glans","geluk","geeuw","harry","horen","heren","halen","hagel","haren","helen","harde","hemel","hoofd","huren","hamer","haken","heden","hotel","hobby","heler","hoger","ieder","index","immer","icoon","inlog","inzet","innig","jovel","jaren","jicht","jabot","jacht","jaden","jagen","jager","japon","jarig","jawel","jeans","jemig","jeugd","joint","jonas","joule", "koken","kreet","koker","kerst","kegel","koude","kader","krent","kamer","kaars","kaart","kraan","krant","keren","kruid","kerel","kubus","kraal","kleur","kroon","klein","korst","klopt","kabel","kunst","kopje","krans","klimt","kater","klink","kudde","kruis","lopen","laten","lepel","links","laden","leven","lezen","lucht","lenen","laser","lente","licht","lader","leder","lunch","lijst","leger","leden","legen","lagen","lezer","lever","lingo","loper","luier","lager","leeuw","maand","malen","maken","media","meter","motor","maten","markt","mazen","molen","meest","meren","model","meden","maden","macht","meeuw","mager","magen","maren","manen","noord","nieuw","negen","namen","neven","nodig","naden","neder","nemen","onder","optel","ovaal","ovale","onwel","optie","orden","oppas","ouder","ophef","oases","palen","plein","pegel","paars","patat","prijs","piano","pixel","paden","pasta","pizza","poten","paard","puber","pauze","preek","polis","pater","proef","panda","penis","prins","pluto","polen","plint","quota","quant","quark","queue","quilt","quote","robot","reken","raden","regen","radio","rente","regio","rugby","reden","roken","ruzie","ruist","regel","racen","races","riool","ramen","radar","roman","rokje","razen","roede","staan","staal","speel","steeg","stoel","stook","steek","schep","spijs","stoep","shirt","samen","sites","sport","spalk","sjaal","storm","staat","steun","strak","serie","shows","schat","snoep","sfeer","smeer","speer","scene","speld","smeed","smaak","super","stand","steer","smelt","sedan","skier","sluis","sneer","steel","truck","terug","typen","talen","taboe","tegel","taart","tafel","trouw","teken","teren","taken","treur","tenen","titel","thuis","tiara","teder","toets","tabak","trein","tarwe","telen","teler","uiten","uilig","uitje","uiver","ultra","uniek","uppie","uraan","uiers","velen","vloer","video","varen","vegen","veren","vader","vaten","vuren","vrouw","vlees","vogel","vroeg","vezel", "veins","vorst","veder","vanaf","vieze","veger","villa","veler","vrede","vries","woord","wagen","wonen","waren","warme","weten","water","weren","wazig","wegen","weven","wezen","weken","wraak","wilde","wreed","wrede","wenst","woest","xenon","yacht","yucca","zwaar","zware","zesde","zagen","zalig","zomer","zeden","zwart","zeven","zicht","zadel","zweet","zenuw","zweer","zweef","zaden","zaken","zeker","zever","zeeen"];
var woordje = woorden[Math.floor(Math.random() * woorden.length)]
var count = 0;
console.log(woordje)

button.onclick = checkwoord;


function makeInput() {//Maakt input om de woord in te typen
    var input = document.createElement("INPUT")
    input.id = "input";
    container.appendChild(input);
}

function makeSquare() {// maakt 25 div's aan
    for(var i = 1; i <= 25; i++){
        var square = document.createElement("DIV");
        square.id = "vak" + i;
        container.appendChild(square);

    }
}


function makeButton() {//maakt de knop "Check woord"
    var btn = document.createElement("BUTTON")
    btn.innerHTML = "Check Woord";
    btn.id = "button"
    container.appendChild(btn);
}




function checkwoord(){// checkt of het ingevulde woord klopt met wat het antwoord is, bij groen is het goed, bij geel is het het goede letter maar op de verkeerde plek, als er niks verandert is het fout
    var ingevuldWoord = woordje;
    var ingevuldLetter = woordBalk.value;
    
    var arrayWoord = ingevuldWoord.split("");
    console.log('arrayWoord ' + arrayWoord);
    var arrayLetter = ingevuldLetter.split("");

    for(i = 0; i < 5; i++){
        var div = document.getElementById("vak" + ((i + 1) + (5 * count)))

        div.style.backgroundColor = "white"
            div.innerHTML = arrayLetter[i]

        if (arrayWoord[i] == arrayLetter[i]) {
            div.style.backgroundColor = "green"
        }
    }

    for(i = 0; i < 5; i++){
        var div = document.getElementById("vak" + ((i + 1) + (5 * count)))
            if (div.style.backgroundColor != "green") {
                if(arrayWoord.indexOf(arrayLetter[i]) > -1){
                    div.style.backgroundColor = "yellow"
                }
            }
    }

    if (div.style.backgroundColor == "green"){
        function makeDiv() {
            var congratsDiv = document.createElement("DIV")
            congratsDiv.id = "congrats"
            container.appendChild(congratsDiv);
        }
        makeDiv()
        congrats.innerHTML = "Gefeliciteerd!"
        button.disabled = "true"
    }
    count ++
}




