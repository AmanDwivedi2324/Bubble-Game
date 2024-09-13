
var time = 60;
document.querySelector("#timer").textContent = time;
var hitrn;
var score = 0;

function makeBubble(){
var clutter = "";

for(var i=1;i<=168;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`;
}

document.querySelector("#center").innerHTML = clutter;
}


function setTime(){
    // console.log("in setTime");

   var timer = setInterval(() => {
    if(time > 0){
        time--;
        document.querySelector("#timer").textContent = time;
    }else{
        clearInterval(timer);
        var cen = document.querySelector("#center");
        cen.style.color = "black";
        cen.style.fontSize = "6vh";
        cen.style.fontWeight = "700";
        cen.innerHTML = `Game over, Score is ${score}`;
    }
   },1000)
//    console.log("out setTime");

}


function getNewHit(){
    // console.log("in getNewHit");
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
}


function updateScore(){
    console.log("in updateScore");
    score += 10;
    document.querySelector("#score").textContent = score;
}


// event bubbling

document.querySelector("#center").addEventListener("click",function(dets){
    var bubbleNumber = Number(dets.target.textContent);
    console.log("out if");
    if(bubbleNumber === hitrn){
        console.log("in if ");
        updateScore();
        makeBubble();
        getNewHit();
    }
});


getNewHit();
makeBubble();
setTime();