class Bin{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.0,
          'friction':1.0,
          'density':1.0,
          "isStatic":true,
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("bin.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      imageMode(CENTER);
      image(this.image,0,-130, this.width+30,250 /*this.height*/);
      rect(0,0,this.width,this.height);
       pop();
    }
}