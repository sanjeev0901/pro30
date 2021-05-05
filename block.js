class Block{
  constructor(x, y, width, height) {
      var options = {
        'restitution':1.1,
        'friction':0.4,
        'denstity':0.1        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("block.png");
      this.Visibility=255;
    }
    display(){
      var pos=this.body.position;
      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, pos.x,pos.y, 50, 50);
        pop();
      }
    }
}
