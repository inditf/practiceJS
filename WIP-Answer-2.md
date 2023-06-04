# 来练练手？（WIP）
## 简答
### React
#### 1. `Hooks`用过吗？聊聊`React`中`class组件`和`函数组件`的区别？
  `class组件`是`React`初始时提供的组件，`函数组件`是`React 16.8`时提供的组件，`函数组件`可以使用`hooks`，`class组件`不能使用`hooks`。   
  目前`React`官方推荐使用`函数组件`，因为`函数组件`的性能比`class组件`的代码量少，性能好，可读性好。    
  1.  `class组件`和`函数组件`的区别：    
    1. `class组件`有状态,`函数组件`中不能拥有自己的状态`(state)`。在`hooks`之前函数组件是无状态的，都是通过`props`来获取父组件的状态，但是`hooks`提供了`useState`来维护函数组件内部的状态。    
    2. `class组件`有生命周期，并且较为复杂，`函数组件`没有生命周期，提供`useEffect`聚合了多个生命周期函数。   
    3. `class组件`逻辑难以复用，`函数组件`逻辑易于复用，`hooks`提供了`useMemo`和`useCallback`来缓存函数和函数的返回值，提供了`useContext`来共享状态。  
    4. 在`class组件`中，必须搞清楚`this`的指向到底是谁，所以需要花很多的精力去处理`this`指向，而在`函数组件`中，不需要关心`this`指向，因为`函数组件`中没有`this`。    
  2. 原生`hooks`函数：
  - `useState`，用于在函数组件中使用state
  - `useEffect` `useLayoutEffect`，用于在函数组件中使用生命周期
  - `useMemo`，用于缓存函数的返回值
  - `useCallback`，用于缓存函数
  - `useContext`，用于在函数组件中使用context
  - `useReducer`，用于在函数组件中使用reducer
  - `useRef` `useImperativeHandle`，用于在函数组件中使用ref
  - `useDebugValue`，用于在函数组件中使用调试值
  3. 代码示例
  ```js
  // class组件
  class App extends React.Component {//1.继承React.Component
    constructor(props) {//2.构造函数
      super(props)      //3.调用父类的构造函数
      this.state = {    //4.初始化state
        count: 0
      }
    }
    render() {  //5.渲染函数
      return (
        <div>
          <p>{this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
        </div>
      )
    }
  }
  ```
  ```js
  // 函数组件
  function App() {//1.创建函数组件
    const [count, setCount] = useState(0)//2.使用useState来维护state
    return (//3.返回jsx
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    )
  }
  ```
#### 2. 介绍一下React 生命周期
[React 生命周期查询](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)  
`生命周期`是`class组件`从创建到销毁的过程，生命周期分为四个阶段：`挂载阶段`，`更新阶段`，`卸载阶段`，`错误处理`。  
`函数组件`没有`生命周期`，但是可以使用`useEffect`来模拟生命周期,是更彻底的状态驱动抽象，只有一个状态，`React`负责同步到`DOM`。
![](./生命周期.awebp)
  1. 挂载阶段  
  由于`React`是基于`Virtual DOM`的，所以在挂载阶段，`React`会先创建一个`Virtual DOM`，然后将`Virtual DOM`转换成`DOM`，最后将`DOM`插入到`DOM`树中。 
     - `constructor`，构造函数，初始化`state`和`props`，绑定`this`。
     - `getDerivedStateFromProps`，从`props`中获取`state`，在`render`之前调用。
     - `render`，渲染函数，返回`jsx`。
     - `componentDidMount`，组件挂载完成，可以在这里进行`DOM`操作。
  1. 更新阶段  
  更新阶段分为两个阶段，`props`更新和`state`更新，`props`更新会触发`getDerivedStateFromProps`，`state`更新会触发`shouldComponentUpdate`，`render`，`getSnapshotBeforeUpdate`，`componentDidUpdate`。 
     - `shouldComponentUpdate`,返回`true`或者`false`，返回`true`表示组件需要更新，返回`false`表示组件不需要更新，不需要更新的话，后面的生命周期函数就不会执行了。
     - `getSnapshotBeforeUpdate`,在`render`之后，`DOM`更新之前调用，可以在这里获取`DOM`更新之前的`DOM`状态。
  1. 卸载阶段  
  卸载阶段只有一个生命周期函数，`componentWillUnmount`，组件卸载之前调用，可以在这里进行一些清理操作。
  1. 错误处理  
   错误处理分为两个阶段，`componentDidCatch`和`getDerivedStateFromError`，`getDerivedStateFromError`在`render`之前调用，`componentDidCatch`在`render`之后调用。  

