function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var context = canvas.getContext('2d');

        context.moveTo(50, 100);
        context.lineTo(150, 50);
        context.stroke();
    }
}

draw();