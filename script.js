
let timmer = 10;
var score = 0;
let rn = 0;


function newHit(){
  rn = Math.floor(Math.random()*10) 
 document.querySelector('#hitval').textContent = rn;
}

function runtimer(){
    let time = setInterval(function(){
        if(timmer > 0){
            timmer--;
            document.querySelector("#runtime").textContent = timmer;
        }
        else{
            document.querySelector('#pbottom').innerHTML = ` <div class="over">
            <h1>GAME OVER</h1>
            <br> <h1> YOUR SCORE IS  ${score}</h1>
            </div>`
            clearInterval(time);
        }
    },1000)
 }

 function increaseScore(){
 score += 10;
document.querySelector('#score').textContent = score;
 }

function makeBubble(){
    let clutter =''
    for(let i = 0; i<175; i++){
        let rand = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rand}</div>`
    }
    document.querySelector('#pbottom').innerHTML = clutter;
}


document.querySelector('#pbottom').addEventListener("click",function(dets){
var clikednum = Number(dets.target.textContent);
if(clikednum === rn ){
   
    increaseScore();
    newHit()
    makeBubble();
}
});
 
 

newHit();
runtimer();
makeBubble();


