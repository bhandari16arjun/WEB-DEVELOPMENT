let userScore=0;
let compScore=0;

let us=document.querySelector("#user-score");
let cs=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    
    const arr=["rock","paper","scissors"]
    const num=Math.floor(Math.random()*3);
    
    return arr[num];
};

const drawGame=()=>{
    console.log("Draw! No one wins this round.")
}

const playGame=(userChoice)=>{
    console.log(userChoice);
    const compChoice=genCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
         drawGame();
            msg.style.backgroundColor="#081b31";
            msg.innerText="It's a draw!";
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=compChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userwin=compChoice==="rock"?false:true;
        }
        if(userwin){
            userScore++;
            us.innerText=userScore;
            msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
            console.log("You win this round!");
        }
        else{
            compScore++;
            cs.innerText=compScore;
            msg.innerText=`Computer wins! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
            console.log("Computer wins this round!");
        }


    }

}


choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
     })

});

