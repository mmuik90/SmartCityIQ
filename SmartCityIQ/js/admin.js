/* ================================
   تحميل بيانات المدير
================================ */

function loadAdminDashboard() {
    loadStats();
    loadComplaintsAdmin();
    loadEmployeesAdmin();
    loadAdminsAdmin();
}


/* ================================
   الإحصائيات
================================ */

function loadStats() {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    document.getElementById("stat-complaints").textContent = complaints.length;
    document.getElementById("stat-employees").textContent =
        accounts.filter(a => a.role === "employee").length;
    document.getElementById("stat-admins").textContent =
        accounts.filter(a => a.role === "admin").length;
}


/* ================================
   عرض الشكاوى
================================ */

function loadComplaintsAdmin() {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    let table = document.querySelector("#admin-complaints tbody");

    table.innerHTML = "";

    complaints.forEach((c, index) => {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${c.name}</td>
                <td>${c.type}</td>
                <td>${c.details}</td>
                <td>${c.status}</td>
            </tr>
        `;
    });
}


/* ================================
   عرض الموظفين
================================ */

function loadEmployeesAdmin() {
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let table = document.querySelector("#admin-employees tbody");

    table.innerHTML = "";

    accounts
        .filter(a => a.role === "employee")
        .forEach(acc => {
            table.innerHTML += `
                <tr>
                    <td>${acc.user}</td>
                    <td>موظف</td>
                </tr>
            `;
        });
}


/* ================================
   عرض المدراء
================================ */

function loadAdminsAdmin() {
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let table = document.querySelector("#admin-admins tbody");

    table.innerHTML = "";

    accounts
        .filter(a => a.role === "admin")
        .forEach(acc => {
            table.innerHTML += `
                <tr>
                    <td>${acc.user}</td>
                    <td>مدير</td>
                </tr>
            `;
        });
}