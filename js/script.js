/* =========================================================
   PORTFOLIO SCRIPT: Aryansh Babu
   Plain JavaScript. No libraries needed.
   What it does:
     1. Light / dark theme toggle (remembered in the browser)
     2. Mobile menu
     3. Hides sections that have no content
     4. Highlights the current section in the menu
     5. Fade-in animation on scroll
     6. Back-to-top button and footer year
   ========================================================= */

(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- 1. THEME TOGGLE ---------- */
  var themeBtn = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeBtn) {
      var isDark = theme === 'dark';
      themeBtn.setAttribute('aria-pressed', String(isDark));
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    // Keep the browser bar colour in step with the theme
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1220' : '#1d4ed8');
  }

  // The theme was already chosen by the small script in <head>; sync the button state.
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage may be blocked */ }
    });
  }

  /* ---------- 2. MOBILE MENU ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    if (!menuBtn || !nav) return;
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    // Close after tapping a link
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    // Close with the Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    // Close if the window becomes wide (desktop layout)
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) setMenu(false);
    });
  }

  /* ---------- 3. HIDE EMPTY SECTIONS ----------
     A section is shown only if it contains at least one element marked data-item.
     If you delete all items from a section, the section and its menu link disappear. */
  document.querySelectorAll('main section[id]').forEach(function (section) {
    if (section.id === 'home') return;
    if (section.querySelectorAll('[data-item]').length === 0) {
      section.hidden = true;
      var link = document.querySelector('.nav-links a[href="#' + section.id + '"]');
      if (link && link.parentElement) link.parentElement.remove();
    }
  });

  /* ---------- 4. ACTIVE MENU LINK ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 5. FADE-IN ON SCROLL ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var reveal = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { reveal.observe(el); });
  } else {
    // Very old browsers: just show everything
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 6. BACK TO TOP + FOOTER YEAR ---------- */
  var toTop = document.getElementById('to-top');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.hidden = window.scrollY < 600;
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
