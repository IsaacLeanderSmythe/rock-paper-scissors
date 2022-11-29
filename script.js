function getComputerChoice(){
    const computerHand = Math.floor(Math.random()*3);

    if(computerHand===0){
        return 'rock';
    }
    else if (computerHand===1){
        return 'scissors';
    }
    else{
        return 'paper';
    }
}

function playRound(e){
    const playerSelection = e.target.getAttribute("data-key");
    const computerSelection = getComputerChoice();
    document.getElementById('player-hand').textContent = playerSelection;
    document.getElementById('computer-hand').textContent = computerSelection;
    
    if(playerSelection === computerSelection){
        console.log('tie');
        return 'tie';
    }
    if( (playerSelection ==='rock' && computerSelection === 'scissors')
    || (playerSelection ==='paper' && computerSelection==='rock') 
    || (playerSelection ==='scissors' && computerSelection==='paper') ){
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    }
    else{
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    }

    if(playerScore===5){
        playerScore = 0;
        computerScore = 0;
        alert('You won!');
        document.getElementById('player-score').textContent = 0;
        document.getElementById('computer-score').textContent = 0;
    }
    else if(computerScore===5){
        playerScore = 0;
        computerScore = 0;
        alert('You lost');
        document.getElementById('player-score').textContent = 0;
        document.getElementById('computer-score').textContent = 0;
    }
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('click',playRound)
})
let playerScore = 0;
let computerScore = 0;