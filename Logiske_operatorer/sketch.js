function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  
  
line(windowWidth/2,0,windowWidth/2,windowHeight)
line(0,windowHeight/2,windowWidth, windowHeight/2)
  
  
if(mouseX < windowWidth/2 && mouseY < windowHeight/2) c = color("black") 
if(mouseX > windowWidth/2 && mouseY < windowHeight/2) c = color("blue")
if(mouseX > windowWidth/2 && mouseY > windowHeight/2) c = color("black")
if(mouseX < windowWidth/2 && mouseY > windowHeight/2) c = color("blue")
  
fill(c)
circle(mouseX,mouseY,75)
}

// Lavet med hjælp fra Mikkelcoder2 AKA. Andreas Holm Andersen gx22 2020 HTX Thisted Lerpyttervej 54 7700 Thisted