class Base{

    constructor(x,y,width,height,angle){

        var option = {

          restitution:0.5,
          friction:1,
          density:1

        }

        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/base.png");

        World.add(world,this.body);

    }

    display(){

       var p= this.body.position;
        
       push();

       imageMode(CENTER);
       fill("red");
       translate(p.x,p.y);
       rotate(this.body.angle);
        
       image(this.image,0,0,this.width,this.height);
       
       pop();
    }
}