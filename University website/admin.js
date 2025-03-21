document.addEventListener("DOMContentLoaded", function () {

    // Admin Login
    const adminLoginForm = document.getElementById("adminLoginForm");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let username = document.getElementById("adminUsername").value;
            let password = document.getElementById("adminPassword").value;
            
            if (username === "admin" && password === "admin123") {
                localStorage.setItem("userRole", "admin");
                alert("Login Successful!");
                window.location.href = "admin.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }

    // Admin Panel - Manage Students & Faculty
    const manageStudentsBtn = document.getElementById("manageStudents");
    const manageFacultyBtn = document.getElementById("manageFaculty");
    const dataContainer = document.getElementById("dataContainer");
    const registrationForms = document.getElementById("registrationForms");
    const formTitle = document.getElementById("formTitle");
    const roleInput = document.getElementById("role");

    if (manageStudentsBtn) {
        manageStudentsBtn.addEventListener("click", function() {
            dataContainer.innerHTML = `
                <h3>Student List</h3>
                <ul id="studentList"></ul>
                <button id="addStudent">Add Student</button>
            `;

            document.getElementById("addStudent").addEventListener("click", function() {
                registrationForms.style.display = "block";
                formTitle.innerText = "Register New Student";
                roleInput.value = "Student";
            });
        });
    }

    if (manageFacultyBtn) {
        manageFacultyBtn.addEventListener("click", function() {
            dataContainer.innerHTML = `
                <h3>Faculty List</h3>
                <ul id="facultyList"></ul>
                <button id="addFaculty">Add Faculty</button>
            `;

            document.getElementById("addFaculty").addEventListener("click", function() {
                registrationForms.style.display = "block";
                formTitle.innerText = "Register New Faculty";
                roleInput.value = "Faculty";
            });
        });
    }

    // Registration Form Submission
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let role = document.getElementById("role").value;

            let listId = role === "Student" ? "studentList" : "facultyList";
            let listElement = document.getElementById(listId);

            if (listElement) {
                let newItem = document.createElement("li");
                newItem.textContent = ${name} (${email});
                listElement.appendChild(newItem);
            }

            alert(${role} registered successfully!);
            registrationForms.style.display = "none";
            registrationForm.reset();
        });
    }

    // Logout
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            localStorage.removeItem("userRole");
            alert("Logged out successfully!");
            window.location.href = "admin-login.html";
        });
    }
});