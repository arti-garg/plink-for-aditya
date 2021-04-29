
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


var g1;
var particles1 = [];
var plinko1 = [];
var division1 = [];
var divisionheight=300;
var score = 0, par,turn = 0;
function setup() {
  createCanvas(485,650);
  engine = Engine.create();
  world = engine.world;
  g1 = new ground(windowWidth/2,652,windowWidth,30);
  Engine.run(engine);
}

function draw() {
  
  
  background("black");  

  Engine.update(engine);

  console.log(mouseX+" "+mouseY)//280,385
 //console.log(frameCount)
 push()
 textSize(26);
 if(mouseX !== 0 && mouseY !== 0){
 fill(color(mouseY,mouseX,mouseX))
 }else fill("white")
 textFont("algerian")
 text("100",255,385)
 text("100",180,385)
 text("350",100,385)
 text("500",20,385)
 text("350",340,385)
 text("500",420,385)
 pop()

 for (var k = 0 ; k <= width; k = k +80){

division1.push(new division(k,height-divisionheight/2,10,divisionheight))

 }
 
for (var j = 40; j <= width;j=j+50){

plinko1.push(new plinko(j,75,15));

}

for (var j = 15; j <= width-10;j=j+50){

  plinko1.push(new plinko(j,175,15));
  
  }

  
  

  for (var k = 0; k <division1.length;k++){

    division1[k].display();
    
      }
      
      for (var a = 0; a <plinko1.length;a++){

        plinko1[a].display();
        
          }
if (par != null){

par.display();

}


        
          push()
 textSize(26);
 if(mouseX !== 0 && mouseY !== 0){
 fill(color(mouseY,mouseX,mouseX))
 }else fill("white")
 textFont("algerian")
 text("Score:",190,24)
 text(score,283,24)
 pop();

 rectMode(CENTER);

 
  g1.display();
}


function mousePressed(){
  console.log(turn)
par = new particles(mouseX,10,10,10)
turn=turn+1;

}

