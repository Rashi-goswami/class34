class Slingshot{
     constructor(bodyA,pointB){
       
        var options={
            
            stiffness:0.4,
            bodyA:bodyA,
            pointB:pointB
        
        
        }
        
    this.chain=Matter.Constraint.create(options)
    
     World.add(world,this.chain)
     }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
        stroke("black")
        strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
        
    }
}
    
