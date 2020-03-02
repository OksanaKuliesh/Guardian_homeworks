class Student {
    constructor(fullName, course, university, marksArr) {
        this.fullName = fullName;
        this.course = course;
        this.university = university;
        this.marksArr = marksArr;
        this.dismissed = false;
    }

    getInfo() {
        if (this.dismissed) {
            return null;
        } else {
            return this.course + '-th course student, of ' + this.university + ', ' + this.fullName;
        }
    }

    get marks() {
        if (this.dismissed) {
            return null;
        } else if (this.marksArr !== undefined) {
            return this.fullName + ': ' + this.marksArr;
        } else {
            console.log('Sorry this student doesn\'t have any marks, yet!');
        }
    }

    set mark(mark) {
        if (this.dismissed) {
            return null;
        } else {
            this.marksArr.push(mark);
        }
    }

    getAverageMark() {
        if (this.dismissed) {
            return null;
        } else {
            return +(this.marksArr.reduce((acc, curEl) => acc + curEl, 0) / this.marksArr.length);
        }
    }

    dismiss() {
        this.dismissed = true;
        return 'This student dismissed!';
    }

    recover() {
        this.dismissed = false;
        return 'This student recovered!';
    }
}
class BudgetStudent extends Student {
    constructor(fullName, course, university, marksArr, scholarship) {
        super(fullName, course, university, marksArr);
        this.scholarship = scholarship;
    }
    getScholarship() {
        if ((this.getAverageMark()) >= 4 && !this.dismissed) {
            this.scholarship = true;
            return 'Congratulations! You got a scholarship in the amount of 1400 UAH';
        } else {
            this.scholarship = false;
            return 'Sorry, you don\'t have a scholarship(((';
        }
    }
}


let andrew = new Student('Andrew Andrewson', 5, 'Harvard University', [2, 3, 5, 4])
let ivan = new BudgetStudent('Ivan Ivanov', 4, 'Oxford University', [4, 3, 5, 5, 5]);

console.log(andrew);
console.log(andrew.getInfo());
console.log(andrew.marks);
andrew.mark = 5;
console.log(andrew.marks);
console.log('The average mark is: ' + andrew.getAverageMark());
console.log(andrew.dismiss());
console.log(andrew.getInfo());
console.log(andrew.recover());
console.log(andrew.getInfo());
console.log('The average mark is: ' + ivan.getAverageMark());
console.log(ivan.getScholarship());
console.log(ivan.getInfo());