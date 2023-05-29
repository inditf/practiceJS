function useEffect(callback, depArray) {
    const hasNoDeps = !depArray;  // 检查是否提供了依赖数组
    const deps = depArray || [];  // 如果没有提供依赖数组，则使用空数组
    const hasChangedDeps = deps ? !deps.every((el, i) => el === depArray[i]) : true;
    // 如果没有提供依赖数组或依赖数组中的元素发生了变化，则执行回调函数
    if (hasNoDeps || hasChangedDeps) {
        callback();
    }
}
//test
useEffect(() => {
    console.log('useEffect');
},)
//count发生变化时，才会执行回调函数