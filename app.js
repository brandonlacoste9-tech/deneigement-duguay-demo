// Déneigement Duguay demo — minimal interactions
(function () {
  var menuBtn = document.getElementById('menuBtn');
  var mainNav = document.getElementById('mainNav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mainNav.classList.remove('open');
      });
    });
  }
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
