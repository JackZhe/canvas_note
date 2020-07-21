function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var context = canvas.getContext('2d');

        // 创建image对象
        var image = new Image();
        image.src = 'images/20200721.jpg';

        image.onload = function () {
            // context.drawImage(image, 0, 0, 20, 180, 20, 20, 80, 80);
            var text = '没有人比我更懂前端';
            context.font='bold 30px sans-serif';
            
            var pattern = context.createPattern(image, 'repeat');
            
            context.fillStyle = pattern;
            context.fillText(text, 10, 50);
            
        }

    }
}

draw();