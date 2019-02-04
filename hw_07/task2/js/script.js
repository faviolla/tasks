// task 1

document.querySelector('ul').classList.add('list');

// task 2

let elem = document.querySelector('ul').nextElementSibling,
    i = 0;

while(elem.tagName !== 'A') {
    elem = elem.nextElementSibling;
    elem.id = 'link';
    i++;
}

// task 3

let elementsList = document.querySelector('ul').children;
for (let i = 0; i < elementsList.length; i+=2) {
    elementsList[i].classList.add('item');
}


// task 4
let links = document.links;
for (let el of links) {
    el.classList.add('custom-link');
}