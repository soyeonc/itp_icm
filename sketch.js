var col = {
  r : 0,
  g : 200,
  b : 0,
  a : 0,
}

var move = {
  x: 0,
  y: 0,
}
 var value=240;
 
 var speed=5;
 //var bg;
 


 var x= 0;
 var y= 0;

//apple size
 var a=0;

function setup() {
  createCanvas(800,400);
  noStroke();
  fill(250,240,200,10);
  rect(0,350,800,50);

  
}




//background. trees and ground
function draw() {

  fill(20,col.g,120,70);
  ellipse(80,40,300,200);
  ellipse(150,60,300,300);
  ellipse(240,30,300,400);
  ellipse(780,50,150,150);
  
  fill(40,255,180,col.a);
  ellipse(500,50,300,360);
  ellipse(400,90,200,200);
  ellipse(320,20,100,100);
  ellipse(20,110,200,220);
  ellipse(790,150,160,160);
  
  fill(col.r,230,col.b,90);
  ellipse(700,100,250,240);
 
  fill(250,240,250);
  rect(0,350,800,50);
  
  col.r=random(0,20);
  col.g=random(230,255);
  col.b=random(20,40);
  col.a=col.a+2;
  
  fill(170,140,100,90);
  quad(180,150,180,160,210,130,210,122);
  quad(160,170,160,180,130,140,130,132);
  rect(160,120,20,230);
  rect(460,140,35,210);
  rect(700,105,15,245);
  quad(700,170,700,180,670,140,670,132);
  
  //apples
  fill(mouseX/3,col.b,col.b,200);
  ellipse(x,y,a,a);
  frameRate(speed);
  x=random(10,780);
  y=random(10,160);
  
  a=random(20,35);




 /*  fill(200,20,60,200);
  ellipse(x,y,30,30);
  x=random(0,800);
  y=random(0,200);


  fill(value,70,90);
  ellipse(100,move.y*0.3,30,30);
  ellipse(160,move.y/2,30,30);
  ellipse(200,move.y,30,30);
  ellipse(230,move.y,30,30);
  ellipse(300,move.y/4,30,30);
  ellipse(330,move.y/3,30,30);
  ellipse(390,move.y+2,30,30);
  move.y = move.y+2; */
  
  push();

  translate(mouseX,255);
beginShape();
fill(255);
rect(mouseX-30,-20,500,400);
scale(0.2);
  noStroke();
  fill(255,173,234);
  rect(140,90,220,200);
  
  
  // ellipse - face
  fill(153,250,230);
  ellipse(140+110,200,180,200);
  
  fill(51,51,255,30);
  ellipse(140+55,240,50,50);
  ellipse(140+160,240,50,50);

  //rectangle - eye left
  fill(200,100,200);
  rect(140+55,170,30,5);

//rectangle - eye right
  fill(200,100,200);
  rect(140+155,170,30,5);

//rectangle - glasses
  noFill();
  stroke('black');
  strokeWeight(5);
  rect(140+35,150,60,50);
  rect(140+125,150,60,50);

//rectangle - nose
  noStroke();
  fill(200,100,200);
  rect(246,180,7,50);
  ellipse(140+106,225,12,12);
  ellipse(140+128,225,12,12);


  //rectangle - mouth
  fill(200,100,200);
  ellipse(140+110,260,30,40);
  
  //arc(250,90,100,100,0,-110);
  
  
  //are&leg behind body
  strokeWeight(12);
  stroke(153,200,230);
  line(140+110,298,334,353); //arm
  line(140+100,369,270,480); //leg1

  
  
  //bicycle
  noFill();
  stroke('black');
  strokeWeight(5);
  ellipse(350,447,100,100);
  ellipse(200,447,100,100);
  quad(240,380,330,380,280,450,200,450);
  line(333,380,350,450);
  line(333,380,333,357); //handlebar
  line(240,380,270,450);
  line(240,380,240,360); //seatpost
  
  //body
  strokeWeight(12);
  stroke(153,250,230);
  fill(153,250,230);
  line(250,300,330,355); //arm
  line(240,367,300,378); //leg1
  line(300,378,280,445); //leg2
  strokeWeight(37);
  line(245,300,235,353); //body
 
 
  //backpack
  noStroke();
  fill("black");
  quad(230,297,227,350,197,350,196,310);
 
  stroke("black");
  strokeWeight(3);
  line(210,348,260,318);
  
  //helmet _ I gave up to draw upside-down arc
  // dont understant radian thing! :(
  fill("green");
  noStroke();
  arc(250,140,235,240,PI,0);
  
  endShape();
  pop();
}



function mousePressed(){
  
  background(y/2,y,mouseX/3,30);

}


