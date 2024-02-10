let count=0;

let btn = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst");
let newGameBtn=document.querySelector("#new-game-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
// win pattern of any player
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// adding  click event to each box and text in button
btn.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button dab gya");
    
    count++;
    console.log(count);
    if (turnO === true) {
      box.innerText = "O";
      box.style.color="white";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color="black";
      turnO = true;
    }
    box.disabled=true;
    checkWinner();
    let iswinner=checkWinner();
    if(count==9 && !iswinner){
        gameDraw();
    }
});
});

const showWinner=(winner)=>{
  msg.innerText= `congratulation,winner is  ${winner}`;
  msgContainer.classList.remove('hide');
  disabledBtn();
 }
 // checking the winner
 const checkWinner=()=>{
     for(let pattern of  winPattern){
         // console.log(pattern[0] ,pattern[1],pattern[2]);// loop through  patterns
 
         // console.log(btn[pattern[0]].innerText ,btn[pattern[1]].innerText,btn[pattern[2]].innerText);
         let pos1val=btn[pattern[0]].innerText;
         let pos2val=btn[pattern[1]].innerText;
         let pos3val=btn[pattern[2]].innerText;
         if(pos1val!="" && pos2val!="" && pos3val!="" ){
             if(pos1val==pos2val && pos2val==pos3val){
                 console.log("Winner ");
                 
                 showWinner(pos1val);
                count=0;
                return true;
             }
         }
     }
 }
// if the game is draw
const gameDraw = () => {
    msg.innerText = "Game was a Draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
 


 //to reset the game 
  const resetGame=()=>{
    turnO=true;
    enableBtn();
    msgContainer.classList.add("hide");
    count=0;
 }

 newGameBtn.addEventListener("click",resetGame);
 rstbtn.addEventListener("click",resetGame);


 // disable the  buttons
const disabledBtn=()=>{
 
    for(let box of btn){
        box.disabled=true;
    }
}
//enables the buttons
const enableBtn=()=>{
 
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
}





