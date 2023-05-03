
// 世界卫生组织建议以身体质量指数（Body Mass Index, BMI）來衡量肥胖程度，
// 请你使用 JavaScript 根据人的身高和体重计算出 BMI 值.
console.log("Task1");
function calculateBMI(height, weight) {
    return Math.round(weight / (height * height));
}
console.log(calculateBMI(1.75, 70)); //-> 23

// 1.满 300 减 30，满 200 减 10，满 100 减 5.
// 2.会员打 9.8 折
// 3.当两个优惠条件都满足时，就先打 9.8 折，再进行满减
/**
 * @method calculateSum
 * @param {number }price 打折钱的总消费额
 * @param {Boolean}vip 是否为 vip
 * @return {number} 返回打折后的总金额
 */
console.log("Task2");
function calculateSum(price, vip) {
    if (vip) {
        price = price * 0.98;
    }
    if (price >= 300) {
        return price - 30;
    }
    else if (price >= 200) {
        return price - 20;
    }
    else if (price >= 100) {
        return price - 10;
    }
    else {
        return price;
    }
}
console.log(calculateSum(300, false)); //-> 270
console.log(calculateSum(300, true)); //-> 274


//封装实现函数，判断参数是否为数字类型
console.log("Task3");
/**
 * @description 实现判断参数是否为合法的数字类型，如何是返回 ture ，如果不是 返回 false。
 * @method isNumeric
 * @param num 任意数据类型的变量
 * @return {Boolean} 如何是数字类型返回 ture ，如果不是 返回 false。
 */
function isNumeric(num) {
    if (typeof num == "number")
        return true;
    else
        return false;
}
//测试用例
console.log(isNumeric("0")); // ->false
console.log(isNumeric(0)); // ->true
console.log(isNumeric(null)); // ->false
console.log(isNumeric("")); // ->false
console.log(isNumeric(" ")); // ->false
//完成一些判空的小练习
console.log("Task4");
/*
实现一个判断传入的参数是否为 undefined 类型
返回一个布尔值，如果是undefied 为true，否之，为fase
*/
function isUndefined(arg) {
    if (typeof arg == "undefined")
        return true;
    else
        return false;
}

/*
实现一个判断传入的参数是否为 null 类型
返回一个布尔值，如果是null 为true，否之，为fase
*/
function isNull(arg) {
    if (arg == null)
        return true;
    else
        return false;
}

// 测试用例
var expUndefined = undefined;
var expNull = null;
var expZero = 0;
var a;
var o = new Object();
console.log(isUndefined(expUndefined)); // ->true
console.log(isUndefined(expNull)); // ->false
console.log(isUndefined(a)); // ->true
console.log(isUndefined(o)); // ->true
console.log(isNull(expUndefined)); // ->false
console.log(isNull(expNull)); // ->true
console.log(isNull(expZero)); // ->false
console.log(isNull(a)); // ->false
console.log(isNull(o)); // ->false
/** 自测问题
    Q:JavaScript 中的数据类型有哪些？
    七种基本数据类型：Undefined、Null、Boolean、Number、String、Symbol（ES6 新增）、BigInt（ES10 新增）
    除了这七种基本数据类型之外，其他的都是对象类型，包括数组、函数、正则、日期、数学等等。
    Q:说说 undefined，null，NAN 之间的区别。
    undefined：表示未定义，是一个变量，只声明未赋值，或者赋值为 undefined
    null：表示一个空值或不存在的对象引用。它通常用于表示一个变量应该没有任何值。
    NaN：表示非数字，是一个数字类型，表示非数字
    Q：请问console.log("Hello World" % 4)会输出什么内容？
    => NaN
    Q:什么情况下 JavaScript 会发生隐式转换？请解释是如何转换
        隐式类型转换通常发生在比较或计算不同类型的值时。
    1.当使用==运算符比较两个不同类型的值时，JavaScript会尝试将它们转换为相同的类型，然后再进行比较。
    例如，当您比较一个字符串和一个数字时，JavaScript会尝试将字符串转换为数字，然后再进行比较。
    2.当对非布尔值进行逻辑运算（如&&、||或!）时，JavaScript会将其转换为布尔值。
    例如，if语句测试一个非布尔值时，JavaScript会将其转换为布尔值，然后再进行测试。
    3.当对非数字值进行数学运算（如加法、减法、乘法或除法）时，JavaScript会将其转换为数字。
    例如，一个字符串和一个数字相加时，JavaScript会尝试将字符串转换为数字，然后再进行加法运算。
    Q:下面代码将在控制台中输出什么内容 ?
    console.log("Hello Word + 1 + 2");
    => Hello Word + 1 + 2
    那这段代码将又将在控制台中输出什么内容
    console.log("Hello Word " + 1 + 2);
    => Hello Word 12
    Q:var、let、const 有什么区别?
    1.var：用于声明一个变量，它的作用域是函数作用域或全局作用域。
    使用var声明的变量会发生变量提升，即在执行代码之前，变量声明会被移动到它所在作用域的顶部。
    2.let：用于声明一个块级作用域的变量。
    与var不同，使用let声明的变量不会发生变量提升，它只能在声明之后使用。
    3.const：与let类似，用于声明一个块级作用域的常量。
    与let不同，使用const声明的常量必须在声明时初始化，并且不能再次赋值。
    Q:请解释变量提升现象？以及如何避免
    变量提升是指在 JavaScript 代码执行过程中，JavaScript 引擎把变量的声明部分和函数的声明部分提升到代码开头的“行为”。
    var：声明的变量会进行变量提升
    let：声明的变量不会进行变量提升
    const：声明的变量不会进行变量提升，且声明的变量不允许修改
    为了避免变量提升，可以使用 let 或 const 声明变量，使用 function 声明函数。
    Q:name和NAME是同一个变量吗？
    不是，JavaScript 是区分大小写的
 **/