/*
 * @Author: YangLin 
 * @Date: 2023-05-11 09:26:30 
 * @Last Modified by: YangLin
 * @Last Modified time: 2023-05-12 14:46:37
 */
console.log("Task1");
const bankAcount = {
    name: "name",
    balance: 0,
    rank: 0,
    interestRatePercent: 0,
    deposit: function (amount) {
        this.balance += amount;
    },
    withdraw: function (amount) {
        this.balance -= amount;
    },
    printAccountInof: function () {
        return this.interestRatePercent;
    }
};
bankAcount.deposit(100);
console.log("您的存款总值：" + bankAcount.balance);
bankAcount.withdraw(50);
console.log("您的存款总值：" + bankAcount.balance);
console.log("您的银行利率为：" + bankAcount.printAccountInof() + "%");
//Task2
console.log("Task2");
let shoppingList = {
    hamburger: 12,
    milk: 5,
    orange: 25,
    banana: 49,
    ipad: 10111,
};

/**
 * @description 获取购物清单所有的商品
 * @method getKeys
 * @param {Object} obj 对象
 * @return {Array} 返回包含对象所有键名的数组
 */
function getKeys(obj) {
    let newArry = Object.keys(shoppingList);
    return newArry;
}
console.log(getKeys(shoppingList));
/**
 * @description 获取购物清单所有商品的价格
 * @method getVals
 * @param {Object} obj 对象
 * @return {Array} 返回包含对象所有键值的数组
 */
function getVals(obj) {
    let newArry = Object.values(obj);
    return newArry;
}
console.log(getVals(shoppingList));

/**
 * @description 计算购物清单总价
 * @method sumshoppingList
 * @param {Object} obj 对象
 * @return {Number} 返回购物清单的总价
 */
function sumshoppingList(obj) {
    let newArry = Object.values(obj);
    let sum = newArry.reduce((pre, cur) => {
        return pre + cur;
    });
    return sum;
}
console.log(sumshoppingList(shoppingList));

/**
 * @description 给购物清单排序
 * @method sortshoppingList
 * @param {Object} obj 对象
 * @param {Boolean} ascendingOrder 如果值为true，就从小到大排序，值为false，就从大到小排序
 * @return {Object} 返按从大到小或者从小到大规律排序的购物清单列表
 */
function sortshoppingList(obj, ascendingOrder) {
    let entries = Object.entries(obj);
    // Sort the array based on the values
    entries.sort((a, b) => {
        if (ascendingOrder) {
            // console.log("a-" + a);
            // console.log("b-" + b);
            return a[1] - b[1];
        } else {
            return b[1] - a[1];
        }
    });

    // Convert the sorted array back into an object
    let sortedObj = Object.fromEntries(entries);
    return sortedObj;
}
console.log(sortshoppingList(shoppingList, true));
console.log(sortshoppingList(shoppingList, false));

//Task3
console.log("Task3");
let num1 = 1;
let num2 = 0;

//使用解构赋值实现交换 num1，和 num2 的值
[num1, num2] = [0, 1];
console.log(num1, num2) // - > 0 , 1
//使用解构赋值实现对象的解构
/*
 * 解构要求
 * name 属性赋值给变量 name。
 * years 属性赋值给变量 age。
 * math 属性复制给变量 mathScore。
 * chemistry 属性复制给变量 chemistryScore。
 * biology 属性复制给变量 biologyScore。
 * sport 属性复制给变量 hobby1。
 * dance 属性复制给变量 hobby2。
 * marriageStaus 属性赋值给变量 marriageStaus（如果属性缺失则取默认值 false）
 */

let person = {
    name: "Amy",
    years: 30,
    score: {
        math: 99,
        chemistry: 80,
        biology: 78,
    },
    hobbies: ["sport", "dance"],
};

let {
    name: name,
    years: age,
    score: {
        math: mathScore,
        chemistry: chemistryScore,
        biology: biologyScore,
    },
    hobbies: [hobby1, hobby2],
    marriageStaus = false,
} = person;
console.log(name); // Amy
console.log(age); // 30
console.log(mathScore); // 99
console.log(chemistryScore); // 80
console.log(biologyScore); // 78
console.log(hobby1); // sport
console.log(hobby2); // dance
console.log(marriageStaus); // false

//Task4
console.log("Task4");
//对象引用和复制
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function deepClone(src) {
    let clone = src;
    if (src && typeof src === "object") {
        clone = Object.prototype.toString.call(src) === "[object Array]" ? [] : {};
        for (let key in src) {
            if (src.hasOwnProperty(key)) {
                if (src[key] && typeof src[key] === "object") {
                    clone[key] = deepClone(src[key]);
                } else {
                    clone[key] = src[key];
                }
            }
        }
    }
    return clone;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = deepClone(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

//自测问题
//1.与原始类型相比，对象和它们的区别是什么？
//原始类型是简单的数据段，而对象是一组数据和/或功能。
//2.不用将代码粘贴到控制台中，能判断出这段代码的输出内容吗？
/* let a = {};
let b = a;
let c = {};

console.log(a == b);//->true
console.log(a === b);//->true
console.log(a == c);//->false
console.log(a === c);//->false */
//3.下面这段代码会输出什么内容？
/* let animal = { species: "fish" };
Object.assign(user, { species: "dog" });
console.log(animal.species); */
//4.什么是浅拷贝？什么是深拷贝？请说说它们的区别
//浅拷贝：只复制对象的第一层属性，如果属性是对象，只复制对象的引用，而不是对象的值。
//深拷贝：复制对象的所有层级的属性，包括对象的引用和值。
//5.下面这段代码输入什么结果？怎么将它修改正确?
function makeAccount() {
    return {
        name: "Amy",
        ref() {
            return this;
        }
    }
}

let user = makeAccount();

console.log(user.ref().name); //Amy


