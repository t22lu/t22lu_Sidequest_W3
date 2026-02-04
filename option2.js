// Button data
const option1Btn = {
  x: 250, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Go confess your love to them", // text shown on the button
};

const option2Btn = {
  x: 550, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "No, they deserve someone better..", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------

function drawOption2() {
  // Set background colour for the game screen
  background(0, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("What do you do now?", width / 2, 160);

  textSize(18);
  text("Select an option to reveal your ending", width / 2, 210);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawOption2Button(option1Btn);
  drawOption2Button(option2Btn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(option1Btn) || isHover(option2Btn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawOption2Button({ x, y, w, h, label }) {
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
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function option2MousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(option1Btn)) {
    currentScreen = "secret";
  } else if (isHover(option2Btn)) {
    currentScreen = "lose";
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === 49) {
    currentScreen = "secret";
    //If key pressed is 2
  } else if (keyCode === 50) {
    currentScreen = "lose";
  }
}
