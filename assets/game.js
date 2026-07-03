/**
 * 水浒传 - 游戏核心逻辑
 */

// ==================== 游戏状态 ====================
const GameState = {
  currentScreen: 'menu',
  currentHero: null,
  currentStoryIndex: 0,
  unlockedHeroes: new Set(),
  currentChoices: [],
  isTyping: false,
  typingSpeed: 35,
  typingInterval: null,
  currentStoryPath: [] // 记录故事路径
};

// ==================== 初始化 ====================
function init() {
  loadProgress();
  setupIntro();
  setupEventListeners();
  renderHeroGrid();
  renderEncyclopedia();
}

function setupIntro() {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    intro.classList.add('hidden');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 1000);
  }, 4000);
}

function setupEventListeners() {
  // 对话框点击继续
  const dialogBox = document.getElementById('dialog-box');
  dialogBox.addEventListener('click', handleDialogClick);

  // 键盘事件
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      if (GameState.currentScreen === 'story' && !GameState.isTyping) {
        const choicesContainer = document.getElementById('choices-container');
        if (choicesContainer.children.length === 0) {
          handleDialogClick();
        }
      }
    }
  });
}

// ==================== 屏幕切换 ====================
function showScreen(screenName) {
  // 隐藏当前屏幕
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

  // 显示目标屏幕
  const targetScreen = document.getElementById(screenName + '-screen');
  if (targetScreen) {
    targetScreen.classList.add('active');
    GameState.currentScreen = screenName;
  }

  // 更新图鉴
  if (screenName === 'encyclopedia') {
    renderEncyclopedia();
  }
}

// ==================== 人物选择 ====================
function renderHeroGrid() {
  const grid = document.getElementById('hero-grid');
  grid.innerHTML = '';

  HEROES.forEach(hero => {
    const card = document.createElement('div');
    card.className = 'hero-card fade-in';
    card.innerHTML = `
      <div class="hero-avatar">${hero.avatar}</div>
      <div class="hero-name">${hero.name}</div>
      <div class="hero-title">${hero.title}</div>
      <div class="hero-star">${hero.star}</div>
    `;
    card.addEventListener('click', () => startStory(hero));
    grid.appendChild(card);
  });
}

// ==================== 故事系统 ====================
function startStory(hero) {
  GameState.currentHero = hero;
  GameState.currentStoryIndex = 0;
  GameState.currentStoryPath = [];
  GameState.currentChoices = [];

  // 更新UI
  document.getElementById('story-hero-name').textContent = hero.name + ' · ' + hero.title;
  document.getElementById('story-avatar').textContent = hero.avatar;
  document.getElementById('story-progress').style.width = '0%';

  showScreen('story');
  renderStoryNode();
}

function renderStoryNode() {
  const hero = GameState.currentHero;
  const nodeIndex = GameState.currentStoryPath.length;
  const node = hero.story[GameState.currentStoryIndex];

  if (!node) {
    endStory();
    return;
  }

  // 更新进度
  const progress = ((GameState.currentStoryIndex + 1) / hero.story.length) * 100;
  document.getElementById('story-progress').style.width = progress + '%';
  document.getElementById('story-node-info').textContent =
    `${GameState.currentStoryIndex + 1} / ${hero.story.length}`;

  // 清除选择按钮
  document.getElementById('choices-container').innerHTML = '';

  // 处理不同类型的节点
  switch (node.type) {
    case 'narration':
      showDialog('旁白', node.text, 'narration');
      break;
    case 'dialogue':
      showDialog(node.speaker || hero.name, node.text, 'dialogue');
      break;
    case 'choice':
      showDialog('抉择', node.text, 'choice');
      showChoices(node.options);
      break;
    case 'battle':
      showBattle(node);
      break;
  }
}

function showDialog(speaker, text, type) {
  const speakerEl = document.getElementById('dialog-speaker');
  const textEl = document.getElementById('dialog-text');
  const nextEl = document.getElementById('dialog-next');

  speakerEl.textContent = speaker;
  if (type === 'narration') {
    speakerEl.style.color = 'var(--accent2)';
  } else if (type === 'choice') {
    speakerEl.style.color = 'var(--accent)';
  } else {
    speakerEl.style.color = 'var(--accent)';
  }

  // 打字机效果
  textEl.textContent = '';
  GameState.isTyping = true;
  nextEl.style.display = 'none';

  let charIndex = 0;
  const chars = text.split('');

  clearInterval(GameState.typingInterval);
  GameState.typingInterval = setInterval(() => {
    if (charIndex < chars.length) {
      textEl.textContent += chars[charIndex];
      charIndex++;
    } else {
      clearInterval(GameState.typingInterval);
      GameState.isTyping = false;
      nextEl.style.display = 'block';
    }
  }, GameState.typingSpeed);
}

