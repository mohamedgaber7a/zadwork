// ✅ script.js
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');

  burger.addEventListener('click', function () {
    burger.classList.toggle('open');     // تأثير تغيير شكل البيرجر
    navMenu.classList.toggle('active');  // فتح/إغلاق القائمة
  });
});
