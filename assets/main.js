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

  // ==================== Game System ====================
  var gameLoaded = false;
  var gameHTML = '';

  // Preload game content
  function preloadGame() {
    if (gameLoaded) return;

    var gameIframeSrc = 'shuihu-game/shuihu-game.html';

    // Build the complete game HTML inline (to avoid iframe cross-origin issues)
    gameHTML = buildGameHTML();

    // Load heroes data and game logic
    var heroesScript = document.createElement('script');
    heroesScript.src = 'assets/heroes.js';
    document.head.appendChild(heroesScript);

    var gameScript = document.createElement('script');
    gameScript.src = 'assets/game.js';
    gameScript.onload = function() {
      gameLoaded = true;
    };
    document.head.appendChild(gameScript);
  }

  function buildGameHTML() {
    return '<style>' + getGameStyles() + '</style>' +
      '<div id="gameIntro" class="g-intro">' +
        '<div class="g-intro-text">' +
          '<div>话说大宋仁宗年间</div>' +
          '<div>京师瘟疫流行，民不聊生</div>' +
          '<div>洪太尉误走妖魔</div>' +
          '<div>一百单八个魔君降世</div>' +
          '<div style="color:var(--accent2);margin-top:1rem;">—— 水浒传奇 · 由此开启 ——</div>' +
        '</div>' +
      '</div>' +
      '<div class="g-toast" id="gToast"></div>' +
      '<div class="g-screen g-active" id="gMenuScreen">' +
        '<div class="g-bg-pattern"></div>' +
        '<div class="g-menu-container">' +
          '<h1 class="g-game-title">水浒传</h1>' +
          '<p class="g-game-subtitle">一百单八将传奇</p>' +
          '<button class="g-menu-btn g-primary" onclick="G_startGame()">开始游戏</button>' +
          '<button class="g-menu-btn" onclick="G_showScreen(\'gEncyclopedia\')">好汉图鉴</button>' +
          '<button class="g-menu-btn" onclick="G_showScreen(\'gAbout\')">关于</button>' +
        '</div>' +
      '</div>' +
      '<div class="g-screen" id="gSelectScreen">' +
        '<div class="g-bg-pattern"></div>' +
        '<div class="g-header-bar"><button class="g-header-back" onclick="G_showScreen(\'gMenuScreen\')">&#8592; 返回</button><span class="g-header-title">选择你的好汉</span><span style="color:var(--muted);font-size:0.85rem;">天罡三十六星</span></div>' +
        '<div class="g-select-container"><p class="g-select-info">点击人物开始他们的传奇故事</p><div class="g-hero-grid" id="gHeroGrid"></div></div>' +
      '</div>' +
      '<div class="g-screen" id="gStoryScreen">' +
        '<div class="g-progress-bar"><div class="g-progress-fill" id="gStoryProgress" style="width:0%"></div></div>' +
        '<div class="g-header-bar"><button class="g-header-back" onclick="G_exitStory()">&#8592; 退出</button><span class="g-header-title" id="gStoryHeroName">人物故事</span><span style="color:var(--muted);font-size:0.85rem;" id="gStoryNodeInfo">1 / 10</span></div>' +
        '<div class="g-story-stage" id="gStoryStage"><div class="g-story-character" id="gStoryAvatar">&#127917;</div><div class="g-story-scene-title" id="gSceneTitle"></div></div>' +
        '<div style="padding:0 1rem 1rem;display:flex;flex-direction:column;align-items:center;">' +
          '<div class="g-dialog-box" id="gDialogBox"><div class="g-dialog-speaker" id="gDialogSpeaker">旁白</div><div class="g-dialog-text" id="gDialogText"></div><div class="g-dialog-next" id="gDialogNext">&#9660; 点击继续</div></div>' +
          '<div class="g-choices-container" id="gChoicesContainer"></div>' +
        '</div>' +
      '</div>' +
      '<div class="g-screen" id="gEncyclopedia">' +
        '<div class="g-bg-pattern"></div>' +
        '<div class="g-header-bar"><button class="g-header-back" onclick="G_showScreen(\'gMenuScreen\')">&#8592; 返回</button><span class="g-header-title">好汉图鉴</span><span style="color:var(--muted);font-size:0.85rem;">已解锁: <span id="gUnlockedCount">0</span>/36</span></div>' +
        '<div class="g-select-container"><div class="g-hero-grid" id="gEncyclopediaGrid"></div></div>' +
      '</div>' +
      '<div class="g-screen" id="gHeroDetail">' +
        '<div class="g-bg-pattern"></div>' +
        '<div class="g-header-bar"><button class="g-header-back" onclick="G_showScreen(\'gEncyclopedia\')">&#8592; 返回图鉴</button><span class="g-header-title">人物详情</span><span></span></div>' +
        '<div class="g-select-container"><div class="g-hero-detail" id="gHeroDetailContent"></div></div>' +
      '</div>' +
      '<div class="g-screen" id="gAbout">' +
        '<div class="g-bg-pattern"></div>' +
        '<div class="g-header-bar"><button class="g-header-back" onclick="G_showScreen(\'gMenuScreen\')">&#8592; 返回</button><span class="g-header-title">关于</span><span></span></div>' +
        '<div style="flex:1;display:flex;align-items:center;justify-content:center;padding:2rem;">' +
          '<div style="max-width:600px;text-align:center;">' +
            '<div style="font-size:4rem;margin-bottom:1rem;">&#128220;</div>' +
            '<h2 style="font-family:var(--font);color:var(--accent);font-size:2rem;margin-bottom:1rem;">水浒传</h2>' +
            '<p style="color:var(--muted);line-height:2;font-size:1rem;">一款基于中国古典名著《水浒传》的交互式故事游戏。<br>体验一百单八将的传奇人生，感受江湖义气与英雄豪情。<br><br><span style="color:var(--accent2)">—— 替天行道，忠义两全 ——</span></p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function getGameStyles() {
    return '' +
      ':root{--bg:#0c0a08;--bg2:#1a1612;--bg3:#28221c;--ink:#e8dcc8;--muted:#8a7d6b;--rule:#3d3228;--accent:#c43e3e;--accent2:#d4a843;--font:"STKaiti","Kaiti SC","KaiTi","PingFang SC","Hiragino Sans GB",sans-serif;--font-body:"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif}' +
      '*{box-sizing:border-box;margin:0;padding:0}' +
      'html,body{width:100%;height:100%;overflow:hidden;font-family:var(--font-body);color:var(--ink);background:var(--bg);-webkit-font-smoothing:antialiased}' +
      '.g-intro{position:fixed;inset:0;background:var(--bg);z-index:200;display:flex;align-items:center;justify-content:center;flex-direction:column;transition:opacity 1s ease}' +
      '.g-intro.hidden{opacity:0;pointer-events:none}' +
      '.g-intro-text{font-family:var(--font);font-size:clamp(1.5rem,5vw,3rem);color:var(--accent);text-align:center;line-height:2;padding:2rem}' +
      '.g-toast{position:fixed;top:2rem;left:50%;transform:translateX(-50%) translateY(-100px);background:var(--bg3);border:1px solid var(--accent);color:var(--accent);padding:1rem 2rem;border-radius:6px;z-index:100;font-family:var(--font);transition:transform 0.4s ease;pointer-events:none}' +
      '.g-toast.show{transform:translateX(-50%) translateY(0)}' +
      '.g-screen{position:absolute;inset:0;display:none;flex-direction:column;opacity:0;transition:opacity 0.6s ease}' +
      '.g-screen.g-active{display:flex;opacity:1}' +
      '.g-bg-pattern{position:absolute;inset:0;background:radial-gradient(ellipse at 20% 30%,rgba(196,62,62,0.08) 0%,transparent 50%),radial-gradient(ellipse at 80% 70%,rgba(212,168,67,0.06) 0%,transparent 50%);pointer-events:none;z-index:0}' +
      '#gMenuScreen{align-items:center;justify-content:center;text-align:center}' +
      '.g-menu-container{z-index:1;padding:2rem}' +
      '.g-game-title{font-family:var(--font);font-size:clamp(3rem,10vw,6rem);color:var(--accent);text-shadow:0 0 30px rgba(196,62,62,0.4),0 4px 8px rgba(0,0,0,0.6);margin-bottom:0.5rem;letter-spacing:0.3em}' +
      '.g-game-subtitle{font-family:var(--font);font-size:clamp(1rem,3vw,1.6rem);color:var(--accent2);margin-bottom:3rem;letter-spacing:0.5em}' +
      '.g-menu-btn{display:block;width:clamp(200px,50vw,300px);margin:1rem auto;padding:1rem 2rem;font-family:var(--font);font-size:1.3rem;color:var(--ink);background:linear-gradient(180deg,var(--bg3),var(--bg2));border:2px solid var(--rule);border-radius:4px;cursor:pointer;transition:all 0.3s ease;letter-spacing:0.2em}' +
      '.g-menu-btn:hover{border-color:var(--accent);color:var(--accent);box-shadow:0 0 20px rgba(196,62,62,0.3);transform:translateY(-2px)}' +
      '.g-menu-btn.g-primary{border-color:var(--accent);color:var(--accent)}' +
      '.g-header-bar{display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1.5rem;background:linear-gradient(180deg,var(--bg2),var(--bg));border-bottom:1px solid var(--rule);z-index:10;flex-shrink:0}' +
      '.g-header-title{font-family:var(--font);font-size:1.4rem;color:var(--accent)}' +
      '.g-header-back{font-family:var(--font);font-size:1rem;color:var(--muted);background:none;border:1px solid var(--rule);padding:0.4rem 1rem;border-radius:4px;cursor:pointer;transition:all 0.2s}' +
      '.g-header-back:hover{color:var(--accent);border-color:var(--accent)}' +
      '.g-select-container{flex:1;overflow-y:auto;padding:1.5rem;z-index:1}' +
      '.g-select-info{text-align:center;margin-bottom:1.5rem;color:var(--muted);font-size:0.95rem}' +
      '.g-hero-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:1rem;max-width:1200px;margin:0 auto}' +
      '.g-hero-card{background:linear-gradient(180deg,var(--bg3),var(--bg2));border:1px solid var(--rule);border-radius:8px;padding:1rem;text-align:center;cursor:pointer;transition:all 0.3s ease;position:relative;overflow:hidden}' +
      '.g-hero-card:hover{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 24px rgba(196,62,62,0.2)}' +
      '.g-hero-card.g-locked{opacity:0.5;filter:grayscale(0.8)}' +
      '.g-hero-avatar{font-size:2.5rem;margin-bottom:0.5rem}' +
      '.g-hero-name{font-family:var(--font);font-size:1.1rem;color:var(--ink);margin-bottom:0.25rem}' +
      '.g-hero-title{font-size:0.8rem;color:var(--accent2)}' +
      '.g-hero-star{font-size:0.75rem;color:var(--muted);margin-top:0.25rem}' +
      '#gStoryScreen{background:linear-gradient(180deg,var(--bg),#15120e)}' +
      '.g-story-stage{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;padding:1rem}' +
      '.g-story-character{font-size:clamp(5rem,15vw,10rem);margin-bottom:1rem;filter:drop-shadow(0 0 20px rgba(212,168,67,0.3));animation:gfloat 3s ease-in-out infinite}' +
      '@keyframes gfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}' +
      '.g-story-scene-title{font-family:var(--font);font-size:1.2rem;color:var(--accent2);margin-bottom:0.5rem}' +
      '.g-dialog-box{width:100%;max-width:900px;background:linear-gradient(180deg,var(--bg3),var(--bg2));border:1px solid var(--rule);border-radius:8px;padding:1.5rem;margin-bottom:1rem;position:relative}' +
      '.g-dialog-speaker{font-family:var(--font);font-size:1.1rem;color:var(--accent);margin-bottom:0.5rem}' +
      '.g-dialog-text{font-size:1.05rem;line-height:1.8;color:var(--ink);min-height:3em}' +
      '.g-dialog-next{position:absolute;right:1rem;bottom:1rem;color:var(--accent);font-size:0.85rem;animation:gpulse 1.5s infinite}' +
      '@keyframes gpulse{0%,100%{opacity:0.6}50%{opacity:1}}' +
      '.g-choices-container{width:100%;max-width:900px;display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1rem}' +
      '.g-choice-btn{font-family:var(--font-body);font-size:1rem;text-align:left;padding:1rem 1.5rem;padding-left:3rem;background:linear-gradient(90deg,var(--bg3),var(--bg2));border:1px solid var(--rule);border-radius:6px;color:var(--ink);cursor:pointer;transition:all 0.2s;position:relative}' +
      '.g-choice-btn::before{content:"\\25C6";position:absolute;left:1rem;color:var(--accent)}' +
      '.g-choice-btn:hover{border-color:var(--accent);background:linear-gradient(90deg,rgba(196,62,62,0.1),var(--bg2));transform:translateX(5px)}' +
      '.g-progress-bar{width:100%;height:4px;background:var(--bg3);position:relative}' +
      '.g-progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));transition:width 0.5s ease}' +
      '.g-hero-detail{max-width:800px;margin:0 auto;background:linear-gradient(180deg,var(--bg3),var(--bg2));border:1px solid var(--rule);border-radius:8px;padding:2rem}' +
      '.g-hero-detail-header{display:flex;align-items:center;gap:1.5rem;margin-bottom:1.5rem;flex-wrap:wrap}' +
      '.g-hero-detail-avatar{font-size:4rem}' +
      '.g-hero-detail-info h2{font-family:var(--font);font-size:1.8rem;color:var(--accent)}' +
      '.g-hero-detail-info .subtitle{color:var(--accent2);font-size:1rem}' +
      '.g-hero-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin:1.5rem 0}' +
      '.g-hero-stat-box{background:var(--bg);border:1px solid var(--rule);border-radius:4px;padding:0.75rem;text-align:center}' +
      '.g-hero-stat-box .label{font-size:0.75rem;color:var(--muted)}' +
      '.g-hero-stat-box .value{font-family:var(--font);font-size:1.4rem;color:var(--accent2)}' +
      '.g-hero-story-text{line-height:1.9;color:var(--ink);font-size:1rem}' +
      '::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--rule);border-radius:3px}' +
      '@media(max-width:600px){.g-hero-grid{grid-template-columns:repeat(3,1fr);gap:0.5rem}.g-hero-card{padding:0.6rem}.g-hero-avatar{font-size:1.8rem}.g-hero-name{font-size:0.9rem}.g-hero-stats-grid{grid-template-columns:repeat(2,1fr)}}' +
      '@keyframes gfadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}' +
      '.g-fade-in{animation:gfadeIn 0.5s ease forwards}';
  }

  // Game State
  var GState = {
    currentScreen: 'gMenuScreen',
    currentHero: null,
    currentStoryIndex: 0,
    unlockedHeroes: {},
    isTyping: false,
    typingSpeed: 30,
    typingInterval: null,
    currentStoryPath: []
  };

  // Game Functions (exposed globally for onclick handlers)
  window.G_startGame = function() {
    renderHeroGrid();
    window.G_showScreen('gSelectScreen');
  };

  window.G_showScreen = function(screenName) {
    document.querySelectorAll('.g-screen').forEach(function(s) { s.classList.remove('g-active'); });
    var target = document.getElementById(screenName);
    if (target) {
      target.classList.add('g-active');
      GState.currentScreen = screenName;
    }
    if (screenName === 'gEncyclopedia') {
      renderEncyclopedia();
    }
  };

  function renderHeroGrid() {
    var grid = document.getElementById('gHeroGrid');
    if (!grid || typeof HEROES === 'undefined') return;
    grid.innerHTML = '';
    HEROES.forEach(function(hero) {
      var card = document.createElement('div');
      card.className = 'g-hero-card g-fade-in';
      card.innerHTML = '<div class="g-hero-avatar">' + hero.avatar + '</div><div class="g-hero-name">' + hero.name + '</div><div class="g-hero-title">' + hero.title + '</div><div class="g-hero-star">' + hero.star + '</div>';
      card.addEventListener('click', function() { startStory(hero); });
      grid.appendChild(card);
    });
  }

  function startStory(hero) {
    GState.currentHero = hero;
    GState.currentStoryIndex = 0;
    GState.currentStoryPath = [];
    document.getElementById('gStoryHeroName').textContent = hero.name + ' · ' + hero.title;
    document.getElementById('gStoryAvatar').textContent = hero.avatar;
    document.getElementById('gStoryProgress').style.width = '0%';
    document.getElementById('gStage').innerHTML = '<div class="g-story-character">' + hero.avatar + '</div><div class="g-story-scene-title" id="gSceneTitle"></div>';
    window.G_showScreen('gStoryScreen');

    var dialogBox = document.getElementById('gDialogBox');
    dialogBox.onclick = handleDialogClick;
    renderStoryNode();
  }

  function renderStoryNode() {
    var hero = GState.currentHero;
    var node = hero.story[GState.currentStoryIndex];
    if (!node) { endStory(); return; }

    var progress = ((GState.currentStoryIndex + 1) / hero.story.length) * 100;
    document.getElementById('gStoryProgress').style.width = progress + '%';
    document.getElementById('gStoryNodeInfo').textContent = (GState.currentStoryIndex + 1) + ' / ' + hero.story.length;
    document.getElementById('gChoicesContainer').innerHTML = '';

    switch (node.type) {
      case 'narration': showDialog('旁白', node.text, 'narration'); break;
      case 'dialogue': showDialog(node.speaker || hero.name, node.text, 'dialogue'); break;
      case 'choice': showDialog('抉择', node.text, 'choice'); showChoices(node.options); break;
    }
  }

  function showDialog(speaker, text, type) {
    var speakerEl = document.getElementById('gDialogSpeaker');
    var textEl = document.getElementById('gDialogText');
    var nextEl = document.getElementById('gDialogNext');
    speakerEl.textContent = speaker;
    speakerEl.style.color = type === 'narration' ? 'var(--accent2)' : 'var(--accent)';
    textEl.textContent = '';
    GState.isTyping = true;
    nextEl.style.display = 'none';
    var charIndex = 0;
    clearInterval(GState.typingInterval);
    GState.typingInterval = setInterval(function() {
      if (charIndex < text.length) {
        textEl.textContent += text[charIndex];
        charIndex++;
      } else {
        clearInterval(GState.typingInterval);
        GState.isTyping = false;
        nextEl.style.display = 'block';
      }
    }, GState.typingSpeed);
  }

  function handleDialogClick() {
    if (GState.isTyping) {
      clearInterval(GState.typingInterval);
      var node = GState.currentHero.story[GState.currentStoryIndex];
      document.getElementById('gDialogText').textContent = node.text;
      GState.isTyping = false;
      document.getElementById('gDialogNext').style.display = 'block';
      return;
    }
    var node = GState.currentHero.story[GState.currentStoryIndex];
    if (node.type === 'choice') return;
    GState.currentStoryPath.push(GState.currentStoryIndex);
    GState.currentStoryIndex++;
    renderStoryNode();
  }

  function showChoices(options) {
    var container = document.getElementById('gChoicesContainer');
    container.innerHTML = '';
    options.forEach(function(opt, idx) {
      var btn = document.createElement('button');
      btn.className = 'g-choice-btn g-fade-in';
      btn.style.animationDelay = (idx * 0.15) + 's';
      btn.textContent = opt.text;
      btn.addEventListener('click', function() {
        GState.currentStoryPath.push({ index: GState.currentStoryIndex, choice: opt.text });
        container.innerHTML = '';
        GState.currentStoryIndex = opt.next;
        renderStoryNode();
      });
      container.appendChild(btn);
    });
  }

  function endStory() {
    var hero = GState.currentHero;
    GState.unlockedHeroes[hero.id] = true;
    try { localStorage.setItem('yxz-game-unlocked', JSON.stringify(GState.unlockedHeroes)); } catch(e) {}
    var speakerEl = document.getElementById('gDialogSpeaker');
    var textEl = document.getElementById('gDialogText');
    var nextEl = document.getElementById('gDialogNext');
    speakerEl.textContent = '故事完结';
    speakerEl.style.color = 'var(--accent2)';
    textEl.textContent = hero.name + '的故事到此结束。';
    nextEl.textContent = '\u25BC 点击返回';
    var dialogBox = document.getElementById('gDialogBox');
    dialogBox.onclick = function() {
      window.G_showScreen('gSelectScreen');
      nextEl.textContent = '\u25BC 点击继续';
    };
    showToast('已解锁 ' + hero.name + ' 的图鉴!');
  }

  window.G_exitStory = function() {
    clearInterval(GState.typingInterval);
    window.G_showScreen('gSelectScreen');
  };

  function renderEncyclopedia() {
    var grid = document.getElementById('gEncyclopediaGrid');
    var countEl = document.getElementById('gUnlockedCount');
    if (!grid || typeof HEROES === 'undefined') return;
    grid.innerHTML = '';
    var count = Object.keys(GState.unlockedHeroes).length;
    countEl.textContent = count;
    HEROES.forEach(function(hero) {
      var isUnlocked = GState.unlockedHeroes[hero.id];
      var card = document.createElement('div');
      card.className = 'g-hero-card' + (isUnlocked ? '' : ' g-locked');
      card.innerHTML = '<div class="g-hero-avatar">' + (isUnlocked ? hero.avatar : '?') + '</div><div class="g-hero-name">' + (isUnlocked ? hero.name : '???') + '</div><div class="g-hero-title">' + (isUnlocked ? hero.title : '未解锁') + '</div><div class="g-hero-star">' + (isUnlocked ? hero.star : '?') + '</div>';
      if (isUnlocked) {
        card.addEventListener('click', function() { showHeroDetail(hero); });
      }
      grid.appendChild(card);
    });
  }

  function showHeroDetail(hero) {
    var content = document.getElementById('gHeroDetailContent');
    if (!content) return;
    content.innerHTML = '<div class="g-hero-detail-header"><div class="g-hero-detail-avatar">' + hero.avatar + '</div><div class="g-hero-detail-info"><h2>' + hero.name + '</h2><div class="subtitle">' + hero.title + ' · ' + hero.star + ' · 排名第' + hero.rank + '</div></div></div>' +
      '<div class="g-hero-stats-grid">' +
        '<div class="g-hero-stat-box"><div class="label">武力</div><div class="value">' + hero.stats.str + '</div></div>' +
        '<div class="g-hero-stat-box"><div class="label">智谋</div><div class="value">' + hero.stats.int + '</div></div>' +
        '<div class="g-hero-stat-box"><div class="label">魅力</div><div class="value">' + hero.stats.chr + '</div></div>' +
        '<div class="g-hero-stat-box"><div class="label">敏捷</div><div class="value">' + hero.stats.agi + '</div></div>' +
      '</div>' +
      '<div class="g-hero-story-text"><p style="margin-bottom:1rem;"><strong style="color:var(--accent2);">人物简介：</strong>' + hero.description + '</p></div>';
    window.G_showScreen('gHeroDetail');
  }

  function showToast(msg) {
    var toast = document.getElementById('gToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(function() { toast.classList.remove('show'); }, 3000);
  }

  // Load saved game data
  try {
    var saved = localStorage.getItem('yxz-game-unlocked');
    if (saved) GState.unlockedHeroes = JSON.parse(saved);
  } catch(e) {}

  // ==================== Launch Game Modal ====================
  window.launchGame = function() {
    var modal = document.getElementById('gameModal');
    var content = document.getElementById('gameContent');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (gameLoaded) {
      renderHeroGrid();
      // Show intro
      var intro = document.getElementById('gameIntro');
      if (intro) {
        intro.classList.remove('hidden');
        setTimeout(function() { intro.classList.add('hidden'); }, 3000);
      }
      return;
    }

    // Inject game HTML
    content.innerHTML = gameHTML;
    gameLoaded = true;

    // Trigger intro animation
    setTimeout(function() {
      var intro = document.getElementById('gameIntro');
      if (intro) intro.classList.add('hidden');
    }, 3500);
  };

  window.closeGame = function() {
    var modal = document.getElementById('gameModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
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

  // Preload game assets when page loads
  setTimeout(preloadGame, 2000);

})();
