function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var cxt = canvas.getContext('2d');

        // context.moveTo(30, 120);
        // context.quadraticCurveTo(100, 20, 160, 120);
        // context.stroke();

        cxt.moveTo(75, 25);
        cxt.quadraticCurveTo(25, 25, 25, 62);
        cxt.quadraticCurveTo(25, 100, 50, 100);
        cxt.quadraticCurveTo(50, 120, 30, 125);
        cxt.quadraticCurveTo(60, 120, 65, 100);
        cxt.quadraticCurveTo(125, 100, 125, 62);
        cxt.quadraticCurveTo(125, 25, 75, 25);
        cxt.stroke();

    }
}

draw();