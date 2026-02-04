function drawSecret() {
  background(249, 203, 156);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text('"Sorry it\'s too late now, I like someone else"', width / 2, 250);

  // Instruction text
  textSize(20);
  text("Click or press R to try a different route", width / 2, 300);
}

// Mouse input for secret screen
function secretMousePressed() {
  currentScreen = "start";
}

// Keyboard input for secret screen
function secretKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
