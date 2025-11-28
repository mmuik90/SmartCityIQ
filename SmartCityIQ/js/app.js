/* ============================
   تغيير التبويبات (مواطن / موظف / إدارة)
============================= */

function switchTab(tab) {
    // إخفاء كل النماذج
    document.getElementById("citizen-form").classList.remove("active");
    document.getElementById("employee-form").classList.remove("active");
    document.getElementById("admin-form").classList.remove("active");

    // إزالة Active من كل الأزرار
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(t => t.classList.remove("active"));

    // تفعيل التبويب المختار + النموذج
    if (tab === "citizen") {
        document.getElementById("citizen-form").classList.add("active");
        tabs[0].classList.add("active");
    }
    else if (tab === "employee") {
        document.getElementById("employee-form").classList.add("active");
        tabs[1].classList.add("active");
    }
    else if (tab === "admin") {
        document.getElementById("admin-form").classList.add("active");
        tabs[2].classList.add("active");
    }
}

/* ============================
   تسجيل دخول المواطن (مؤقت)
   — بعد ربط Firebase يصير حقيقي —
============================= */

function loginCitizen() {
    let email = document.getElementById("citizen-email").value;
    let pass = document.getElementById("citizen-password").value;

    if (email === "" || pass === "") {
        alert("الرجاء إدخال البريد وكلمة المرور");
        return;
    }

    // تحويل مؤقت
    window.location.href = "dashboard-citizen.html";
}

/* ============================
   تسجيل دخول الموظف (مؤقت)
============================= */

function loginEmployee() {
    let user = document.getElementById("employee-user").value;
    let pass = document.getElementById("employee-pass").value;

    if (user === "" || pass === "") {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور");
        return;
    }

    // لاحقاً: يتم التأكد من بيانات الموظف من Firebase IT
    window.location.href = "dashboard-employee.html";
}

/* ============================
   تسجيل دخول الإدارة (مدير النظام)
============================= */

function loginAdmin() {
    let user = document.getElementById("admin-user").value;
    let pass = document.getElementById("admin-pass").value;

    if (user === "" || pass === "") {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور");
        return;
    }

    // لاحقاً: يتم التأكد من بيانات المدير من Firebase IT
    window.location.href = "dashboard-admin.html";
}