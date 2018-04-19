var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

class Particle {
    constructor(x, y, vx, vy) {
       this.x = x;
       this.y = y;
       this.vx = vx;
       this.vy = vy; 
    }

    render() {
        ctx.beginPath();
        ctx.fillStyle = 'white'; // Fill color white
        ctx.arc(parseInt(this.x), parseInt(this.y), 8, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    move() {

        // Bounce off the corners, sides
        if(this.x <= 0 || this.x >= canvas.width) {
            this.vx *= -1;
        }
        if(this.y <= 0 || this.y >= canvas.height) {
            this.vy *= -1;
        }

        this.x += this.vx;
        this.y += this.vy;
    }
}


let particles = [];


function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for(let i=0; i < 50; i++) {
        particles.push(
            new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.width,
                Math.random()*10-5+0.5, // -5 5
                Math.random()*10-5+0.5
            )
        );
    }
}


function frame() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // Called every frame
    for(let p of particles) {
        p.render();
        p.move();
    }
    window.requestAnimationFrame(frame);
}

setup();
frame();