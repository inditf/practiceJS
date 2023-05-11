/*
 * @Author: YangLin 
 * @Date: 2023-05-11 09:15:39 
 * @Last Modified by: YangLin
 * @Last Modified time: 2023-05-11 09:17:34
 */
//Task1
console.log("Task1");
let scores = ["88", "90", "100", "45", "60", "98", "32", "99", "80"];
/**
 * @description 计算学生的总分数
 * @param {array} scores
 * @return {number} 学生的总分数
 */
function getTotalScore(scores) {
    let sum = 0;
    scores.forEach(score => {
        sum += parseInt(score);
    })
    return sum;
}

/**
 * @description 获得学生的平均分
 * @param {array} scores
 * @return {number} 学生的平均分
 */
function getAverageScore(scores) {
    let sum = getTotalScore(scores);
    return sum / scores.length;
}

/**
 * @description 获得挂科的分数
 * @param {array} scores
 * @return {array} 返回没有及格的分数
 */
function getFailScores(scores) {
    let failScores = [];
    failScores = scores.filter(score => {
        return score < 60;
    });
    return failScores;
}

/**
 * @description 获得加五分之后的成绩单，如果加五分之后，分数超过了100，就取100分
 * @param {array} scores
 * @return {array} 新的成绩单
 */
function getAddFiveScores(scores) {
    let newScores = [];
    newScores = scores.map(score => {
        if (parseInt(score) + 5 > 100) {
            return "100";
        } else {
            return "" + (parseInt(score) + 5);
        }
    });
    return newScores;
}

/**
 * @description 计算学生奖学金
 * @param {array} scores
 * @return { number} 奖学金
 */
function getPrize(scores) {
    const prize = scores.filter(score => {
        return score >= 90;
    }
    );
    return prize.length * 100;
}
//测试样例
console.log(getTotalScore(scores));
console.log(getAverageScore(scores));
console.log(getFailScores(scores));
console.log(getAddFiveScores(scores));
console.log(getPrize(scores));

//任务二
console.log("Task2");
// 实现两个数组拼接,返回一个新数组
function arrJoin(arr1, arr2) {
    let newArr = [];
    newArr = arr1.concat(arr2);
    return newArr;
}
//测试用例
console.log(arrJoin(['1', '2', '3'], ['3', '6', '1'])); //-> ['1', '2', '3', '3', '6', '1']

// 利用reduce()实现两个数组归并
function arrMerge(arr1, arr2) {
    let newArr = arrJoin(arr1, arr2);
    // console.log(newArr);
    newArr = newArr.reduce((pre, cur) => {
        if (typeof pre == "string") {
            // console.log("pre is string " + pre + " cur is " + typeof cur + " " + cur)
            return [pre, cur];
        }
        else {
            // console.log("pre is  " + (typeof pre) + " " + pre + " cur is " + typeof cur + " " + cur);
            if (pre.indexOf(cur) == -1) {
                return pre.concat(cur);
            }
            else {
                return pre;
            }
        }
    }
    );
    return newArr;
}

//测试用例
let arr1 = ['1', '2', '3'];
let arr2 = ['3', '6', '1']
console.log(arrMerge(arr1, arr2));// -> ['1', '2', '3', '6']

// 封装数组去重函数,去除数组中重复的元素,
Array.prototype.norepeat = function () {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//测试用例
let arr = ['a', 'ab', 'a'];
console.log(arr.norepeat());// -> ['a', 'ab']

// 实现方法检测数组是否包含特定值
function inArray(arry, value) {
    if (arry.indexOf(value) == -1) {
        return false;
    } else {
        return true;
    }
}

//测试用例
arr = ['a', 'ab', 'a'];
console.log(inArray(arr, 'b'));// -> false
console.log(inArray(arr, 'a'));// -> true

// 实现多维数组变为一维数组
function matrixElements(arr) {
    let newArr = [];
    newArr = arr.reduce((pre, cur) => {
        console.log(pre);
        return pre.concat(cur);
    });
    return newArr;
}

//测试用例
let rows = [[2, 3, 5], [1, 2, 4], [8, 5, 5]]
console.log(matrixElements(rows)) //[2,3,5,1,2,4,8,5,5]

//任务三
console.log("Task3");
//编码实现数组和对象的相互转换
var scoreObject = {
    Tony: {
        Math: 95,
        English: 79,
        Music: 68,
    },
    Simon: {
        Math: 100,
        English: 95,
        Music: 98,
    },
    Annie: {
        Math: 54,
        English: 65,
        Music: 88,
    },
};


//实现对象转换为数组
function objToArr(obj) {
    var arr = [];
    var keys = Object.keys(obj);
    keys.forEach(key => {
        var temp = [];
        temp.push(key);
        var values = Object.values(obj[key]);
        values.forEach(value => {
            temp.push(value);
        });
        arr.push(temp);
    });
    return arr;
}
console.log(objToArr(scoreObject));
//实现数组转换为对象
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

//实现数组转换为对象
function arrToObj(arr) {
    var obj = {};
    arr.forEach(item => {
        var temp = {};
        temp.id = item[0];
        temp.name = item[1];
        temp.parentId = item[2];
        obj[item[0]] = temp;
    });
    return obj
}

console.log(arrToObj(menuArr));
