function drawStart() {
  // Background colour for the start screen
  background(180, 225, 220); // soft teal background

  // ---- Title text ----
  fill(30, 50, 60);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("A Really Simple Love Story", width / 2, 180);

  // ---- Buttons (data only) ----
  const startBtn = {
    x: width / 2,
    y: 620,
    w: 240,
    h: 80,
    label: "START",
  };

  // Draw start buttons
  drawButton(startBtn);

  // ---- Cursor feedback ----
  const over = isHover(startBtn);
  cursor(over ? HAND : ARROW);

  //Draws heart
  drawHeart(width / 2, height / 2, 250);
}

// Mouse input for the start screen
function startMousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const startBtn = { x: width / 2, y: 620, w: 240, h: 80 };
  // If START is clicked, go to the game screen
  if (isHover(startBtn)) {
    currentScreen = "game";
  }
}

// Keyboard input for the start screen
function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "game";
  }
}

// Helper: drawButton()
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  // ---- Visual feedback (hover vs not hover) ----
  if (hover) {
    fill(255, 200, 150, 220);

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210);

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;

  // Draw the label text on top of the button
  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

//draws a heart on the screen
function drawHeart(x, y, size) {
  noStroke();
  fill(220, 80, 100); //soft pink

  //top left
  circle(x - size * 0.22, y - size * 0.2, size * 0.6);
  //top right
  circle(x + size * 0.22, y - size * 0.2, size * 0.6);

  //triangle button
  triangle(
    x - size * 0.5,
    y - size * 0.1,
    x + size * 0.5,
    y - size * 0.1,
    x,
    y + size * 0.6,
  );
}
