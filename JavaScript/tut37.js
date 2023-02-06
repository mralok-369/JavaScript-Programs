console.log("callBack function in JS");

// Pretend that this response is comming from the server
const students = [
    { name: 'harry', subject: 'JavaScript' },
    { name: 'Rohan', subject: 'Machine Learning' }
]

function enrollStudent(student, callBack) {
    setTimeout(function () {
        students.push(student);
        console.log('student has been enrolled');
        callBack();
    }, 3000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('students has been fetched');
    }, 1000);
}

let newStudent = { name: "sunny", subject: 'Python' };
enrollStudent(newStudent, getStudents);
// getStudents();