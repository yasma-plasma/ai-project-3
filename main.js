song1 = "music.mp3";
song2 = "music2.mp3";
leftWristx, rightWristx, leftWristy, rightWristy = 0;
 function preload() 
{ song = loadSound("music.mp3"); 
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() 
{ image(video, 0, 0, 600, 500);
}

function play1() 
{ song1.play();
}

function play2() 
{ song2.play(); 
}

function modelLoaded(){
    console.log("posenet is initi");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("leftx = "+ leftWristx + "rightx = "+ rightWristx + "lefty = "+ leftWristy + "righty = "+ rightWristy);
    }
}