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
// TODO: 实现检索功能
/**
 * @param {string} day
 * @param {Array} data
 */
const query = (day, data) => {
    let queryData = [];
    for (let i = 0; i < data.length; i++) {
        let dataArr = data[i].split("-");
        let dataDay = dataArr[0].trim().toLowerCase();
        let dataNum = parseInt(dataArr[1].trim().toLowerCase().replace("ml", ""));
        if (dataDay == day.trim().toLowerCase()) {
            queryData.push(dataDay + " - " + dataNum + "ml");
        }
    }
    return queryData;

};

// 测试用例
console.log(query(" Tuesday   ")); // ["Tuesday - 100ml","Tuesday - 330ml"]
console.log(query("Friday")); // ["Friday - 500ml"]
