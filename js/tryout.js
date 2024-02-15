// UFO movement
let startgame = false;

let y = 350;
let velocity = 5;
let acceleration = 0.5;
let gravity = 0.5;

// COMET
let peep = {
  x: 200,
  y: 200,
  speed: 1,
};
let yeet = {
  x: 600,
  y: 300,
  speed: 1.8,
};
let charrizard = {
  x: 1000,
  y: 800,
  speed: 0.7,
};
// BG
let starX = [];
let starY = [];
let starAlpha = [];

let bgY = 800;
let direction = "forward";

function preload() {
  title = loadImage("js/logoz.png");
} // Load the image before canvas was draw for smooth game

function setup() {
  // Canvas
  createCanvas(windowWidth, windowHeight);
  window.addEventListener("resize", windowResized); //checking if window is resized

  // Initialize stars
  for (let i = 0; i < 300; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
  }

  // Create an audio element
  const bgMusic = new Audio("js/intospace.mp3");

  bgMusic.loop = true;
  bgMusic.volume = 0.5;
  bgMusic.preload = "auto";
  bgMusic.addEventListener("error", function (err) {
    console.error("Error loading audio:", err);
  });

  // Function to play the music and remove event listeners
  function playMusic() {
    // Play the music
    bgMusic.play().catch(function (error) {
      console.warn("Audio play failed:", error);
    });
    // Remove the event listeners to avoid multiple plays on subsequent interactions
    window.removeEventListener("mousedown", playMusic);
    window.removeEventListener("keydown", playMusic);
  }

  // Add event listeners for both "mousedown" and "keydown"
  window.addEventListener("mousedown", playMusic);
  window.addEventListener("keydown", playMusic);
}

function draw() {
  drawGeneral();
  drawStars();
  drawAura();
  drawCommencecommet();
  moon();
  drawShadows();
  drawGame();
  drawTitle();
  drawCursor();
  gameMetrics();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //resize the window
}

function drawGeneral() {
  noStroke();
  clear();
  background(30, 30, 70);
}

function drawTitle() {
  var imageWidth;
  var imageHeight;
  var imageX;
  var imageY;

  if (!startgame) {
    if (windowWidth < 700) {
      imageWidth = windowWidth * 0.8;
      imageY = windowHeight / 2 - imageHeight / 2; // Center vertically
    } else {
      imageWidth = windowWidth * 0.4;
    }

    imageHeight = imageWidth * (16 / 25);
    imageX = windowWidth / 2 - imageWidth / 2;
    imageY = windowHeight / 6;

    image(title, imageX, imageY, imageWidth, imageHeight);
  }
}

function drawStars() {
  // STARTS BG
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 1000);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.01;
  }
}

function drawAura() {
  bgcolor(bgY);
  if (direction === "forward") {
    if (bgY < 850) {
      bgY = bgY + 0.5;
    } else {
      direction = "backwards";
    }
  } else if (direction === "backwards") {
    if (bgY > 750) {
      bgY = bgY - 0.4;
    } else {
      direction = "forward";
    }
  }
}

function drawShadows() {
  ufoshadow();
  if (y <= windowHeight / 2.3) {
    ufoshadow(0, 0);
  } else if (y <= windowHeight / 2) {
    ufoshadow(80, 30);
  } else if (y <= windowHeight / 1.8) {
    ufoshadow(90, 35);
  } else if (y <= windowHeight / 1.7) {
    ufoshadow(120, 40);
  } else if (y <= windowHeight / 1.6) {
    ufoshadow(150, 45);
  } else if (y <= windowHeight / 1.5) {
    ufoshadow(170, 50);
  } else if (y <= windowHeight / 1.4) {
    ufoshadow(180, 55);
  } else if (y <= windowHeight / 1.3) {
    ufoshadow(190, 60);
  } else if (y <= windowHeight / 1.2) {
    ufoshadow(200, 60);
  }
}

function drawGame() {
  if (mouseIsPressed || keyIsDown(32)) {
    startgame = true;
  } // UFO MOVEMENT
  if (startgame) {
    if (keyIsDown(32) || mouseIsPressed) {
      velocity -= acceleration;
      pulse(y);
    } else if (y >= 0) {
      velocity += gravity;
    }
    // Only update y position if there has been user interaction
    y += velocity;

    if (y >= windowHeight / 1.2) {
      y = windowHeight / 1.2;
      velocity = 0;
    } else if (y <= -150) {
      y = -150;
      velocity = 10;
    }
  }
  ufo(y);
}

