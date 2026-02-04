// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
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

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
