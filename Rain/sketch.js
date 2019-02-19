

let dropLets = [];

function setup() {
createCanvas(windowWidth,windowHeight);

for(i = 0; i < 500; i++){
dropLets.push(new RainDrop());

}

}
let g = 0;
let a = 0;
function draw() {
  background(0);
    stroke (random (255),random (255),random (255));
  fill(random (255),random (255),random (255));

  textAlign(CENTER);
  textSize (200);
   text ("Goodman is Dead", windowWidth/ 2 + sin(g / 50) * 50 , windowHeight/2+ cos(a / 50) * 40);
   textSize (100);
  text ("and we defeated him", windowWidth/ 2 + sin(a / 50) * 40 ,windowHeight / 2 + 100+ cos(a / 50) * 40)

a+= 10;
g+= 10;

if(g > windowHeight.floor + 200)
g=-200;
if(a > windowHeight.floor + 200)
a=-200;



for (drop of dropLets){
drop.Physics();
drop.Render();
}

}
