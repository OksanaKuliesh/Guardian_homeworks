const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};
//1
function getMyTaxes(salary) {
    return this.tax * salary;
}
console.log('In this country you\'ll pay: ' + getMyTaxes.call(ukraine, 2000) + ' USD');

//2
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(litva));

//3
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(latvia));

//4
function getMySalary() {
    const interval = setInterval(() => {
        const min = 1500;
        const max = 2000;
        const object = {};
        object.salary = Math.floor(Math.random() * (max - min + 1) + min);
        object.tax = Math.floor(this.tax * object.salary);
        object.profit = object.salary - object.tax;
        console.log(object);
    }, 10000);
    setTimeout(function () {
        clearInterval(interval)
    }, 30000);
}

console.log(getMySalary.call(litva));