$(document).ready(function(){

loadGame();

function loadGame() {
  // var button =  $('<button></button>');
  // button.html ('Start Game');
  // var main = $('#main')
  //
  // main.append(button);
  // var rules = $('<p></p>')
  // rules.html('Letters will fall... Press the correct key to knock it away before it hits the ground');
  // main.append(rules);
  $( '#button' ).click(function() {
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

  span.html(selectedLetter);
  $('#main').append(span);
  console.log(`Chose letter: ${selectedLetter}`);
};

const tryAnswer = function ( event ) {
  console.log(event.key);
  if(selectedLetter === event.key){
    span.html('')
    $('#main').append(span);
    scores += 1;

    $('#score').html(scores)

    console.log('correct!');


    askQuestion();



  }else{
    count -= 1;
    if(count === 0){
    console.log('No match');
    span.html('Game Over')
    $('#main').append(span);
  }
  }
};



$(document).keypress(tryAnswer);

});
