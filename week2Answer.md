## 学习内容：JS 变量、作用域与内存 + 基本引用类型
### Q：JavaScript 有哪些类型
JavaScript 中有八种基本的数据类型,前七种为基本数据类型，也称为原始数据类型，而 object 为复杂数据类型。
1. Number 类型 用于任何类型的数字：整数或浮点数，在 ±(2<sup>53</sup>-1) 范围内的整数。  
2. BigInt 类型 用于任意长度的整数。  
3. String 类型 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。  
4. Boolean 类型（逻辑类型） 用于 true 和 false。  
5. null 值 用于未知的值 —— 只有一个 null 值的独立类型。  
6. undefined 值 用于未定义的值 —— 只有一个 undefined 值的独立类型。  
7. Symbol 值 用于唯一的标识符。  
8. Object类型 一种非原始数据类型，用于更复杂的数据结构。  
### Q：基本类型和引用类型的区别
在JavaScript中，有两种类型：`基本类型`和`引用类型`。
1. `基础数据类型`：在存储时变量中存储的是值本身，占用空间固定，保存在栈中； 如 string ，number，boolean，undefined，null等
2. `引用数据类型`：存储时变量中存储的是地址，占用空间不固定，保存在堆中；
如 Object、Array、Function等
### Q：如何判断变量类型
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
### Q：var let const的区别
var、let和const都是用来声明变量的关键字。它们之间的主要区别在于`作用域`和`变量提升`。  
1. `作用域`：var声明的变量属于函数作用域，而let和const声明的变量属于块级作用域。块级作用域是指在花括号内部的区域，例如if语句或循环语句。这意味着在使用let或const声明的变量只能在它们被定义的块级作用域内访问。  
2. `变量提升`：var存在变量提升现象，而let和const没有此类现象。这意味着可以在声明之前使用var声明的变量，但不能使用let或const声明的变量。    

var变量可以重复声明，而在同一块级作用域，let变量不能重新声明，const变量不能修改。
### Q：解释一下作用域
作用域是指变量、函数和对象的可访问性。在JS中，有两种作用域类型：`全局作用域`和`局部作用域`。  
1. `全局作用域`:指整个程序中都可以访问的变量或者不使用var声明的变量。
2. `局部作用域`:指在函数内部声明的变量，只能在函数内部访问。  

作用域的边界是以函数划分。每个函数创建一个新的作用域。这意味着在函数内部定义的变量从函数外部是不可访问的。
### Q：const 定义的值一定不能改变吗？
const 定义的值不能通过重新赋值（即使用赋值运算符）来更改，也不能重新声明（即通过变量声明）  
const 声明的限制只适用于它指向的变量的引用。  
const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。