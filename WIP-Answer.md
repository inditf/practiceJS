# 来练练手？（WIP）
## 1. 简答
### JS 部分
1. JavaScript 有哪些数据类型？  

2. Symbol 和 Bigint 简单介绍

3. 说一说基本类型和引用类型的区别
4. var let const 的区别
5. 如何判断变量类型
6. 如何判断一个变量是null？
7. undefined 和 null 的区别
8. Const 定义的值一定不能改变吗？
9. const 声明生成对象的时候，如何使其不可更改？
10. 闭包的应用，用来解决什么问题，谈谈理解
11. 说一说箭头函数中 this 的指向
12. 箭头函数可以用 call 或者 apply 改变 this 指向吗？
13. bind、apply、call 的区别
14. 说说 new 都做了些什么

### CSS 部分
1. 说说 position
2. flex 属性都有什么，其作用是什么
3. CSS 优先级
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
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);//全局作用域
    }, 1)
}
//->3 3 3
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);//块级作用域
    }, 1)
}
//->0 1 2
 ```
 ```js
 function sayHi() {
      console.log(name); 
      console.log(age);
      var name = 'Lyric';
      let age = 19;
 }
 sayHi();
 //->undefined
 //let 不存在变量提升，输出error
 ```
 ```js
 function fn(a) {
  console.log(a);
  var a = 2;
  function a() {}
  console.log(a);
}
 
fn(1);
//var和function存在状态提升
//->[Function: a]
//->2
```
```js
if('a' in window) {
  var a = 10; 
}
alert(a);
//->10
```
```js
function f(x){
    var x;
    console.log(x);
}

f(5);
//-> 5
```
```js
var a = 10;
(function(){
    console.log(a); 
    a = 5;
    console.log(window.a); 
    var a = 20;
    console.log(a); 
})()
//->undefined
//->10
//->20
```
```js
var a = 1;
function f() {
console.log(a);  
var a = 2;
}
f()
//->undefined
```
```js
//对原始值添加属性时会临时转换为Object，操作完成后立即被丢弃
var a = 10;
a.pro = 10;
console.log(a.pro + a); //undefined+10
//->NaN
var s = 'hello';
s.pro = 'world';
console.log(s.pro + s);
//->undefinedhello
```
```js
var a = 100;
function fn() {
  var b = 30;
  function bar() {
      console.log(a + b);
      console.log(this.b); 
  }
  return bar;
}
var x = fn(),
b = 400;
x();
//->130
//->unfeined
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
原型链
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
for(let val in obj) {
    console.log(val)
}
//枚举出的是键值
//-> b c a 
//Symbol不会被枚举
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
This 指向
```js
var name = '123';
var obj = {
    name: '456',
    getName: function(){
        function printName(){
            console.log(this.name);
        }
        printName();
    }
}

obj.getName(); //getName没有绑定this,printName将使用全局this
//->123
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