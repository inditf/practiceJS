//Task1
//首先练习一下事件的绑定和删除，请您实现以下函数
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    element.addEventListener(event, listener, false);
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    element.removeEventListener(event, listener, false);
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener,但是listener只执行一次
function addEventOnce(element, event, listener) {
    element.addEventListener(event, listener, { once: true });
}

// 例如：
function clicklistener(event) {

}

// 测试用例
addEvent("#doma", "click", clicklistener);//给id 为 doma 元素的点击事件添加了clicklistener事件处理程序
removeEvent("#doma", "click", clicklistener);//给 id 为 doma 元素的点击事件删除了clicklistener事件处理程序
addEventOnce("#doma", "click", clicklistener);//给 id 为 doma 元素的点击事件添加了onceClicklistener事件处理程序，doma 元素点击后onceClicklistener事件处理程序从 doma 元素上删除
//Task2
//实现一个 Tab 选项卡项目
//在这个项目中，您将实现一个 Tab 选项卡 。每当用户单击一个选项卡时，它都应该突出显示，并且应该显示相关内容。
