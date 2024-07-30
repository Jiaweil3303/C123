var Xpose;
var Ypose;
var RW;
var LW;
var difference;
function setup(){
    // For video
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(850, 150);
    // Creating Canvas
    canvas = createCanvas(500, 500);
    canvas.position(20, 150);
    // posenet
    poseNet = ml5.poseNet(video, ModelLoaded)
    poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
    console.log("posenet is here!!!!!!!!!");
}
function gotPoses(results)
{
    if(results.length > 0){
    console.log(results[0].pose);
    Xpose = results[0].pose.nose.x;
    Ypose = results[0].pose.nose.y;
    RW = results[0].pose.rightWrist;
    LW = results[0].pose.leftWrist;
    difference = Math.abs(RW.x - LW.x);
    console.log(difference);
    }
}

function draw(results){
    background('#969A97');
    if(Xpose != null){
    fill("red");
    stroke("black");
    textSize(difference / 5);
    text('hi', Xpose, Ypose);
    }
}