async function f() {
    let promise = new Promise((resolve, reject) => {
        console.log("promise started");
        setTimeout(() => resolve("done!"), 1000)
    });
    console.log("before await");
    let result = await promise;
    console.log(result);
}

f();
