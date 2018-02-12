console.log('hi You are in JS file');



let h1 = $('<h1></h1>');
let game = $('<div></div>').addClass("game");

$('body').append(game);
h1.html('Actual Game code here');
$('.game').append(h1);


//Assuming game is done and score is generated (Rounded random score between 1 -100)
//On 'pry c' ->  Game.first.users.first.stats
let rand_score = Math.round (Math.random() * 100);
let h2 = $('<h2></h2>');
h2.html(rand_score);
$('body').append(h2);


// score is available now ->
// User has option of Save Game | Return to Game
// create to new 'Stat' ->
// Grab User id, current game-id

//When User clicks 'Save Game'

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
