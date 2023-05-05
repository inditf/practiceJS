const form = document.querySelector('body');
form.addEventListener('submit', e => {
    e.preventDefault();
});
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const repasswordInput = document.querySelector('#repassword');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

nameInput.addEventListener("focus", (event) => {
    event.target.style.border = "3px solid blue";
    if (nameInput.parentNode.lastChild.tagName != "P") {
        const newP = document.createElement("p");
        nameInput.parentNode.appendChild(newP);
    }
    nameInput.parentNode.lastChild.textContent = "必填,长度为4-16个字符";
});
nameInput.addEventListener("blur", (event) => {
    event.target.style.border = "3px solid red";
    nameInput.parentNode.lastChild.textContent = "名称不能为空";

});
passwordInput.addEventListener("focus", (event) => {
    event.target.style.border = "3px solid blue";
    if (passwordInput.parentNode.lastChild.tagName != "P") {
        const newP = document.createElement("p");
        passwordInput.parentNode.appendChild(newP);
    }
    passwordInput.parentNode.lastChild.textContent = "必填,长度为4-16个字符";
});
passwordInput.addEventListener("blur", (event) => {
    event.target.style.border = "3px solid red";
    passwordInput.parentNode.lastChild.textContent = "密码不能为空";
});

repasswordInput.addEventListener("focus", (event) => {
    event.target.style.border = "3px solid blue";
    if (repasswordInput.parentNode.lastChild.tagName != "P") {
        const newP = document.createElement("p");
        repasswordInput.parentNode.appendChild(newP);
    }
    repasswordInput.parentNode.lastChild.textContent = "再次输入相同密码";
});
repasswordInput.addEventListener("blur", (event) => {
    event.target.style.border = "3px solid red";
    repasswordInput.parentNode.lastChild.textContent = "密码必须与上一次相同";
});
emailInput.addEventListener("focus", (event) => {
    event.target.style.border = "3px solid blue";
    if (emailInput.parentNode.lastChild.tagName != "P") {
        const newP = document.createElement("p");
        emailInput.parentNode.appendChild(newP);
    }
    emailInput.parentNode.lastChild.textContent = "选填,请输入邮箱";
});
emailInput.addEventListener("blur", (event) => {
    event.target.style.border = "3px solid red";
    emailInput.parentNode.lastChild.textContent = "邮箱格式不正确";
});
phoneInput.addEventListener("focus", (event) => {
    event.target.style.border = "3px solid blue";
    if (phoneInput.parentNode.lastChild.tagName != "P") {
        const newP = document.createElement("p");
        phoneInput.parentNode.appendChild(newP);
    }
    phoneInput.parentNode.lastChild.textContent = "选填,请输入手机号";
});
phoneInput.addEventListener("blur", (event) => {
    event.target.style.border = "3px solid red";
    phoneInput.parentNode.lastChild.textContent = "手机号格式不正确";
});



/* form.addEventListener("focus", (event) => {
    console.log(event.target.tagName + "focus");
    event.target.style.border = "2px solid green";
    event.target.style.backgroundColor = "yellow";
});
form.addEventListener("blur", event => {
    console.log(event.target.tagName + "blur");
    event.target.style.border = "";
    event.target.style.backgroundColor = "";
}); */