#### 3. 介绍一下`React`中的`state`和`props`
  `state`是组件对内的接口，`props`是组件对外的接口。
  1. `state`
  - `state`是组件内部的状态，只能在组件内部使用
  - `state`是可变的，可以通过`setState`来改变`state`
  - `state`是私有的，不能被其他组件访问
  2. `props`
  - `props`是组件的属性，可以在组件内部使用
  - `props`是只读的，不能通过`props`来改变组件的属性，接收新的`props`，旧的`props`就会被抛弃  
  - `props`是可以被其他组件访问的

#### 4. 有常用的`React Hooks`吗？介绍一下
  1. `useState`
  - `useState`是react提供的一个hook，用来在函数组件中使用`state`
  - `useState`接收一个参数，这个参数是`state`的初始值
  - `useState`返回一个数组，数组的第一个元素是`state`的值，第二个元素是一个函数，用来改变`state`的值
    ```js
    const [count, setCount] = useState(0)
    ```
  2. `useEffect`
  - `useEffect`是`react`提供的一个`hook`，用来在函数组件中使用生命周期
  - `useEffect`接收一个函数，这个函数会在组件`挂载完成后`，`组件更新完成后`，`组件卸载前`执行
  - `useEffect`还可以接收第二个参数，这个参数是一个数组，数组的元素是`state`，当`state`发生改变时，`useEffect`才会执行,如果不传第二个参数，`useEffect`会在每次组件更新完成后执行
    ```js
    useEffect(() => {
      console.log('组件挂载完成')
      return () => {
        console.log('组件卸载前执行')
      }
    }, [])
    ```
  3. `useMemo`
  - `useMemo`用来缓存函数的返回值
  - `useMemo`接收一个函数和一个数组，当数组的元素发生改变时，`useMemo`才会执行
  - `useMemo`返回一个值，这个值是函数的返回值
    ```js
    const count = useMemo(() => {
      return 1 + 1
    }, [])
    ```
  4. `useCallback`
  - `useCallback`用来缓存函数
  - `useCallback`接收一个函数和一个数组，当数组的元素发生改变时，`useCallback`才会执行
  - `useCallback`返回一个函数
    ```js
    const fn = useCallback(() => {
      console.log('fn')
    }, [])
    ```
  5. `useContext`
  - `useContext`用来在函数组件中使用`context`，实现跨层级传值
  - `useContext`接收一个`context`对象，返回`context`对象的`value`
    ```js
    const value = useContext(context)
    ```
  6.  `useReducer`
  - `useReducer`用来在函数组件中使用`reducer`,实现复杂的`state`逻辑
  - `useReducer`接收一个`reducer`函数和一个初始值，返回一个数组，数组的第一个元素是`state`，第二个元素是`dispatch`
    ```js
    const [state, dispatch] = useReducer(reducer, initialState)
    ```
  7. `useRef`
  - `useRef`用来在函数组件中使用ref,实现获取`dom元素`，`保存变量`等功能
  - `useRef`接收一个参数，这个参数是`ref`的初始值
  - `useRef`返回一个对象，这个对象的`current`属性是`ref`的值
    ```js
    const ref = useRef(null)
    ```
  8. `useImperativeHandle`
  - `useImperativeHandle`是`react`提供的一个`hook`，用来在函数组件中使用`ref`,实现父组件调用子组件的方法
  - `useImperativeHandle`接收一个`ref`和一个函数，这个函数返回一个对象，这个对象的属性会被挂载到`ref`的`current`属性上
    ```js
    useImperativeHandle(ref, () => {
      return {
        fn() {
          console.log('fn')
        }
      }
    })
    ```
  9. `useLayoutEffect`
  - `useLayoutEffect`用来在函数组件中使用生命周期,和`useEffect`的区别是，`useLayoutEffect`会在`组件挂载完成后`，`组件更新完成后`执行
  - `useLayoutEffect`接收一个函数，这个函数会在组件挂载完成后执行，组件更新完成后执行
  - `useLayoutEffect`还可以接收第二个参数，这个参数是一个数组，数组的元素是`state`，当`state`发生改变时，`useLayoutEffect`才会执行
    ```js
    useLayoutEffect(() => {
      console.log('组件挂载完成')
      return () => {
        console.log('组件更新完成')
      }
    }, [])
    ```
  10. `useDebugValue`
  - `useDebugValue`用来在react开发者工具中显示自定义的hook的标签,方便调试
  - `useDebugValue`接收一个参数，这个参数是自定义的标签
    ```js
    useDebugValue('自定义标签')
    ```
