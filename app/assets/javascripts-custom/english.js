
//Actual English Game
  let h1 = $('<h1></h1>');
  let container = $('<div></div>').attr('id' , 'container');
  let game = $('<div></div>').attr('id' , 'main');
  let score = $('<p></p>').attr('id' , 'score');
  let turns = $('<p></p>').attr('id' , 'turns');
  let timer = $('<span></span>').attr('id' , 'timer');

  //Some more variables
  let scores = 0;
  let selectedLetter;
  let count = 3;
  let timerMax = 6;
  let timeoutValue = timerMax;
  let span = $('<span></span>');

//JQuery Variables
  $('body').append(container);
  $('#container').append(game);
  $('#container').append(score);
  $('#container').append(turns);
  $('.displayGameContols').append(timer);

document.getElementById("container").style.border = "thick solid black";

//When Document is ready!
$(document).ready(function(){

  loadGame();
  checkRestart();


  function checkRestart(){
    $('#restartGame').click(function() {
      console.log('restart game');
      $(document).bind('keypress', function(event ) {
        console.log('enable default');
      });
      loadGame();
      askQuestion();
      initializeTimer();
    });
  }
  function loadGame() {
     scores = 0;
     count = 3;
     timerMax = 6;
     timeoutValue = timerMax;
    var button = $('#startGame');
    var main = $('#main')
    var rules = $('<p></p>')

    //Rules of the game displayed , appended to main
    rules.html('Letters will fall... Press the correct key to knock it away before it hits the ground\nHit the right letter as soon as you see it on screen:');
    main.append(rules);
    button.click(function() {
      $('#main').html('');
      // playGame();
      askQuestion();
      initializeTimer();
  });
}//function LoadGame


const initializeTimer = function (){
  console.log('timer init');
  timeoutValue = timerMax;
  timer.html(timeoutValue);
  console.log('timer done', timeoutValue);

  var timerRunning = setInterval(function(){
    timer.html(`    ${timeoutValue} `);
    if(timeoutValue === 0 )
    {
      clearInterval(timerRunning);
      gameOver();
      return;
    }
    console.log(`${timeoutValue--}`);
  }, 1000);

  }



  const askQuestion = function () {
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let index = Math.floor(Math.random() * letters.length);
    selectedLetter = letters[index];
    span.html(`${selectedLetter}`).addClass('displayedLetter');

    $('#main').append(span);
    console.log(`Chose letter: ${selectedLetter}`);

    startAnimation();
  }; //askQuestion


  const tryAnswer = function ( event ) {
    if(count <=0 ){
      gameOver();
      return;
    }
    console.log(event.key);
    if(selectedLetter === event.key){
      span.html('');
      $('#main').append(span);
      scores += 1;
      $('#score').html(`Scores:${scores}`)
      $('#turns').html(`No of tries:${count}`)
      askQuestion();
    }else{
      count -= 1;
      $('#turns').html(`No of tries:${count}`)
      if(count === 0){
      span.html('Game Over');
      console.log('score is ', scores);
      // gameOver(scores);

      $('#main').append(span);
    }
    }
  };

  //When user presses key
  $(document).keypress(tryAnswer);


  const sendAjaxRequest = function( curr_score ) {
  //Do an AJAX request when game ends
  //Send all the game stats to stat controller
  $.ajax({
    url: '/stats',
    method: 'post',
    data: {
      score: curr_score,
      game_id: gameID,
      accuracy: 20,
      average_time: 1.5
    }
  })
  .done(function (data) {
    console.log(data);
    // Once successful request is done, redirect user to the Profile page
  })
  .fail(function () {
    console.log('no good!');
  });

}


  //Game Over function - called once game is over
  const gameOver = function ( score ) {
    count = 0;
    $(document).unbind('keypress', function(event ) {
      console.log('prevent default');
    });
    const finalScore = score;
    $('#score').html(`FINAL SCORE: ${scores}`);
    span.html('Game Over');
  }








  //Animation stuff
  const startAnimation = function() {
    var loop = anime({
      targets: '.displayedLetter',
      loop: 3,
      scale: 2,
      duration: 3000
    });
    loop.play();

  }
});
