# 来练练手？（WIP）
## 1. 简答
### JS 部分
1. JavaScript 有哪些数据类型？  
     八种数据类型  
    `1.`Number`2.`BigInt`3.`String`4.`Boolean`5.`Undefined`6.`Null`7.`Symbol`8.`Object
2. Symbol 和 Bigint 简单介绍
    1. `BigInt`可以表示任意大小的整数，以安全地存储和操作大整数，甚至超出了数字的安全整数限制（`Number.MAX_SAFE_INTEGER`）。
    2. `Symbol`表示唯一标识符,通常用于向对象添加唯一属性。
3. 说一说基本类型和引用类型的区别  
    1. 基础数据类型：在存储时变量中存储的是值本身，占用空间固定，保存在栈中；  
    2. 引用数据类型：在存储时变量中存储的是地址，占用空间不固定，保存在堆中；  
4. var let const 的区别  
    var、let和const都是用来声明变量的关键字。它们之间的主要区别在于`作用域`和`变量提升`。  
    1. `作用域`：var声明的变量属于函数作用域，而let和const声明的变量属于块级作用域。块级作用域是指在花括号内部的区域，例如if语句或循环语句。这意味着在使用let或const声明的变量只能在它们被定义的块级作用域内访问。  
    2. `变量提升`：var存在变量提升现象，而let和const没有此类现象。这意味着可以在声明之前使用var声明的变量，但不能使用let或const声明的变量。        
5. 如何判断变量类型  
    1. 可以使用typeof运算符来判断某个值的类型。  
    `typeof x`或` typeof(x)`  
    `typeof null` 会返回 `object` —— 这是个错误，实际上并不是`object`.    
    2. `typeof x`对于`Object`和`null`无法区分，可使用`Object.prototype.toString.call()`判断`object`类型.  
    3. `instanceof` 可用来检查一个对象是否属于某个特定的`class`,返回`true`或`false`
        ```js
        obj instanceof Class
        ```
6. 如何判断一个变量是null？
    1. 满足`!a`为`true`且`typeof`判断为对象
    2. `Object.prototype.toString.call()`
    ```javascript
    var a = null;
    console.log((!a && typeof a === "object")); //true
    console.log(Object.prototype.toString.call(a)); //[object Null]
    ```
7. undefined 和 null 的区别  
    `undefined`和`null`都表示值的缺失  
    `undefined`表示变量未定义或未初始化。  
    `null`是一个对象，表示有意的值缺失。  
    ```js
    let x;
    console.log(x); // -> undefined
    x = null;
    console.log(x); // -> null
    console.log(typeof x); // -> object
    ```
8. Const 定义的值一定不能改变吗？  
    const 声明的限制只适用于它指向的变量的引用。  
    const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。
9. const 声明生成对象的时候，如何使其不可更改？  
    可使用`Object.freeze()`方法。  
    这个方法会冻结一个对象，防止新属性被添加到它上面，防止现有属性被删除，并防止现有属性或其可枚举性、可配置性或可写性被更改。它还会防止原型被更改。
    ```js
    const obj = {
        name: 'Lin',
        age: 3
    };
    Object.freeze(obj);
    obj.name = 'susu';
    console.log(obj); // -> {name: "susu", age: 3}
    ```
10. 闭包的应用，用来解决什么问题，谈谈理解  
    闭包是指有权访问另一个函数作用域中的变量的函数。
    创建闭包最常见方式，就是在一个函数内部创建另一个函数。
    闭包的作用：
    1. 读取函数内部的变量
    2. 让变量的值始终保持在内存中
    3. 封装对象的私有属性和私有方法  
11. 说一说箭头函数中 this 的指向  
    箭头函数中的 this 指向是固定的，在定义时就已经确定了，不会改变。  
    继承自作用域链的上一层的`this`
12. 箭头函数可以用 call 或者 apply 改变 this 指向吗？  
    不可以，箭头函数的this指向是固定的，不会改变。
13. bind、apply、call 的区别  
    `bind()`、`apply()`、`call()`都是用来改变函数的`this`对象的指向的。  
    1.  `apply`和`call`的区别  
        `apply()`、`call()`方法功能基本一致，只是传参有些差异   
        `apply()`方法是接受包含多个参数的数组  
        `call()`方法是接受参数列表
        ``` js
        func.apply(thisArg, [argsArray])
        func.call(thisArg, arg1, arg2, ...)
        var array = [1, 2, 3];
        var max = Math.max.apply(null, array); // 3
        var max2 = Math.max.call(null, 1, 2, 3); // 3
        ```
    2. `bind()`和`apply()`、`call()`的区别  
        1. `bind()`返回的是一个函数，而`apply()`和`call()`是立即执行的。  
        2. `bind()`可以传入参数，而`apply()`和`call()`不能。  
        ```js
        var findMax = Math.max.bind(null);
        console.log(findMax);//[Function: bound max]
        console.log(findMax(1, 2, 3))//3
        console.log(findMax(4, 5, 6))//6
        ```
