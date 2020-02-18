//1

function getMaxDigit(num) {
    let result = 0;
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        let digit = i % 10;
        if (result < digit)
            result = digit;
    }
    return result;
}


//2
function getPow(num, exp) {
    let result = 1;
    for (let i = 1; i <= exp; i++) {
        result *= num;
    }
    return result;
}


//3
function editName(name) {
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}


//4
function findPureSalary(salary) {
    const tax1 = (salary / 100) * 18;
    const tax2 = (salary / 100) * 1.5;
    const pureSalary = salary - tax1 - tax2;
    return pureSalary;
}


//5
function convertMoney(string) {
    let result = 'We don\'t have a result for you(((';
    const exRate = 24;
    let lowStr = string.toLowerCase();
    if (lowStr.endsWith('uah') === true) {
        let sum = lowStr.replace('uah', '');
        let converted = +sum / exRate;
        result = 'Your result is: ' + converted + ' USD';
    } else if (string.endsWith('$') === true) {
        let sum = string.replace('$', '');
        converted = sum * exRate;
        result = 'Your result is: ' + converted + ' UAH';
    } else {
        console.log('Wrong currency!Improve currency, please');
    }
    return result;
}

//6
const isPlndrm = string => string.toLowerCase().split('').reverse().join('') === string.toLowerCase();

console.log(`Function №1: ${getMaxDigit (123456789)}
 Function №2: ${getPow (2,5)}
 Function №3: ${editName ('jeOfrey')}
 Function №4: ${findPureSalary (1000)}
 Function №5: ${convertMoney ('12000 UAH')}
 Function №6: ${isPlndrm('MaDam')}`);