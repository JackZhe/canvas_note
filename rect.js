function draw () {
    // 获取canvas对象
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        // 获取上下文对象
        var context = canvas.getContext('2d');

        // context.strokeStyle='red';
        // context.strokeRect(30, 30, 100, 100);

        // context.fillStyle='rgba(0, 0, 255, 0.3)';
        // context.fillRect(50, 50, 100, 100);

        // context.clearRect(60, 60, 20, 20); // 清空矩形

        // context.clearRect(0, 0, canvas.width, canvas.height); // 清空整个画布

        // 
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                context.fillStyle=`rgba(${255-42.5 * i}, ${255-42.5*j}, 0)`;
                context.fillRect(j*25, i*25, 25, 25);
            }
            
        }
        
    }
}

draw();

/**
 * ctx.strokeStyle = 'red';
 * ctx.rect(50, 50, 80, 80);
 * ctx.stroke();
 * 
 * ctx.strokeStyle = 'red';
 * ctx.strokeRect(50, 50, 80, 80);
*/

/**
 * ctx.fillStyle = 'red';
 * ctx.rect(50, 50, 80, 80);
 * ctx.fill();
 * 
 * ctx.fillStyle = 'red';
 * ctx.fillRect(50, 50, 80, 80);
*/