function gameMetrics() {
  if (startgame) {
    if (y >= windowHeight / 1.2 && velocity < 0.1) {
      messageWin();
    } else if (y >= windowHeight / 1.2 && velocity >= 5) {
      messageLost();
    }
  }
}

function drawCursor() {
  paw(mouseX, mouseY);
}

function drawCommencecommet() {
  commetshower(peep);
  commetshower(yeet);
  commetshower(charrizard);
}

function commetshower(comet) {
  comet.x += comet.speed;
  comet.y += comet.speed;

  if (comet.y > windowHeight) {
    comet.x = random(windowWidth);
    comet.y = 0;
  }
  commet(comet.x, comet.y);
}

// OBJECTS
function paw(x, y) {
  noStroke();
  if (mouseIsPressed || keyIsDown(32)) {
    fill(97, 255, 115, 80);
    ellipse(x - 5, y - 5, 45, 45);
    ellipse(x - 5, y - 5, 60, 60);
    ellipse(x - 5, y - 5, 75, 75);
    fill(0, 255, 204);
  } else {
    fill(255, 153, 51);
  }
  ellipse(x, y, 25, 25);

  function beans() {
    ellipse(x - 24, y - 5, 12, 12);
    ellipse(x - 15, y - 20, 12, 12);
    ellipse(x + 3, y - 23, 12, 12);
  }
  beans();
}

function commet(x, y) {
  push();
  stroke(255, 255, 255, 40);
  strokeWeight(10);
  line(x, y, x - 100, y - 100);
  pop();
  fill(255, 196, 94);
  noStroke();
  ellipse(x, y, 15, 15);
}

function bgcolor(bgY) {
  fill(25, 25, 66, 150);
  ellipse(width / 2, bgY + 1600, 4000, 4500);
  fill(24, 24, 57, 100);
  ellipse(width / 2, bgY + 1510, 3500, 3700);
  fill(234, 221, 153, 20);
  ellipse(width / 2, bgY + 1500, 3200, 3300);
}

function moon() {
  noStroke();
  fill(255, 196, 94);
  if (windowWidth >= 900) {
    ellipse(width / 2, height / 0.6, width * 1.25, height * 1.8);
  } else {
    ellipse(width / 2, height / 0.6, width * 5, height * 1.8);
  }
}

function ufoshadow(w = 0, h = 0) {
  fill(240, 147, 71);
  ellipse(width / 2, windowHeight / 1.2, w, h);
}

function pulse(y) {
  fill(97, 255, 115, 110);
  noStroke();
  beginShape();
  vertex(width / 2 - 40, y + 5);
  bezierVertex(
    width / 2 - 40,
    y + 5,
    width / 2,
    y + 150,
    width / 2 + 40,
    y + 5
  );
  endShape();

  beginShape();
  vertex(width / 2 - 60, y + 5);
  bezierVertex(
    width / 2 - 60,
    y + 5,
    width / 2,
    y + 230,
    width / 2 + 60,
    y + 5
  );
  endShape();

  beginShape();
  vertex(width / 2 - 70, y + 5);
  bezierVertex(
    width / 2 - 70,
    y + 5,
    width / 2,
    y + 280,
    width / 2 + 70,
    y + 5
  );
  endShape();
}

