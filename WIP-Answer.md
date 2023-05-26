# 来练练手？（WIP）
## 1. 简答
### JS 部分
1. JavaScript 有哪些数据类型？  
     八种基本的数据类型  
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
    可以使用typeof运算符来判断某个值的类型。
    `typeof x`或` typeof(x)`
    ```javascript
    typeof 123; // "number"
    typeof '123'; // "string"
    typeof true; // "boolean"
    typeof undefined; // "undefined"
    typeof Symbol(); // "symbol"
    //类型为object的有：null、数组、对象、函数
    typeof null; // "object"
    typeof function(){}; // "function"
    typeof []; // "object"
    typeof {}; // "object"
    ``` 
    `typeof null` 会返回 "object" —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 object。  
    `typeof x`对于`Object`和`null`无法区分，可使用`Object.prototype.toString.call()`判断object类型
    ```javascript
    console.log(Object.prototype.toString.call(3)); //[object Number]
    console.log(Object.prototype.toString.call(true)); //[object Boolean]
    console.log(Object.prototype.toString.call(null)); //[object Null]
    console.log(Object.prototype.toString.call('hello')); //[object String]
    console.log(Object.prototype.toString.call(undefined)); //[object Undefined]
    console.log(Object.prototype.toString.call([1, 2, 3])); //[object Array]    
    console.log(Object.prototype.toString.call({ name: 'susu', age: 3 })); //[object Object]      
    console.log(Object.prototype.toString.call(new Date())); //[object Date]
    function fn() { console.log('hello world!') };
    console.log(Object.prototype.toString.call(fn)); //[object Function]
    ```
6. 如何判断一个变量是null？
    ```javascript
    var a = null;
    (!a && typeof a === "object"); //true
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
    const 定义的值不能通过重新赋值（即使用赋值运算符）来更改，也不能重新声明（即通过变量声明）  
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
类是有行为的数据，闭包是有数据的行为。  
11. 说一说箭头函数中 this 的指向  
    箭头函数中的 this 指向是固定的，在定义时就已经确定了，不会改变。  
    继承自作用域链的上一层的`this`
    ```js
    var obj = {
        id: 'OBJ',
        a: function () {
            console.log(this.id);//'OBJ'
            fn= () => {
                console.log(this.id);//'OBJ'
            };
            fn();
        },
        b: () => {
            console.log(this.id);//'undefined'
        }
    };
    obj.a();    // 'OBJ' 'OBJ'
    obj.b();    // 'undefined'
    ``` 
    `obj.a`中的`this`指向`obj`，`fn`中的`this`指向`a`，所以`fn`中的`this`指向`obj`。  
    `obj.b`中的`this`指向全局对象，所以`this.id`为`undefined`。
12. 箭头函数可以用 call 或者 apply 改变 this 指向吗？  
    不可以，箭头函数的this指向是固定的，不会改变。
13. bind、apply、call 的区别  
    bind、apply、call 都是用来改变函数的 this 对象的指向的。
    1. apply 和 call 的区别
        1. 传参方式不同
            ```js
            func.call(thisArg, arg1, arg2, ...)
            func.apply(thisArg, [argsArray])
            ```
            call 的参数是一个一个传递的，而 apply 的参数是以数组的形式传递的。
        2. 对于 apply 和 call，第一个参数都是 this 的指向对象，如果我们传的第一个参数为 null，那么 this 指向的是 window 对象。
        3. 对于 apply 和 call，如果我们传的第一个参数不是对象，那么 JavaScript 会尝试将其转换为对象。  
            如果我们传的第一个参数是原始值，那么 JavaScript 会将原始值转换为其对应的包装对象，然后对其进行处理。  
            如果我们传的第一个参数是一个对象，那么就直接使用这个对象。
        4. 对于 apply 和 call，如果我们传的第一个参数是 undefined 或者 null，那么 this 指向的是 window 对象。
        5. 对于 apply 和 call，如果我们传的第一个参数是原始值，那么 this 指向的是原始值对应的包装对象。
        6. 对于 apply 和 call，如果我们传的第一个参数是一个对象，那么 this 指向的就是这个对象。
    2. bind 和 apply、call 的区别
        1. bind 返回的是一个函数，而 apply 和 call 是立即执行的。
        2. bind 可以传入参数，而 apply 和 call 不能。
        3. bind 返回的函数可以作为构造函数，而 apply 和 call 不能。

14. 说说 new 都做了些什么
    1. 创建一个新对象
    2. 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）
    3. 执行构造函数中的代码（为这个新对象添加属性）
    4. 返回新对象

### CSS 部分
1. 说说 position
    position 属性指定元素的定位类型。
    1. `static`  
        默认值，元素处于正常的文档流中。
    2. `relative`  
        相对定位，元素相对于其正常位置进行定位。
    3. `absolute`  
        绝对定位，元素相对于最近的已定位祖先元素进行定位。
    4. `fixed`  
        固定定位，元素相对于浏览器窗口进行定位。
    5. `sticky`  
        粘性定位，元素根据用户的滚动位置进行定位。
2. flex 属性都有什么，其作用是什么  
    `flex`属性是`flex-grow`、`flex-shrink`和`flex-basis`的简写,用于设置弹性盒子中的弹性项目如何增长或缩小以适应可用空间。
    1. `flex-grow`  
        定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。  
        它指定了当弹性容器有多余空间时，弹性项目应该占用多少额外空间。
    2. `flex-shrink`  
        定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
        它指定了当弹性容器空间不足时，弹性项目应该缩小多少。    
    3. `flex-basis`
        定义了在分配多余空间之前，项目占据的主轴空间（main size）。  
        定义初始主尺寸。它指定了在分配多余空间之前，弹性项目应该占用多少空间。
3. CSS 优先级
    css 优先级是由 A、B、C、D 四个等级的叠加来决定的，等级越高优先级越高，等级相同则后面的优先级高。
    1. A 等级：内联样式，如 `style="color:red"`
    2. B 等级：ID 选择器，如 `#id`
    3. C 等级：类选择器、属性选择器、伪类选择器，如 `.class、[type="text"]、:hover`
    4. D 等级：标签选择器、伪元素选择器，如 `div、:before`
4. 元素水平垂直居中

### 异步
1. 说说 Event Loop

2. EventLoop JS 事件循环队列、宏任务和微任务

3. Promise 都有哪些方法

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
### 2. 手写 Array.prototype.reduce()
### 3. 手写 useEffect