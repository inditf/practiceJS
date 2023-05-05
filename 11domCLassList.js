// Task1
// 练习对类名 classList 的管理，实现以下函数的编写
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    const elementList = document.querySelector(element);
    elementList.classList.add(newClassName);

}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    const elementList = document.querySelector(element);
    elementList.classList.remove(oldClassName);
}

// 判断element类名是否含有 className
function hasClass(element, className) {
    const elementList = document.querySelector(element);
    return elementList.classList.contains(className);
}

// 判断 element类名是否含有 oldClassName,如果存在，就把它替换成newClassName。如果不存在，就不做任何操作
function replaceClass(element, oldClassName, newClassName) {
    const elementList = document.querySelector(element);
    if (elementList.classList.contains(oldClassName)) {
        // elementList.classList.toggle(oldClassName);
        // elementList.classList.toggle(newClassName);
        elementList.classList.replace(oldClassName, newClassName);
        return true;
    }
    else {
        return false;
    }
}
/* Task2
*下载 DOM_task.zip, 您将得到 sidebar.html, style.css, mian.js, helpers.js, 四个文件，保存到本地。
 *DOM_task.zip 链接文件丢失 */

