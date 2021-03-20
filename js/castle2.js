class Castle2 {
    constructor(x, y){
        var options = {
            'restitution': 0.8,
            'density': 1.0,
            'friction': 1.0,
            'isStatic': true
        }

        this.body = Bodies.rectangle(x, y, 30, 78, options);
        this.width = 30;
        this.height = 78;
        //this.image = loadImage("images/castle.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, 30, 80);
        pop();
    }
}