class Block{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, w, h , options);
        this.width = w
        this.height = h
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        push();
        rectMode(CENTER);
        fill("yellow");
        stroke("black");
        strokeWeight(2);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}