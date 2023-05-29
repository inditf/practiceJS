function PromiseAll(promiseArray) {    //返回一个Promise对象
    return new Promise((resolve, reject) => {//Promise的构造函数接收一个函数作为参数，该函数的两个参数分别是resolve和reject。
        if (!Array.isArray(promiseArray)) {                        //传入的参数是否为数组
            return reject(new Error('传入的参数不是数组！'))    //不是数组，返回reject状态
        }
        const res = []  //用于存放每个Promise对象的返回结果
        let counter = 0;                        //设置一个计数器，用于判断所有的Promise是否都执行完毕
        promiseArray.forEach((p, i) => {    //遍历传入的Promise数组
            Promise.resolve(p).then(value => {//将数组中的每个Promise对象都用Promise.resolve()包装一下，使其变成一个Promise对象
                //调用then方法,将每个Promise对象的返回结果存放到res数组中
                counter++;                 //每个Promise执行完毕，计数器加1
                res[i] = value//将执行完毕的Promise对象的返回结果存放到res数组中对应的位置
                if (counter === promiseArray.length) {
                    resolve(res)    //当所有的Promise都执行完毕时，返回resolve状态,并将res数组作为参数传递出去
                }
            }).catch(e => reject(e))    //只要有一个Promise执行失败，就返回reject状态,并将失败的原因返回
        })
    })
}
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p1')
    }, 1000)
})
const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p2')
    }, 2000)
})
const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('p3')
    }, 3000)
})
const test = PromiseAll([p1, p2, p3])
    .then(res => console.log(res))
    .catch(e => console.log(e))
console.log(test);
// Promise { <pending> }
// [ 'p1', 'p2', 'p3' ]