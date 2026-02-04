/* ===============================
   GLOBAL FADE-IN ANIMATION
================================ */
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});


/* ===============================
   REGISTRATION PAGE LOGIC
================================ */
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const sport = document.getElementById("sport").value;

        let students = JSON.parse(localStorage.getItem("students")) || [];

        // prevent duplicate email
        const exists = students.some(s => s.email === email);
        if (exists) {
            alert("This email is already registered!");
            return;
        }

        students.push({ name, email, sport });
        localStorage.setItem("students", JSON.stringify(students));

        alert("Registration successful!");
        window.location.href = "students.html";
    });
}


/* ===============================
   STUDENTS PAGE LOGIC
================================ */
const studentTable = document.querySelector("#studentTable tbody");

if (studentTable) {
    loadStudents();
}

function loadStudents() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    studentTable.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.style.textAlign = "center";
        row.style.animation = "fadeIn 0.6s ease";

        row.innerHTML = `
            <td style="padding:12px;">${student.name}</td>
            <td>${student.email}</td>
            <td>${student.sport}</td>
            <td>
                <button class="btn" style="padding:8px 20px;"
                onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentTable.appendChild(row);
    });
}

function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}

function clearAll() {
    if (confirm("Are you sure you want to delete all students?")) {
        localStorage.removeItem("students");
        loadStudents();
    }
}


/* ===============================
   SMOOTH BUTTON HOVER EFFECT
================================ */
document.addEventListener("mouseover", e => {
    if (e.target.classList.contains("btn")) {
        e.target.style.transform = "scale(1.1)";
    }
});

document.addEventListener("mouseout", e => {
    if (e.target.classList.contains("btn")) {
        e.target.style.transform = "scale(1)";
    }
});

