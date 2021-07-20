class Ball{
  constructor(x,y,r){

      var options={
          restitution:4,
          friction:0,
          density:4
      }
    this.r=r
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
  }

  display(){
  
 
  ellipseMode(RADIUS)
  ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
  }
}
