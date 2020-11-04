class stone {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            frition: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("stone.png");

        this.r = r;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        imageMode(RADIUS);

        image(this.image, pos.x, pos.y, this.r * 2.5, this.r * 2.5);
    }
}