function handleDialogClick() {
  if (GameState.isTyping) {
    // 跳过打字机
    clearInterval(GameState.typingInterval);
    const hero = GameState.currentHero;
    const node = hero.story[GameState.currentStoryIndex];
    document.getElementById('dialog-text').textContent = node.text;
    GameState.isTyping = false;
    document.getElementById('dialog-next').style.display = 'block';
    return;
  }

  const hero = GameState.currentHero;
  const node = hero.story[GameState.currentStoryIndex];

  if (node.type === 'choice') {
    return; // 等待玩家选择
  }

  // 推进到下一个节点
  GameState.currentStoryPath.push(GameState.currentStoryIndex);
  GameState.currentStoryIndex++;
  renderStoryNode();
}

function showChoices(options) {
  const container = document.getElementById('choices-container');
  container.innerHTML = '';

  options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn fade-in';
    btn.style.animationDelay = (index * 0.15) + 's';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => makeChoice(opt.next, opt.text));
    container.appendChild(btn);
  });
}

function makeChoice(nextIndex, choiceText) {
  // 记录选择
  GameState.currentStoryPath.push({
    index: GameState.currentStoryIndex,
    choice: choiceText
  });

  // 清除选择按钮
  document.getElementById('choices-container').innerHTML = '';

  // 跳转到指定节点
  GameState.currentStoryIndex = nextIndex;
  renderStoryNode();
}

// ==================== 战斗系统 ====================
function showBattle(node) {
  const stage = document.getElementById('story-stage');
  const hero = GameState.currentHero;

  // 战斗场景覆盖
  stage.innerHTML = `
    <div class="battle-container">
      <div class="battle-fighters">
        <div class="fighter">
          <div class="fighter-avatar">${hero.avatar}</div>
          <div class="fighter-name">${hero.name}</div>
        </div>
        <div class="battle-vs">VS</div>
        <div class="fighter">
          <div class="fighter-avatar">${node.enemyAvatar || '👹'}</div>
          <div class="fighter-name">${node.enemy || '敌人'}</div>
        </div>
      </div>
      <div class="battle-log" id="battle-log"></div>
    </div>
  `;

  // 简单的战斗模拟
  const log = document.getElementById('battle-log');
  const entries = [
    `${hero.name}大喝一声，挺兵器杀向${node.enemy || '敌人'}！`,
    `${node.enemy || '敌人'}奋力迎战，双方战在一处！`,
    `${hero.name}使出浑身解数，招招凌厉！`,
    `${hero.name}抓住破绽，一击制胜！`,
    `${node.enemy || '敌人'}败退！${hero.name}获胜！`
  ];

  let entryIndex = 0;
  const addEntry = () => {
    if (entryIndex < entries.length) {
      const div = document.createElement('div');
      div.className = 'battle-log-entry';
      div.textContent = entries[entryIndex];
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
      entryIndex++;
      setTimeout(addEntry, 800);
    } else {
      setTimeout(() => {
        // 恢复舞台
        stage.innerHTML = `
          <div class="story-character">${hero.avatar}</div>
          <div class="story-scene-title" id="scene-title"></div>
        `;
        // 继续故事
        GameState.currentStoryPath.push(GameState.currentStoryIndex);
        GameState.currentStoryIndex++;
        renderStoryNode();
      }, 1500);
    }
  };

  setTimeout(addEntry, 500);
}

function endStory() {
  const hero = GameState.currentHero;

  // 解锁人物
  unlockHero(hero.id);

  // 显示结局
  const speakerEl = document.getElementById('dialog-speaker');
  const textEl = document.getElementById('dialog-text');
  const nextEl = document.getElementById('dialog-next');

  speakerEl.textContent = '故事完结';
  speakerEl.style.color = 'var(--accent2)';
  textEl.textContent = `${hero.name}的故事到此结束。`;
  nextEl.textContent = '▼ 点击返回';

  // 绑定点击返回
  const dialogBox = document.getElementById('dialog-box');
  const returnHandler = () => {
    showScreen('select');
    nextEl.textContent = '▼ 点击继续';
    dialogBox.removeEventListener('click', returnHandler);
    // 重新绑定原来的处理器
    dialogBox.addEventListener('click', handleDialogClick);
  };

  dialogBox.removeEventListener('click', handleDialogClick);
  dialogBox.addEventListener('click', returnHandler);

  showToast(`已解锁 ${hero.name} 的图鉴！`);
}

