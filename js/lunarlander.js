function setup() {
  createCanvas(1000, 700);
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
  ellipse(500, bgY - 180, 1800, 1000);
  fill(24, 24, 57, 100);
  ellipse(500, bgY - 100, 1500, 800);
  fill(234, 221, 153, 20);
  ellipse(500, bgY + 50, 1600, 800);
  fill(255, 196, 94);
  ellipse(500, 900, 1600, 800);
}
function ufoshadow(w, h) {
  fill(240, 147, 71);
  ellipse(500, 570, w, h);
}
function pulse() {
  fill(97, 255, 115, 110);
  noStroke();
  beginShape();
  vertex(460, y + 20);
  bezierVertex(460, y + 20, 500, y + 120, 540, y + 20);
  endShape();

  beginShape();
  vertex(440, y + 20);
  bezierVertex(440, y + 20, 500, y + 200, 560, y + 20);
  endShape();

  beginShape();
  vertex(430, y + 20);
  bezierVertex(430, y + 20, 500, y + 250, 570, y + 20);
  endShape();
}
function ufo(y) {
  noStroke();
  fill(94, 255, 215);
  ellipse(500, y, 200, 75);
  //cockpit
  fill(107, 136, 153);
  beginShape();
  vertex(390 + 50, y - 25);
  bezierVertex(400 + 50, y - 35, 500 + 50, y - 35, 510 + 50, y - 25);
  bezierVertex(510 + 50, y - 15, 435 + 50, y + 10, 390 + 50, y - 25);
  endShape();
  //cat
  push();
  fill(71, 71, 71);
  noStroke();
  rect(472, y - 65, 56, 40, 6); // Scaled values

  //ear-right
  beginShape();
  vertex(528, y - 59); // Scaled values
  bezierVertex(522, y - 91, 512, y - 69, 511, y - 65); // Scaled values
  endShape();

  //ear-left
  beginShape();
  vertex(472, y - 59); // Scaled values
  bezierVertex(478, y - 91, 488, y - 69, 490, y - 65); // Scaled values
  endShape();

  //cheek-left
  beginShape();
  vertex(472, y - 48); // Scaled values
  bezierVertex(470, y - 47, 464, y - 45, 473, y - 28); // Scaled values
  endShape();

  //cheek-right
  beginShape();
  vertex(528, y - 48); // Scaled values
  bezierVertex(530, y - 47, 536, y - 45, 527, y - 28); // Scaled values
  endShape();

  //eye-left
  fill(255);
  noStroke();
  ellipse(488, y - 50, 16, 14); // Scaled values
  fill(36, 189, 112);
  noStroke();
  ellipse(489, y - 50, 11); // Scaled values
  fill(255);
  ellipse(491, y - 52, 6); // Scaled values

  //eye-right
  noStroke();
  ellipse(512, y - 50, 16, 14); // Scaled values
  fill(36, 189, 112);
  noStroke();
  ellipse(511, y - 50, 11); // Scaled values
  fill(255);
  ellipse(513, y - 52, 6); // Scaled values

  //mouth
  noFill();
  stroke(255, 255, 255);
  strokeWeight(1.2); // Scaled value
  beginShape();
  vertex(495, y - 39); // Scaled values
  bezierVertex(495, y - 39, 497, y - 36, 500, y - 39); // Scaled values
  endShape();
  beginShape();
  vertex(500, y - 39); // Scaled values
  bezierVertex(500, y - 39, 503, y - 36, 505, y - 39); // Scaled values
  endShape();

  //body
  fill(71, 71, 71);
  noStroke();
  rect(475, y - 25, 50, 16, 4); // Scaled values
  pop();
  //end-cat

  //glass
  fill(169, 196, 195, 50);
  noStroke();
  beginShape();
  vertex(390 + 50, y - 25);
  bezierVertex(400 + 50, y - 125, 500 + 50, y - 105, 510 + 50, y - 25);
  bezierVertex(510 + 50, y - 5, 435 + 50, y - 10, 390 + 50, y - 25);
  endShape();
  //reflection
  fill(255, 254, 217, 90);
  beginShape();
  vertex(450 + 50, y - 8);
  bezierVertex(400 + 50, y - 125, 500 + 50, y - 105, 510 + 50, y - 25);
  bezierVertex(510 + 50, y - 24, 500 + 50, y - 7, 450 + 50, y - 8);
  endShape();
}
// UFO movement
const speed = 5;
let acceleration = 1.1;
let y = 200;

// Commet in BG
let peep = {
  x: 200,
  y: 200,
};
//BG
let starX = [];
let starY = [];
let starAlpha = [];

let bgY = 800;
let direction = "forward";

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}
//BG

function draw() {
  noStroke();
  clear();
  background(30, 30, 70);

  // STARTS
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 1000);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.01;
  }

  // BACKGROUND AURA
  bgcolor(bgY);
  if (direction === "forward") {
    if (bgY < 820) {
      bgY = bgY + 0.5;
    } else {
      direction = "backwards";
    }
  } else if (direction === "backwards") {
    if (bgY > 780) {
      bgY = bgY - 0.4;
    } else {
      direction = "forward";
    }
  }

  //COMMET
  commet(peep.x, peep.y);
  peep.x += 2.5;
  peep.y += 2.5;

  ufoshadow();
  if (y <= 200) {
    ufoshadow(0, 0);
  } else if (y <= 250) {
    ufoshadow(80, 30);
  } else if (y <= 270) {
    ufoshadow(90, 35);
  } else if (y <= 300) {
    ufoshadow(120, 40);
  } else if (y <= 350) {
    ufoshadow(150, 45);
  } else if (y <= 400) {
    ufoshadow(170, 50);
  } else if (y <= 450) {
    ufoshadow(180, 55);
  } else if (y <= 550) {
    ufoshadow(190, 60);
  } else if (y <= 580) {
    ufoshadow(190, 60);
  }

  // PULSE
  // MOVEMENT
  if (keyIsDown(32)) {
    y = y - speed;
    pulse(true);
  } else if (keyIsDown(32) == false) {
    y = y + speed;
  } // Ensure that y doesn't exceed 600
  if (y >= 560) {
    y = 560;
  }
  ufo(y);
}
