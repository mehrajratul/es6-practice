// function doubleIt(num) {
//     return num * 2;                  [old method];
// }

// const doubleIt = function (num) {
//     return num*2                      [old method];
// }

const doubleIt = num => num * 2;    // arrow method to declare a function. and return
const add = (x, y) => x + y;
const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(23, 2);
const result2 = give5();
const result3 = doMath(7, 7);
console.log(result3);