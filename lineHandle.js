function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var context = canvas.getContext('2d');

        context.strokeStyle='red';
        context.setLineDash([10,5, 5,5 ]);
        context.strokeRect(50, 50, 80, 80)
    }
}

draw();