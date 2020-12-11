var foodStock;
var dog, myDog;
var database;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  myDog = loadImage("images/dogImg1.png");
 // milkImg = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.15
  
  database=firebase.database();
  //database = firebase.database();
  
  foodStock = database.ref('food');
  foodStock.on("value",(data)=>{
    foodStock=data.val();
  });

}


function draw() {  
  background(46,139,87);
 // keyPressed();

  drawSprites();

  fill(255);
  textSize(20);
  text("Press SPACE to feed Pongo",50,50);

  text("FoodStock = "+foodStock,20,450);
  
}

function keyPressed(){
  if(keyCode === 32){
    foodStock -= 1;
    writeStock(foodStock);
    dog.addImage(myDog);
    console.log("space pressed");
  }
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



