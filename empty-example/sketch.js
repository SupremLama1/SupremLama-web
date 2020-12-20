function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black')
  rect(360,mouseY,10,100);
  rect(15,mouseY,10,100);
  square(mouseY,200,10,10);
}