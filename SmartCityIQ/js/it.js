function loginIT() {
    let user = document.getElementById("it-user").value;
    let pass = document.getElementById("it-pass").value;

    if (user === "" || pass === "") {
        alert("يرجى إدخال اسم مستخدم وكلمة مرور");
        return;
    }

    // بيانات تسجيل دخول IT (مؤقت لحين الربط مع قاعدة البيانات)
    if (user === "it" && pass === "1234") {
        window.location.href = "it-dashboard.html";
    } else {
        alert("بيانات تسجيل الدخول غير صحيحة");
    }
}
/* ===================================
    مصفوفة مؤقتة لحفظ الحسابات
=================================== */
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

/* ===================================
    إضافة حساب جديد
=================================== */
function addAccount() {
    let user = document.getElementById("acc-username").value;
    let pass = document.getElementById("acc-password").value;
    let role = document.getElementById("acc-role").value;

    if (user === "" || pass === "") {
        alert("يرجى ملء كل الحقول");
        return;
    }

    accounts.push({ user, pass, role });

    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("تم إضافة الحساب بنجاح!");

    loadAccounts();
}

/* ===================================
    تحميل كل الحسابات في الجدول
=================================== */
function loadAccounts() {
    let table = document.querySelector("#accounts-table tbody");
    table.innerHTML = "";

    accounts.forEach((acc, index) => {
        table.innerHTML += `
            <tr>
                <td>${acc.user}</td>
                <td>${acc.role === "employee" ? "موظف" : "مدير"}</td>

                <td>
                    <button class="it-edit" onclick="editAccount(${index})">تعديل</button>
                </td>

                <td>
                    <button class="it-delete" onclick="deleteAccount(${index})">حذف</button>
                </td>
            </tr>
        `;
    });
}

/* ===================================
    حذف حساب
=================================== */
function deleteAccount(i) {
    if (confirm("هل أنت متأكد من حذف هذا الحساب؟")) {
        accounts.splice(i, 1);
        localStorage.setItem("accounts", JSON.stringify(accounts));
        loadAccounts();
    }
}

/* ===================================
    تعديل حساب
=================================== */
function editAccount(i) {
    let newUser = prompt("اسم المستخدم الجديد:", accounts[i].user);
    let newPass = prompt("كلمة المرور الجديدة:", accounts[i].pass);

    if (newUser && newPass) {
        accounts[i].user = newUser;
        accounts[i].pass = newPass;
        localStorage.setItem("accounts", JSON.stringify(accounts));
        loadAccounts();
    }
}

/* ===================================
    تسجيل دخول IT
=================================== */
function loginIT() {
    let user = document.getElementById("it-user").value;
    let pass = document.getElementById("it-pass").value;

    if (user === "it" && pass === "1234") {
        window.location.href = "it-dashboard.html";
    } else {
        alert("بيانات IT غير صحيحة");
    }
}