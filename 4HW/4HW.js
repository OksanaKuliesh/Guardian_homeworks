const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

console.log(marks);


//1
const getPairs = (arr) => {
    let studentsPairs = [
        [arr[0], arr[3]],
        [arr[1], arr[5]],
        [arr[4], arr[2]]
    ];
    return studentsPairs;
};
const pairs = getPairs(students);
console.log(pairs);


//2
const getPairTheme = (arr1, arr2) => {
    let pairTheme = [
        [arr1[0], arr2[0]],
        [arr1[1], arr2[1]],
        [arr1[2], arr2[2]]
    ];
    return pairTheme;
};
const pairsThems = getPairTheme(pairs, themes);
console.log(pairsThems);


//3
const getStudentsMarksArr = (arr1, arr2) => {
    let studentsMarks = [];
    for (let i = 0; i < arr1.length; i++) {
        studentsMarks.push([arr1[i], arr2[i]]);
    }
    return studentsMarks;
}
const studentsMarksArr = getStudentsMarksArr(students, marks);
console.log(studentsMarksArr);


//4.1
const getRandomMark = (arr) => {
    let randMarksArr = [];
    for (let i = 0; i < arr.length; i++) {
        let randMark = arr[Math.floor(Math.random() * (arr.length))];
        randMarksArr.push(randMark);
    }
    return randMarksArr;
}
const randomMark = getRandomMark(marks);
console.log(randomMark);


//4.2
const getPairsThemeMarks = (pairsThems) => {
    let pairThemeMark = [];
    for (let i = 0; i < pairsThems.length; i++) {
        pairThemeMark[i] = ([...pairsThems[i], randomMark[i]]);
    }
    return pairThemeMark;
}
const pairsThemeMarks = getPairsThemeMarks(pairsThems);
console.log(pairsThemeMarks);