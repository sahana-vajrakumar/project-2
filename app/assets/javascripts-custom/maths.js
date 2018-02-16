// Display two random integers 0-9 intersected with a random operator +,-
// Make sure the result is always a single digit positive integers
// Press the digit to solve the problem
  // If right, add points and display next problem
  // If wrong, end of game
// Each problem has to be solved within 3 seconds
  // Otherwise, end of game
let score = 0
let actualAnswer;
let result = $('#result');


$(document).ready(function(){


  $( "#start" ).click(function() {
      // $("#problem").remove();
      $("#problem").html('');
      // $("#answer").remove();
    createProblem();
  });
  $( "#next_problem" ).click(function() {
      // $("#problem").remove();
      // $("#answer").remove();
    createProblem();
  });

  const createProblem = function(){

    let number1 = Math.floor(Math.random() * 5) +1 ;
    let number2 = Math.floor(Math.random() * 5) +1 ;

    $("#problem").html(`${number1} + ${number2}`);

    actualAnswer = number1 + number2;
    // $("#number2").append(number2);
    // const operator = ['+', '-', '*'];
    // const index = Math.floor(Math.random() * operator.length);
    // const selectedOperator = operator[index];

    // console.log(operator[index]);
    //$("#answer").append(actualAnswer);

    console.log('ANSWER IS:' , actualAnswer);
}

$('#submit').click(function(){

    let userInput = parseInt(document.getElementById("userInput").value);
    console.log('UserInput :' ,userInput);
    // debugger;
    if(userInput === actualAnswer){

      score += 1;
      $('#result').html('YOU GOT IT RIGHT!!');
      $('#container').append(result);
      $('#score').html(`YOUR SCORE IS: ${score}`);
    }
    else {
      $('#result').html('YOU GOT IT WRONG!!');
      $('#container').append(result);
      // $("#problem").append('');


      // $("#answer").remove();


    }

    // $("#problem").remove();

});



// $.ajax({
//   url: '/stats',
//   method: 'post',
//   data: {
//     score: score,
//     game_id: gameID,
//     accuracy: 20,
//     average_time: 20
//   },
//   //processData: false
// })
// .done(function (data) {
//   console.log(data, data.average_time);
//   // Once successful request is done, redirect user to the Profile page
// })
// .fail(function () {
//   console.log('no good!');


});//document.ready
