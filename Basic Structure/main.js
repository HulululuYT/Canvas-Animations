var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');

// Called before the animation starts
function setup() {
    // Change canvas size to fullscreen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

// Frame function that is called ~ 60 times a second
function frame() {
    // Clear the old frame
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    // Draw the next frame
    window.requestAnimationFrame(frame);
}

setup();
frame();