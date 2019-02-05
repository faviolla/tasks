const url = 'https://jsonplaceholder.typicode.com';

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const httpClient = new CustomHttp();
let list = '';

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    let usersList = JSON.parse(response);

    for (let i in usersList) {
        list += `<li class="dropdown-item"><span class="name">${usersList[i].name}</span>
        <div class="user-info d-none">${JSON.stringify(usersList[i])}</div>
        </li>`
    }
    document.querySelector('div').innerHTML += '<ol>' + list + '</ol>';
    showingInfo();
});

function showingInfo() {
    let dropItem = document.querySelectorAll('.dropdown-item');

    for ( let i = 0; i < dropItem.length; i++) {
        dropItem[i].addEventListener('click', function() {
            this.querySelector('.user-info').classList.toggle('d-none');  
        }) 
    }
}