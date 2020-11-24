var happyDog, dogimg;
var dog;
var foodS,foodStock;
var count;
var database;
function preload()
{
  //load images here
  happyDog = loadImage("happydog.png");
  dogimg = loadImage("Dog.png");
}
function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
 
  dog = createSprite(250,250,30,30);
  dog.scale = 0.2;
 
  dog.addImage(dogimg);
 text("food left : " + foodStock,200,150);

}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  textSize(15);
  fill("red");
  stroke(2);
  text("food left : " + foodS,200,180);
  text("press the up arrow to feed", 200,400);
    drawSprites();
    //add styles here
  
  }
  
  
  function readStock (data) {
    foodS=data.val();
  }
  
  function writeStock(x) {
  
    if(x<=0) {
      x=0;
    }else{
      x=x-1;
      database.ref('/').update({
        food:x
    })
    }
   
    }