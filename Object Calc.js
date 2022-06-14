function initObjects(w, h) {
    cnv.width = w;
    cnv.height = h;


    ctx.fillCircle = function (x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.strokeCircle = function (x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    ctx.strokeLine = function (x1,y1,x2,y2){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }
}
Math.randomDec = function (small,big){
    return Math.random()*big+small;
}
Math.randomInt = function (small, big){
    return Math.floor(Math.random()*big)+small;
}
