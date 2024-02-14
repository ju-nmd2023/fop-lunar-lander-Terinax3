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
  noStroke();
  fill(25, 25, 66, 150);
  ellipse(width / 2, bgY + 1600, 4000, 4500);
  fill(24, 24, 57, 100);
  ellipse(width / 2, bgY + 1510, 3500, 3700);
  fill(234, 221, 153, 20);
  ellipse(width / 2, bgY + 1500, 3200, 3300);
  fill(255, 196, 94);
  ellipse(width / 2, 2200, 3000, 3000);
}

function ufoshadow(w, h) {
  fill(240, 147, 71);
  ellipse(width / 2, windowHeight / 1.2, w, h);
}

function pulse() {
  fill(97, 255, 115, 110);
  noStroke();
  beginShape();
  vertex(width / 2 - 40, y + 20);
  bezierVertex(
    width / 2 - 40,
    y + 20,
    width / 2,
    y + 120,
    width / 2 + 40,
    y + 20
  );
  endShape();

  beginShape();
  vertex(width / 2 - 60, y + 20);
  bezierVertex(
    width / 2 - 60,
    y + 20,
    width / 2,
    y + 200,
    width / 2 + 60,
    y + 20
  );
  endShape();

  beginShape();
  vertex(width / 2 - 70, y + 20);
  bezierVertex(
    width / 2 - 70,
    y + 20,
    width / 2,
    y + 250,
    width / 2 + 70,
    y + 20
  );
  endShape();
}

function ufo(y) {
  noStroke();
  fill(94, 255, 215);
  ellipse(width / 2, y, 200, 75);
  //cockpit
  fill(107, 136, 153);
  beginShape();
  vertex(width / 2 - 60, y - 25);
  bezierVertex(
    width / 2 - 50,
    y - 35,
    width / 2,
    y - 35,
    width / 2 + 50,
    y - 25
  );
  bezierVertex(
    width / 2 + 50,
    y - 15,
    width / 2 - 25,
    y + 10,
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
  fill(36, 189, 112);
  noStroke();
  ellipse(width / 2 - 11, y - 50, 11);
  fill(255);
  ellipse(width / 2 - 9, y - 52, 6);

  //eye-right
  noStroke();
  ellipse(width / 2 + 12, y - 50, 16, 14);
  fill(36, 189, 112);
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

  //body
  fill(71, 71, 71);
  noStroke();
  ellipse(width / 2, y - 20, 60, 25, 4);
  pop();

  //glass
  fill(169, 196, 195, 100);
  noStroke();
  beginShape();
  vertex(width / 2 - 60, y - 25);
  bezierVertex(
    width / 2 - 50,
    y - 125,
    width / 2 + 50,
    y - 105,
    width / 2 + 50,
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
  fill(255, 254, 217, 90);
  beginShape();
  vertex(width / 2 - 10, y - 8);
  bezierVertex(
    width / 2 - 60,
    y - 125,
    width / 2 + 50,
    y - 105,
    width / 2 + 50,
    y - 25
  );
  bezierVertex(
    width / 2 + 50,
    y - 24,
    width / 2 + 50,
    y - 7,
    width / 2 - 10,
    y - 8
  );
  endShape();
}

// UFO movement
let startgame = false;

const speed = 0;
let velocity = 5;
let acceleration = 0.5;
let friction = 0.95;
let y = 200;

// COMMET
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
//BG
let starX = [];
let starY = [];
let starAlpha = [];

let bgY = 800;
let direction = "forward";

function setup() {
  createCanvas(windowWidth, windowHeight);
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

  // Add an event listener to play the music when it's loaded and on user interaction
  window.addEventListener("click", function () {
    // Play the music
    bgMusic.play().catch(function (error) {
      console.warn("Audio play failed:", error);
    });
    // Remove the click event listener to avoid multiple plays on subsequent clicks
    window.removeEventListener("click", arguments.callee);
  });
}

function draw() {
  noStroke();
  clear();
  background(30, 30, 70);

  // STARTS BG
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 1000);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.01;
  }

  // BACKGROUND AURA
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

  updateAndDisplayComet(peep);
  updateAndDisplayComet(yeet);
  updateAndDisplayComet(charrizard);

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

  if (mouseIsPressed || keyIsDown(32)) {
    startgame = true;
  }

  // UFO MOVEMENT
  if (startgame) {
    if (keyIsDown(32) || mouseIsPressed) {
      velocity -= acceleration;
      velocity *= friction;
      pulse(true);
    } else if (y >= 0) {
      velocity += acceleration;
    }

    // Only update y position if there has been user interaction
    y += velocity;

    if (y >= windowHeight / 1.2) {
      y = windowHeight / 1.2;
      velocity = 0;
    } else if (y <= 0) {
      y = 0;
      velocity = 0;
    }
  }

  ufo(y);
  paw(mouseX, mouseY, 0.5);

  //TITLE
  fill(255, 196, 94);
  textSize(35);
  textStyle(BOLD);
  textFont("Comic Sans MS");
  text("Pawsome Meowterspace", 100, 150);
}

function updateAndDisplayComet(comet) {
  comet.x += comet.speed;
  comet.y += comet.speed;

  if (comet.y > windowHeight) {
    comet.x = random(windowWidth);
    comet.y = 0;
  }
  commet(comet.x, comet.y);
}
