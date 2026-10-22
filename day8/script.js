let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let marks = document.getElementById("marks").value;

    if (name == "" || roll == "" || course == "" || marks == "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        course: course,
        marks: Number(marks)
    };

    students.push(student);

    showStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";
}

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

function showStudents() {

    let table = document.getElementById("studentList");

    table.innerHTML = "";


    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        table.innerHTML += `
            <tr>

                <td>${student.roll}</td>

                <td>${student.name}</td>

                <td>${student.course}</td>

                <td>${student.marks}</td>

                <td>${getGrade(student.marks)}</td>

                <td>

                    <button 
                        class="edit"
                        onclick="editStudent(${i})">
                        Edit
                    </button>

                    <button 
                        class="delete"
                        onclick="deleteStudent(${i})">
                        Delete
                    </button>

                </td>

            </tr>
        `;
    }

    document.getElementById("total").innerText = students.length;

    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum += students[i].marks;
    }

    if (students.length > 0) {
        let avg = sum / students.length;

        document.getElementById("average").innerText =
            avg.toFixed(2);
    }
    else {
        document.getElementById("average").innerText = "0";
    }
}

function deleteStudent(index) {

    students.splice(index, 1);

    showStudents();
}

function searchStudent() {

    let search = document
        .getElementById("search")
        .value
        .toLowerCase();


    let table = document.getElementById("studentList");

    table.innerHTML = "";


    for (let i = 0; i < students.length; i++) {

        let student = students[i];


        if (
            student.name.toLowerCase().includes(search) ||
            student.roll.toLowerCase().includes(search)
        ) {

            table.innerHTML += `
                <tr>

                    <td>${student.roll}</td>

                    <td>${student.name}</td>

                    <td>${student.course}</td>

                    <td>${student.marks}</td>

                    <td>${getGrade(student.marks)}</td>

                    <td>
                        <button class="edit">
                            Edit
                        </button>

                        <button 
                            class="delete"
                            onclick="deleteStudent(${i})">
                            Delete
                        </button>
                    </td>

                </tr>
            `;
        }
    }
}

function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("roll").value = student.roll;
    document.getElementById("course").value = student.course;
    document.getElementById("marks").value = student.marks;

    students.splice(index, 1);

    showStudents();
}