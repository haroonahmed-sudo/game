var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7f9ef408-4a2e-4d0c-a808-7c13d3550c4b","e1bfc717-d0f6-46f5-876c-152b0f63266b","ecd0421e-e149-4024-b6a5-2714e7f29656"],"propsByKey":{"7f9ef408-4a2e-4d0c-a808-7c13d3550c4b":{"name":"ball","sourceUrl":"assets/v3/animations/y61vjC8rgwmX2C4YuHzghpJ13m5MxIpx3TmUN9kwBZ8/7f9ef408-4a2e-4d0c-a808-7c13d3550c4b.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"GE33vpLgMQKbG4cvABTqdO5ySFk_3_an","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/y61vjC8rgwmX2C4YuHzghpJ13m5MxIpx3TmUN9kwBZ8/7f9ef408-4a2e-4d0c-a808-7c13d3550c4b.png"},"e1bfc717-d0f6-46f5-876c-152b0f63266b":{"name":"br","sourceUrl":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png","frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":2,"version":"dZ98jetKnt5ZogX102g5XO3252U0D8oc","loadedFromSource":true,"saved":true,"sourceSize":{"x":516,"y":86},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png"},"ecd0421e-e149-4024-b6a5-2714e7f29656":{"name":"tr","sourceUrl":"assets/api/v1/animation-library/gamelab/1K5ElI7ZSeIGAb5ojzT2yC8dDI.RKip1/category_gameplay/target_red1.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"1K5ElI7ZSeIGAb5ojzT2yC8dDI.RKip1","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1K5ElI7ZSeIGAb5ojzT2yC8dDI.RKip1/category_gameplay/target_red1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----




var har = createGroup();
var har1 = createGroup();
var har2 = createGroup();


var har4 = createSprite(200, 380,80,10);
har4.shapeColor = "purple";

var count = 0;
textSize(18);

function draw() {
  background("white");
 
 text("SCORE:"+count ,20,20);

 har4.x = World.mouseX;
 if(har.isTouching(har4)){
   har.destroyEach();
   count = count+1;
 }
 if(har2.isTouching(har4)){
   har2.destroyEach();
   count = count+1;
 }
 if(har1.isTouching(har4)){
   har1.destroyEach();
   count = count+1;
 }

 
 
  ball2();
 ball1();
 ball();
 createEdgeSprites();
   if (har1.isTouching(bottomEdge)) {
    count = count - 1;
  }
  
    if (har.isTouching(bottomEdge)) {
    count = count - 1;
  }
    if (har2.isTouching(bottomEdge)) {
    count = count - 1;
  }
  
  drawSprites();
}
function ball(){
  if(World.frameCount % 60 === 0){
  var ball1 = createSprite(200, -22);
ball1.setAnimation("ball");
ball1.scale = 0.2;

    ball1.velocityY = ball1.velocityY + 10;
   ball1.lifetime = 70;
har.add(ball1);


  }
}

function ball1(){
  if(World.frameCount % 100 === 0){
  var ball2 = createSprite(60, -22);
ball2.setAnimation("br");
ball2.scale = 0.7;

    ball2.velocityY = ball2.velocityY + 10;
   ball2.lifetime = 70;
har1.add(ball2);

  }
}

function ball2(){
  if(World.frameCount % 80 === 0){
  var ball3 = createSprite(330, -22);
ball3.setAnimation("tr");
ball3.scale = 0.5;

    ball3.velocityY = ball3.velocityY + 10;
   ball3.lifetime = 70;
har2.add(ball3);

  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
