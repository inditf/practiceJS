const search = document.querySelector('#search');
const phonebook = document.querySelector('#phonebook');

search.addEventListener('input', function () {
    const term = this.value.toLowerCase();
    const items = phonebook.querySelectorAll('li');
    Array.from(items).forEach(function (item) {
        const name = item.textContent;
        if (name.toLowerCase().indexOf(term) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

function checkKey(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode == 8) {
        return true;
    } else {
        return false;
    }
}