#### 5. 使用`Hooks`有什么限制条件吗？
  1. 仅在函数组件和自定义`hooks`函数中调用`hooks`函数
  2. 仅在顶层调用`Hooks`函数：  
  不能在循环语句，条件语句，或者嵌套函数中调用`Hooks`函数，因为整个`Hooks`函数很可能依赖调用顺序，这样`react`才能在组件不同的渲染周期中，把相同的逻辑关联起来，一旦`Hooks`函数不在顶层调用那么很有可能在组件的不同渲染周期中，他们调用顺序发生变化，进而导致各种`bug`:
#### 6. `useEffect()`的作用
  1. `useEffect()`是react提供的一个hook，用来在函数组件中使用生命周期，处理副作用
  2. `useEffect()`接收一个函数，这个函数会在组件挂载完成后执行，组件更新完成后执行，组件卸载前执行
  3. `useEffect()`还可以接收第二个参数，这个参数是一个数组，数组的元素是`state`，当`state`发生改变时，`useEffect()`才会执行

#### 7. 介绍一下`虚拟dom`？
  1. `虚拟dom`是`react`提供的一个概念，用来描述`真实dom`的`js对象`, `虚拟dom`是`react`的核心，`react`通过`虚拟dom`和`diff算法`来实现页面的渲染。
  2. `diff算法`的原理是通过`新旧虚拟dom`的对比，找出需要更新的`dom`，然后更新`dom`，这样就可以实现页面的局部更新，提高页面的渲染性能
  3. `虚拟dom`的好处是通过`diff算法`可以实现页面的局部更新，提高页面的渲染性能
  4. `虚拟dom`的缺点是会占用一定的内存，但是不会影响页面的性能
  5. `虚拟dom`是一个`js`对象，它有三个属性，type，props，children
     1. type是一个字符串，表示dom的类型，比如div，span，p
     2. props是一个对象，表示dom的属性，比如id，className，style
     3. children是一个数组，表示dom的子元素，比如div的子元素是span、p
   
  ```js
  const element = {
    type: 'div',
    props: {
      id: 'app',
      className: 'container',
      style: {
        color: 'red'
      }
    },
    children: [
      {
        type: 'span',
        props: {
          className: 'title'
        },
        children: [
          {
            type: 'text',
            props: {
              textContent: 'hello'
            }
          }
        ]
      }
    ]
  }
  ```
  
#### 8. `useMemo()`和`useCallback()`有什么区别？
  1. `useMemo()`用来缓存函数的返回值,`useCallback()`用来缓存函数。
  2. `useMemo()`接收一个函数和一个数组，当数组的元素发生改变时，`useMemo()`才会执行。`useCallback()`接收一个函数和一个数组，当数组的元素发生改变时，`useCallback()`才会执行。
  3. `useMemo()`返回一个值，对应函数的返回值。`useCallback()`返回一个函数。
  ```js
  const [count, setCount] = useState(0)
  const [name, setName] = useState('jack')
  const double = useMemo(() => {
    console.log('double')
    return count * 2
  }, [count])//当count发生改变时，double才会执行
  const handleClick = useCallback(() => {
    console.log('click')
  }, [name])//当name发生改变时，handleClick才会执行
  //->当count发生改变时，double才会执行，当name发生改变时，handleClick才会执行
  ```

