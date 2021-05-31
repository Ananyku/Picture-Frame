function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(448,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(150, 75, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(150, 75, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 430, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 380, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 330, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 280, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 230, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 180, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 130, 80);




    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 380, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 330, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 280, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 230, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 180, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 130, 80);
    


fill(0, 128, 0);
stroke(0, 128, 0);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);
}

function take_snapshot(){
    save('picture_frame.png');
}

