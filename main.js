song1 = "";
song2 = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song_2_status = "";
song_1_status = "";

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

    song_1_status = song1.isPlaying();
    song_2_status = song2.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2){

        circle(leftWristX, leftWristY, 20);

        song2.stop();
        if(song_1_status == false){
            song1.play();

            document.getElementById("songname").innerHTML = "Song Name = Marshmello - Happier (Official).mp3";
        } 
    }
}

     function play() { 
         song.play(); 
         song.setVolume(1); 
         song.rate(1);
     }

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = " + rightWristX + "rightwristY = " + rightWristY);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftWristX + "leftwristY = " + leftWristY);
    }
}