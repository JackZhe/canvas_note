/**
 * 弧度 = 度数 * (Math.PI / 180);
 * arc (x, y, 半径, 开始角度, 结束角度, anticlockwise)
*/

function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var context = canvas.getContext('2d');



        context.beginPath();
        context.arc(80, 80, 50, 0, 180 * (Math.PI / 180), true);
        context.closePath();
        // 描边
        context.strokeStyle='HotPink';
        context.stroke();

        context.beginPath();
        context.arc(120, 80, 50, 0, 360 * (Math.PI / 180), true);
        context.closePath();
        // 描边
        context.strokeStyle='HotPink';
        context.stroke();
    }
}

draw();