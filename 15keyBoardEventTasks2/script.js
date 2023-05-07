//获取div
var box01 = document.querySelector("#box01");
//设置移动速度
var speed = 10;
//设置移动的方向
var dir = 0;

const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
    if (event.keyCode >= 37 && event.keyCode <= 40 || event.keyCode == 17) {
        switch (event.keyCode) {
            /*keyCode返回按下按键的编码
             * 37向左
             * 38向上
             * 39向右
             * 40向下
             */
            case 17:
                speed = 50;
            case 37:
                box01.style.left = box01.offsetLeft - speed + "px";
                break;
            case 39:
                box01.style.left = box01.offsetLeft + speed + "px";
                break;
            case 38:
                box01.style.top = box01.offsetTop - speed + "px";
                break;
            case 40:
                box01.style.top = box01.offsetTop + speed + "px";
                break;
        }
    }
    else {
        console.log(event.keyCode);
    }
});
body.addEventListener('keyup', (event) => {
    if (event.keyCode == 17) {
        speed = 10;
    }
});