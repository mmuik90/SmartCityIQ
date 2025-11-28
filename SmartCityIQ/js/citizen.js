/* ================================
    تسجيل المواطن (مؤقت)
    لاحقًا سيتم ربطه مع Firebase
================================ */

function registerCitizen() {

    let name = document.getElementById("reg-name").value;
    let email = document.getElementById("reg-email").value;
    let pass = document.getElementById("reg-pass").value;
    let phone = document.getElementById("reg-phone").value;
    let address = document.getElementById("reg-address").value;

    // التحقق من الحقول
    if (name === "" || email === "" || pass === "" || phone === "" || address === "") {
        alert("الرجاء ملء جميع الحقول");
        return;
    }

    // تخزين البيانات محليًا مؤقتًا لحين ربط قاعدة البيانات
    let citizenData = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };

    // حفظ بيانات المواطن مؤقتًا في التخزين المحلي (localStorage)
    localStorage.setItem("citizenData", JSON.stringify(citizenData));

    // تحويل المواطن إلى لوحة المواطن
    window.location.href = "dashboard-citizen.html";
}

/* ================================
     عند دخول المواطن للوحة التحكم
================================ */

function loadCitizenDashboard() {
    let c = localStorage.getItem("citizenData");

    if (!c) return; // إذا لا يوجد بيانات

    c = JSON.parse(c);

    // تعبئة البيانات في الصفحة
    let userNameBox = document.getElementById("citizen-name");
    if (userNameBox) {
        userNameBox.textContent = c.name;
    }
}