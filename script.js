function getComputerChoice(){
    const computerHand = Math.random();

    if(computerHand<(1/3)){
        return 'Rock'
    }
    else if (computerHand>(2/3)){
        return 'Scissors'
    }
    else{
        return 'Paper'
    }
}
//return 'You win! '+ firstLetterCap(playerSelection) + ' beats ' + computerSelection;
function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()){
        return 'tie';
    }
    if( (playerSelection.toUpperCase()==='ROCK' && computerSelection.toUpperCase()==='SCISSORS') ||
    (playerSelection.toUpperCase()==='PAPER' && computerSelection.toUpperCase()==='ROCK') ||
    (playerSelection.toUpperCase()==='SCISSORS' && computerSelection.toUpperCase()==='PAPER') ){
        return 'won';
    }
    else{
        return 'lost';
    }
}

function firstLetterCap(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function game(){
    let score = 0;
    let round = 0;
    while(round<5){
        const computerSelection = getComputerChoice();
        const humanSelection = prompt('What is your choice?');
        const result = playRound(humanSelection,computerSelection);
        if(result !== 'tie'){
            if(result==='won'){
                console.log('You won! '+ firstLetterCap(humanSelection) + ' beats ' +computerSelection);
                score++;
            }
            else if(result==='lost'){
                console.log('You lost! '+ computerSelection + ' beats ' +firstLetterCap(humanSelection))
            }
            round++;
        }
        else{
            console.log('Its a tie! Play again!');
        }
    }
    if(score>2){
        console.log('You have won the game with a score of '+score);
    }
    else{
        console.log('You have lost. Your score is '+score)
    }
    
}