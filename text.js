function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var context = canvas.getContext('2d');

        var text = 'this is a text';
        context.font = "bold 30px 微软雅黑";
        context.strokeStyle='purple';
        context.strokeText(text, 30, 60);

        var length = context.measureText(text).width;
        console.log(length);
        
        // fillText
        
    }
}

draw();