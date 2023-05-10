//编码实现字符串连接,完成函数 concatString，实现两个字符串的连接。
function concatString(firstStr, lastStr) {
    return firstStr + " " + lastStr;
}

// 测试用例
console.log(concatString("Jennie", "Kim")); // "Jennie Kim"
console.log(concatString("Congratulation！", "you are the winner")); // "Congratulation！，you are the winner"
//运用字符串插值完成函数 sayHi，使其将参数变量名插入到字符串中"Hello, name"。
/**
 * @param {string} name
 */
function sayHi(name) {
    return "Hello, " + name;
}
//测试用例
console.log(sayHi("Amy")); // "Hello, Amy"

console.log("Task1");
/**
 * @param {string} name
 */
const convertToSlug = (name) => {
    return name.toLowerCase().replaceAll(" ", "-");
};
// 测试用例
console.log(convertToSlug("to do list")); // "to-do-list"
console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"

console.log("Task2");
const data = [
    "monday - 500ml",
    "mONday - 330",
    "monday - 150ml",
    "Tuesday - 100ml",
    "Tuesday - 330ml",
    "weDnesDay - 230",
    "TursDAy - 330ml",
    "Friday - 500",
    "Saturday - 100ml",
    "sunday - 250",
    "sunday - 100ml",
];


const process = (data) => {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
        let dataArr = data[i].split("-");
        let dataDay = dataArr[0].trim().toLowerCase();
        dataDay = dataDay.replace(dataDay[0], dataDay[0].toUpperCase());
        let dataNum = parseInt(dataArr[1].trim().toLowerCase().replace("ml", ""));
        newData.push(dataDay + " - " + dataNum + "ml");
    }
    return newData;
}
console.log(process(data));

// TODO: 实现检索功能
/**
 * @param {string} day
 * @param {Array} data
 */
const query = (day) => {
    let newData = process(data);
    let result = [];
    day = day.replaceAll(" ", "");
    // console.log(day);
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].includes(day)) {
            result.push(newData[i]);
        }
    }
    return result;
};
console.log("TODO: 实现检索功能");
// 测试用例
console.log(query(" Tuesday   ")); // ["Tuesday - 100ml","Tuesday - 330ml"]
console.log(query("Friday")); // ["Friday - 500ml"]
/* 基于上一个任务检索出来的字符串结果，计算这一天的饮水总量，并且告知用户饮水是否达标。要求饮水 500ml 以上就算达标。
截取每一个字符串末尾数字内容（倒数第五位至倒数第三位）
计算数字总和（需要将字符串转换为数字类型）
如果饮水总量没有达到 500ml 就弹出信息您在星期 x 的饮水量没有达标！ ，否则就提示您在星期 x 的饮水量达标啦！ */
console.log("饮水提醒");
todooTips = (day) => {
    let newData = query(day);
    let sum = 0;
    for (let i = 0; i < newData.length; i++) {
        let num = parseInt(newData[i].slice(-5, -2));
        sum += num;
    }
    if (sum < 500) {
        console.log("您在星期" + day + "的饮水量没有达标！");
    }
    else {
        console.log("您在星期" + day + "的饮水量达标啦！");
    }

};

//Task3
console.log("Task3");
/**
 * @param {string} todos
 */
const getCountTodos = (todos) => {
    return todos.split(",").length;
};

// 测试用例
console.log(getCountTodos("Laundry, Wash dishes, Clean table")); // 3
console.log(getCountTodos("Feed cat, Degrease bike chain")); // 2
// 编码实现字符串去重函数 removeRepetition
/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            newStr += str[i];
        }
    }
    return newStr;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc
/**
* @@param {string} str
* @return {Boolean} 如果是返回 true，如果不是回文字符串 返回 false
*/
function isPalindromicString(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 测试用例
console.log(isPalindromicString("aaa")); // ->true
console.log(isPalindromicString("madam")); // ->true
console.log(isPalindromicString("hello")); // ->false

