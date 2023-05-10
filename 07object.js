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
let num1 = 1
let num2 = 0

//your complement

console.log(num1, num2) // - > 0 , 1
