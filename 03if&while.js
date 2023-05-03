//隐式转换和假值
const condition1 = "Sam";
const condition2 = 0;

if (condition1) {
    console.log("第一个添加条件为真");
}

if (condition2) {
    console.log("第二个条件为真");
}
//转换规则：假值值转换为 false. 其他所有内容都转换为 true.

//编写程序实现标准体重判断：开发一款软件，根据国际肥胖指标 BMI 指数判断一个人的体型.BMI = 体重/身高的平方。

document.querySelector("#btn1").addEventListener("click", () => {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    let BMI = Math.round((weight / (height * height)));
    if (BMI < 18.5) {
        document.getElementById('result').innerHTML = "您的BMI是" + BMI + "，体重过轻";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        document.getElementById('result').innerHTML = "您的BMI是" + BMI + "正常范围";
    }
    else if (BMI >= 24.9 && BMI < 29.9) {
        document.getElementById('result').innerHTML = "您的BMI是" + BMI + "，体重过重";
    }
    else if (BMI >= 29.9 && BMI < 34.9) {
        document.getElementById('result').innerHTML = "您的BMI是" + BMI + "，肥胖";
    }
    else if (BMI >= 34.9 && BMI < 39.9) {
        document.getElementById('result').innerHTML = "您的BMI是" + BMI + "，重度肥胖";
    }
});

document.querySelector("#btn2").addEventListener("click", () => {
    var numDaffod = document.getElementById('numDaffod').value;
    var num1 = numDaffod % 10;
    var num2 = parseInt(numDaffod / 10 % 10);
    var num3 = parseInt(numDaffod / 100);
    if (numDaffod == num1 * num1 * num1 + num2 * num2 * num2 + num3 * num3 * num3) {
        document.getElementById('result2').innerHTML = numDaffod + "是水仙花数";
    } else {
        document.getElementById('result2').innerHTML = numDaffod + "不是水仙花数";
    }
});
document.querySelector("#trans-btn1").addEventListener("click", () => {
    var num = document.getElementById('dec-number1').value;
    if (num < 0) {
        document.getElementById('result3').innerHTML = "请输入正整数";
    }
    else {
        var result = "";
        while (num > 0) {
            result = num % 2 + result;
            num = parseInt(num / 2);
        }
        document.getElementById('result3').innerHTML = result;
    }
});
/* document.querySelector("#trans-btn2").addEventListener("click", () => {
    var num = document.getElementById('dec-number2').value;
    if (num < 0) {
        document.getElementById('result4').innerHTML = "请输入正整数";
    }
    else {
        var result = "";
        while (num > 0) {
            result = num % 8 + result;
            num = parseInt(num / 8);
        }
        document.getElementById('result4').innerHTML = result;
    }
}); */
var game3 = document.getElementById('game3');
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        game3.innerHTML += " PA";
    }
    else {
        game3.innerHTML += " " + i;
    }
}


var table = document.getElementById('table');
for (var i = 1; i <= 9; i++) {
    var row = document.createElement('p');
    for (var j = 1; j <= i; j++) {
        row.innerHTML += j + '×' + i + '=' + (i * j) + ' ';
    }
    table.appendChild(row);
}
var hello = document.getElementById('sayhi');
function sayhello() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var mytime = hour * 3600 + minutes * 60;
    if (mytime >= 6 * 3600 && mytime < (11 * 3600 + 30 * 60)) {
        hello.innerHTML = "上午好，陌生人！";

    } else if (mytime >= (11 * 3600 + 30 * 60) && mytime < (14 * 3600 + 30 * 60)) {
        hello.innerHTML = "中午好，陌生人！！";

    } else if (mytime >= (14 * 3600 + 30 * 60) && mytime < (18 * 3600)) {
        hello.innerHTML = "下午好，陌生人！";

    } else {
        hello.innerHTML = "晚上好，陌生人！";

    }

}

