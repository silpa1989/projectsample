gameState = "serve"
var PLAY = 1;
var END = 0;

var back, backImg;
var paper, paperImg;
var life = 1;
var zofor, zoforImg;
var battle, battleImg;
var moon,moonImg;
var bs, bs2, bsImg;
var sold, soldImg, solddImg;
var rock, rockImg;
var arrow, arrowImg, arrow2Img;
var sword, swordImg;
var shield, shieldImg;
var box;

var h, hImg;

var res;
var fak;
var zog;
var fakl;

var btground;

var dummy1, dumm2, dummy3;

var gem;

var moong;

var bsGroup, rockGroup, arrowGroup, swordGroup, shieldGroup;

var ammo = 4;
var lifet = 1;

var lady, ladyImg;
var zombie, zombieImg;
var logo, starImg;
var gun, gunImg;
var stone, stoneImg;
var ladydImg;

var exploImg;

var faks;

var zombieGroup, logoGroup, gunGroup, stoneGroup;

var ast, astduck, astImg;
var ufo,ufo2, ufoImg;
var exo, exoImg;
var fba, fba2, fbaImg;
var met, metImg;
var price, price2, price3, price4, price5, priceImg;

var exoGroup, ufoGroup, ballGroup, metGroup, priceGroup;
var moongGroup;

var resImg;

var par;

var lifem = 1;
var gem = 0

var price3 = 0
var price4 = 0
var price5 = 0
function preload()
{
  zoforImg = loadImage("zomfor.png");
  battleImg= loadImage("battle.png");
  moonImg = loadImage("moon.png");
  soldImg = loadAnimation("sold1.png", "sold2.png");
  bsImg = loadAnimation("bs1.png", "bs2.png");
  rockImg = loadAnimation("r.png", "r2.png", "r3.png", "r4.png", "r5.png", "r6.png", "r7.png");
  arrowImg = loadImage("arrow.png");
  swordImg = loadImage("sword.png");
  shieldImg = loadImage("shield.png");
  solddImg = loadAnimation("dead.png");
  ladyImg = loadAnimation("lady1.png", "lady2.png");
  zombieImg = loadImage("zomb.png");
  starImg = loadImage("star.png");
  gunImg = loadImage("bomb.png");
  stoneImg = loadImage("ro.png");
  ladydImg = loadAnimation("zomb.png");
  astImg = loadAnimation("st1.png", "st2.png", "st1.png", "st3.png");
  ufoImg = loadImage("ufo.png");
  exoImg = loadImage("ex.png");
  fbaImg = loadImage("ball.png");
  priceImg = loadImage("price.png");
  metImg = loadImage("Meteorite.png");
  astduck = loadImage("duck.png");
  exploImg = loadImage("bo.png");
  paperImg = loadImage("paper.png");
  resImg = loadImage("res.png");
  hImg = loadImage("q");
  backImg = loadImage("ba.png");
}



