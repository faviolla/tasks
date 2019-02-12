// task 1

function promiseCreator(time, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time)
    });
}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

// task 2

class Prom {
    constructor() {
        this.promise = new Promise((res, rej) => {
            this.res = res;
            this.rej = rej;
        });
    }
    reject(err) {
        this.rej(err);
    }
    resolve(val) {
        this.res(val);
    }
}
const inst = new Prom();
inst.promise.then(data => console.log(data));
inst.resolve('test 28 - resolve');

const inst2 = new Prom();
inst2.promise.catch(data => console.log(data));
inst2.reject('test 29 - reject');