canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
refreshimages = ["mars.jpg","marssurfce.jpg","view_of_mars.jpg","water-in-mars.jpg"];

randomno = Math.floor(Math.random()*4);

rover_width = 50;
rover_height = 40;

backgroung_image = refreshimages[randomno];
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    background_img1 = new Image ();
    background_img1.onload = uploadimage;
    background_img1.src = backgroung_image;
    rover_img1 = new Image ();
    rover_img1.onload = uploadimage1;
    rover_img1.src = rover_image;
}
function uploadimage(){
    ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);
}
function uploadimage1(){
    ctx.drawImage(rover_img1,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener ("keydown",mykeydown);
function mykeydown(e){
    KeyPressed = e.keyCode;
    console.log("entered into keydown");
    if (KeyPressed == '40'){
        down();
        console.log("entered into down");
    }
    if (KeyPressed == '38'){
        up();
        console.log("entered into up");
    }
    if (KeyPressed == '39'){
        left();
        console.log("entered into left");
    }
    if (KeyPressed == '37'){
        right();
        console.log("entered into right");
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow pressed, x = "+rover_x+" y = "+rover_y);
        uploadimage();
        uploadimage1();
    }
}
function down(){
    if (rover_y<=600){
        rover_y=rover_y+10;
        console.log("When up arrow pressed, x = "+rover_x+" y = "+rover_y);
        uploadimage();
        uploadimage1();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x+10;
        console.log("When up arrow pressed, x = "+rover_x+" y = "+rover_y);
        uploadimage();
        uploadimage1();
    }
}
function right(){
    if (rover_x<=800){
        rover_x=rover_x-10;
        console.log("When up arrow pressed, x = "+rover_x+" y = "+rover_y);
        uploadimage();
        uploadimage1();
    }
}
