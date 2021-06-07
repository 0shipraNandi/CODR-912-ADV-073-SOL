class Circle {
    constructor(x, y, r) {
        var options = {
            'restitution':1.2,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options);
         this.r = r
         this.x = x
         this.y = y
        World.add(world, this.body);
      }
      display(){
        fill("grey"); 
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.r,this.r);   
      }
    };