noseX = 0;
noseY = 0;
NoseX = 0;
NoseY = 0;


function preload() {

    clown = loadImage("https://i.postimg.cc/XYKwj7C2/must.png");
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialised');
}

function gotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y+10;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
        NoseX = results[0].pose.nose.x-20;
        NoseY = results[0].pose.nose.y+30;
        console.log("nose x = "+ NoseX);
        console.log("nose y = "+ NoseY);
    }
}


function draw(){
 image(video, 0, 0, 300, 300);
  image(clown,noseX,noseY,50,25);
  image(lipstick,NoseX,NoseY,50,30);
}

function take_snapshot(){
    save('myselfie.png');
}
