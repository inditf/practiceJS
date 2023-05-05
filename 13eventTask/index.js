
//TODO:实现购物清单的添加和删除

function addItemToList() {
    const input = document.querySelector('#item-name').value;
    if (input === '') {
        alert('请输入内容');
        return false;
    }
    else {
        document.querySelector('#item-name').value = '';
    }
    const list = document.querySelector('#shopping-list');
    const newLi = document.createElement('li');
    const newP = document.createElement('p');
    newP.appendChild(document.createTextNode(input));
    const newButton = document.createElement('button');
    newButton.appendChild(document.createTextNode('删除'));
    list.appendChild(newLi);
    newLi.appendChild(newP);
    newLi.appendChild(newButton);
    // newButton.addEventListener('click', (event) => removeItemFromList(event));//创建时绑定

}

function removeItemFromList(event) {
    const list = document.querySelector('#shopping-list');
    const li = event.target.parentNode;
    list.removeChild(li);
}
document.querySelector('.btn-default').addEventListener('click', () => addItemToList());
//事件委托方式绑定
const list = document.querySelector('#shopping-list');
list.addEventListener('click', (event) => {
    // console.log(event.target);
    // console.log(event.target.tagName);
    if (event.target.tagName === 'BUTTON') {
        removeItemFromList(event);
    }
});