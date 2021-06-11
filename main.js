
function preload() {

}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    tint_color = "";
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
    tint(tint_color);
}

function take_snapshot() {
    save("myFilterImage.png");
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}