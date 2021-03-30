let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let ctx = canvas.getContext("2d");
let painting = false;
ctx.fillStyle = "black";
ctx.strokeStyle = 'none';

let isTouchDevice = "ontouchstart" in
    document.documentElement;

if (isTouchDevice) {
    canvas.ontouchmove = (e) => {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
   ctx.stroke();
     ctx.fill();

    }
}else{

canvas.onmousedown = () => {
    painting = true;
};
canvas.onmousemove = (e) => {
    if (painting === true) {
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    } 
};
   canvas.onmouseup = () => {
            painting = false;
        }
}