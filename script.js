document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html";
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu");
    }
});
document.getElementById("openEntrance").addEventListener("click", function() {
    alert("Cổng vào mở!");
});
document.getElementById("closeEntrance").addEventListener("click", function() {
    alert("Cổng vào đóng!");
});
document.getElementById("openExit").addEventListener("click", function() {
    alert("Cổng ra mở!");
});
document.getElementById("closeExit").addEventListener("click", function() {
    alert("Cổng ra đóng!");
});

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let mainContent = document.getElementById("main-content");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        mainContent.classList.remove("sidebar-open");
    } else {
        sidebar.classList.add("open");
        mainContent.classList.add("sidebar-open");
    }
}

// Hiển thị giao diện hệ thống giám sát
function showSection(sectionId) {
    if (sectionId === 'monitoring') {
        document.getElementById('monitoring-section').style.display = 'block';
    }
}

// Gán sự kiện cho các nút (tạm thời chỉ log)
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            console.log(`Button ${this.textContent} clicked`);
        });
    });
});