// task 1

var p = document.querySelector('p').innerText;

// task 2
function getElementInfo(elem) {
    el = document.querySelector(elem);
    return { type: el.nodeType, name: el.nodeName, children: el.childElementCount };
}

getElementInfo('ul');

// task 3

let ul = document.querySelector('ul');
getTextFromUl(ul);

function getTextFromUl(ul) {
    let arrText = [];
    for (let el of ul.children) {
        arrText.push(el.textContent);
    }
    return arrText;
}

// task 4
// changingParagraphText();

function changingParagraphText() {
    let paragraph = document.querySelector('p');
    for (let elem of paragraph.childNodes) {
        elem.nodeValue = '-text-';
    }
}