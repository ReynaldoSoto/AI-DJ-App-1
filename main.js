song1 = "";
song2 = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;

function preload(){
    song1 = loadSound("Marshmello - Happier (Official).mp3");
    song2 = loadSound("Ed Sheeran - Shape Of You [Official].mp3");
}

function setup(){
    canvas = createCanvas(650, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function draw(){
    image(video, 0, 0, 650, 500);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = " + rightWristX + "rightwristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftWristX + "leftwristY = " + leftWristY);
    }
}