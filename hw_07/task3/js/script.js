// task 1
let list = document.querySelector('ul'),
    li = document.createElement('li'),
    strong = document.createElement('strong'),
    img = document.createElement('img');

addingItemsList(5);

function addingItemsList(elements) {
    let beginItemsCount = list.childElementCount;

    for (let i = 0; i < elements; i++) {
        list.insertAdjacentHTML('beforeend', '<li class="new-item">item ' + parseInt(i + beginItemsCount + 1) + '</li>');
    }
}

// task 2

list.querySelectorAll('a').forEach(function(el) {
    return el.appendChild(document.createElement('strong'));
});

// task 3

document.body.insertAdjacentHTML('afterbegin', '<img src="https://newevolutiondesigns.com/images/freebies/cat-wallpaper-preview-4.jpg" alt="image">');

// task 4

let mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend','green');
mark.classList.add('green');

// task 5

sortingList();

function sortingList() {
    let listChild = list.children,
        itemsArr = [];

    for (let el in listChild) {
        if (listChild[el].nodeType == 1) {
            itemsArr.push(listChild[el]);
        }
    }
    itemsArr.sort(function(a, b) {
        return (b.innerHTML - a.innerHTML) ? 0 : (b.innerHTML > a.innerHTML ? 1 : -1);
    })
    for (let i = 0; i < itemsArr.length; ++i) {
        list.appendChild(itemsArr[i]);
    }
}