/* ================================
   الشكاوى (مؤقت لحد ربط قاعدة البيانات)
================================ */

let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

/* عرض الشكاوى في جدول الموظف */
function loadComplaints() {
    let table = document.querySelector("#emp-complaints tbody");
    if (!table) return;

    table.innerHTML = "";

    complaints.forEach((c, index) => {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${c.name}</td>
                <td>${c.type}</td>
                <td>${c.details}</td>
                <td>${c.status}</td>
                <td>
                    <button class="emp-btn btn-review" onclick="updateStatus(${index}, 'قيد المراجعة')">قيد المراجعة</button>
                    <button class="emp-btn btn-done" onclick="updateStatus(${index}, 'مكتملة')">مكتملة</button>
                    <button class="emp-btn btn-reject" onclick="updateStatus(${index}, 'مرفوضة')">مرفوضة</button>
                </td>
            </tr>
        `;
    });
}

/* تحديث حالة الشكوى */
function updateStatus(i, newStatus) {
    complaints[i].status = newStatus;
    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("تم تحديث الحالة ✔");
    loadComplaints();
}

/* تحميل تلقائي */
window.onload = loadComplaints;