14. 说说 new 都做了些什么
    1. 创建新的空对象并分配给 this
    2. 函数体执行。修改 this，添加新的属性。
    3. 返回 this 的值
    ```js
    function User(name) {
    this.name = name;
    this.isAdmin = false;
    }
    let user = new User("Jack");
    console.log(user);
    //->User { name: 'Jack', isAdmin: false }

    //new实际运行过程
    function User(name) {
    // 1.this = {};（隐式创建）
    // 2.添加属性到 this
    this.name = name;
    this.isAdmin = false;
    // 3.return this;（隐式返回）
    }

    ```
### CSS 部分
1. 说说 position  
    position 属性指定元素的定位类型。
    1. `static` 默认值 
    元素处于正常的文档流中。  
    2. `relative` 相对定位  
        元素占用位置不会改变，元素相对于其正常位置进行定位。  
    3. `absolute` 绝对定位  
        脱离正常文档流，并不为元素预留空间，元素相对于最近的已定位祖先元素进行定位。
    4. `fixed `固定定位  
        脱离正常文档流，并不为元素预留空间，元素相对于浏览器窗口进行定位。  
        元素的位置在屏幕滚动时不会改变。
    5. `sticky` 粘性定位  
        `relative`和`fixed`的混合体  
        `sticky` 表现得像相对定位一样，直到它滚动到某个阈值点。  
        常用于导航栏随，页面滚动直到特定点，粘贴在页面顶部。  
    2-5可使用`top`,`right`,`bottom`,`left`和`z-index`调整偏移属性。

2. flex 属性都有什么，其作用是什么  
    `flex`是`FlexibleBox`的缩写，意为"弹性布局"  
    `flex`属性是`flex-grow`、`flex-shrink`和`flex-basis`的简写,用于设置弹性盒子中的弹性项目如何增长或缩小以适应可用空间。
    1. `flex-grow`默认为`0`  
        定义项目的放大比例，即如果存在剩余空间，也不放大。  
        它指定了当弹性容器有多余空间时，弹性项目应该占用多少额外空间。
    2. `flex-shrink`默认为`1`  
        定义了项目的缩小比例，即如果空间不足，该项目将缩小。  
        它指定了当弹性容器空间不足时，弹性项目应该缩小多少。    
    3. `flex-basis`默认为`auto`  
        定义了在分配多余空间之前，项目占据的主轴空间（main size）。  
        定义初始主尺寸。它指定了在分配多余空间之前，弹性项目应该占用多少空间。
3. CSS 优先级  
    css 优先级是由`[A,B,C,D]`四个等级的叠加来决定的，等级越高优先级越高，等级相同则后面的优先级高。
    1. A 等级：内联样式，如 `style="color:red"`
    2. B 等级：ID 选择器，如 `#id`
    3. C 等级：类选择器、属性选择器、伪类选择器，如 `.class、[type="text"]、:hover`
    4. D 等级：标签选择器、伪元素选择器，如 `div、:before`
    5. `!important` 优先级最高
4. 元素水平垂直居中
    1. 行内元素 
        ```css
        text-align: center;
        line-height: height;
        ```
    2. 块级元素
        ```css
        margin: (父元素高度 - 元素高度)/2 px auto;
        ```
    3. flex布局
        ```css
        display: flex;
        justify-content: center;
        align-items: center;
        ```

    
### 异步
1. 说说 Event Loop  
    `Event Loop`是`JavaScript`的执行机制，它是一个循环，会不断地从消息队列中取出消息并执行。  
    `Event Loop`负责执行代码、收集和处理事件以及执行排队的子任务，用于浏览器或Node解决单线程运行时不会阻塞的一种机制。   
    引擎的一般算法如下：
    1.  同步代码，调用栈执行后直接出栈
    2.  异步代码，放到Web API中，等待时机，等合适的时候放入回调队列，等到调用栈空时,`EventLoop`开始工作，读取到栈内等待主线程的执行。
