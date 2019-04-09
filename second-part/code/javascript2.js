var flyPutin = document.getElementById("flyOver");
var flyUp = document.getElementById("flyUp");
var fallDown = document.getElementById("fallDown");
var explode = document.getElementById("explode");
var trumpHelp = document.getElementById("trumpWave");
var sign = document.getElementById("chooseSign");
var angryMexicans = document.getElementById("angryMexicans");
var soundExplosion = document.getElementById("soundExplosion");
var climbWall = document.getElementById("climbWall");
var explode2 = document.getElementById("explode2");

window.onload = function() {
      flyPutin.classList.add("move1");
      flyPutin.addEventListener("animationend", separateElements);
}

function separateElements() {
    flyPutin.removeEventListener("animationend", separateElements);
    flyUp.style.display = "block";
    fallDown.style.display = "block";
    flyUp.classList.add("move2");
    fallDown.classList.add("move3");
    fallDown.addEventListener("animationend", explosion);
}

function explosion() {
    fallDown.removeEventListener("animationend", explosion);
    explode.style.display = "block";
    soundExplosion.play();
    explode.classList.add("explosion");
    fallDown.style.display = "none";
    explode.addEventListener("animationend", appearElements);
}

function appearElements() {
    explode.removeEventListener("animationend", appearElements);
    trumpHelp.classList.add("trump");
    sign.classList.add("fadeIn");
    angryMexicans.classList.add("fadeIn");
    climbWall.addEventListener("click", climbAnim);
}

function climbAnim() {
    climbWall.removeEventListener("click", climbAnim);
    trumpHelp.classList.remove("trump");
    trumpHelp.style.opacity = "1";
    trumpHelp.classList.add("move4");
    trumpHelp.addEventListener("animationend", explosion2);
}

function explosion2() {
    trumpHelp.removeEventListener("animationend", explosion2)
    trumpHelp.style.opacity = "0";
    explode2.style.display = "block";
    soundExplosion.play();
    explode2.classList.add("explosion");
    explode2.addEventListener("animationend", loadPage); /*load the next page, change the mexican sign */
}


function loadPage() {
    window.location = "option2.html";
}




