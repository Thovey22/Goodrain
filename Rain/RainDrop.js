class RainDrop
{

constructor(){
let x = random (windowWidth);
let y = random (-50, -windowHeight);
let z = random (0, 4);

this.pos = createVector(x,y,z);
this.accel = createVector(0,-(pow (this.pos.z, 2) / 50));
this.vel = createVector(0, 0);
this.lastPos = createVector (0,0);
//this.angle = 0;
}

Physics(){

this.vel.add(this.accel);
this.pos.add(this.vel);
//this.pos.add (createVector(sin(this.angle), 0));
//this.angle += this.vel.y / 50;

if(this.pos.y < -100){

this.pos.y = random(windowHeight + 10, 2*windowHeight);
this.pos.x = random(windowWidth);
this.vel = createVector(0,0);
this.lastPos = createVector(0,0);
}

}

Render(){
stroke(random (255),random (255),random (255));
//stroke (137,207,240,255);
strokeWeight(this.pos.z);
line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - 2*this.vel.y);


}


}
