// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawWin() {
  // Green-tinted background to communicate success
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Yay, You Accepted Y/N confession", width / 2, 300);

  // Instruction text
  textSize(20);
  text("Click or press R to return to Start.", width / 2, 360);

  //smile face
  smileyFace(width / 2, 170);
}

//Smiley Face
function smileyFace(x, y) {
  noFill();
  stroke(0);
  strokeWeight(1);

  //face
  ellipse(x, y, 120, 120);

  //eyes
  ellipse(x - 25, y - 15, 12, 12);
  ellipse(x + 25, y - 15, 12, 12);

  arc(x, y + 10, 60, 40, 0, PI);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
