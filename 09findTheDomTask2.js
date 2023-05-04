//带有 id="rate-table" 的表格。
console.log(document.querySelector("#rate-table"));
//带有 name = "select-check: 的 fieldset。
console.log(document.querySelector("fieldset[name='select-check']"));
//表格中的第一个 td (带有 "rate" 字段)
console.log(document.querySelector("table#rate-table"));
// 表单中的第一个 input。
console.log(document.querySelector("input:first-of-type"));
// 表单中的最后一个 input。
console.log(document.querySelector("input:last-of-type"));
//获取带有 data-widget-name 特性（attribute）的元素
console.log(document.querySelector("[data-widget-name]"));
//表单中 第二个 name = "dishes" 的单选框
console.log(document.querySelectorAll('form input[name="dishes"]')[1]);
//表单中 name 含有 pick 字段的元素
console.log(document.querySelector("form [name*='pick']"));
//带有 class = "check" 的元素集合
console.log(document.querySelectorAll(".check"));
//给所有的必填输入框添加一个绿色边框，将获取的输入框节点列表表转化为数组
let requiredInputs = document.querySelectorAll("input[required]");
let inputArray = Array.from(requiredInputs);
inputArray.forEach((input) => {
    // 给每个节点添加一个绿色边框的样式
    input.style.border = "1px solid green";
});
//对页面元素的遍历,编写代码给每一个遍历到的元素添加一个红色背景颜色
let allElements = document.querySelectorAll("*");
allElements.forEach((element) => {
    element.style.backgroundColor = "red";
});

