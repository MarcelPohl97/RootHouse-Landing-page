const canvas = document.querySelector('.tree');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 300;

const ctx = canvas.getContext('2d');
let curve = 7;


const drawTree = (startX, startY, len, angle, branchWidth, bodyColor, leafColor) => {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = bodyColor;
    ctx.fillStyle = leafColor;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/90);
    ctx.moveTo(0,0);
    if(angle > 0) {
        ctx.bezierCurveTo(10, -len/2, 10, -len/2, 0, -len);
    }else {
        ctx.bezierCurveTo(10, -len/2, -10, -len/2, 0, -len);
    }
    ctx.stroke();
    if(len < 30) {
        //leafs
        ctx.beginPath();
        ctx.arc(0, -len, 10, 0, Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }
    drawTree(0, -len, len * 0.85, angle + curve, branchWidth * 0.7);
    drawTree(0, -len, len * 0.85, angle - curve, branchWidth * 0.7);
    ctx.restore();
}

drawTree(canvas.width/2, canvas.height, 120, 0, 20, '#56ab2f', '#a8e063');

