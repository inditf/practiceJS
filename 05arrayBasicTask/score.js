
/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
    let html = '';
    rows.forEach(function (row) {
        const newTr = document.createElement('tr');
        const newTd1 = document.createElement('td');
        const newTd2 = document.createElement('td');
        newTd1.textContent = row[0];
        newTd2.textContent = row[1];
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        html += newTr.outerHTML;
    });
    return html
}
/**
 * @description 返回第一名列表 html 字符串 
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows) {
    const first = rows[0];
    const newLi = document.createElement('li');
    newLi.textContent = `第一名：${first[0]}，分数：${first[1]}`;
    return newLi.outerHTML;
}

/**
 * @description 返回最后一名列表 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows) {
    const last = rows[rows.length - 1];
    const newLi = document.createElement('li');
    newLi.textContent = `最后一名：${last[0]}，分数：${last[1]}`;
    return newLi.outerHTML;
}

/**
 * @description 返回平均分 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows) {
    let sum = 0;
    let average = 0;
    rows.forEach(row => {
        sum += parseInt(row[1]);
        // console.log(sum);
    })
    average = sum / rows.length;
    const newLi = document.createElement('li');
    newLi.textContent = `平均分:${average}分`;
    return newLi.outerHTML;

}
//自测问题
// 如果使用 const 定义了数组，那您还能改变数组吗？
//可以
// 下面会在控制台打印什么结果？
const arr = [1, 2, 13, 15];
arr.push(20);
console.log(arr);
// -> [1, 2, 13, 15, 20]
// 下面 logGrades 函数会返回 10 还是 20 ?
function logGrades(grades) {
    grades.forEach(function (grade) {
        console.log(grade);
        return 10;
    });
    return 20;
}
//->20
// 在 forEach 循环中的 return 语句不会影响 logGrades 函数的返回值，它只会结束当前迭代。