function setup()
{
createCanvas(windowWidth-70,windowHeight)

life = 1;
ammo = 4;
lifet = 1;
gem = 0;

price3 = 0
price4 = 0
price5 = 0

bsGroup = new Group()
rockGroup = new Group()
arrowGroup = new Group()
swordGroup = new Group()
shieldGroup = new Group()
moongGroup = new Group()

zombieGroup = new Group()
logoGroup = new Group()
starGroup = new Group()
gunGroup = new Group()
stoneGroup = new Group()

exoGroup = new Group()
ufoGroup = new Group()
ballGroup = new Group()
metGroup = new Group()
priceGroup = new Group()


battle = createSprite(width/2, height/2-218);
battle.addImage(battleImg);
battle.scale = 0.65;



zofor = createSprite(width/2, height/2+2);
zofor.addImage(zoforImg);
zofor.scale = 0.65;

moon = createSprite(width/2, height/2+219);
moon.addImage(moonImg);
moon.scale = 0.65

battle.velocityX = -3;
zofor.velocityX = -3;
moon.velocityX = -3;

sold = createSprite(width/2, battle.height/2-2222)
sold.addAnimation("sold_running", soldImg)
sold.addAnimation("dead", solddImg)
sold.scale = 0.2;
sold.velocityY = 3;
sold.debug = false;
sold.setCollider("rectangle", -133, -50, 340,480)

bs = createSprite(width/2-520, battle.height/2-45)
bs.addAnimation("bs_running", bsImg)
bs.scale = 0.2;
bsGroup.add(bs)
bs.velocityY = 3;


bs2 = createSprite(width/2-600, battle.height/2-45)
bs2.addAnimation("bs_running", bsImg)
bs2.scale = 0.2;
bsGroup.add(bs2)
bs2.velocityY = 3;
bs.debug = false;
bs2.debug = false;

fak = createSprite(width/2, battle.height/2-45)
fak.addAnimation("sold_running", soldImg)
fak.scale = 0.2;
fak.velocityY = 3;

btground = createSprite(width/2, battle.height/2+60, 1300, 20)
btground.visible = false;

zog = createSprite(width/2, zofor.y+123, 1300,20)
zog.visible = false;

lady = createSprite(width/2, zofor.height+20333)
lady.addAnimation("running", ladyImg)
lady.scale = 0.32
lady.debug = false;
lady.setCollider("rectangle", 0, 0, 210,400)
lady.addAnimation("turned", ladydImg);

fakl = createSprite(width/2, zofor.height+20)
fakl.addAnimation("running", ladyImg)
fakl.scale = 0.32



ast = createSprite(width/2, moon.y+4000)
ast.addAnimation("ast_running", astImg)
ast.addAnimation("ast_ducking", astduck)
ast.addAnimation("blown", exploImg)
ast.scale = 0.12
ast.velocityY  = 3
ast.debug = false
ast.setCollider("rectangle", -90, -50, 480, 700)

faks = createSprite(width/2, moon.y);
faks.addAnimation("ast_running", astImg);
faks.scale = 0.12;
faks.velocityY = 3


ufo = createSprite(width-1200, moon.y-50, 40,40)
ufo.addImage(ufoImg)
ufo.scale = 0.35
ufoGroup.add(ufo)

ufo2 = createSprite(width-150, moon.y - 50, 40, 40)
ufo2.addImage(ufoImg)
ufo2.scale = 0.35
ufoGroup.add(ufo)

paper = createSprite(width/2, height/2)
paper.addImage(paperImg)
paper.scale = 1.14

res = createSprite(width/2,height/2+250, 50, 50)
res.addImage(resImg)
res.scale = 0.2


ast.debug=false


par  = createSprite(width/2,  height/2)
par.addImage(paperImg)
par.scale = 1.3
par.visible = false

dummy1 = createSprite(width/2-550, height/2-150)
dummy1.addAnimation("sold_running", soldImg)
dummy1.visible = false
dummy1.scale = 0.2

dumm2 = createSprite(width/2-580, height/2-40)
dumm2.addAnimation("running", ladyImg)
dumm2.visible = false
dumm2.scale = 0.3


dummy3 = createSprite(width/2-580, height/2+90)
dummy3.addAnimation("ast_running", astImg)
dummy3.visible = false
dummy3.scale = 0.15

lifem  = 1

box = createSprite(1250,9999,40,40)
box.shapeColor = "lime" 

par = createSprite(width/2, height/2)
par.addImage(paperImg)
par.scale = 1.3
par.visible = false;

h = createSprite(windowWidth - 150, battle.y-50)
h.addImage(hImg)
h.scale = 0.28
}


