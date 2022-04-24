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
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  level = level + 1;

  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#level-title").text("Level " + level);
  $("#" + gamePattern[gamePattern.length - 1]).fadeOut(100).fadeIn(100);
  playSound(gamePattern[gamePattern.length - 1]);
}

$(".btn").on("click", function() {
  userClickedColor = event.target.id;
  userClickedPattern.push(userClickedColor);
  animatePress(userClickedColor);
  playSound(userClickedColor);
  checkSequence(userClickedPattern.length - 1);
});

function checkSequence(index) {
  if (userClickedPattern[index] == gamePattern[index]) {
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function() {
        playGame();
      }, 1000);
    }
  } else {
    gamestate = 0;
  }
  if (gamestate === 0) {
    playSound("wrong");
    $("#level-title").text("Game Over! Press any key to Restart");
    $("body").css("background-color", "red");
    setTimeout(function() {
      $("body").css("background-color", "#011F3F");
    }, 2000);
    level = 0;
  }
}

$(document).keypress(function() {
  if (gamestate === 0) {
    level = 0;
    gamestate = 1;
    gamePattern.length = 0;
    playGame();
  }
});

function playGame() {
  userClickedPattern.length = 0;
  nextSequence();
}
