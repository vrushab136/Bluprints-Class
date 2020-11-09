class box{
    constructor(x,y,height,width){
        var options={
            restitution:1.5
        }
    this.body=Bodies.rectangle(x,y,height,width,options)
     World.add(world,this.body)


    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        rotate(angle)
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill('lime')
        rect(0,0,this.width,this.height)
        pop();
    }
 
}