function draw()
{
background(0)

if(gameState = "PLAY") {

par.visible = false;
paper.visible = false
res.visible = false

  if(battle.x < 429.5) {
  battle.x = width/2
} 

if(zofor.x < 429.5) {
  zofor.x = width/2
}

if(moon.x < 429.5) {
  moon.x = width/2
}

bsGroup.setColliderEach("rectangle", 0, 0, 300, 500)

boulder()
shoot()
createZombie()
createLogo()
createSombie()
createRock()
createMet()
createGm()
createGem()
//iffs

if(logoGroup.isTouching(faks)) {
  ammo = ammo+1
  logoGroup.destroyEach()
}


edges = createEdgeSprites()
bsGroup.collide(edges)
sold.collide(edges)
faks.collide(edges)

ast.collide(edges)
if(sold.collide(edges)) {
  sold.y = btground.y
}


if(bs.isTouching(bs2)) {
  bs.collide(bs2)
}

if(keyDown("1")) {
  sold.x = width/2
  sold.y = battle.height/2-50
  fak.y = 2222;
  box.y = battle.y
  sold.mirrorX(1)
}

if(keyDown("2")) {
  lady.y = zofor.height-10
  fakl.y = 22222;
  box.y = zofor.y
  lady.mirrorX(1)
  
}


if(keyDown("2") || keyDown("3")) {
  sold.y = 22222
  fak.y = battle.height/2
}

if(keyDown("1") || keyDown("3")) {
  lady.y = 22222;
  fakl.y = zofor.height + 20
}

if(keyDown("3")) 
{
  faks.y = 4000
  ast.y = moon.y+40
}

if(keyDown("a")) {
  sold.mirrorX(-1)
  sword = createSprite();
  sword.addImage(swordImg);
  sword.scale = 0.2;
  sword.x = sold.x
  sword.y = sold.y
  sword.mirrorX(-1)
  sword.debug = false;
  sword.setCollider("rectangle", 0, 0, 700,100)
  swordGroup.add(sword)
  shieldGroup.destroyEach()
}

if(lady.collide(edges)) {
  lady.visible = false;
  zombieGroup.destroyEach()
  gunGroup.destroyEach()
  stoneGroup.destroyEach()
}

if(keyDown("s")) {
  shield = createSprite();
  shield.addImage(shieldImg)
  shield.scale = 0.15
  shield.x = sold.x
  shield.y = sold.y-27
  shieldGroup.add(shield)
  swordGroup.destroyEach()
}

if(swordGroup.isTouching(bsGroup)) {
  swordGroup.destroyEach()
  bsGroup.setVelocityXEach(-15)
  sold.mirrorX(-1)
}

if(shieldGroup.isTouching(arrowGroup)) {
  arrowGroup.destroyEach();
  shieldGroup.destroyEach();
}

if(swordGroup.isTouching(swordGroup)) {
  swordGroup.destroyEach()
}

if(shieldGroup.isTouching(shieldGroup)) {
  shieldGroup.destroyEach()
}

if(rockGroup.isTouching(sold) || arrowGroup.isTouching(sold)) {
  sold.changeAnimation("dead", solddImg)
  sold.scale = 0.4
  sold.y = btground.y
  sold.setCollider("rectangle", 0, 0, 40,40)
  arrowGroup.destroyEach();
  rockGroup.destroyEach();
  bsGroup.setVelocityXEach(10)
  battle.velocityX = 0
  fak.destroy()
}

if(fakl.isTouching(battle)) {
  fakl.collide(battle)
}

if(keyDown("2")) {
  lady.y = zofor.y+50
  ammo = 4
  zombieGroup.destroyEach()
  stoneGroup.destroyEach()
}

if(keyDown("1")) {
  sold.y = battle.y+20
  arrowGroup.destroyEach()
  rockGroup.destroyEach()
}

if(keyDown("1") || keyDown("3")) {
  fakl.y = zofor.y-10
}

if(keyDown("3")) {
  box.y  = moon.y
  ballGroup.destroyEach()
  metGroup.destroyEach()
}

if(fak.isTouching(battle)) {
  bsGroup.setVelocityXEach(0)
}

if(fakl.isTouching(zofor)) {
  zombieGroup.setVelocityXEach(0)
}

if(keyDown("RIGHT_ARROW")) {
  sold.mirrorX(1)
  fak.mirrorX(1)
  swordGroup.destroyEach()
  shieldGroup.destroyEach()
}

if(keyDown("UP_ARROW")) {
  sold.velocityY = -11.5
}

sold.velocityY = sold.velocityY+0.9

if(frameCount%50 === 0) {
  bs.velocityX = bs.velocityX + 0.3
  bs2.velocityX = bs2.velocityX+ 0.3
}

if(sold.isTouching(btground) || bsGroup.isTouching(btground) || fak.isTouching(btground)) {
  sold.collide(btground)
  bsGroup.collide(btground)
  fak.collide(btground)
}

if(rockGroup.isTouching(btground)) {
  rockGroup.setVelocityYEach(0)
  rockGroup.setVelocityXEach(-9)
}

if(bsGroup.isTouching(sold)) {
  life  = life-1
}

if(life<1) {
  sold.changeAnimation("dead", solddImg)
  sold.scale = 0.4
  sold.y = btground.y
  sold.setCollider("rectangle", 0, 0, 40,40)
  arrowGroup.destroyEach();
  rockGroup.destroyEach();
  bsGroup.setVelocityXEach(0)
  bsGroup.destroyEach()
  sold.visible = false
  battle.velocityX = 0
  shieldGroup.destroyEach()
  swordGroup.destroyEach()

}

if(lady.isTouching(zog)) {
  lady.collide(zog)
}

fakl.collide(zog)

if(keyDown("UP_ARROW")) {
  lady.velocityY = -11.5
}

lady.velocityY = lady.velocityY+0.9

if(lady.isTouching(battle)) {
  lady.collide(battle)
}

if(keyDown("LEFT_ARROW")) {
  lady.mirrorX(-1)
  gunGroup.setVelocityXEach(-5)
}

if(keyDown("RIGHT_ARROW")) {
  lady.mirrorX(1)
  gunGroup.setVelocityXEach(5)
}


if(zombieGroup.isTouching(battle) || logoGroup.isTouching(battle)) {
  logoGroup.destroyEach()
  zombieGroup.destroyEach()
}

if(keyDown("a")) {
  gun = createSprite()
  gun.addImage(gunImg);
  gun.scale = 0.22
  gun.x = lady.x-10
  gun.y = lady.y
  ammo = ammo-1
  gun.lifetime = 100
  gunGroup.add(gun)
  gun.velocityX  = -5
}

if(zombieGroup.isTouching(gunGroup)) {
  zombieGroup.setVelocityYEach(-18)
}

if(ammo < 1) {
  ammo = ammo*0
}

if(ammo < 1) {
  gunGroup.destroyEach()
}

if(logoGroup.isTouching(lady)) {
  logoGroup.destroyEach()
  ammo = ammo+1
}

if(stoneGroup.isTouching(lady)) {
  zombie.velocityX = zombie.velocityX-8
  zombieGroup.x = zombieGroup.x+5
  stoneGroup.destroyEach()
}


moongGroup.collide(edges)

if(fakl.isTouching(stoneGroup)) {
  fakl.velocityY = 11.5
}

fakl.velocityY = fakl.velocityY+0.9

if(zombieGroup.isTouching(lady)) {
  lifet = lifet - 1
}

if(lifet<1) {
  zofor.velocityX = 0
  lady.changeAnimation("turned", ladydImg)
  lady.scale = 0.042;
  lady.velocityX = 8.5
  gunGroup.destroyEach();
  fakl.destroy()
  zombieGroup.destroyEach()
  stoneGroup.destroyEach()
  gunGroup.destroyEach()
  logoGroup.destroyEach()
}

if(keyDown("LEFT_ARROW")) {
  exo = createSprite();
  exo.addImage(exoImg)
  exo.scale = 0.8
  exo.x = ast.x-20
  exo.y = ast.y-20
  exo.lifetime = 7
  exoGroup.add(exo)
  exo.debug = false
  exoGroup.setColliderEach("circle", -60, 0, 110)
}

if(keyDown("RIGHT_ARROW")) {
  exo = createSprite();
  exo.addImage(exoImg)
  exo.scale = 0.8
  exo.x = ast.x+20
  exo.y = ast.y-20
  exo.mirrorX(-1)
  exo.lifetime = 7
  exoGroup.add(exo);
  exo.debug = false
  exoGroup.setColliderEach("circle", 50, 0, 120)
}

if(ballGroup.isTouching(exoGroup)) {
  exoGroup.destroyEach()
  ballGroup.destroyEach()
}

if(frameCount%210 === 0) {
  fba = createSprite()
  fba.x = 150
  fba.y = 500
  fba.addImage(fbaImg)
  fba.scale = 0.1
  fba.mirrorX(-1)
  fba.velocityX = 16
  fba.velocityY = 3.7
  ballGroup.add(fba)
}

if(frameCount%140 === 0) {
  fba2 = createSprite()
  fba2.scale = 0.1
  fba2.x = 1100
  fba2.y = 500
  fba2.addImage(fbaImg)
  fba2.velocityX = -16
  fba2.velocityY = 3.7
  ballGroup.add(fba2)
}

if(keyDown("DOWN")) {
  ast.velocityY = 5.5
}

if(ast.y > 580 && keyDown("DOWN")) {
  ast.changeAnimation("ast_ducking",astduck)
  ast.scale = 0.2
  ast.setCollider("rectangle", 15, 0, 450, 220)

} else if(frameCount%33 === 0) {
  ast.changeAnimation("ast_running", astImg)
  ast.scale = 0.12
  ast.setCollider("rectangle", -90, -50, 480, 700)
}

if(keyDown("2") || keyDown("1")) {
  faks.y = moon.y 
  ast.y = 4000
}

if(keyDown("UP")) {
  ast.velocityY = -10.5;
}
ast.velocityY = ast.velocityY+0.12

if(ast.isTouching(zofor)) {
  ast.collide(zofor)
}

if(ast.isTouching(metGroup)) {
  ast.changeAnimation("blown", exploImg)
  ast.scale = 0.3
  metGroup.setVelocityXEach(0)
  met.visible = false
  ast.y = 600
  moon.velocityX = 0
  lifem = lifem-1
}

if(ballGroup.isTouching(ast)) {
  ast.changeAnimation("blown", exploImg)
  ast.scale = 0.3
  metGroup.destroyEach()
  ast.y = 600
  ballGroup.visible = false
  moon.velocityX = 0
  lifem = lifem-1
}



if(lifem < 1) {
  ballGroup.destroyEach()
  exoGroup.destroyEach()
  ast.changeAnimation("blown", exploImg)
  ast.scale = 0.3
  metGroup.destroyEach()
  ast.y = 600
  ballGroup.visible = false
  faks.destroy()
  moon.velocityX = 0
}

if(ast.isTouching(priceGroup)) {
  price5 = price5+1
}

if(lady.isTouching(priceGroup)) {
  price4 = price4+1
}

if(sold.isTouching(priceGroup)) {
  price3 = price3+1
}

if(ast.isTouching(priceGroup) || lady.isTouching(priceGroup) || sold.isTouching(priceGroup)) {
  priceGroup.destroyEach()
  gem = gem+1
}

if(lifem < 1 && lifet < 1 && life < 1) {
  gameState = END
}

if(mousePressedOver(back)) {
  back.visible = false
  par.visible = false
} else {
  dummy1.visible = false
  dumm2.visible= false
  dummy3.visible = false
}

if(mousePressedOver(h)) {
  help()
  metGroup.destroyEach()
  arrowGroup.destroyEach()
  priceGroup.destroyEach()
  zombieGroup.destroyEach()
  stoneGroup.destroyEach()
  rockGroup.destroyEach()
  ballGroup.destroyEach()
  logoGroup.destroyEach()
}

} 

if(gameState == END) {
  priceGroup.destroyEach()
  res.visible = true;
  paper.visible = true;
  box.destroy()
  textSize(25)
  text("Lady Scores :"+price4, zofor.y)
  text("Astronaut Scores : "+price5, moon.y)
  text("Soldier Scores : "+price3, battle.y)
}

if(mousePressedOver(res)) {
  reset()
}


drawSprites();
if(gameState == "PLAY") {
  text("Life :"+life, 2500,2500)
  textSize(30)
  fill("brown")
  text("Ammo :"+ammo, 1160,zofor.height-80)
  text("life :"+lifet, 22222,22222)

  if(life < 1) {
    textSize(35)
    fill("red")
    text("Soldier Defeated", width/2-150,battle.height/2-90)
  }
  
  if(lifet < 1) {
    textSize(35)
    fill("green")
    text("Lady Infected", width/2-130, zofor.y)
  }
  
  if(lifem < 1) {
    textSize(35)
    fill("violet")
    text("Astronaut Destroyed", width/2-150, moon.y-50)
  }

  textSize(27)
fill("magenta")
text("Gem of the Realms :"+gem, width/2-105, battle.y - 70)
}



if(mousePressedOver(h)) {
  help()
}










}






