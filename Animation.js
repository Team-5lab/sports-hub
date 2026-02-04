document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       REGISTER PAGE (register2.html)
       ============================ */

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const studentData = {
                name: document.getElementById("name").value,
                gmail: document.getElementById("gmail").value,
                department: document.getElementById("department").value,
                sport: document.getElementById("sports").value
            };

            const storedData = JSON.parse(localStorage.getItem("students")) || [];
            storedData.push(studentData);
            localStorage.setItem("students", JSON.stringify(storedData));

            alert("Registration Successful!");
            registerForm.reset();
        });
    }

    /* ============================
       ADMIN PAGE (admin.html)
       ============================ */

    const adminTableBody = document.getElementById("adminTable");

    if (adminTableBody) {
        const students = JSON.parse(localStorage.getItem("students")) || [];

        adminTableBody.innerHTML = ""; // clear old rows

        students.forEach((student, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.gmail}</td>
                <td>${student.department}</td>
                <td>${student.sport}</td>
            `;

            adminTableBody.appendChild(row);
        });
    }

});
