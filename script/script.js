let logo = document.querySelector(".title");
const firstScene = document.querySelector(".scene1");
const secondtScene = document.querySelector(".scene2");
const thirdtScene = document.querySelector(".scene3");
const mexicanWrapp = document.querySelector("#mexicanWrapp");
const bin = document.querySelector("#trash");
const buildboard = document.querySelector("#advertisement");
const buildboardOn = document.querySelector("#advertisement2");
const light = document.querySelector("#lamp");
const lightOn = document.querySelector("#lamp2");


var startAudio = document.querySelector("#myAudio");
window.onload = function () {
    startAudio.play();
    startAudio.currentTime = 5;
}

// Onclick on logo --> change from scene 1 to scene 2.

logo.addEventListener("click", start);

var secondAudio = new Audio;

function start() {

    secondAudio.src = "audio/city-noise.mp3";
    firstScene.style.display = "none";
    secondtScene.style.display = "block";
    startAudio.pause();
    startAudio.currentTime = 0.0;
    secondAudio.play();
}


// Trash sprite sheet
bin.addEventListener("click", canMove);
bin.classList.add("glow");

function canMove() {
    var count = 0;
    count++;

    if (count > 0) {
        bin.classList.remove("glow");
        bin.classList.add("canMove");
        bin.addEventListener("animationend", removeMove);
    }
}

function removeMove() {
    bin.classList.remove("canMove");
}


//advertisement light

buildboard.addEventListener("click", turnOn);
buildboard.classList.add("glow");

function turnOn() {
    buildboard.classList.remove("glow");
    buildboard.style.display = "none";
}

buildboardOn.addEventListener("click", turnOff);

function turnOff() {
    buildboard.style.display = "block";
}

//lamp light

light.addEventListener("click", lampOn);
light.classList.add("glow");

function lampOn() {
    light.classList.remove("glow");
    light.style.display = "none";
    lightOn.style.display = "block";
}

lightOn.addEventListener("click", lampOff);

function lampOff() {
    light.style.display = "block";
    lightOn.style.display = "none";
}

///Mexican move after click the other 3 elements

// we attach an event to lamp div when clicked
var lamp = document.querySelector("#lamp");
lamp.onclick = function () {
    // if btn already has attribute "isClicked" then fuck off

    if (lamp.hasAttribute("isClicked")) {
        return
    }

    // if we got here than the btn does not have the isClicked attribute
    // now we set the attribute on lamp as a proof that user clicked on it
    lamp.setAttribute("isClicked", "true");
    checkMexican();
};



// we attach an event to btntrash div when clicked
var trash = document.querySelector("#trash");

trash.onclick = function () {
    // if btn already has attribute "isClicked" then fuck off
    if (trash.hasAttribute("isClicked")) {
        return
    }

    // if we got here than the btn does not have the isClicked attribute
    // now we set the attribute on trash btn as a proof that user clicked on it

    trash.setAttribute("isClicked", "true");
    checkMexican();
};






// we attach an event to btntrash div when clicked
var advertisement = document.querySelector("#advertisement");
advertisement.onclick = function () {
    // if btn already has attribute "isClicked" then fuck off
    if (advertisement.hasAttribute("isClicked")) {
        return
    }
    // if we got here than the btn does not have the isClicked attribute
    // now we set the attribute on trash btn as a proof that user clicked on it

    advertisement.setAttribute("isClicked", "true");

    //call the function
    checkMexican();

};


//Mexican Animation

var mexican = document.querySelector("#mexican");

//Mexican function run
function checkMexican() {
    // only if the 3 elements are clicked run the function

    if (lamp.hasAttribute("isClicked") && trash.hasAttribute("isClicked") && advertisement.hasAttribute("isClicked")) {
        mexicanWrapp.classList.add("pointer");
        mexicanWrapp.addEventListener("click", moveMexican);
    }
}

// Mexican go to the bomb

function moveMexican() {
    mexican.classList.add("goToTnt");
    mexicanWrapp.classList.add("translateTnt");
    this.addEventListener("animationend", activeBomb);
}



// Explosion animation

function activeBomb() {
    var boom = document.querySelector("#boom");
    var mexicanD = document.querySelector("#mexicanWrapp");
    var tnt = document.querySelector("#tnt");
    var bang = new Audio;
    secondAudio.pause();
    secondAudio.currentTime = 0.0;
    bang.src = "audio/Big-Explosion.mp3";
    bang.play();

    this.removeEventListener("animationend", activeBomb);
    mexicanD.style.display = "none";
    tnt.style.display = "none";
    boom.style.display = "block";
    boom.classList.add("shake");
    boom.addEventListener("animationend", fireStart);
}


// burning bulding
var sirena = new Audio;

function fireStart() {
    var boom = document.querySelector("#boom");
    var fire = document.querySelector("#burning-building");
    var trump = document.querySelector("#trump");
    sirena.src = "audio/sirena.m4a";
    sirena.play();

    boom.style.display = "none";
    fire.style.display = "block";
    fire.classList.add("fire");
    trump.style.display = "block";
    this.removeEventListener("animationend", fireStart);
}

var trump = document.querySelector("#trump");

trump.addEventListener("click", sceneThree);
var tweetSound = new Audio;

function sceneThree() {
    secondtScene.style.display = "none";
    thirdtScene.style.display = "block";
    sirena.pause();
    sirena.currentTime = 0.0;
    tweetSound.src = "audio/tweet.m4a";
    tweetSound.play();
    tweetSound.loop = "true";
}


var tweet = document.querySelector("#twitter");

tweet.addEventListener("click", putinFly);

function putinFly() {
    var putinFluying = document.querySelector("#flying-putin");
    tweet.style.cursor = "default";
    tweetSound.pause();
    tweetSound.currentTime = 0.0;
    startAudio.play();
    startAudio.currentTime = 534;
    putinFluying.style.display = "block";
    putinFluying.classList.add("putinFlying");
}

var putinFluying = document.querySelector("#flying-putin");

putinFluying.addEventListener("click", goMexico);

function goMexico() {
    var secondTrump = document.querySelector("#trump2");
    var hero = document.querySelector("#saving-trump");
    secondTrump.style.display = "none";
    putinFluying.style.display = "none";
    hero.style.display = "block";
    hero.addEventListener("animationend", scene4);
}

function scene4() {
    window.location = "second-part/code/fly1.html";
}
