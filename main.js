leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup(){
    canvas = createCanvas(550 , 550);
    canvas.position(1000 , 200);


    video = createCapture(VIDEO);
    video.size(550 , 550);


    posenet = ml5.poseNet(video , modelLoaded);

    posenet.on('pose' , gotPoses);

}



function modelLoaded(){
    console.log("pose net is initialized");
}

function gotPoses(results){

    if (results.lenght > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
        console.log("left wrist x = " + leftWristX + "right wrist x = " + rightWristX + "difference = " + difference);
        
    }

    
}

function draw(){
    background('#ffff4d');
     document.getElementById("font_size").innerHTML = "The font size is " + difference + " px";
    textSize(difference);
    fill('teal');
    text('Zahi' , 100, 100);
   
}


