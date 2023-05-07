const search = document.querySelector('#search');
const phonebook = document.querySelector('#phonebook');

search.addEventListener('keyup', (event) => {
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 37 && event.keyCode <= 40 || event.keyCode == 8) {
        const term = event.target.value.toLowerCase();
        const items = phonebook.querySelectorAll('li');
        Array.from(items).forEach(item => {
            const name = item.textContent;
            if (name.toLowerCase().indexOf(term) != -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    else {
        event.target.value = "";
        alert("Please enter a valid character");
    }

});

// 自测问题
// 1.event.key 和 event.code 有什么区别？
// event.key是按下的键的字符，event.code是按下的键的键码
// 2.当按下键盘时，会连续触发多个事件，说说是哪些事件，她们是按什么顺序触发？
// keydown, keypress, keyup
// 3.如果按下字符键不放，哪两个事件会被一直触发？
// keydown, keypress
// 4.如果按下非字符键不放，有几个事件会被一直触发？是哪些事件？
// 1个，keydown

