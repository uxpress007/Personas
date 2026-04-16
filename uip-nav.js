(function () {
  document.querySelectorAll('.uip-nav-item.has-dropdown').forEach(function (item) {
    var btn = item.querySelector('.uip-nav-dd-trigger');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.uip-nav-item.has-dropdown.is-open').forEach(function (i) {
        i.classList.remove('is-open');
        var b = i.querySelector('.uip-nav-dd-trigger');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.uip-nav-item.has-dropdown.is-open').forEach(function (i) {
      i.classList.remove('is-open');
      var b = i.querySelector('.uip-nav-dd-trigger');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('.uip-dropdown').forEach(function (menu) {
    menu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
})();
