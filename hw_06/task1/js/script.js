// task 1

console.log(document.head);

//task 2

console.log(document.body);

//task 3

console.log(document.body.children);

//task 4

console.log(document.body.querySelector('div'));

// task 4.1

console.log(document.body.querySelector('div').children);

// task 4.2

let firstDiv = document.body.querySelector('div').children, 
    collection = [];

for (let i = 1; i < firstDiv.length - 1; i++) {
    collection.push(firstDiv[i]);
}

console.log(collection);