function checkPassword() {
  const correctPassword = "1234";
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMessage");

  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("desktop").style.display = "block";
    loadNote();
    startClock();
  } else {
    error.textContent = "كلمة السر غير صحيحة!";
  }
}

function logout() {
  document.getElementById("desktop").style.display = "none";
  document.getElementById("lockScreen").style.display = "block";
  document.getElementById("passwordInput").value = "";
  document.getElementById("errorMessage").textContent = "";
}

function toggleNotes() {
  const win = document.getElementById("notesWindow");
  win.style.display = win.style.display === "none" ? "block" : "none";
}

function saveNote() {
  const note = document.getElementById("noteArea").value;
  localStorage.setItem("secretNote", note);
  document.getElementById("noteSaved").textContent = "✔️ تم الحفظ";
}

function loadNote() {
  const note = localStorage.getItem("secretNote");
  if (note) {
    document.getElementById("noteArea").value = note;
  }
}

function startClock() {
  const clock = document.getElementById("clock");
  setInterval(() => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }, 1000);
}
// تحديث الساعة
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// التنقل بين الصفحات
function goTo(page) {
  window.location.href = page;
}
