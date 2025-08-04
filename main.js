const btn1 = document.querySelector("#btn1");
const page1btn=document.querySelector("#Ostrichbtn");
const page2btn=document.querySelector("#Kiwibtn");
const page3btn=document.querySelector("#Casowarybtn");
const page4btn=document.querySelector("#Emubtn");
const page5btn=document.querySelector("#Education");
const page6btn=document.querySelector("#MINIGAME");
var allpages=document.querySelectorAll(".page");
const menuItemsList =document.querySelector("ul");
const hamBtn = document.querySelector("#menuButton");
hamBtn.addEventListener("click",toggleMenus);
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
if(pgno == 6){
    startGame();
}else{
    pauseGame();
}
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
var HeaderText = document.getElementById("headerText");
page1btn.addEventListener("click", function () {
show(1);
HeaderText.innerHTML="Ostrich time";
 if (window.innerWidth < 800) toggleMenus();
});
page2btn.addEventListener("click", function () {
show(2);
HeaderText.innerHTML="Kiwi sucks";
 if (window.innerWidth < 800) toggleMenus();
});
page3btn.addEventListener("click", function () {
show(3);
HeaderText.innerHTML="Actual dinosaur";
 if (window.innerWidth < 800) toggleMenus();
});
page4btn.addEventListener("click", function () {
show(4);
HeaderText.innerHTML="Australia lost to these guys";
 if (window.innerWidth < 800) toggleMenus();
});
page5btn.addEventListener("click", function () {
show(5);
HeaderText.innerHTML="EDUCATION!!!";
 if (window.innerWidth < 800) toggleMenus();
});

page6btn.addEventListener("click", function () {
show(6);
HeaderText.innerHTML="EMU INVASION";
 if (window.innerWidth < 800) toggleMenus();
});

hideall();

function toggleMenus(){ /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML= "X"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="☰"; //change button text open menu
}
}


//audio playing
var audio = new Audio("Audio/minecraft_click.mp3");
var audio2 = new Audio("Audio/vomiting-301069.mp3");
var GameMusic= new Audio("Audio/gameMusic.mp3")
GameMusic.volume = .1;
GameMusic.loop = true;
var buttonAudio = document.getElementById("flexBtn");
var kiwiAudio = document.getElementById("Kiwibtn");

buttonAudio.onclick = function(){
   if(audio.paused){
        audio.play();

    }
    else
    {
        audio.pause();
        audio.currentTime = 0;
      
    }
}
kiwiAudio.onclick = function(){
   if(audio2.paused){
    audio2.play();
    }
    else{
          audio2.pause();
        audio2.currentTime=0;
    }
}

// game
const emuID = document.getElementById("emuID");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function moveEmu() {
       
    //get the height and width
    var container= document.querySelector(".game");
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;

    var emuWidth = emuID.offsetWidth;
    var emuHeight = emuID.offsetHeight;

    maxX =containerWidth - emuWidth;
    maxY = containerHeight- emuHeight;

emuID.style.left = GetRandom(0, maxX) + "px";
emuID.style.top = GetRandom(0, maxY) + "px";

emuID.classList.remove("shrink");
emuID.classList.add("anim1");

if(emuID.src.includes("Images/enemydead.webp")){
    emuID.src="Images/enemy.webp";
}
if(emuID.src.includes("Images/enemy.webp")){
    emuID.src="Images/enemy2.webp";
}
else if(emuID.src.includes("Images/enemy2.webp")){
      emuID.src="Images/enemy.webp";
}
}

    var moveEmuItvId= null
var TimerItvId= null
var CropsItvId= null
const popAudio = new Audio("Audio/kill.mp3");
const cropBox=document.getElementById("cropBox");
const timerbox=document.getElementById("timerbox");
let Crops=10; 
let timer = 0;
function killEmu() {

    emuID.classList.add("shrink");
    emuID.classList.remove("anim1");
    emuID.src="Images/enemydead.webp";
    popAudio.play(); 

Crops += 5;
cropBox.innerHTML = "Crops: " + Crops;
}

function startGame(){
    if(!moveEmuItvId){
    moveEmuItvId = setInterval(moveEmu, 2000);
    }
    if(!TimerItvId){
    TimerItvId = setInterval(()=>
{
    if(Crops>0)
    timer++;
    timerbox.innerHTML = "Timer: " + timer;
},1000
)
}
    if(!CropsItvId){
    CropsItvId = setInterval(()=>
{
    if(Crops >0){
    Crops--;
    cropBox.innerHTML = "Crops: " + Crops;
    }
    else{
         cropBox.innerHTML= "Crops: Ran Out";
    }
},500
)}
if(GameMusic.paused){
    GameMusic.play();
}
}

function pauseGame()
{
    clearInterval(moveEmuItvId);
    clearInterval(TimerItvId);
    clearInterval(CropsItvId);

    moveEmuItvId= null
        TimerItvId= null
            CropsItvId= null


        GameMusic.pause();

}





emuID.addEventListener("click", function()
{
    if(Crops>0)
    killEmu();
}
);



//quiz

const btnSubmit=document.querySelector("#btnSubmit");  
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,score=0;
function CheckAns(){    

    q1=document.querySelector("input[name='q1']:checked").value;

  
    q2=document.querySelector("input[name='q2']:checked").value;

    q3=document.querySelector("input[name='q3']:checked").value;
    score=0; 
    if(q1=="Ostrich")score++;
    if(q2=="Cassowary")score++;
    if(q3=="Emu")score++;

    if(score >= 3){
    scorebox.innerHTML = 'Can we talk about the kiwi, like how did it turn into something like this?<img src="Images/Mistake.jpg"> How did evolution led to them having an egg the size of their body, anyways full marks congrats';
    }
    else{
    scorebox.innerHTML="Score:"+score;
    }
}


btnSubmit.addEventListener("click",CheckAns);


