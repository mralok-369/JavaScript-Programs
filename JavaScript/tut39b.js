// Pretend that this response is comming from the server
const students = [
    { name: 'harry', subject: 'JavaScript' },
    { name: 'Rohan', subject: 'Machine Learning' }
]

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log('student has been enrolled');
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })

}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('students has been fetched');
    }, 5000);
}

let newStudent = { name: "sunny", subject: 'Python' };
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as : resolve()
// function inside catch is ran as : reject()

// Quiz 
// write a program to use resolve and reject to make a Promise