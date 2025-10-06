let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["red", "yellow", "green", "blue"];
let h2 = document.querySelector("h2");
//add eventListener for start the game...
document.addEventListener("keypress",function(){
    if(started===false){
        started=true;
        levelUp();
    }
});
//function for flash the button by game....
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
//function for flash by the user....
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Leve ${level}`;
    //create the random number....
    let randIdx = Math.floor(Math.random()*3);
    //select the random color by using the random number....
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //push the random color in an array by game sequence....
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length===userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was<b> ${level}</b> <br></br> Press any key to start`;
        document.querySelector("body").style.background="red";
        setTimeout(function() {
            document.querySelector("body").style.background="white";
        },150);
        reset();
    }
}
let allbtns = document.querySelectorAll(".btn");
function btnPress() {
    let btn = this;
    userFlash(btn);
    //select the user color....
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
for(let btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}