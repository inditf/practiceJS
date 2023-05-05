//编码
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    element.addEventListener(event, listener, false);
}


// addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    element.removeEventListener(event, listener, false);
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    element.addEventListener("click", listener, false);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    element.addEventListener("keydown", function (event) {
        if (event.keyCode === "Enter") {
            listener();
        }
    }, false);

}
//自测问题
//我们有一个空的 DOM 元素 elem 和一个字符串 text。 下面这 3 个命令中的哪个命令做的是完全相同的事儿？
// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text
// 答案：第一个和第三个
/* 
elem.append(document.createTextNode(text))：这个命令会创建一个新的文本节点，然后将其添加到元素的子节点列表中。这个命令可以用于添加多个文本节点，或者添加其他类型的节点。
elem.innerHTML = text：这个命令会将元素的 innerHTML 属性设置为指定的文本。这个命令会删除元素的所有子节点，并用指定的文本替换它们。
elem.textContent = text：这个命令会将元素的 textContent 属性设置为指定的文本。这个命令会删除元素的所有子节点，并用指定的文本替换它们。

*/