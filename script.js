const bod=document.querySelector("body");
const butotns=document.querySelector(".butotns");

let result=[0,0];
const buttons =document.querySelectorAll("button");
buttons.forEach(button=>{
  button.addEventListener("click",e=>{
    
    let selection= e.target.textContent.toLowerCase();
    let score=game(computerPlay(),selection);
    let draw=document.querySelector("#who-won");
    draw.style.display="none";
    bod.insertBefore(draw,butotns);
    if(score[0]===0&&score[1]===0){
      draw.textContent="Draw!";
      draw.style.display="block";
    } else if(score[0]===1){
      draw.textContent="OOOOH YEAAH! you won this round";
      draw.style.display="block";
    }else{
      draw.textContent="OOOOH NO! you lost this round";
      draw.style.display="block";
    }
    result[0]+=score[0];
    result[1]+=score[1];
    
    let comScore=document.querySelector("#computer-score");
    comScore.textContent=`Computer: ${result[1]} points`;
    let playScore=document.querySelector("#player-score");
    playScore.textContent=`Player ${result[0]} points`;
    let finalScore=document.querySelector("#final-score");
    if(result[0]===5){
      butotns.style.display="none";
      finalScore.textContent="Game Over Player Wins!";
      let butt=document.createElement("button");
      bod.appendChild(butt);
      butt.textContent="Play Again";
      butt.addEventListener("click",e=>{
        butotns.style.display="inline-block";
        result[0]=0;
        result[1]=0;
        butt.remove();
        finalScore.textContent="";
        draw.textContent="";
        comScore.textContent=`Computer: ${result[1]} points`;
        playScore.textContent=`Player ${result[0]} points`;
      })
      
    }else if (result[1]===5){
      butotns.style.display="none";
      finalScore.textContent="Game Over Computer Wins!";
      let butt=document.createElement("button");
      bod.appendChild(butt);
      butt.textContent="Play Again";
      butt.addEventListener("click",e=>{
        butotns.style.display="inline-block";
        result[0]=0;
        result[1]=0;
        butt.remove();
        finalScore.textContent="";
        draw.textContent="";
        comScore.textContent=`Computer: ${result[1]} points`;
        playScore.textContent=`Player ${result[0]} points`;
      })
    }
    

    
  })
})


let computerPlay=()=>{
    let ar=["rock","paper","scissors"]
    let x =Math.floor(Math.random()*3);
    return ar[x];
  }

let play=(computerSelection,playerSelection)=>{
  let points=[0,0];
    switch(playerSelection){
      case "rock":
        if (computerSelection==="paper"){
        points[1]=1;
        }else if(computerSelection==="scissors"){
          points[0]=1;
        }
        break;
      case "paper":
        if (computerSelection==="scissors"){
        points[1]=1;
        }else if(computerSelection==="rock"){
          points[0]=1;
        }
        break;
      case "scissors":
        if (computerSelection==="rock"){
        points[1]=1;
        }else if(computerSelection==="paper"){
          points[0]=1;
        }
        break;
    }
    return points;
  }

let game=(complay,player)=>{
  let scores=[];
  let result=play(complay,player);
  scores.push(result[0]);
  scores.push(result[1]);
  return scores;
}