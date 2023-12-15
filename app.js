let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock,paper ,scissor

    const options = ["stone" , "paper" , "scissor"];  
    //math.randomis the function which generate valuye from computer fron 0 to 1
    //here we use 3 so that value can be from range 0 to 3
    //also er use math.floor so that as number is generated form math.random is in .0372494278 form so to get it in 0,1,2,... form we use math .floor
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Match is Draw! Play again";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!")
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "Red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    //to generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin =true;
        if(userChoice == "stone"){
            //if computer is paper,scissor
            userWin = compChoice ==="paper" ? false : true; 
        }
        else if(userChoice == "scissor"){
            //stone paper
            userWin = compChoice ==="stone" ? false :true;
        }
        else{
            userWin = compChoice ==="scissor" ? false:true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});





