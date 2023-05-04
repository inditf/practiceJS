//Task1
// 获取当前element元素所有的兄弟节点
function getSiblings(element) {
    var r = [];
    var n = element.parentNode.firstChild;
    while (n = n.nextSibling) {
        if (n.nodeType === 1 && n !== element) {
            r.push(n);
        }
    }
    return r;
}

// 获取当前element元素前一个兄弟节点
function getPrev(element) {
    var n = element;
    while (n = n.previousSibling) {
        if (n.nodeType === 1) {
            return n;
        }
    }
}

// 获取element元素之前所有的兄弟节点
function getPrevaAll(element) {
    var r = [];
    var n = element;
    while (n = n.previousSibling) {
        if (n.nodeType === 1) {
            r.push(n);
        }
    }
}

// 获取element元素之后第一个兄弟节点
function getNext(element) {
    var n = element;
    while (n = n.nextSibling) {
        if (n.nodeType === 1) {
            return n;
        }
    }
}

// 获取element元素之后所有的兄弟节点
function getNextAll(element) {
    var r = [];
    var n = element;
    while (n = n.nextSibling) {
        if (n.nodeType === 1) {
            r.push(n);
        }
    }
    return r;
}

// 获取元素的所有子节点
function getSon(element) {
    var r = [];
    var n = element.firstChild;
    while (n = n.nextSibling) {
        if (n.nodeType === 1) {
            r.push(n);
        }
    }
    return r;
}
//获取元素的第一个子节点
function getFirstSon(element) {
    var n = element;
    while (n = n.firstChild) {
        if (n.nodeType === 1) {
            return n;
        }
    }
    return null;
}
/**
 * @descriotion 获取element的符号 parent_css_selector 的父元素
 * @param {object} element
 * @param {String} parent_css_selector 父元素的 css 选择器
 */
function getParent(element, parent_css_selector) {
    var n = element;
    while (n = n.parentNode) {
        if (n.nodeType === 1 && n.matches(parent_css_selector)) {
            return n;
        }
    }
    return null;
}
// 判断element的节点类型，并且返回
//https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
function getNodeType(element) {
    var n = element;
    switch (n.nodeType) {
        case 1:
            return "ELEMENT_NODE";
        case 2:
            return "ATTRIBUTE_NODE";
        case 3:
            return "TEXT_NODE";
        case 4:
            return "CDATA_SECTION_NODE";
        case 7:
            return "PROCESSING_INSTRUCTION_NODE";
        case 8:
            return "COMMENT_NODE";
        case 9:
            return "DOCUMENT_NODE";
        case 10:
            return "DOCUMENT_TYPE_NODE";
        case 11:
            return "DOCUMENT_FRAGMENT_NODE";
        default:
            return "null";
    }

}

// 获取element元素完整的HTML内容
function getHTMLContent(element) {
    return element.innerHTML;
}
// 获取element元素的文本内容
function getText(element) {
    return element.textContent;
}


// 自测问题

// 1.DOM 树的最顶层元素是什么？
//最顶层的 document 节点是 document.documentElement。这是对应 <html> 标签的 DOM 节点。
/* 2.下面这个脚本会显示什么？
<html>
    <body>
        <script>
            console.log(document.body.lastChild.nodeType);
        </script>
    </body>
</html>
    element.nodeType 属性返回一个数字，表示当前节点的类型。对于元素节点，它返回 1。
*/

/* 3.document 属于哪一类？它位于 DOM 层次结构（hierarchy）中的什么位置？它继承自 Node 还是 Element，或者可能是 HTMLElement？
    document 是 DOM 树中的一个节点，它是 HTMLDocument 类的一个实例。
    它继承自 Node，而 Node 又继承自 EventTarget，因此，document 也继承了 EventTarget 的所有方法和属性。
*/
//document 是一个对象，它继承自 Node。它是 DOM 层次结构的根节点，也就是说它是最顶层的节点。它不是 Element 或者 HTMLElement
//document.documentElement 是一个 Element，它是 <html> 标签的 DOM 节点。
//document.body 是一个 HTMLElement，它是 <body> 标签的 DOM 节点。
//document.head 是一个 HTMLElement，它是 <head> 标签的 DOM 节点。
//document.body.parentNode 是一个 Element，它是 <body> 标签的 DOM 节点。
//document.body.parentNode.parentNode 是一个 HTMLElement，它是 <html> 标签的 DOM 节点。
//document.body.parentNode.parentNode.parentNode 是一个 Document，它是 DOM 层次结构的根节点。
//document.body.parentNode.parentNode.parentNode.parentNode 是一个 null，因为没有更高层次的节点了。




/* 4.getComputedStyle(elem).width 与 elem.clientWidth 之间有什么不同点？
指出至少三种不同点。当然越多越好。 
getComputedStyle(elem).width 和 elem.clientWidth 都是获取元素的宽度：
    1.getComputedStyle(elem).width 返回的是一个以 px 作为后缀的字符串，而 elem.clientWidth 返回的是一个数值。
    2.getComputedStyle(elem).width 可能会返回非数值的 width，例如内联（inline）元素的 “auto”。
    3.elem.clientWidth 是元素的内部内容区域加上 padding，而 getComputedStyle(elem).width是内部内容区域，不包括 padding。
        */