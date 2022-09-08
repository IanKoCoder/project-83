canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="pink";

mouseEvent="";
var lastX,lastY;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
mouseEvent="mouseDown"


}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseLeave"


}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUp"


}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;

if (mouseEvent== "mouseDown"){
    ctx.beginPath();
 ctx.stokeStyle=color;
 ctx.lineWidth=3;
 ctx.moveTo(lastX,lastY);
 ctx.lineTo(currentx,currenty);
 ctx.stroke();


}
lastX=currentx;
lastY=currenty;

}
var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	console.log("my_touchstart");
  //Additional Activity
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //End Additional Activity
         
   lastX = e.touches[0].clientX - canvas.offsetLeft;
  lastY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

	console.log("my_touchMove");
  current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;

 //   console.log("Last position of x and y coordinates = ");
 //   console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(lastX,lastY);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

   lastX = current_position_of_touch_x; 
 lastY = current_position_of_touch_y;
    
    // end of old same old as the paint web app
}

    // old same old as the paint web app
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // end of old same old as the paint web app
