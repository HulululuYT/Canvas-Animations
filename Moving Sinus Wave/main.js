var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

// Middle of y-Axis
let yMiddle;
// Amplitude of the function
let amplitude;
// Time of the animation
let time;

// Config
const config = {
    speed: 1
};

// Called before the animation starts
function setup() {
    // Change canvas size to fullscreen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    yMiddle = canvas.height / 2; // 50% from the top
    amplitude = yMiddle / 5; // Amplitude of the wave
    time = 0; // Starts at 0
}

// Frame function that is called ~ 60 times a second
function frame() {
    // Clear the old frame
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(0, yMiddle);
    // For each pixel on the x axis
    for(let x = 0; x < canvas.width; x++) {
        const value = Math.sin((time + x)/60);
        const functionHeight = value * amplitude;
        ctx.lineTo(x, yMiddle + functionHeight);
    }

    ctx.stroke();
    ctx.closePath();

    time += config.speed;
    // Draw the next frame
    window.requestAnimationFrame(frame);
}

setup();
frame();