function boulder() {
  if(frameCount%300 === 0) {
    rock = createSprite(battle.width/2-50, height/2-450)
    rock.addAnimation("rick_rolling", rockImg);
    rock.scale = 0.2
    rock.velocityY = 8
    rockGroup.add(rock);
    rock.lifetime = 355
    rock.debug = false;
    rock.setCollider("circle", 0, 0, 120)
  }
}

function shoot() {
  if(frameCount%200 === 0) {
    arrow = createSprite(battle.width/2-95, height/2-200);
    arrow.addImage(arrowImg);
    arrow.scale = 0.1;
    arrow.velocityX = -11.5
    arrowGroup.add(arrow)
    arrow.lifetime = 355
  }
}



function createZombie() {
  if(frameCount%120===0) {
    zombie = createSprite(200,300)
    zombie.addImage(zombieImg);
    zombie.scale = 0.042;
    zombie.x = Math.round(random(20,170))
    zombie.y = Math.round(random(340,350))
    zombieGroup.add(zombie)
    zombie.velocityX = 0.5
    zombie.debug = false
    zombie.setCollider("rectangle", 0, 0, 950, 3000)
  }
}

function createLogo() {
  if(frameCount%270===0) {
    logo = createSprite(1300,300)
    logo.addImage(starImg)
    logo.scale = 0.2;
    logo.y = Math.round(random(230,399))
    logo.velocityX = -7
    logoGroup.add(logo)
  }
}


