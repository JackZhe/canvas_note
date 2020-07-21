function $$(id) {
    return document.getElementById(id);
}

function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var cxt = canvas.getContext('2d');

        // 绘制矩形
        // cxt.fillStyle='HotPink';
        // cxt.fillRect(30, 30, 50 ,50);
        
        // 移动矩形
        // $$('btn').onclick = function () {
        //     context.clearRect(0, 0, canvas.width, canvas.height);
        //     context.translate(10, 10);
        //     context.fillRect(30, 30, 50, 50);
        // }

        // context.scale(1.5, 1.5);
        // context.fillStyle = "LightSkyBlue";
        // context.fillRect(30, 30, 50, 50);

        // 旋转
        //  $$('btn').onclick = function () {
        //     context.rotate(-30 * Math.PI / 180);
        //     context.fillStyle = "LightSkyBlue";
        //     context.fillRect(30, 30, 50, 50);
        // }

        var i = 0;
        var rectWidth = 100;
        var rectHeight = 50;
        setInterval(function () {
            i++;
            cxt.clearRect(0, 0, canvas.width, canvas.height);
            cxt.save();
            cxt.translate(canvas.width / 2, canvas.height / 2); //将坐标移动到中心
            cxt.rotate(Math.PI * (i / 100));           //累进旋转
            cxt.fillStyle = "HotPink";
            cxt.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight); //填充矩形
            cxt.restore();
        }, 10);
    }
}

draw();