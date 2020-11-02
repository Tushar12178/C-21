var a1 , a2 ,a3 ,a4, movingRect

function setup() {
  createCanvas(1200,800);
  a1=createSprite(100,100,50,50)
  a2=createSprite(200,100,50,50)
  a3=createSprite(300,100,50,50)
  a4=createSprite(400,100,50,50)
  movingRect=createSprite(600,400,50,50)
a1.shapeColor="green"
a2.shapeColor="yellow"
a3.shapeColor="pink"
a4.shapeColor="blue"
movingRect.shapeColor="orange"

}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(isTouching(movingRect,a4)){
    movingRect.shapeColor="white"
    a4.shapeColor="white"
  }
    else {movingRect.shapeColor="orange"
    a4.shapeColor="blue"

    }
    
    
  



  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2
    )
    {
      return true;
    }
    else {
      return false;

    }
    }
  


