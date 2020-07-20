function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var cxt = canvas.getContext('2d');

         //绘制三次贝塞尔曲线
        //  cxt.moveTo(20, 80);
        //  var cx1 = 20;
        //  var cy1 = 20;
        //  var cx2 = 120;
        //  var cy2 = 120;
        //  var endX = 120;
        //  var endY = 60;
        //  cxt.bezierCurveTo(cx1, cy1, cx2, cy2, endX, endY);
        //  cxt.stroke();

        cxt.moveTo(75, 40);
        cxt.bezierCurveTo(75, 37, 70, 25, 50, 25);
        cxt.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        cxt.bezierCurveTo(20, 80, 40, 102, 75, 120);

        cxt.stroke();
    }
}

draw();