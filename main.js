img="";
status1="";
objects=[];

function setup()
{
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
}
function start_model()
{
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Objects";
}
function draw()
{
image(video,0,0,380,380);
r=random(255);
g=random(255);
b=random(255);
if(status1!=""){
    objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status - Object Detected";
document.getElementById("no_of_objects").innerHTML="No. of objects detected : "+objects.length;
fill(r,g,b);
percent=floor(objects[i].confidence*100);
text (objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b);
rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function modelLoaded()
{
console.log("model loaded");
status1=true;
objectDetector.detect(video,gotResult);
}
function gotResult(error,results)
{
if(error){
console.error(error);
}
else{
console.log(results);
objects=results;
}
}
/*fill('#FF0000');
text("Dog",45,75);
noFill();
fill('#00FF00');
text("Cat",350,100);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
stroke("#00FF00");
rect(300,70,300,330);*/