## 看程序说结果
### 异步任务
#### 异步代码运行机制
1. 所有同步任务都在主线程上执行，形成一个执行栈
2. 主线程之外，还存在一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件
3. 一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列，看看里面有哪些事件，那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行
4. 主线程不断重复上面的第三步
#### 运行顺序
```
┌──────────────────────┐
│      同步代码         │
└──────────────────────┘
           ↓
┌──────────────────────┐
│     微任务队列        │ ←--
└──────────────────────┘    |
           ↓                |   
┌──────────────────────┐    |
│       宏任务          │ ---    
└──────────────────────┘

```
#### 1.
```js
setTimeout(() => {
  console.log(0)//5.宏任务
  Promise.resolve().then(() => console.log(1))//6.微任务
})
setTimeout(() => console.log(2))
Promise.resolve().then(() => {
  console.log(3)//2.微任务
  Promise.resolve().then(() => console.log(4))//4.微任务
})

Promise.resolve().then(() => console.log(5))//3.微任务

console.log(6)//1.同步任务

setTimeout(() => {
  console.log('quick timer')
}, 0)//7.宏任务
```
```
6
3
5
4
0
1
2
quick timer
``` 
#### 2.
```js
console.log(1)//1.同步代码，立即执行
setTimeout(() => {
    console.log(2)//8.异步代码，宏任务，等待主线程空闲时执行
}, 0)
async function echo() {
    console.log(5)//2.同步代码，立即执行
    await Promise.resolve()
    console.log(6)//5.异步代码，微任务，等待主线程空闲时执行
}
echo()
requestAnimationFrame(() => {
    console.log(8)//7.异步代码，宏任务，等待主线程空闲时执行
})
new Promise((resolve) => {
    console.log(3)//3.同步代码，立即执行
    resolve()
}).then(() => {
    console.log(4)//6.异步代码，微任务，等待主线程空闲时执行
})
console.log(7)//4.同步代码，立即执行
// 1 5 3 7 6 4 2 8
```
```
1
5
3
7
6
4
8
2
```
#### 3.
```js
const pro = new Promise((resolve, reject) => {
    const innerpro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1); // 7.无法输出，因为 pro 已经解决了，不会再执行回调函数
        }, 0);// 6.异步代码，放入宏任务队列中
        console.log(2); // 1.打印 2，同步代码
        resolve(3); // 解决 innerpro，将回调函数放入微任务队列中
    });
    innerpro.then(res => console.log(res)); // 4.打印 3，异步代码，放入微任务队列中
    resolve(4); // 解决 pro，将回调函数放入微任务队列中
    console.log("pro"); // 2.打印 'pro'，同步代码
})
pro.then(res => console.log(res)); // 5.打印 4，异步代码，放入微任务队列中
console.log("end"); // 3.打印 'end'，同步代码

```
```js
2
pro
end
3
4
```
#### 4.
```js
async function async1() {
        console.log('async1 start'); //3.输出async1 start，同步代码
        await async2();             //4.输出async2，同步代码
        console.log('asnyc1 end');  //7.输出asnyc1 end,异步代码,微任务队列
}
async function async2() {
        console.log('async2');
}
console.log('script start');//1.输出script start，同步代码
setTimeout(() => {          //2.异步代码，放入宏任务队列中
        console.log('setTimeOut');//9.输出setTimeOut，宏任务
}, 0);                        
async1();                     
new Promise(function (reslove) {
        console.log('promise1');//5.输出promise1，同步代码
        reslove();              
}).then(function () {            //6.异步代码，放入微任务队列中
        console.log('promise2');//8.输出promise2，微任务
})
console.log('script end');    //7.输出script end，同步代码
```
```js
script start
async1 start
async2
promise1
script end
asnyc1 end
promise2
setTimeOut
```
#### 5.
```js
setTimeout(function () {//8.宏任务
  console.log('setTimeout1');//9.同步代码，立即执行
  new Promise(function (resolve) {
    console.log('promise0');//10.同步代码，立即执行
    resolve()
  }).then(function () {
    console.log('settimeout promise resolveed');//11.异步代码，微任务
  })
});
setTimeout(function () {//12.宏任务
  console.log('setTimeout2');//13.同步代码，立即执行
});
const P = new Promise(function (resolve) {
  console.log('promise');//1.同步代码，立即执行
  for (var i = 0; i < 10000; i++) {
    if (i === 10) {
      console.log('for');//2.同步代码，立即执行
    }
    if (i === 9999) {
      resolve('resolve');
    }
  }
}).then(function (val) {
  console.log('resolve1');//5.异步代码，微任务
}).then(function (val) {
  console.log('resolve2');//7.异步代码，微任务
});
new Promise(function (resolve) {
  console.log('promise2');//3.同步代码，立即执行
  resolve('resolve');
}).then(function (val) {
  console.log('resolve3');//6.异步代码，微任务
})
console.log('console');//4.同步代码，立即执行
```
```
promise
for
promise2
console
resolve1
resolve3
resolve2
setTimeout1
promise0
settimeout promise resolveed
setTimeout2
```

