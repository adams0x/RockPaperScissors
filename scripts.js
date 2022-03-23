
var computersChosenResult;
var winningResult;

function rockClicked(){
    calcWinner(0, computerSelection());
    gameResultUpdate(winningResult);
}


function paperClicked(){
    calcWinner(1, computerSelection());
    gameResultUpdate(winningResult);
}


function scissorsClicked(){
    calcWinner(2, computerSelection());
    gameResultUpdate(winningResult);
}

function gameResultUpdate(isWinner){
    if(isWinner==1){
        document.getElementById("idPlayResult").innerHTML="Well done, you win ! Computer chose " + computersChosenResult;
        document.getElementById("idPlayResult").style.backgroundColor = "chartreuse";
    }
    else if(isWinner==0){
        document.getElementById("idPlayResult").innerHTML="Its a draw, computer chose " + computersChosenResult;
        document.getElementById("idPlayResult").style.backgroundColor = "orange";
    }
    else{
        document.getElementById("idPlayResult").innerHTML="Sorry, you lost, computer chose " + computersChosenResult;
        document.getElementById("idPlayResult").style.backgroundColor = "crimson";
    }

}


function computerSelection(){
    return Math.floor(Math.random() * 3);
}



function calcWinner(userSelection, computerSelection){

    if(computerSelection == 0){
        computersChosenResult="rock";
    }
    else if(computerSelection == 1){
        computersChosenResult="paper";
    }
    else if(computerSelection == 2){
        computersChosenResult="scissors";
    }
    else{
        computersChosenResult="some invalid choice!";
    }


    if(userSelection == computerSelection){
        winningResult = 0;
    }
    else{
        if(userSelection==0 && computerSelection==2){
            winningResult = 1;
        }
        else if(userSelection==1 && computerSelection==0){
            winningResult = 1;
        }
        else if(userSelection==2 && computerSelection==1){
            winningResult = 1;
        }
        else
        winningResult = 2;
    }

}