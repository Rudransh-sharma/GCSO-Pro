var speed , weight ;
var car1 ; 
var wall1 ,  wall2 , wall3 ;
function setup() {
  createCanvas(1600 , 400);
car1 = createSprite(50,200,50,50)
car1.shapeColor=color(255)
wall1 = createSprite(1500, 200 , 60 , height , height/2);
wall1.shapeColor=color(80,80,80)

  
  car1.velocityX = speed;
 

  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(0); 
rectMode(CENTER)
if(wall1.x-car1.x<(car1.width+wall1.width)/2){
car1.velocityX = 0;

var deformation = 0.5 * weight * speed * speed/22509;
if(deformation>180){
car1.shapeColor=color(255,0,0)

}
if(deformation<180 && deformation>100){
car1.shapeColor.color=(230,230,0)

}
if(deformation<100){
car1.shapeColor=color(0,255,0)
}
}






}