function createSombie() {
  if(frameCount%150===0) {
    zombie = createSprite(200,300)
    zombie.addImage(zombieImg);
    zombie.scale = 0.042;
    zombie.mirrorX(-1)
    zombie.x = Math.round(random(1150,1200))
    zombie.y = Math.round(random(340,350))
    zombieGroup.add(zombie)
    zombie.velocityX = -4
  }
}


function createRock() {
  if(frameCount%170 === 0) {
    stone = createSprite(width-20, zofor.y+80);
    stone.addImage(stoneImg);
    stone.scale = 0.02
    stone.velocityX = -9
    stoneGroup.add(stone);
    stone.debug = false;    
    stone.setCollider("rectangle", 0, 0, 10, 20)
  }
}


function createMet() {
  if(frameCount%135 === 0) {
    met = createSprite(200,630)
    met.collide(edges)
    met.collide(zofor)
    met.addImage(metImg);
    met.scale = 0.15
    met.velocityX = -5
    met.debug = false;
    met.x = Math.round(random(1200,1200))
    met.y = Math.round(random(495,630))
    metGroup.add(met)
  }
}


function createGm() {
  if(frameCount%250 === 0) {
    price = createSprite(1280,300)
    price.addImage(priceImg)
    price.scale = 0.2
    price.collide(edges)
    price.velocityX = -8.3
    price.y = Math.round(random(5, 580))
    priceGroup.add(price)
  }
}


