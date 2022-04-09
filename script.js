const buttons =document.querySelectorAll("button");
buttons.forEach(button=>{
  button.addEventListener("click",e=>{
    play(computerPlay(),e.target.textContent);
  })
})


let computerPlay=()=>{
    let ar=["rock","paper","scissors"]
    let x =Math.floor(Math.random()*3);
    return ar[x];
  }
let playerSelectionn=()=>{
  let playerSelection=prompt("choose rock paper scissors");
    while(true){
      playerSelection=playerSelection.toLowerCase();
// console.log(playerSelection);
      if(playerSelection==="rock"||playerSelection==="paper"|| playerSelection==="scissors"){
        break;
      }else{
        alert("please enter a either rock, paper or scissors");
        playerSelection=prompt("choose rock paper scissors");
      }
  }
    return playerSelection;
}

let play=(computerSelection,playerSelection)=>{
  console.log("Your selection is "+playerSelection);
  console.log("Computer selection is "+computerSelection);
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

let game=()=>{
  let playerScore=0;
  let computerScore=0;
  // for(let i=0;i<5;i++){
    let result=play(computerPlay(),playerSelectionn())
    console.log(result);
    if(result.includes("win")){
      playerScore++;
    }else if(result.includes("lose")){
      computerScore++;
    }
  // }
  if(playerScore>computerScore){
    console.log("Player wins");
  }else if(playerScore<computerScore){
    console.log("Computer wins");
  }else{
    console.log("Draw");
  }
}
// game();