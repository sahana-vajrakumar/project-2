
$(document).ready(function(){

  let selectedWord;
  let final_transcript = '';
  let play_transcript = '';
  let guessImage;
  let guessWord;
  let index = 0;
  let score = 0;
  let level = 2;


  var a1 = anime({
    targets: '#record',
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
    a1.pause();
    console.log(final_transcript);
      // a1.pause();

  };

    //onclick for level 1


  $( "#level1" ).click(function() {
   generateImage();
  hide();

  });



  $( "#next" ).click(function() {

    $( "#theImg" ).remove();
    $( "#Img" ).remove();
    $("#next").css("visibility" , "hidden");
    final_transcript = ""
    index += 1;
    generateImage();

  });


  //onclick for level 2


  $( "#level2" ).click(function() {

   generateWord();
hide();
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


    // $( "#record" ).click(function() {
    //   a1.play();
    //   final_transcript = ""
    //   $( "#tryImg" ).remove();
    //   $( "#wordTryagain" ).remove();
    //   recognition.lang = 6;
    //   recognition.start();
    // });

    document.onkeypress = function(e){

      if(e.keyCode == 32 ){

          a1.play();
          final_transcript = ""
          $( "#tryImg" ).remove();
          $( "#wordTryagain" ).remove();
          recognition.lang = 6;
          recognition.start();
        }
        };


  // function stopButton() {
  //
  //   recognition.stop();
  // }
  //
  // $( "#stopGame" ).click(function() {
  //   recognition.stop();
  // });





  //this is for coosing levels



    let play = new webkitSpeechRecognition();

    // recognition.continuous = true;
    // recognition.interimResults = true;

    play.onresult = function(event) {
      var interim_transcript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          play_transcript += event.results[i][0].transcript;
          console.log(play_transcript);
          //this for the level 1 game
          if(play_transcript === "play")
          {
            generateWord();
            hideAll();
          }else if(play_transcript === "start"){

            generateImage();
            hideAll();

          }


        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }


    };

    $( "#play" ).click(function() {

// document.onkeypress = function(e){
//   if(e.keyCode == 13 ){
      play_transcript = ""
      play.lang = 6;
      play.start();

    // }
  });


   //functions to hide buttons

    let hide = function(){

      $("#record").css("visibility" , "visible");
      $("#level1").css("visibility" , "hidden");
      $("#level2").css("visibility" , "hidden");
      $("#play").css("visibility" , "hidden");
      $("#msg").css("visibility" , "hidden");

    }



    let hideAll = function(){

      $("#record").css("visibility" , "visible");
      $("#level1").css("visibility" , "hidden");
      $("#level2").css("visibility" , "hidden");
      $("#play").css("visibility" , "hidden");
      $("#msg").css("visibility" , "hidden");

    }






})