function createGem() {
  if(frameCount%350 === 0) {
    price2 = createSprite(5,300)
    price2.addImage(priceImg)
    price2.scale = 0.2
    price2.collide(edges)
    price2.velocityX = 5
    price2.y = Math.round(random(5, 580))
    priceGroup.add(price2)
  }
}


function reset() {

gameState = PLAY

  bsGroup = new Group()
  rockGroup = new Group()
  arrowGroup = new Group()
  swordGroup = new Group()
  shieldGroup = new Group()
  moongGroup = new Group()
  
  zombieGroup = new Group()
  logoGroup = new Group()
  starGroup = new Group()
  gunGroup = new Group()
  stoneGroup = new Group()
  
  exoGroup = new Group()
  ufoGroup = new Group()
  ballGroup = new Group()
  metGroup = new Group()
  priceGroup = new Group()
  
  
  battle = createSprite(width/2, height/2-218);
  battle.addImage(battleImg);
  battle.scale = 0.65;
  
  zofor = createSprite(width/2, height/2+2);
  zofor.addImage(zoforImg);
  zofor.scale = 0.65;
  
  moon = createSprite(width/2, height/2+219);
  moon.addImage(moonImg);
  moon.scale = 0.65
  
  battle.velocityX = -3;
  zofor.velocityX = -3;
  moon.velocityX = -3;
  
  sold = createSprite(width/2, battle.height/2-2222)
  sold.addAnimation("sold_running", soldImg)
  sold.addAnimation("dead", solddImg)
  sold.scale = 0.2;
  sold.velocityY = 3;
  sold.debug = false;
  sold.setCollider("rectangle", -133, -50, 340,480)
  
  bs = createSprite(width/2-520, battle.height/2-45)
  bs.addAnimation("bs_running", bsImg)
  bs.scale = 0.2;
  bsGroup.add(bs)
  bs.velocityY = 3;
  
  
  bs2 = createSprite(width/2-600, battle.height/2-45)
  bs2.addAnimation("bs_running", bsImg)
  bs2.scale = 0.2;
  bsGroup.add(bs2)
  bs2.velocityY = 3;
  bs.debug = false;
  bs2.debug = false;
  
  fak = createSprite(width/2, battle.height/2-45)
  fak.addAnimation("sold_running", soldImg)
  fak.scale = 0.2;
  fak.velocityY = 3;
  
  btground = createSprite(width/2, battle.height/2+60, 1300, 20)
  btground.visible = false;
  
  zog = createSprite(width/2, zofor.y+123, 1300,20)
  zog.visible = false;
  
  lady = createSprite(width/2, zofor.height+20333)
  lady.addAnimation("running", ladyImg)
  lady.scale = 0.32
  lady.debug = false;
  lady.setCollider("rectangle", 0, 0, 210,400)
  lady.addAnimation("turned", ladydImg);
  
  fakl = createSprite(width/2, zofor.height+20)
  fakl.addAnimation("running", ladyImg)
  fakl.scale = 0.32
  
  
  
  ast = createSprite(width/2, moon.y+4000)
  ast.addAnimation("ast_running", astImg)
  ast.addAnimation("ast_ducking", astduck)
  ast.addAnimation("blown", exploImg)
  ast.scale = 0.12
  ast.velocityY  = 3
  ast.debug = false
  ast.setCollider("rectangle", -90, -50, 480, 700)
  
  faks = createSprite(width/2, moon.y);
  faks.addAnimation("ast_running", astImg);
  faks.scale = 0.12;
  faks.velocityY = 3
  
  
  ufo = createSprite(width-1200, moon.y-50, 40,40)
  ufo.addImage(ufoImg)
  ufo.scale = 0.35
  ufoGroup.add(ufo)
  
  ufo2 = createSprite(width-150, moon.y - 50, 40, 40)
  ufo2.addImage(ufoImg)
  ufo2.scale = 0.35
  ufoGroup.add(ufo)
  
  paper = createSprite(width/2, height/2)
  paper.addImage(paperImg)
  paper.scale = 1.14
  
  ast.debug=false
  
life = 1
lifet = 1
lifem = 1




  box = createSprite(1250,9999,40,40)
  box.shapeColor = "lime" 
}



