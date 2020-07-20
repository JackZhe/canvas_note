/**
 * 弧度 = 度数 * (Math.PI / 180);
 * arc (x, y, 半径, 开始角度, 结束角度, anticlockwise)
 * arcTo (cx, cy, x2, y2, radius)
*/

function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var context = canvas.getContext('2d');

        // context.beginPath();
        // context.arc(80, 80, 50, 0, 180 * (Math.PI / 180), true);
        // context.closePath();
        // // 描边
        // context.strokeStyle='HotPink';
        // context.stroke();

        // context.beginPath();
        // context.arc(120, 80, 50, 0, 360 * (Math.PI / 180), true);
        // context.closePath();
        // // 描边
        // context.strokeStyle='HotPink';
        // context.stroke();

        // context.moveTo(20, 10);
        // context.lineTo(70, 20);
        // // 开始点一般由moveTo() lineTo()提供开始点; arcTo() 提供控制点结束点;
        // // 如果开始点不是弧线起点，arcTo()方法还将添加一条当前端点到弧线起点的直线线段。也就是说，开始点坐标并不一定是弧线起点坐标。
        // context.arcTo(120, 20, 120, 70, 50);
        // context.lineTo(120, 120);
        // context.stroke();
        createRoundedRect(context, 120, 100, 20, 20, 20);
        context.stroke();
    }
}


function createRoundedRect (ctx, width, height, r, offsetX, offsetY) {
    ctx.beginPath();
    ctx.moveTo(offsetX+r, offsetY);
    ctx.lineTo(offsetX+width-r, offsetY);
    ctx.arcTo(offsetX+width, offsetY, offsetX+width, offsetY+r, r);

    ctx.lineTo(offsetX+width, offsetY+height-r);
    ctx.arcTo(offsetY+width, offsetY+height, offsetY+width-r, offsetY+height, r);

    ctx.lineTo(offsetX+r, offsetY+height);
    ctx.arcTo(offsetX, offsetY+height, offsetX, offsetY+height-r, r);

    ctx.lineTo(offsetX, offsetY+r);
    ctx.arcTo(offsetX, offsetY, offsetX+r, offsetY, r)

    ctx.closePath();
    
}
draw();