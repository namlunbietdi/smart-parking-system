// script.js
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form gửi đi

    // Lấy giá trị nhập vào
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