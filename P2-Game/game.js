var randomNumber;
var gamePattern = [];
var userClickedPattern = [];
var userClickedColor;
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var gamestate = 0;

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  level = level + 1;

  randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#level-title").text("Level " + level);
  $("#" + gamePattern[gamePattern.length - 1]).fadeOut(100).fadeIn(100);
  playSound(gamePattern[gamePattern.length - 1]);
}

// $(".btn").on("click", function () {
//   if(gamestate === 1) {
//     userClickedColor = event.target.id;
//     userClickedPattern.push(userClickedColor);
//     animatePress(userClickedColor);
//     playSound(userClickedColor);
//
//     var i;
//     for(i=0; i<userClickedPattern.length; i++) {
//       if(userClickedPattern[i] !== gamePattern[i]) {
//         gamestate = 0;
//         break;
//       }
//     }
//     if(gamestate === 0) {
//       $("#level-title").text("Game Over! Press any key to Restart");
//       $("body").css("background-color", "red");
//       setTimeout(function() {
//         $("body").css("background-color", "#011F3F");
//       }, 2000);
//     }
//     else if(gamestate === 1)
//       playGame();
//   }
// });

function checkSequence() {
  var i;

  for(i=0; i<gamePattern.length; i++) {
    $(".btn").on("click", function () {
      userClickedColor = event.target.id;
      userClickedPattern.push(userClickedColor);
      animatePress(userClickedColor);
      playSound(userClickedColor);
    }
    if(userClickedPattern[i] == gamePattern[i]) {
      continue;
    }
    else {
      gamestate = 0;
      break;
    }
  }

}
  //
  // while(gamePattern.length >= userClickedPattern.length  &&  gamestate === 1) {
  //   $(".btn").on("click", function () {
  //     if(gamestate === 1) {
  //       userClickedColor = event.target.id;
  //       userClickedPattern.push(userClickedColor);
  //       animatePress(userClickedColor);
  //       playSound(userClickedColor);
  //
  //       var i;
  //       for(i=0; i<userClickedPattern.length; i++) {
  //         if(userClickedPattern[i] != gamePattern[i]) {
  //           gamestate = 0;
  //           break;
  //         }
  //       }
  //     }
  //   });
  // }

// }

  // if(index < level  &&  gamestate === 1) {
  //   $(".btn").on("click", function () {
  //     userClickedColor = event.target.id;
  //     userClickedPattern.push(userClickedColor);
  //     animatePress(userClickedColor);
  //     playSound(userClickedColor);
  //
  //     if(userClickedColor === gamePattern[index]) {
  //       checkSequence(index + 1);
  //     }
  //     else {
  //       gamestate = 0;
  //     }
  //   });



$(document).keypress(function () {
  if(gamestate === 0) {
    level = 0;
    gamestate = 1;
    gamePattern.length = 0;
    playGame();
  }
});

function playGame() {
  userClickedPattern.length = 0;
  nextSequence();
  checkSequence();


  if(gamestate === 0) {
    $("#level-title").text("Game Over! Press any key to Restart");
    $("body").css("background-color", "red");
    setTimeout(function() {
      $("body").css("background-color", "#011F3F");
    }, 2000);
  }
  else if(gamestate === 1)
    playGame();
}
