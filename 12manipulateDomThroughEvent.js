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
