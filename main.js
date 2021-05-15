song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Marshmello - Happier (Official).mp3");
    song2 = loadSound("Ed Sheeran - Shape Of You [Official].mp3");
}

function setup(){
    canvas = createCanvas(650, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 650, 500);
}