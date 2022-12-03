//challenge1: Your age in days

function ageDays() {
    var birthYear = prompt('What is your birth year??');
    var age = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + age + ' days old!');
    h1.setAttribute('id', 'ageDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1); 
}
 
function reset() {
    document.getElementById('ageDays').remove();
}   

//challenge2: Cat Generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image)
}

//challenge3: rock, paper, scissor

function rpsGame(yourChoice) {
    console.log(yourChoice,);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice: ', botChoice);
    results = decideWinner(humanChoice, botChoice);
    
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0} 
    };

   if (((yourChoice = 'rock') && (computerChoice = 'scissor')) || ((yourChoice = 'paper') && (computerChoice = 'rock')) || ((yourChoice = 'scissor') && (computerChoice = 'paper')))
   {
        status = 'You Win';
        console.log(status);
   }
   else if (((yourChoice = 'scissor') && (computerChoice = 'rock')) || ((yourChoice = 'rock') && (computerChoice = 'paper')) || ((yourChoice = 'paper') && (computerChoice = 'scissor')))
   {
        status = 'Computer Win';
        console.log(status);
   }
   else (((yourChoice = 'rock') && (computerChoice = 'rock')) || ((yourChoice = 'paper') && (computerChoice = 'paper')) || ((yourChoice = 'scissor') && (computerChoice = 'scissor')))
   {
        status = 'Tied';
        console.log(status);
   }
}   
