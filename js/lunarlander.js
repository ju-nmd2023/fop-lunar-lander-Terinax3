function setup() {
  createCanvas(windowWidth, windowHeight);
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
  ellipse(width / 2, bgY - 180, 1800, 1000);
  fill(24, 24, 57, 100);
  ellipse(width / 2, bgY - 100, 1500, 800);
  fill(234, 221, 153, 20);
  ellipse(width / 2, bgY + 50, 1600, 800);
  fill(255, 196, 94);
  ellipse(width / 2, 900, 1600, 800);
}

function ufoshadow(w, h) {
  fill(240, 147, 71);
  ellipse(width / 2, 570, w, h);
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
  rect(width / 2 - 25, y - 25, 50, 16, 4);
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
