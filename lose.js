function drawLose() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text('"Sorry it\'s too late now, I like someone else"', width / 2, 150);

  // Sub message
  textSize(30);
  fill(255, 0, 100);
  text("Bad Ending : All alone for Valentine", width / 2, 200);

  // Instruction text
  textSize(20);
  text("Click or press R to try a different route", width / 2, 250);
}

// Mouse input for lose screen
function loseMousePressed() {
  currentScreen = "start";
}

// Keyboard input for lose screen
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
