var box;
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,50,50);
 
}

function draw() 
{
  
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.shapeColor="BLUE";
    box.velocityX=1;
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.shapeColor="RED";
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.shapeColor="GREEN";
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.shapeColor="YELLOW";
  }


  
  drawSprites();
}