2. EventLoop JS 事件循环队列、宏任务和微任务  
    JS有一个`main thread`主线程和`call-stack`调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。   
    主线程从任务队列中取出任务并执行，异步任务队列分为宏任务队列和微任务队列。  
    1. 宏任务队列包括：`整体script`、`setTimeout`、`setInterval`、`setImmediate`、`DOM/IO`。
    2. 微任务队列包括：`原生Promise then() catch() `、`await 暂停语句`、`process.nextTick`、`MutationObserver`。
    3. 事件循环的过程是同步的，每一次宏任务执行前，要清空上一次的微任务队列，微任务在宏任务之前执行，在当前的微任务队列没有执行完成时，是不会执行下一个宏任务的。
    4. `EventLoop`保证按照主线程-微任务队列-宏任务的顺序不断重复执行, 并始终维护各执行队列直至全部队列清空。
    ```js
    console.log('script start'); //1.
    setTimeout(() => {
       console.log('setTimeout');//6.
    }, 0);
    new Promise((resolve, reject) => {
       console.log('promise resolve');//2.
       resolve()
    }
    ).then(() => {
       console.log('promise1');//4.
    }).then(() => {
       console.log('promise2');//5.
    });
    console.log('script end');//3.
    ```
    同步代码  
    1.`script start`  
    2.`promise resolve` ->注册微任务  
    3.`script end`   
    微任务队列   
    4.`promise1`  
    5.`promise2`  
    宏任务    
    6.`setTimeout`  
3. Promise 都有哪些方法  
    Promise 是 JavaScript 中的一个对象，用于表示异步操作的最终完成（或失败）及其结果值。  
    Promise 有三种状态：`pending`、`fulfilled`、`rejected`。  
    它有三种实例方法，这些方法都返回一个新的`Promise`对象，因此可以链式调用,包括：  
      
    1. `Promise.prototype.then()`：用于指定当`Promise`状态变为`fulfilled`时要执行的回调函数。  
    2. `Promise.prototype.catch()`：用于指定当`Promise`状态变为`rejected`时要执行的回调函数。    
    3. `Promise.prototype.finally()`：用于指定无论`Promise`状态如何都要执行的回调函数。  

    此外`Promise`还有一些静态方法，包括:  

    4. `Promise.all()`：用于等待一组`Promise`对象全部完成。  
    5. `Promise.race()`：用于等待一组`Promise`对象中的任意一个完成。  
    6. `Promise.resolve()`：用于创建一个已经解决的`Promise`对象。  
    7. `Promise.reject()`：用于创建一个已经拒绝的`Promise`对象。  
    8. `Promise.allSettled()`:用于返回一个在所有给定的`Promise`都已完成或拒绝后完成的`Promise`
    9. `Promise.any()`:用于返回任意一个最快执行已经解决的`Promise` 实例。

