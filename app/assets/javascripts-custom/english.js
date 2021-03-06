console.log(alphabets);
let array = alphabets[0].split('')
console.log(array);
//Actual English Game
  let h1 = $('<h1></h1>');
  let container = $('<div></div>').attr('id' , 'container');
  let game = $('<div></div>').attr('id' , 'main');
  let score = $('<p></p>').attr('id' , 'score');
  let turns = $('<p></p>').attr('id' , 'turns');


  let timerMax = 60;
  //Some more variables
  let scores = 0;
  let selectedLetter;
  let count = 3;

  let timeoutValue = timerMax;
  let span = $('<span></span>');

//JQuery Variables
  $('body').append(container);
  $('#container').append(game);
  $('#container').append(score);
  $('#container').append(turns);

document.getElementById("container").style.border = "thick solid black";

//When Document is ready!
$(document).ready(function(){
  var start = new Date();

  let timer = $('#timer');
  $('.displayGameControls').append(timer);

  $('.t10').click( function(){
    timerMax = 10;
    console.log('10 clicked');
  });
  $('.t30').click( function(){
    timerMax = 30;
  });
  $('.t60').click( function(){
    timerMax = 60;
  });


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
     timeoutValue = timerMax;
    var button = $('#startGame');
    var main = $('#main')
    var rules = $('<p></p>');
    $('.displayedLetter').hide();


    //Rules of the game displayed , appended to main
    // rules.html('Letters will fall... Press the correct key to knock it away before it hits the ground\nHit the right letter as soon as you see it on screen:');
    // main.append(rules);
    button.click(function() {
      $('#main').html('');
      // playGame();
      askQuestion();
      initializeTimer();
      $('#startGame').hide();
      $('.timer').hide();
      let rand = Math.random(50)+'vh';

       var bouncingBall = anime({
          targets: '.displayedLetter',
          translateY: '40vh',
          duration: 500,
          loop: true,
          direction: 'alternate',
          easing: 'easeInCubic',
          scaleX: {
              value: 1.05,
              duration: 1050,
              delay: 268
          },
          translateX: rand,

          // scaleX: {
          //     value: 0,
          //     duration: 1050,
          //     delay: 8
          // }
      });

  });


}//function LoadGame


const initializeTimer = function (){
  timeoutValue = timerMax;
  timer.html(timeoutValue);

  var timerRunning = setInterval(function(){
    timer.html(`    ${timeoutValue} `);
    if(timeoutValue === 0 )
    {
      clearInterval(timerRunning);
      gameOver(scores);
      return;
    }
    console.log(`${timeoutValue--}`);
  }, 1000);

  }



  const askQuestion = function () {
    // let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let index = Math.floor(Math.random() * array.length);
    selectedLetter = array[index];
    span.html(`${selectedLetter}`);
    span.html('Lets do this!!');
    $('.displayedLetter').html(`${selectedLetter}`);
    $('.displayedLetter').show();


    $('#main').append(span);
    console.log(`Chose letter: ${selectedLetter}`);

    startAnimation();
  }; //askQuestion


  const tryAnswer = function ( event ) {
    if(count <=0 ){
      gameOver(scores);
      return;
    }
    console.log(event.key);
    let temp = event.key.toUpperCase();
    console.log(temp);
    if(selectedLetter === temp){
      span.html('');
      $('#main').append(span);
      scores += 1;
      $('#scores').html(`Scores:${scores}`)
      $('#turns').html(`No of tries:${count}`)
      askQuestion();
    }else{
      count -= 1;
      $('#turns').html(`No of tries:${count}`)
      if(count === 0){
        span.html(`Game Over. FINAL SCORE: ${scores}`);
      console.log('score is ', scores);
      // gameOver(scores);

      $('#main').append(span);
    }
    }
  };

  //When user presses key
  $(document).keypress(tryAnswer);


  const sendAjaxRequest = function( curr_score ) {
    console.log('score is ', curr_score);
  //Do an AJAX request when game ends
  //Send all the game stats to stat controller
  $.ajax({
    url: '/stats',
    method: 'post',
    data: {
      score: curr_score,
      game_id: gameID,
      accuracy: 20,
      average_time: new Date() - start
    }
  })
  .done(function (data) {
    console.log(data, data.average_time);
    // Once successful request is done, redirect user to the Profile page
  })
  .fail(function () {
    console.log('no good!');
  });

}


  //Game Over function - called once game is over
  const gameOver = function ( score ) {
    count = 0; timeoutValue = 0;
    $(document).unbind('keypress', function(event ) {
      console.log('prevent default');
    });
    $('.displayedLetter').hide();
    const finalScore = score;
    $('#scores').html(`FINAL SCORE: ${scores}`);
    span.html(`Game Over. FINAL SCORE: ${scores}`);
    //Save Game only when SaveGame button clicked once Game is OVER
    $('#saveGame').click(function(){
      sendAjaxRequest(score);
    });
  }








  //Animation stuff
  const startAnimation = function() {
    var loop = anime({
      // targets: '.displayedLetter',
      // translateX: 250,
      // scale: 2,
      // rotate: '1turn'
    });


    loop.play();

  }
});
