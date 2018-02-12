



console.log('hi You are in JS file');
let h1 = $('<h1></h1>');
let container = $('<div></div>').attr('id' , 'container');
let game = $('<div></div>').attr('id' , 'main');
let score = $('<p></p>').attr('id' , 'score');
let turns = $('<p></p>').attr('id' , 'turns');


$('body').append(container);
$('#container').append(game);
$('#container').append(score);
$('#container').append(turns);

document.getElementById("container").style.border = "thick solid black";


// h1.html('Actual Game code here');
// $('.game').append(h1);
// //Assuming game is done and score is generated (Rounded random score between 1 -100)
// //On 'pry c' ->  Game.first.users.first.stats
// let rand_score = Math.round (Math.random() * 100);
// let h2 = $('<h2></h2>');
// h2.html(rand_score);
// $('body').append(h2);
// score is available now ->
// User has option of Save Game | Return to Game
// create to new 'Stat' ->
// Grab User id, current game-id
//When User clicks 'Save Game'

$(document).ready(function(){

loadGame();

function loadGame() {
  var button =  $('<button></button>');
  button.html ('Start Game');
  var main = $('#main')

  main.append(button);
  var rules = $('<p></p>')
  rules.html('Letters will fall... Press the correct key to knock it away before it hits the ground');
  main.append(rules);
  button.click(function() {
    $('#main').html('');
    // playGame();
    askQuestion();

});

}


let scores = 0;
let selectedLetter;
let count = 3;
let span = $('<span></span>');

const askQuestion = function () {
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let index = Math.floor(Math.random() * letters.length);
  selectedLetter = letters[index];

  span.html(`Choose Letter : ${selectedLetter}`);
  $('#main').append(span);
  console.log(`Chose letter: ${selectedLetter}`);
};

const tryAnswer = function ( event ) {
  console.log(event.key);
  if(selectedLetter === event.key){
    span.html('')
    $('#main').append(span);
    scores += 1;

    $('#score').html(`Scores:${scores}`)
    $('#turns').html(`No of tries:${count}`)

    console.log('correct!');


    askQuestion();



  }else{
    count -= 1;
    $('#turns').html(`No of tries:${count}`)
    if(count === 0){
    console.log('No match');
    span.html('Game Over')
    $('#main').append(span);
  }
  }
};



$(document).keypress(tryAnswer);

});







$.ajax({
  url: '/stats',
  method: 'post',
  data: {
    score: rand_score,
    game_id: gameID,
    accuracy: 20,
    average_time: 1.5
  }
})
.done(function (data) {
  console.log(data);
})
.fail(function () {
  console.log('no good!');
});
