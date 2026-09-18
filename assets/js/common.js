/* ==========================================================================
   common.js — 모바일 메뉴 토글
   콘텐츠 렌더링에는 JavaScript를 사용하지 않는다.
   ========================================================================== */

(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (!toggle || !nav) {
    return;
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  function isMobileLayout() {
    return window.matchMedia('(max-width: 1023px)').matches;
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  /* 메뉴 밖을 클릭하면 닫는다 */
  document.addEventListener('click', function (event) {
    if (!isMobileLayout() || toggle.getAttribute('aria-expanded') !== 'true') {
      return;
    }
    if (nav.contains(event.target) || toggle.contains(event.target)) {
      return;
    }
    setOpen(false);
  });

  /* ESC 로 닫고 버튼으로 포커스를 되돌린다 */
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') {
      return;
    }
    if (toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  /* Desktop 폭으로 돌아오면 열린 상태를 초기화한다 */
  window.addEventListener('resize', function () {
    if (!isMobileLayout()) {
      setOpen(false);
    }
  });
})();
