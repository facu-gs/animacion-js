var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var a = 600
var b = 400
var x = 0
var y = 0
var h = 600
var i = 1

ctx.fillStyle = "lightgrey";
ctx.fillRect(0,0,600,400);

function drawCircle(x,y,radius,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fill();
}

function clearCanvas(){
    ctx.clearRect(0,0,600,400);
}

function reloadPage(){
    clearCanvas();
    drawCircle(x,y,25,"darkviolet")
    drawCircle(a,b,10,"lightblue")
    drawCircle(h,i,15,"yellow")
    drawCircle(y,h,40,"red")
    drawCircle(b,x,5,"orange")
    drawCircle(i,a,15,"black")
    drawCircle(200,y,30,"darkblue")
    drawCircle(x,300,17,"green")
    if(x < 600){
        x++
    }
    y++
    a--
    b--
    h = h-2
    i = i+2
    if(x==600) {
        x = x--
    }
}

setInterval(reloadPage,80)

