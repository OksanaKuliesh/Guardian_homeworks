//1
const getRandomArray = (length, min, max) => {
    let randomArr = [];
    for (let i = 1; i <= length; i++) {
        let randNum = Math.floor(Math.random() * (max + 1 - min) + min);
        randomArr.push(randNum);
    }
    return randomArr;
}
console.log(getRandomArray(5, 1, 10));


//2
const filterEvenNumbers = (...numbers) => numbers.filter(num => {
    if (num % 2 !== 0) {
        return num;
    }
});
console.log(filterEvenNumbers(1, 3, 4, 10, 8, 12, 23));


//3
const countPositiveNumbers = (...numbers) => numbers.filter((num) => num > 0).length;
console.log(countPositiveNumbers(1, -1, 2, 4, -5, 6, 8, -1));


//4
const getDividedByFive = (...numbers) => numbers.filter((num) => (num % 5 === 0));
console.log(getDividedByFive(1, 3, 4, 10, 23, 15, 55));


//5
const getAverage = (...numbers) => numbers.reduce((acc, curEl) => acc + ~~curEl, 0) / numbers.length;
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


//6
const replaceBadWords = (string) => {
    const strToArr = string.split(' ').map(elem => {
        const badWords = /fuck|shit/i;
        if (elem.match(badWords)) {
            return elem.replace(badWords, '****');
        } else {
            return elem;
        }
    });
    return strToArr.join(' ');
}
console.log(replaceBadWords('Holy fucking shit!'));