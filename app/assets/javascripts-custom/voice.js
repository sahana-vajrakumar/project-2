
$(document).ready(function(){

  let selectedWord;
  let final_transcript = '';
  let guessImage;
  let index = 0;


//test function to check if voive API is working

  const askQuestion = function () {
    let words = ["cat" , "apple" , "dog" , "color" , "hello" , "hi"];
    let index = Math.floor(Math.random() * words.length);
    selectedWord = words[index];

  };

  askQuestion();
  console.log(selectedWord);


  //function to display image

  const generateImage = function(){

       // var questions = [{"image":"https://media.giphy.com/media/OoZbGs4S4Q9oI/giphy.gif","word":"duck"},{"image":"http://www.animatedimages.org/data/media/202/animated-dog-image-0011.gif","word":"dog"}];




    console.log(questions);

    guessImage = questions[index].image
    console.log(guessImage);
    $('#image').prepend(`<img id="theImg" src= "${guessImage}" />`)

  }

  generateImage();



//function for voice API

  let recognition = new webkitSpeechRecognition();

  // recognition.continuous = true;
  // recognition.interimResults = true;

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
        if(final_transcript === questions[index].word){
          console.log('It is a match');
          $('#image').prepend('<img id="Img" src= "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png" />')
        }

      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    //console.log(final_transcript);
    console.log(final_transcript);

  };


  $( "#startGame" ).click(function() {
    recognition.lang = 6;
    recognition.start();
  });

  $( "#next" ).click(function() {

    $( "#theImg" ).remove();
    $( "#Img" ).remove();
    final_transcript = ""


    index += 1;
    generateImage();

  });




  // function stopButton() {
  //
  //   recognition.stop();
  // }
  //
  // $( "#stopGame" ).click(function() {
  //   recognition.stop();
  // });





})
