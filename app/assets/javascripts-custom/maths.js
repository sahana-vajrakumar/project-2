// Display two random integers 0-9 intersected with a random operator +,-
// Make sure the result is always a single digit positive integers
// Press the digit to solve the problem
  // If right, add points and display next problem
  // If wrong, end of game
// Each problem has to be solved within 3 seconds
  // Otherwise, end of game
let score = $('<p></p>').attr('id', 'score');
let scores = 0

$(document).ready(function(){

  $( "#start" ).click(function() {
    createProblem()
  });

  const createProblem = function(){
    let number1 = Math.floor(Math.random() * 4);
    let number2 = Math.floor(Math.random() * 4);
    // const operator = ['+', '-', '*'];
    // const index = Math.floor(Math.random() * operator.length);
    // const selectedOperator = operator[index];
    //
    // console.log(operator[index]);

    let answer = number1 + number2;

    console.log(answer);
  };

});

$(document).keypress(function(e) {
  console.log(e.key);
});



$.ajax({
  url: '/stats',
  method: 'post',
  data: {
    score: scores,
    game_id: gameID,
    accuracy: 20,
    average_time: 20
  },
  //processData: false
})
.done(function (data) {
  console.log(data, data.average_time);
  // Once successful request is done, redirect user to the Profile page
})
.fail(function () {
  console.log('no good!');
});
