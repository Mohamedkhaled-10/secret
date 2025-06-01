function checkPassword() {
  const correctPassword = "8292007"; // تقدر تغيرها لاحقًا
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMessage");

  if (input === correctPassword) {
    // ✅ انتقال مباشر لملف سطح المكتب
    window.location.href = "desktop.html";
  } else {
    error.textContent = "كلمة السر غير صحيحة!";
  }
}
