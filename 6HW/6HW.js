const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
console.log(students[1].name);

//1

const getStudentsSubjects = (element) => {
    const subjects = Object.keys(element['subjects']);
    return subjects.map(element => (element.charAt(0).toUpperCase() + element.slice(1)).replace('_', ' '));
};
console.log(getStudentsSubjects(students[1]));

//2
const getAverageMark = (element) => {
    const marksArr = Object.values(element['subjects']).flat();
    const averageMark = marksArr.reduce((acc, curEl) => acc + curEl, 0) / marksArr.length;
    return +averageMark.toFixed(2);
};
console.log(getAverageMark(students[1]));


//3
const getStudentsInfo = (element) => {
    const {
        course,
        name
    } = element;
    return {
        course,
        name,
        averageMark: getAverageMark(element)
    };
};
console.log(getStudentsInfo(students[1]));


//4
const getStudentsNames = (obj) => {
    const studentsNames = obj.map(function (element) {
        return element.name
    });
    return studentsNames.sort();
};
console.log(getStudentsNames(students));


//5
const getBestStudent = function (students) {
    const bestStudent = students.reduce(function (acc, curEl) {
        return getAverageMark(acc) > getAverageMark(curEl) ? acc : curEl;
    });
    return bestStudent.name;
};
console.log(getBestStudent(students));


//6
const calculateWordLetters = (string) => {
    const strToArr = string.toLowerCase().split('');
    const calculated = {};
    strToArr.forEach(function (i) {
        calculated[i] = calculated[i] + 1 || 1
    });
    //for (var key in calculated)
    // console.log(key + ' : ' + calculated[key]);
    return calculated;
};
console.log(calculateWordLetters('yellow'));