## 手撕代码
### 4. 实现深拷贝
1. 递归  
   使用递归的方式实现深拷贝，对于对象的每一层都会重新创建一个对象，并且拷贝属性，会忽略undefined、symbol、函数。
   ```js
    function deepClone(obj) {
      if (typeof obj !== 'object' || obj == null) {
        return obj
      }
      let result
      if (obj instanceof Array) {
        result = []
      } else {
        result = {}
      }
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = deepClone(obj[key])
        }
      }
      return result
    }
    // test
    const obj = {
      age: 20,
      name: 'xxx',
      address: {
        city: 'beijing'
      },
      arr: ['a', 'b', 'c']
    }
    const obj2 = deepClone(obj)
    obj2.address.city = 'shanghai'
    console.log(obj.address.city) // beijing
    ```
2. JSON.parse(JSON.stringify())  
   使用JSON.stringify将对象转成字符串，再通过JSON.parse将字符串转成新的对象，会忽略undefined、symbol、函数。
   ```js
    function deepClone(obj) {
      const _obj = JSON.stringify(obj)
      const objClone = JSON.parse(_obj)
      return objClone
    }
    // test
    const obj = {
      age: 20,
      name: 'xxx',
      address: {
        city: 'beijing'
      },
      arr: ['a', 'b', 'c']
    }
    const obj2 = deepClone(obj)
    obj2.address.city = 'shanghai'
    console.log(obj.address.city) // beijing
    ```
3. Object.create(), Object.getOwnPropertyDescriptors()  
  使用 Object.create() 创建一个新对象，使用 Object.getOwnPropertyDescriptors() 把原对象的所有属性拷贝到新对象，最后返回新对象。
   ```js
    function deepClone(obj) {
      const objClone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
      return objClone
    }
    // test
    const obj = {
      age: 20,
      name: 'xxx',
      address: {
        city: 'beijing'
      },
      arr: ['a', 'b', 'c']
    }
    const obj2 = deepClone(obj)
    obj2.address.city = 'shanghai'
    console.log(obj.address.city) // beijing
   ```
4. lodash.cloneDeep()  
   使用 lodash 的深拷贝方法 cloneDeep,较为推荐。
   ```js
    const _ = require('lodash')
    function deepClone(obj) {
      const objClone = _.cloneDeep(obj)
      return objClone
    }
    // test
    const obj = {
      age: 20,
      name: 'xxx',
      address: {
        city: 'beijing'
      },
      arr: ['a', 'b', 'c']
    }
    const obj2 = deepClone(obj)
    obj2.address.city = 'shanghai'
    console.log(obj.address.city) // beijing
   ```

### 5. 手写一个方法实现 new 操作
1. 创建一个空对象
2. 链接到原型
3. 绑定 this
4. 返回新对象
  ```js
  function create() {
    // 创建一个空对象
    let obj = new Object()
    // 获得构造函数
    let Con = [].shift.call(arguments)
    // 链接到原型
    obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
  }
  //test
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  Person.prototype.sayName = function () {
    console.log('my name is ' + this.name)
  }
  let person1 = create(Person, 'Tom', 18)
  person1.sayName() // my name is Tom
```