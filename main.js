let currentScreen = "start"; // "start" | "option2" | "game" | "win" | "lose"| "secret"

function setup() {
  createCanvas(800, 800);

  textFont("sans-serif");
}

function draw() {
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "game") drawGame();
  else if (currentScreen === "option2") drawOption2();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "lose") drawLose();
  else if (currentScreen === "secret") drawSecret();
}

// mousePressed() runs once each time the mouse is clicked
function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "game") gameMousePressed();
  else if (currentScreen === "option2") option2MousePressed?.();
  else if (currentScreen === "win") winMousePressed?.();
  else if (currentScreen === "lose") loseMousePressed?.();
  else if (currentScreen === "secret") secretMousePressed?.();
}

// keyPressed() runs once each time a key is pressed
function keyPressed() {
  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "win") winKeyPressed?.();
  else if (currentScreen === "lose") loseKeyPressed?.();
  else if (currentScreen === "secret") secretKeyPressed?.();
}

// Shared helper function: isHover()
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}
