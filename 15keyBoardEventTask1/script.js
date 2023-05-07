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
