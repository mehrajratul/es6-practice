function add(num1, num2 = 0) {
    // if(num2 == undefined){       [alternative way to define num2 if not given]
    //     num2 == 0;
    // }

    // num2 = num2 || 0;            [alternative way to define num2 if not given]
    return num1 + num2;
}

const total = add(15);
console.log(total);