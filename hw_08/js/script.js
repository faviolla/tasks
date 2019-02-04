// task 1

let btn = document.getElementById('btn-msg');
btn.addEventListener('click', function() {
    alert(this.dataset.text);
});

// task 2

btn.addEventListener('mouseover', function() {
    this.classList.add('red');
});

btn.addEventListener('mouseout', function() {
    this.classList.remove('red');
});

// task 3

let tag = document.getElementById('tag');

document.addEventListener('click', function(e) {
    tag.innerHTML = 'Tag: ' + e.target.tagName;
})

// task 4

let btnGenerate = document.getElementById('btn-generate'),
    list = document.querySelector('ul'),
    count = list.childElementCount;

btnGenerate.addEventListener('click', function() {
    count += 1;
    addingItemsList(count);
})

function addingItemsList(i) {
    list.insertAdjacentHTML('beforeend', '<li>Item ' + parseInt(i) + '</li>');
}
