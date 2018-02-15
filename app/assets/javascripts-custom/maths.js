// Display two random integers 0-9 intersected with a random operator +,-
// Make sure the result is always a single digit positive integers
// Press the digit to solve the problem
  // If right, add points and display next problem
  // If wrong, end of game
// Each problem has to be solved within 3 seconds
  // Otherwise, end of game

  let number1 = Math.floor((Math.random() * 10) + 1);
  let number2 = Math.floor((Math.random() * 10) + 1);

  document.getElementById("number1").innerHTML=number1;
  document.getElementById("number2").innerHTML=number2;

  //Answer
  let answer = number1 + number2;

  //add click handler with check answer

  let btn = document.querySelector('input[type=button][value=Check]');


  btn.onclick = function(){

    let checkAnswer = document.querySelector('input[type=text]');
    let value = checkAnswer.value;

    if (value == answer){
      alert('Yay!');
    }else{
      alert('Oops, the answer was ' + answer);
    }

     //
     // document.querySelector('input[type=text]').value = "";
     // document.getElementById('number1').innerHTML = "";
     // document.getElementById('number2').innerHTML = "";
     //

   answer = number1 + number2


  };
