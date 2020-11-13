let x = 320;
let y = 180;
let xspeed = 7;
let yspeed = 4;

let r = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("red")
  ellipse(x, y, r*2, r*2)
  x += xspeed
  y += yspeed
  if (x > windowWidth - r || x < r) {
    xspeed = -xspeed
  }
  if (y > windowHeight - r || y < r ) {
    yspeed = -yspeed
  } 
}

// Lavet i samarbejde med Mikkel-coder2 AKA. Andreas Holm Andersen gx22 2020 13/11 - 20 HTX Thisted Lerpytter 54