function ufo(y) {
  noStroke();
  fill(94, 255, 215);

  if (!startgame) {
    // Levitate before the game start
    let levitationdistance = 15;
    let levitate = levitationdistance * Math.sin(frameCount * 0.05);
    y += levitate;
  }
  //ship
  ellipse(width / 2, y, 200, 75);

  //cockpit
  fill(107, 136, 153);
  beginShape();
  vertex(width / 2 - 60, y - 25);
  bezierVertex(
    width / 2 - 60,
    y - 25,
    width / 2,
    y - 45,
    width / 2 + 60,
    y - 25
  );
  bezierVertex(
    width / 2 + 60,
    y - 10,
    width / 2 - 30,
    y + 5,
    width / 2 - 60,
    y - 25
  );
  endShape();

  //cat
  push();
  fill(71, 71, 71);
  noStroke();
  rect(width / 2 - 28, y - 65, 56, 40, 6);

  //ear-right
  beginShape();
  vertex(width / 2 + 28, y - 59);
  bezierVertex(
    width / 2 + 22,
    y - 91,
    width / 2 + 12,
    y - 69,
    width / 2 + 11,
    y - 65
  );
  endShape();

  //ear-left
  beginShape();
  vertex(width / 2 - 28, y - 59);
  bezierVertex(
    width / 2 - 22,
    y - 91,
    width / 2 - 12,
    y - 69,
    width / 2 - 10,
    y - 65
  );
  endShape();

  //cheek-left
  beginShape();
  vertex(width / 2 - 28, y - 48);
  bezierVertex(
    width / 2 - 30,
    y - 47,
    width / 2 - 36,
    y - 45,
    width / 2 - 27,
    y - 28
  );
  endShape();

  //cheek-right
  beginShape();
  vertex(width / 2 + 28, y - 48);
  bezierVertex(
    width / 2 + 30,
    y - 47,
    width / 2 + 36,
    y - 45,
    width / 2 + 27,
    y - 28
  );
  endShape();

  //eye-left
  fill(255);
  noStroke();
  ellipse(width / 2 - 12, y - 50, 16, 14);
  fill(204, 153, 255);
  noStroke();
  ellipse(width / 2 - 11, y - 50, 11);
  fill(255);
  ellipse(width / 2 - 9, y - 52, 6);

  //eye-right
  noStroke();
  ellipse(width / 2 + 12, y - 50, 16, 14);
  fill(204, 153, 255);
  noStroke();
  ellipse(width / 2 + 11, y - 50, 11);
  fill(255);
  ellipse(width / 2 + 13, y - 52, 6);

  //mouth
  noFill();
  stroke(255, 255, 255);
  strokeWeight(1.2);
  beginShape();
  vertex(width / 2 - 5, y - 39);
  bezierVertex(width / 2 - 5, y - 39, width / 2 - 3, y - 36, width / 2, y - 39);
  endShape();
  beginShape();
  vertex(width / 2, y - 39);
  bezierVertex(width / 2, y - 39, width / 2 + 3, y - 36, width / 2 + 5, y - 39);
  endShape();

  //scarf
  fill(247, 147, 30);
  noStroke();
  rect(width / 2 - 28, y - 25, 58, 17, 10);
  pop();

  //Paws
  fill(50, 50, 50);
  rect(width / 2 + 5, y - 18, 13, 10, 6);
  rect(width / 2 - 10, y - 18, 13, 10, 6);

  //glass
  fill(169, 196, 195, 100);
  noStroke();
  beginShape();
  vertex(width / 2 - 60, y - 25);
  bezierVertex(
    width / 2 - 50,
    y - 125,
    width / 2 + 60,
    y - 105,
    width / 2 + 60,
    y - 25
  );
  bezierVertex(
    width / 2 + 30,
    y + 10,
    width / 2 - 50,
    y - 10,
    width / 2 - 60,
    y - 25
  );
  endShape();
  //reflection
  fill(255, 254, 217, 80);
  beginShape();
  vertex(width / 2 - 10, y - 8);
  bezierVertex(
    width / 2 - 60,
    y - 125,
    width / 2 + 60,
    y - 98,
    width / 2 + 55,
    y - 17
  );
  bezierVertex(
    width / 2 + 55,
    y - 17,
    width / 2 + 40,
    y - 9,
    width / 2 - 0,
    y - 7
  );
  endShape();
}

function draw() {
  drawGeneral();
  drawStars();
  drawAura();
  drawCommencecommet();
  moon();
  drawShadows();
  drawGame();
  drawTitle();
  drawCursor();
  gameMetrics(); // Call the gameMetrics function in your draw loop
}

function drawGame() {
  if (mouseIsPressed || keyIsDown(32)) {
    startgame = true;
  }

  // UFO MOVEMENT
  if (startgame) {
    if (keyIsDown(32) || mouseIsPressed) {
      velocity -= acceleration;
      pulse(y);
    } else if (y >= 0) {
      velocity += gravity;
    }
    // Only update y position if there has been user interaction
    y += velocity;

    if (y >= windowHeight / 1.2) {
      y = windowHeight / 1.2;
      velocity = 0;
    } else if (y <= -150) {
      y = -150;
      velocity = 15; // Reset velocity if UFO goes above the window
    }
  }
  ufo(y);
}

function gameMetrics() {
  if (startgame) {
    if (y === windowHeight / 1.2 && velocity <= 0.1) {
      messageWin();
    } else if (y === windowHeight / 1.2 && velocity >= 5) {
      messageLost();
    }
  }
}

function messageWin() {
  fill(255, 255, 255);
  textSize(30);
  textFont("Comic Sans MS, Chalkboard, sans-serif");
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Congrats, you landed safely!", windowWidth / 2, windowHeight / 2);
}

function messageLost() {
  fill(255, 255, 255);
  textSize(30);
  textFont("Comic Sans MS, Chalkboard, sans-serif");
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Game Over!", windowWidth / 2, windowHeight / 2);
}
