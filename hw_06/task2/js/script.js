// task 1

function isParent(parent, child) {
    let pr = parent;
    return !!child.closest(parent.tagName);
}
isParent(document.body.children[0], document.querySelector('mark'));

// task 2
document.links

// task 3
document.body.querySelector('ul').previousElementSibling;
document.body.querySelector('ul').nextElementSibling;

// task 4
document.body.querySelectorAll('li').length