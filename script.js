// script.js

// Phần xử lý đăng nhập
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn form gửi đi

        // Lấy giá trị nhập vào`
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Kiểm tra tài khoản và mật khẩu
        if (username === "admin" && password === "admin") {
            // Chuyển hướng sang giao diện chính
            window.location.href = "main.html";
        } else {
            document.getElementById("error-message").textContent =
                "Tài khoản hoặc mật khẩu không đúng!";
            document.getElementById("error-message").style.display = "block";
        }
    });
}

// Phần xử lý nút Quay lại
if (document.getElementById("backButton")) {
    document.getElementById("backButton").addEventListener("click", function () {
        // Chuyển hướng về trang chính (main.html)
        window.location.href = "main.html";
    });
}

// Phần xử lý mục Quản lý phương tiện
if (document.getElementById("vehicleManagement")) {
    document.getElementById("vehicleManagement").addEventListener("click", function () {
        // Chuyển hướng sang trang quản lý phương tiện
        window.location.href = "vehicle-management.html";
    });
}
