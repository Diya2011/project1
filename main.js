noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
canvas=createCanvas(500,500)
canvas.position(500,150)
video=createCapture(VIDEO)
video.size(500,500)
posenet=ml5.poseNet(video,modelloaded)
posenet.on('pose',gotresult)
}
function modelloaded(){
    console.log("modelisloaded")
}

function gotresult(results){
    if (results.length>0) {
   console.log(results)     
   noseX=results[0].pose.nose.x;
   noseY=results[0].pose.nose.y;
   leftWristX=results[0].pose.leftWrist.x;
   rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX - rightWristX)    
}
}
function draw(){
    background("grey")
    fill("purple")
    stroke("black")
textSize(difference)
text("Diya",noseX,noseY)
}