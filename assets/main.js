/**
 * 羽中仙官网 - 主交互脚本
 * 包含: 导航动画、滚动效果、数字动画、游戏加载
 */

(function() {
  'use strict';

  // ==================== Navigation ====================
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  function toggleMobileNav() {
    // Simple toggle for mobile nav
    var links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.display = 'flex';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--bg2)';
      links.style.flexDirection = 'column';
      links.style.padding = '1.5rem 2rem';
      links.style.gap = '1.5rem';
      links.style.borderBottom = '1px solid var(--rule)';
    }
  }
  window.toggleMobileNav = toggleMobileNav;

  // ==================== Scroll Animations ====================
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counter animation for stat numbers
        var counter = entry.target.querySelector('.stat-number');
        if (counter && !counter.dataset.animated) {
          animateCounter(counter);
          counter.dataset.animated = 'true';
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });

  // ==================== Counter Animation ====================
  function animateCounter(el) {
    var target = parseInt(el.dataset.target);
    if (!target || target <= 0) return;

    var duration = 2000;
    var startTime = null;
    var startVal = 0;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var easedProgress = easeOutQuart(progress);
      var currentVal = Math.floor(startVal + (target - startVal) * easedProgress);

      if (target >= 10000) {
        el.textContent = (currentVal / 10000).toFixed(0) + '万+';
      } else if (target >= 1000) {
        el.textContent = currentVal.toLocaleString() + '+';
      } else {
        el.textContent = currentVal;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ==================== Smooth scroll for anchor links ====================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var offset = 80;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ==================== Game System (iframe) ====================
  var gameIframeCreated = false;

  // ==================== Launch Game Modal ====================
  window.launchGame = function() {
    var modal = document.getElementById('gameModal');
    var content = document.getElementById('gameContent');

    // First time: create iframe
    if (!gameIframeCreated) {
      content.innerHTML = '<iframe id="gameIframe" src="assets/shuihu-game.html" style="width:100%;height:100%;border:none;"></iframe>';
      gameIframeCreated = true;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeGame = function() {
    var modal = document.getElementById('gameModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Pause game by hiding iframe
    var iframe = document.getElementById('gameIframe');
    if (iframe) {
      iframe.style.display = 'none';
      setTimeout(function() { iframe.style.display = 'block'; }, 100);
    }
  };

  // ESC to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var modal = document.getElementById('gameModal');
      if (modal && modal.classList.contains('g-active') || modal.classList.contains('active')) {
        window.closeGame();
      }
    }
  });

})();
