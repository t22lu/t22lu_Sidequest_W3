// Button data
const gameBtn = {
  x: 250, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "I like you too Y/N", // text shown on the button
};

const optBtn = {
  x: 550, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Sorry let me think about it", // text shown on the button
};

// Main draw function for this screen
function drawGame() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Y/N is confessing to you...", width / 2, 160);

  textSize(18);
  text("What do you do?", width / 2, 210);

  textSize(14);
  text("(Press to select an option)", width / 2, 250);

  // ---- Draw the button ----
  drawGameButton(gameBtn);
  drawGameButton(optBtn);

  // ---- Cursor feedback ----
  cursor(isHover(gameBtn) || isHover(optBtn) ? HAND : ARROW);
}

// Button drawing helper
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// Mouse input for this screen
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn)) {
    currentScreen = "win";
  } else if (isHover(optBtn)) {
    currentScreen = "option2";
  }
}

// Keyboard input for this screen
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === 49) {
    currentScreen = "win";
    //If key pressed is 2
  } else if (keyCode === 50) {
    currentScreen = "option2";
  }
}