## 2. 看程序说结果
### 类型判断  
```js
console.log(typeof typeof typeof null)
//->string   
typeof null ->"object"
typeof typeof null ->"string"
typeof typeof typeof null ->"string"
```
### 作用域
```js
for (var i = 0; i < 3; i++) {//全局作用域
    setTimeout(() => {
        console.log(i);
    }, 1)
}
//->3 3 3
for (let i = 0; i < 3; i++) {//块级作用域
    setTimeout(() => {
        console.log(i);
    }, 1)
}
//->0 1 2
 ```
 ```js
 function sayHi() {
      console.log(name);  //->undefined
      console.log(age); //let 不存在变量提升，输出error
      var name = 'Lyric';
      let age = 19;
 }
 sayHi();

 ```
 ```js
 //var和function存在状态提升
 function fn(a) {
  console.log(a);//->[Function: a]
  var a = 2;
  function a() {}
  console.log(a);//->2

}
fn(1);
```
```js
if('a' in window) {
  var a = 10; 
}
alert(a);//->10
```
```js
function f(x){
    var x;
    console.log(x);//-> 5
}
f(5);
```
```js
var a = 10;
(function(){
    console.log(a); //->undefined
    a = 5;
    console.log(window.a); //->10
    var a = 20;
    console.log(a); //->20
})()
```
```js
var a = 1;
function f() {
console.log(a);  //->undefined
var a = 2;
}
f()
```
```js
//对原始值添加属性时会临时转换为Object，操作完成后立即被丢弃
var a = 10;
a.pro = 10;
console.log(a.pro + a); //undefined+10
//->NaN
var s = 'hello';
s.pro = 'world';
console.log(s.pro + s);//undefined+hello
//->undefinedhello
```
```js
var a = 100;
function fn() {
  var b = 30;
  function bar() {
      console.log(a + b);//->130
      console.log(this.b); //->unfeined
  }
  return bar;
}
var x = fn(),
b = 400;
x();

```
```js
var f = true;
if (f === true) {
  var a = 10; 
}
 
function fn() {
  var b = 20; 
  c = 30; 
}
 
fn();
console.log(a);//->10
console.log(b);//error
console.log(c);//->30
```
### 原型链
```js
Object.prototype.a = 10;
var s = Symbol();
var obj = {
    [s]: 20,
    b: 30
}
Object.defineProperty(obj, 'c', {
    enumerable: true，
    value: 40
})
//枚举出的是键值
//Symbol不会被枚举
for(let val in obj) {
    console.log(val)//-> b c a 
}
//console.log(obj[val])
```
```js
function Foo() {
    getName = function () { alert(1); };
    return this;
}
// const test = Foo();
// test.getName();//弹出包含数字 1 的警告框
Foo.getName = function () { alert(2); };
// Foo.getName();//弹出包含数字 2 的警告框
Foo.prototype.getName = function () { alert(3); };
// let foo = new Foo();
// foo.getName(); // 弹出包含数字 3 的警告框
var getName = function () { alert(4); };
//getName()；//// 弹出包含数字 4 的警告框
function getName() { alert(5); }
//getName()；//// 弹出包含数字 5 的警告框
```
### This 指向
```js
var name = '123';
var obj = {
    name: '456',
    getName: function(){
        function printName(){
            console.log(this.name);//->123
        }
        printName();
    }
}

obj.getName(); //getName没有绑定this,printName将使用全局this
//使用箭头函数将输出 456
var obj = {
    name: '456',
    getName: function () {
        printName = () => {
            console.log(this.name);
        }
        printName();
    }
}
//或使用bind方法绑定this
 printName.bind(this)();
```
```js
var obj={
    name:'tonny'
}
var b={
    name:'tom',
    getelement: ()=>{
        console.log(this.name)
    }
}
var a=b.getelement();
//->输出window.name undefined
```
## 3. 一起来手撕代码
### 1. 手写 promise.all()
```js
function PromiseAll(promiseArray) {    //返回一个Promise对象
    return new Promise((resolve, reject) => {//Promise的构造函数接收一个函数作为参数，该函数的两个参数分别是resolve和reject。
        if (!Array.isArray(promiseArray)) {                        //传入的参数是否为数组
            return reject(new Error('传入的参数不是数组！'))    //不是数组，返回reject状态
        }
        const res = []  //用于存放每个Promise对象的返回结果
        let counter = 0;                        //设置一个计数器，用于判断所有的Promise是否都执行完毕
        promiseArray.forEach((p, i) => {    //遍历传入的Promise数组
            Promise.resolve(p).then(value => {//将数组中的每个Promise对象都用Promise.resolve()包装一下，使其变成一个Promise对象
                //调用then方法,将每个Promise对象的返回结果存放到res数组中
                counter++;                 //每个Promise执行完毕，计数器加1
                res[i] = value//将执行完毕的Promise对象的返回结果存放到res数组中对应的位置
                if (counter === promiseArray.length) {
                    resolve(res)    //当所有的Promise都执行完毕时，返回resolve状态,并将res数组作为参数传递出去
                }
            }).catch(e => reject(e))    //只要有一个Promise执行失败，就返回reject状态,并将失败的原因返回
        })
    })
}
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p1')
    }, 1000)
})
const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p2')
    }, 2000)
})
const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p3')
    }, 3000)
})
const test = PromiseAll([p1, p2, p3])
    .then(res => console.log(res))
    .catch(e => console.log(e))
console.log(test);
// Promise { <pending> }
// [ 'p1', 'p2', 'p3' ]
```
### 2. 手写 Array.prototype.reduce()
```js
Array.prototype.reduce = function (callback, initialValue) {
    let arr = this;
    let res = initialValue || arr[0];
    let startIndex = initialValue ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        res = callback(res, arr[i], i, arr);
    }
    return res;
}
//test
let arr = [1, 2, 3, 4, 5];
let res = arr.reduce((pre, cur, index, arr) => {
    return pre + cur;
}, 0)
console.log(res);
//->15
```
### 3. 手写 useEffect
```js
function useEffect(callback, depArray) {
    const hasNoDeps = !depArray;
    const deps = depsArray || [];
    const hasChangedDeps = deps ? !deps.every((el, i) => el === depArray[i]) : true;
    if (hasNoDeps || hasChangedDeps) {
        callback();
    }
}
//test
useEffect(() => {
    console.log('useEffect');
}, [count])
//count发生变化时，才会执行回调函数
```