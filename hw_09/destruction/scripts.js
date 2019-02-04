// destruction
// task 1

function func(first, ...other) {
    return {first, other}
}
func('a', 'b', 'c', 'd');


// task 2

const organisation = {
    name: 'Google',
    info: {employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']}
}

function getInfo({name = 'Unknown', info} = {name, info}) {
    const [name1, name2] = info.partners;
    return console.log('Name: ' + name + '\n' + 'Partners: ' + name1 + ', ' + name2)
}

getInfo(organisation);