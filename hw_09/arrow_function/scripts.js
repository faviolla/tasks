// part 2 (arrow function)

const sum = (...props) => {
    const params = Array.prototype.slice.call(props);
    if (!params.length) return 0;
    return params.reduce((prev, next) =>  prev + next);
}
sum();
sum(1, 2, 3, 4);