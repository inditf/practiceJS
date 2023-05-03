/* 声明一个叫做 showMessage() 的函数并返回 "您好，陌生人"。
将 showMessage() 函数返回的值输出到控制台中。 */
console.log("Task1");
function showMessage01() {
    return "您好，陌生人";
}
/* document.querySelector("#callback-btn")
    .addEventListener("click", () => {
        console.log(showMessage01());
    }); */
console.log(showMessage01());
/* 基于上一个任务，给 showMessage 函数传入一个参数 name ，
函数返回一个字符串，其中显示“您好”和提供该输入的人员的姓名，
将 showMessage() 函数返回的值输出到网页中 */
console.log("Task2");
function showMessage02(name) {
    return "您好，" + name;
}
console.log(showMessage02("JoJo"));
/* 使用函数表达式重写上面的任务，写一个匿名函数表达式，并且将函数存储在叫做“showMessage”的变量中. */
console.log("Task3");
const showMessage03 = function (name) {
    return "您好，" + name;
}
console.log(showMessage03("Jone"));
// 使用 setTimout 与 匿名函数在网页中显示一条打招呼的消息, 内容还是为“您好”和提供该输入的人员的姓名，这条消息延迟 1 秒后再显示。
console.log("Task4");
setTimeout(() => {
    console.log(showMessage03("Jone"));
}, 1000);

// //使用回调函数，实现一个体温打卡程序。
// console.log("Task5");
// /* function temperatureBodyDetection(success, fail) {
//     if (36 <= tem <= 38)
//         success(); /*执行成功函数*/
//     else
// fail(); /*执行失败函数*/
// }

// var success = undefined;/* finish the function expression */
// var fail = undefined;/* finish the function expression */

// temperatureBodyDetection(success, fail); /**调用打卡函数**/

// 自测问题
/* var a = 1;
function x() {
    var b = 2;
    function y() {
        var c = 3;
        function z() {
            var d = 4;
        }
        z();
    }
    y();
}
x();
a是全局变量，当函数 x 被调用时，它会执行以下操作：
1.定义一个局部变量 b 并赋值为 2。
2.调用函数 y。
3.当函数 y 被调用时，它会执行以下操作：
4.定义一个局部变量 c 并赋值为 3。
5.调用函数 z。
6.当函数 z 被调用时，它会定义一个局部变量 d 并赋值为 4。 */
// 下面这段代码返回的是什么？
function sleep() {
    console.log("I'm sleepy!");
    return "我睡着了";
    return "我在打呼";
}
sleep();
// => 我睡着了

// 不用将代码粘贴到控制台中，能判断出这段代码的输出内容吗？
var x = 1;

function addTwo() {
    x = x + 2;
}

addTwo();
x = x + 1;
console.log("x=" + x);
// => x=4