function help() {
  par.visible = true;
  dummy1.visible = true;
  dummy1.depth = par.depth;
  dummy1.depth = dummy1.depth+1
  dumm2.visible = true;
  dumm2.depth = par.depth;
  dumm2.depth = dumm2.depth+1
  dummy3.visible = true;
  dummy3.depth = par.depth;
  dummy3.depth = dummy3.depth+1

fill("blue")

  text("Press 'A' to attack enemy with knife", dummy1.x+30, dummy1.y-50)
  text("Press 'S' to shield against arrows", dummy1.x+30, dummy1.y-20)
  text("Dodge Boulders", dummy1.x+30, dummy1.y+10)

  text("Press 'A' to throw Electric Bombs at Zombies (Ammo is limited)", dumm2.x+50, dumm2.y-30)
  text("Jump over stones and don't let Zombies near you", dumm2.x+50, dumm2.y)
  text("Collect Fission orbs to gain more Ammo", dumm2.x+50, dumm2.y+30)

  text("Use Left and Right arrow keys to use shields against fireballs", dummy3.x+50, dummy3.y-30)
  text("Use Up and Down arrow keys to jump and duck to dodge Meteors", dummy3.x+50, dummy3.y)

  fill("brown")
  text("Click '1, 2, 3' to change characters (Green box indicates who is currently being controlled)", width/2-450, windowHeight-160)
  text("Collect the 'Gem of 3 realms'", width/2-120, windowHeight - 130)
}
 








