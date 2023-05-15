## 学习内容：JS 函数 + 期约与异步函数  
### Q：箭头函数和普通函数的区别
1.  定义方式不同  
箭头函数比普通函数更加简洁，没有`function`关键字，可以没有`return`关键字、大括号。
```js
// 箭头函数
let fn = (name) => {return `Hello ${name} !`};
// 普通函数
let fn = function (name) {
    return `Hello ${name} !`;
};
```
2.  this指向不同  
箭头函数和普通函数的区别主要在于`this`的指向。  
箭头函数没有原型`prototype`，也不会创建自己的`this`，它只会从自己的作用域链的上一层继承`this`。
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
由于箭头函数的this是继承而来的，因此无法直接修改  
3. 箭头函数不能作为构造函数使用
```js
const test = () => { };
let obj = new test(); // error: test is not a constructor
```
### Q：说说闭包    
`闭包是指一个函数可以记住其外部变量并可以访问这些变量。`  
通常，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。  
创建闭包最常见方式，就是在一个函数内部创建另一个函数。
```js
function fn() {
    let a = 1;
    function f() {
        console.log(a);
    }
    return f;
}
let fn1 = fn();//调用fn()，返回f()函数
fn1();  // 回溯到fn()的作用域，输出1
fn1 = null;//解除对f()的引用，f()的作用域被销毁,释放对闭包的引用
```
闭包的作用域链包含着它自己的作用域，以及包含它的函数的作用域和全局作用域。  
<strong>`闭包的作用`</strong>
1.  读取函数内部的变量  
在函数外部无法读取函数内的局部变量，但是闭包可以做到。
```js
function fn() {
    let a = 1;
    function f() {
        console.log(a);
    }
    return f;
}
let fn1 = fn();
fn1();  // 回溯到fn()的作用域，输出1
```
2.  让变量的值始终保持在内存中
```js
function fn() {
    let a = 1;
    function f() {
        a++;
        console.log(a);
    }
    return f;
}
let fn1 = fn();
fn1();  // 回溯到fn()的作用域，输出2
fn1();  // 回溯到fn()的作用域，输出3
```
3.  封装对象的私有属性和私有方法
```js
function Person(name) {
    let _name = name;
    this.getName = function () {
        return _name;
    }
    this.setName = function (name) {
        _name = name;
    }
}
let p = new Person('Tom');
console.log(p.getName());   // 'Tom'
p.setName('Jack');
console.log(p.getName());   // 'Jack'
```
类是有行为的数据，闭包是有数据的行为。  

<strong>`闭包的缺陷`</strong>  
闭包会使得函数中的变量都被保存在内存中，内存消耗很大，使用不当很容易造成内存泄露。  
### Q：手写 Promise all  
  