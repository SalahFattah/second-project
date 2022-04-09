const bod=document.querySelector("body");

let result=[0,0];
const buttons =document.querySelectorAll("button");
buttons.forEach(button=>{
  button.addEventListener("click",e=>{
    
    let selection= e.target.textContent.toLowerCase();
    // console.log(selection);
    let score=game(computerPlay(),selection);
    
    result[0]+=score[0];
    result[1]+=score[1];
    if(result[0]===5){
      console.log("Game Over Player Wins!");
    }else if (result[1]===5){
      console.log("Game Over Computer Wins!");
    }
    console.log(result);
    // play(computerPlay(),selection);
    
  })
})


let computerPlay=()=>{
    let ar=["rock","paper","scissors"]
    let x =Math.floor(Math.random()*3);
    return ar[x];
  }
// let playerSelectionn=()=>{
//   let playerSelection=prompt("choose rock paper scissors");
//     while(true){
//       playerSelection=playerSelection.toLowerCase();
// // console.log(playerSelection);
//       if(playerSelection==="rock"||playerSelection==="paper"|| playerSelection==="scissors"){
//         break;
//       }else{
//         alert("please enter a either rock, paper or scissors");
//         playerSelection=prompt("choose rock paper scissors");
//       }
//   }
//     return playerSelection;
// }

let play=(computerSelection,playerSelection)=>{
  let playerSelect=document.createElement("div");
  playerSelect.textContent="Your selection is "+playerSelection;
  bod.appendChild(playerSelect);
  let computerSelect=document.createElement("div");
  computerSelect.textContent="Computer selection is "+computerSelection;
  bod.appendChild(computerSelect);
  let message="";
    switch(playerSelection){
      case "rock":
        if (computerSelection==="paper"){
        message="You lose! "+computerSelection+" beats "+playerSelection;
        }else if(computerSelection==="scissors"){
          message="You win! "+playerSelection+" beats "+computerSelection;
        }else{
          message="Draw! you both selected "+computerSelection;
        }
        break;
      case "paper":
        if (computerSelection==="scissors"){
        message="You lose! "+computerSelection+" beats "+playerSelection;
        }else if(computerSelection==="rock"){
          message="You win! "+playerSelection+" beats "+computerSelection;
        }else{
          message="Draw! you both selected "+computerSelection;
        }
        break;
      case "scissors":
        if (computerSelection==="rock"){
        message="You lose! "+computerSelection+" beats "+playerSelection;
        }else if(computerSelection==="paper"){
          message="You win! "+playerSelection+" beats "+computerSelection;
        }else{
          message="Draw! you both selected "+computerSelection;
        }
        break;
    }
    return message;
  }
  // console.log(play(computerPlay(),playerSelection()));

let game=(complay,player)=>{
  let scores=[];
  let playerScore=0;
  let computerScore=0;
  let finalResult="";
  // for(let i=0;i<5;i++){
    let result=play(complay,player);
    // let resultNode=document.createElement("div");
    // resultNode.textContent=result;
    // bod.appendChild(resultNode);
    // console.log(result);
    if(result.includes("win")){
      playerScore++;
      
    }else if(result.includes("lose")){
      computerScore++;
      
    }
    scores.push(playerScore);
    scores.push(computerScore);
    // console.log("player score",playerScore);
    // console.log("computer score",computerScore);
  // }
  // if(playerScore>computerScore){
  //   finalResult="Player wins";
  // }else if(playerScore<computerScore){
  //   finalResult="Computer wins";
  // }else{
  //   finalResult="Draw";
  // }
  // let finalNode=document.createElement("div");
  // finalNode.textContent=finalResult;
  // bod.appendChild(finalNode);
  return scores;
}
// game();