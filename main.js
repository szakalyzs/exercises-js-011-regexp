'use strict';

const regExp = {
    rules : {
        creditCard: /^(\d{4} ){3}\d{4}$/,
        ipAdress: /^(\d{1,3}.){3}\d{1,3}$/,
        macAdress: /^([0-9ABCDEF]{2}-){5}[0-9ABCDEF]{2}$/       //összevontan
    },
    validate(text, pattern) {
        return text.match(this.rules[pattern]) ? true : false;
    }
}

console.log(regExp.validate('5412 3661 1708 9901', 'creditCard'));
console.log(regExp.validate('192.168.0.12', 'ipAdress'));
console.log(regExp.validate('A0-FF-5D-88-B0-2C', 'macAdress'));