function exitStory() {
  clearInterval(GameState.typingInterval);
  showScreen('select');
}

// ==================== 图鉴系统 ====================
function unlockHero(heroId) {
  GameState.unlockedHeroes.add(heroId);
  saveProgress();
}

function renderEncyclopedia() {
  const grid = document.getElementById('encyclopedia-grid');
  const countEl = document.getElementById('unlocked-count');
  grid.innerHTML = '';

  const unlockedCount = GameState.unlockedHeroes.size;
  countEl.textContent = unlockedCount;

  HEROES.forEach(hero => {
    const isUnlocked = GameState.unlockedHeroes.has(hero.id);
    const card = document.createElement('div');
    card.className = 'hero-card' + (isUnlocked ? '' : ' locked');
    card.innerHTML = `
      <div class="hero-avatar">${isUnlocked ? hero.avatar : '❓'}</div>
      <div class="hero-name">${isUnlocked ? hero.name : '???'}</div>
      <div class="hero-title">${isUnlocked ? hero.title : '未解锁'}</div>
      <div class="hero-star">${isUnlocked ? hero.star : '?'}</div>
    `;

    if (isUnlocked) {
      card.addEventListener('click', () => showHeroDetail(hero));
    }

    grid.appendChild(card);
  });
}

function showHeroDetail(hero) {
  const content = document.getElementById('hero-detail-content');

  content.innerHTML = `
    <div class="hero-detail-header">
      <div class="hero-detail-avatar">${hero.avatar}</div>
      <div class="hero-detail-info">
        <h2>${hero.name}</h2>
        <div class="subtitle">${hero.title} · ${hero.star} · 排名第${hero.rank}</div>
      </div>
    </div>
    <div class="hero-stats-grid">
      <div class="hero-stat-box">
        <div class="label">武力</div>
        <div class="value">${hero.stats.str}</div>
      </div>
      <div class="hero-stat-box">
        <div class="label">智谋</div>
        <div class="value">${hero.stats.int}</div>
      </div>
      <div class="hero-stat-box">
        <div class="label">魅力</div>
        <div class="value">${hero.stats.chr}</div>
      </div>
      <div class="hero-stat-box">
        <div class="label">敏捷</div>
        <div class="value">${hero.stats.agi}</div>
      </div>
    </div>
    <div class="hero-story-text">
      <p style="margin-bottom: 1rem;"><strong style="color: var(--accent2);">人物简介：</strong>${hero.description}</p>
      <p style="margin-bottom: 1rem;"><strong style="color: var(--accent2);">人物传记：</strong></p>
      ${generateHeroBiography(hero)}
    </div>
  `;

  showScreen('hero-detail');
}

function generateHeroBiography(hero) {
  // 根据故事节点生成传记
  const paragraphs = [];
  hero.story.forEach(node => {
    if (node.type === 'narration') {
      paragraphs.push(`<p style="margin-bottom: 0.8rem; text-indent: 2em;">${node.text}</p>`);
    } else if (node.type === 'dialogue') {
      paragraphs.push(`<p style="margin-bottom: 0.8rem; padding-left: 1rem; border-left: 2px solid var(--accent); color: var(--accent);">${node.speaker}：「${node.text}」</p>`);
    }
  });
  return paragraphs.join('');
}

// ==================== 存储系统 ====================
function saveProgress() {
  try {
    const data = {
      unlockedHeroes: Array.from(GameState.unlockedHeroes)
    };
    localStorage.setItem('shuihu-game-progress', JSON.stringify(data));
  } catch (e) {
    console.warn('无法保存进度:', e);
  }
}

function loadProgress() {
  try {
    const data = localStorage.getItem('shuihu-game-progress');
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed.unlockedHeroes) {
        GameState.unlockedHeroes = new Set(parsed.unlockedHeroes);
      }
    }
  } catch (e) {
    console.warn('无法加载进度:', e);
  }
}

// ==================== 工具函数 ====================
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ==================== 启动游戏 ====================
document.addEventListener('DOMContentLoaded', init);
