
$(document).ready(function(){

  let selectedWord;
  let final_transcript = '';
  let guessImage;
  let guessWord;
  let index = 0;
  let score = 0;
  let level = 2;


  var a1 = anime({
    targets: '.startGame',
    scale: 1.2,
    loop: true
  });
  a1.pause();
//test function to check if voive API is working



  //function to display image

  const generateImage = function(){

       // var questions = [{"image":"https://media.giphy.com/media/OoZbGs4S4Q9oI/giphy.gif","word":"duck"},{"image":"http://www.animatedimages.org/data/media/202/animated-dog-image-0011.gif","word":"dog"}];

    console.log(questions);

    guessImage = questions[index].image
    console.log(guessImage);
    $('#image').prepend(`<img id="theImg" src= "${guessImage}" />`)
    level = 1;

  }


  const generateWord = function(){



    console.log(questions);

    guessWord = questions[index].word
    console.log(guessWord);
    $( "#voice" ).append( `<p id="word">${guessWord}</p>` );

  }





//function for voice API

  let recognition = new webkitSpeechRecognition();

  // recognition.continuous = true;
  // recognition.interimResults = true;

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
        //this for the level 1 game
        if(level === 1){
        if(final_transcript === questions[index].word){
          console.log('It is a match');

          $('#image').prepend('<img id="Img" src= "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png" />')
          score += 1;
          $("#next").css("visibility" , "visible");
        }else{
          $('#image').prepend('<img id="tryImg" src= "http://education.wichita.edu/caduceus/examples/servings/images/text_sorry_try_again.gif" />')

          final_transcript = ""
        }
        //this is for the level 2 game
      }else{
        if(final_transcript === questions[index].word){
          console.log('It is a match');

          $('#image').prepend(`<img id="wordImg" src= "${questions[index].image}" />`)
          score += 1;
          $("#nextWord").css("visibility" , "visible");
        }else{
          $('#image').prepend('<img id="wordTryagain" src= "http://education.wichita.edu/caduceus/examples/servings/images/text_sorry_try_again.gif" />')

          final_transcript = ""
        }
      }

      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    //console.log(final_transcript);
    console.log(final_transcript);
      a1.pause();

  };

    //onclick for level 1



<<<<<<< HEAD
  $( ".startGame" ).click(function() {
    a1.restart();

    recognition.lang = 6;
    recognition.start();


=======

  $( "#level1" ).click(function() {
   generateImage();
   $("#record").css("visibility" , "visible");
   $("#level1").css("visibility" , "hidden");
   $("#level2").css("visibility" , "hidden");
>>>>>>> ddbb4d5175044b5636fafaafcecd655d86bc7fcd
  });



  $( "#next" ).click(function() {

    $( "#theImg" ).remove();
    $( "#Img" ).remove();
    $("#next").css("visibility" , "hidden");
    final_transcript = ""
    index += 1;
    generateImage();

  });

<<<<<<< HEAD
  function recordingStart(){
      console.log('recording start');
=======
  //onclick for level 2


  $( "#level2" ).click(function() {
   generateWord();
   $("#record").css("visibility" , "visible");
   $("#level1").css("visibility" , "hidden");
   $("#level2").css("visibility" , "hidden");
  });




    $( "#nextWord" ).click(function() {
      console.log(`index:${index} length${questions.length}`);
      if (index + 1 < questions.length){

      $( "#wordImg" ).remove();

      $( "#word" ).remove();

      $("#nextWord").css("visibility" , "hidden");

      final_transcript = ""


      index += 1;
      generateWord();
    }else{
      $( "#wordImg" ).remove();

      $( "#word" ).remove();

      $("#nextWord").css("visibility" , "hidden");
      $("#record").css("visibility" , "hidden");
      $( "#voice" ).append( `<p id="word">Game Over score:${score}</p>` );
    }

    });

    //voice record


    $( "#record" ).click(function() {
      final_transcript = ""
      $( "#tryImg" ).remove();
      $( "#wordTryagain" ).remove();
      recognition.lang = 6;
      recognition.start();
    });
>>>>>>> ddbb4d5175044b5636fafaafcecd655d86bc7fcd


  }


  // function stopButton() {
  //
  //   recognition.stop();
  // }
  //
  // $( "#stopGame" ).click(function() {
  //   recognition.stop();
  // });





})
