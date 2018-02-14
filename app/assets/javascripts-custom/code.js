
$(document).ready(function(){

  let selectedWord;
  let final_transcript = '';
  let guessImage;


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

    //
    // let questions = [
    //   {word: 'duck': image: ''"https://media.giphy.com/media/OoZbGs4S4Q9oI/giphy.gif"},
    //   {dog:"http://www.animatedimages.org/data/media/202/animated-dog-image-0011.gif"}
    // ];

    // var questions = [
    //   {
    //     image:"https://media.giphy.com/media/OoZbGs4S4Q9oI/giphy.gif",
    //     word:"duck"
    //   },
    //   {
    //     image:"http://www.animatedimages.org/data/media/202/animated-dog-image-0011.gif",
    //     word:"dog"
    //   }
    // ];

    let images = {duck:"https://media.giphy.com/media/OoZbGs4S4Q9oI/giphy.gif" , dog:"http://www.animatedimages.org/data/media/202/animated-dog-image-0011.gif",
  cat:"http://moziru.com/images/feline-clipart-animated-gif-4.gif"}

    let names = Object.keys(images)
    guessImage = names[0];
    console.log(guessImage);
    console.log(names);
    selectedImage = images.duck
    console.log(`"${selectedImage}"`);
    $('#image').prepend(`<img id="theImg" src= "${selectedImage}" />`)
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
        if(final_transcript === guessImage){
          console.log('It is a match');
          $('#image').prepend('<img id="theImg" src= "https://eyeondesign.aiga.org/wp-content/uploads/2017/03/Tinder-its-a-match-typography-aiga.png" />')
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


  // function stopButton() {
  //
  //   recognition.stop();
  // }
  //
  // $( "#stopGame" ).click(function() {
  //   recognition.stop();
  // });





})
