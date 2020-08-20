const person = { name: "Jack William", age: 17, job:"facebooker", gfName:"Ema watson", address:"kocu khet", phone:"0171347721092", friends: ['tom hanks', 'tom cruise', 'tom yarn,']}

const {phone} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger BAba'
    }
}

const {leader, address} = complexObject.info;

console.log(leader, address);
