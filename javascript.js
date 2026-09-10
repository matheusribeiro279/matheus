// ==========================================
// 1. DADOS DOS 20 PERSONAGENS E HABILIDADES
// ==========================================
const characters = [
  {
    id: "gojo", name: "Satoru Gojo", hp: 120,
    skills: [
      { name: "Lapse: Blue", damage: 25, heal: 0, desc: "Atrai o inimigo causando dano espacial." },
      { name: "Reversal: Red", damage: 35, heal: 0, desc: "Repele o inimigo com dano explosivo." },
      { name: "Hollow Purple", damage: 60, heal: 0, desc: "Fusão de massa. Dano massivo!" }
    ]
  },
  {
    id: "sukuna", name: "Ryomen Sukuna", hp: 120,
    skills: [
      { name: "Dismantle", damage: 22, heal: 0, desc: "Corte rápido e preciso." },
      { name: "Cleave", damage: 36, heal: 0, desc: "Corte adaptado à resistência do alvo." },
      { name: "Fuga (Fire Arrow)", damage: 55, heal: 0, desc: "Flecha de fogo devastadora." }
    ]
  },
  {
    id: "itadori", name: "Yuji Itadori", hp: 110,
    skills: [
      { name: "Divergent Fist", damage: 20, heal: 0, desc: "Soco com impacto duplo de energia." },
      { name: "Black Flash", damage: 40, heal: 0, desc: "Distorção espacial de alto impacto." },
      { name: "Blood Manipulation", damage: 25, heal: 10, desc: "Ataque sangrento que cura HP." }
    ]
  },
  {
    id: "megumi", name: "Megumi Fushiguro", hp: 100,
    skills: [
      { name: "Divine Dogs", damage: 20, heal: 0, desc: "Ataque veloz dos Cães Divinos." },
      { name: "Nue", damage: 28, heal: 0, desc: "Descarga elétrica vinda dos céus." },
      { name: "Mahoraga", damage: 50, heal: 0, desc: "Invocação suprema de alto risco." }
    ]
  },
  {
    id: "nobara", name: "Nobara Kugisaki", hp: 95,
    skills: [
      { name: "Nails & Hammer", damage: 18, heal: 0, desc: "Ataque direto com pregos amaldiçoados." },
      { name: "Hairpin", damage: 30, heal: 0, desc: "Explosão de energia nos pregos." },
      { name: "Resonance", damage: 45, heal: 0, desc: "Ataque direto na alma do alvo." }
    ]
  },
  {
    id: "yuta", name: "Yuta Okkotsu", hp: 115,
    skills: [
      { name: "Cursed Speech", damage: 22, heal: 0, desc: "Comanda o oponente com a voz." },
      { name: "Rika Blast", damage: 45, heal: 0, desc: "Rika dispara energia pura e concentrada." },
      { name: "RCT Healing", damage: 0, heal: 35, desc: "Técnica Amaldiçoada Reversa para se curar." }
    ]
  },
  {
    id: "maki", name: "Maki Zen'in", hp: 105,
    skills: [
      { name: "Playful Cloud", damage: 22, heal: 0, desc: "Sequência de golpes de bastão." },
      { name: "Dragon Bone", damage: 32, heal: 0, desc: "Lâmina que libera força acumulada." },
      { name: "Soul Split Katana", damage: 48, heal: 0, desc: "Corta ignorando a durabilidade do alvo." }
    ]
  },
  {
    id: "nanami", name: "Kento Nanami", hp: 100,
    skills: [
      { name: "7:3 Ratio Technique", damage: 25, heal: 0, desc: "Cria um ponto fraco forçado." },
      { name: "Collapse", damage: 35, heal: 0, desc: "Destrói o ambiente e acerta o rival." },
      { name: "Overtime Mode", damage: 45, heal: 0, desc: "Hora extra: libera 110% de poder." }
    ]
  },
  {
    id: "todo", name: "Aoi Todo", hp: 110,
    skills: [
      { name: "Heavy Fist", damage: 20, heal: 0, desc: "Soco potente de um lutador peso-pesado." },
      { name: "Boogie Woogie", damage: 15, heal: 15, desc: "Palmas que confundem o rival e recuperam foco." },
      { name: "Black Flash Pair", damage: 45, heal: 0, desc: "Golpe fulminante de energia." }
    ]
  },
  {
    id: "geto", name: "Suguru Geto", hp: 105,
    skills: [
      { name: "Curse Swarm", damage: 20, heal: 0, desc: "Enxame de maldições de baixo nível." },
      { name: "Centipede Curse", damage: 30, heal: 0, desc: "Ataque com maldições de grande porte." },
      { name: "Uzumaki", damage: 50, heal: 0, desc: "Condensa maldições em um feixe gigante." }
    ]
  },
  {
    id: "toji", name: "Toji Fushiguro", hp: 110,
    skills: [
      { name: "Inverted Spear", damage: 30, heal: 0, desc: "Anula defesas amaldiçoadas e ataca." },
      { name: "Playful Cloud Rush", damage: 38, heal: 0, desc: "Sequência física brutal." },
      { name: "Assassination Strike", damage: 50, heal: 0, desc: "Ataque surpresa altamente letal." }
    ]
  },
  {
    id: "mahito", name: "Mahito", hp: 100,
    skills: [
      { name: "Soul Repulsion", damage: 20, heal: 0, desc: "Deforma a alma do oponente." },
      { name: "Body Repel", damage: 32, heal: 0, desc: "Ataque de longo alcance mutado." },
      { name: "Idle Transfiguration", damage: 45, heal: 10, desc: "Modifica a alma para dar dano e regenerar." }
    ]
  },
  {
    id: "jogo", name: "Jogo", hp: 95,
    skills: [
      { name: "Ember Insects", damage: 22, heal: 0, desc: "Insetos de fogo que explodem ao contato." },
      { name: "Disaster Flames", damage: 35, heal: 0, desc: "Jatos de fogo vulcânico escaldantes." },
      { name: "Maximum: Meteor", damage: 55, heal: 0, desc: "Invocação de um meteoro flamejante." }
    ]
  },
  {
    id: "hanami", name: "Hanami", hp: 115,
    skills: [
      { name: "Wood Ball", damage: 18, heal: 0, desc: "Disparo de projéteis de madeira Rígida." },
      { name: "Roots Assault", damage: 28, heal: 0, desc: "Raízes perfurantes vindas do solo." },
      { name: "Cursed Bud", damage: 35, heal: 15, desc: "Suga energia do rival para se curar." }
    ]
  },
  {
    id: "choso", name: "Choso", hp: 105,
    skills: [
      { name: "Slicing Exorcism", damage: 22, heal: 0, desc: "Lâmina giratória de sangue." },
      { name: "Blood Meteorite", damage: 32, heal: 0, desc: "Endurece o sangue no punho para golpear." },
      { name: "Piercing Blood", damage: 48, heal: 0, desc: "Disparo de sangue em altíssima pressão." }
    ]
  },
  {
    id: "kashimo", name: "Hajime Kashimo", hp: 105,
    skills: [
      { name: "Lightning Strike", damage: 25, heal: 0, desc: "Descarga elétrica inevitável." },
      { name: "Electric Discharge", damage: 35, heal: 0, desc: "Choque elétrico de alta voltagem." },
      { name: "Mythic Amber Beast", damage: 52, heal: 0, desc: "Transformação de energia pura." }
    ]
  },
  {
    id: "hakari", name: "Kinji Hakari", hp: 110,
    skills: [
      { name: "Pachinko Strike", damage: 20, heal: 0, desc: "Golpe físico de peso." },
      { name: "Shutter Attack", damage: 30, heal: 0, desc: "Esmaga o alvo com portas mecânicas." },
      { name: "Jackpot Mode", damage: 10, heal: 45, desc: "Modo jackpot: ganha regeneração absurda." }
    ]
  },
  {
    id: "inumaki", name: "Toge Inumaki", hp: 90,
    skills: [
      { name: "Stop!", damage: 15, heal: 0, desc: "Paralisa o inimigo causando dano leve." },
      { name: "Plunge!", damage: 30, heal: 0, desc: "Faz o oponente afundar no chão." },
      { name: "Get Crushed!", damage: 45, heal: 0, desc: "Esmaga o alvo com a força da fala." }
    ]
  },
  {
    id: "higuruma", name: "Hiromi Higuruma", hp: 100,
    skills: [
      { name: "Gavel Strike", damage: 20, heal: 0, desc: "Golpe com o martelo de juiz." },
      { name: "Confiscation", damage: 30, heal: 0, desc: "Dano que reduz a capacidade do oponente." },
      { name: "Executioner's Sword", damage: 50, heal: 0, desc: "Lâmina da pena de morte." }
    ]
  },
  {
    id: "kenjaku", name: "Kenjaku", hp: 115,
    skills: [
      { name: "Curse Manipulation", damage: 22, heal: 0, desc: "Lança maldições milenares." },
      { name: "Gravity Manipulation", damage: 35, heal: 0, desc: "Aumenta a gravidade da área subitamente." },
      { name: "Womb Profusion", damage: 52, heal: 0, desc: "Expansão de domínio sem barreira." }
    ]
  }
];

// ==========================================
// 2. ESTILOS CSS INJETADOS VIA JAVASCRIPT
// ==========================================
function injectCSS() {
  const css = `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, sans-serif; }
    body { background-color: #0d0d12; color: #fff; display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding: 20px; }
    h1 { color: #ff2a5f; text-shadow: 0 0 10px rgba(255, 42, 95, 0.6); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px; }
    .screen { width: 100%; max-width: 900px; display: flex; flex-direction: column; align-items: center; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; width: 100%; margin-bottom: 20px; }
    .card { background: #181824; border: 2px solid #333; border-radius: 8px; padding: 12px; text-align: center; cursor: pointer; transition: 0.2s; }
    .card:hover { border-color: #ff2a5f; transform: translateY(-3px); }
    .card.selected { border-color: #00e5ff; background: #002b3d; }
    .btn { background: #ff2a5f; color: #fff; border: none; padding: 12px 25px; font-size: 1rem; font-weight: bold; border-radius: 5px; cursor: pointer; box-shadow: 0 0 10px rgba(255, 42, 95, 0.4); }
    .btn:disabled { background: #444; cursor: not-allowed; box-shadow: none; }
    .arena { display: flex; justify-content: space-between; width: 100%; background: #12121a; border: 2px solid #222; border-radius: 10px; padding: 20px; margin-bottom: 20px; }
    .fighter { width: 45%; display: flex; flex-direction: column; align-items: center; }
    .hp-bg { width: 100%; height: 22px; background: #333; border-radius: 10px; overflow: hidden; margin: 10px 0; border: 1px solid #444; }
    .hp-fill { height: 100%; width: 100%; background: linear-gradient(90deg, #00ff88, #00b894); transition: width 0.3s; }
    .bot-fill { background: linear-gradient(90deg, #ff7675, #d63031); }
    .skills { display: flex; flex-direction: column; gap: 8px; width: 100%; margin-top: 10px; }
    .skill-btn { background: #202030; border: 1px solid #00e5ff; color: #fff; padding: 8px 12px; border-radius: 5px; cursor: pointer; text-align: left; }
    .skill-btn:hover:not(:disabled) { background: #00e5ff; color: #000; font-weight: bold; }
    .skill-btn:disabled { border-color: #444; color: #666; cursor: not-allowed; }
    .log { width: 100%; height: 140px; background: #050508; border: 1px solid #222; border-radius: 5px; padding: 10px; overflow-y: auto; font-family: monospace; font-size: 0.85rem; }
    .log-p1 { color: #00e5ff; margin-bottom: 4px; }
    .log-p2 { color: #ff2a5f; margin-bottom: 4px; }
    .log-sys { color: #f1c40f; font-weight: bold; margin-bottom: 4px; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

// ==========================================
// 3. ESTADO DO JOGO E VARIÁVEIS NATIVAS
// ==========================================
let player1 = null;
let player2 = null;
let isPlayerTurn = true;

// Referências de Elementos HTML (Criados dinamicamente)
let selectionScreen, battleScreen, charGrid, startBtn, p1HpFill, p2HpFill, p1HpText, p2HpText, skillsContainer, logBox, resetBtn;

// ==========================================
// 4. CRIAÇÃO DA INTERFACE VIA JAVASCRIPT
// ==========================================
function buildUI() {
  injectCSS();

  const title = document.createElement('h1');
  title.innerText = 'Jujutsu Kaisen: Batalha JS';
  document.body.appendChild(title);

  // --- Tela de Seleção ---
  selectionScreen = document.createElement('div');
  selectionScreen.className = 'screen';

  const subtitle = document.createElement('p');
  subtitle.style.marginBottom = '15px';
  subtitle.style.color = '#aaa';
  subtitle.innerText = 'Escolha seu personagem para enfrentar um BOT aleatório:';
  selectionScreen.appendChild(subtitle);

  charGrid = document.createElement('div');
  charGrid.className = 'grid';
  selectionScreen.appendChild(charGrid);

  startBtn = document.createElement('button');
  startBtn.className = 'btn';
  startBtn.innerText = 'Iniciar Combate';
  startBtn.disabled = true;
  startBtn.onclick = startGame;
  selectionScreen.appendChild(startBtn);

  document.body.appendChild(selectionScreen);

  // Renderizar Cards de Seleção
  characters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${char.id}`;
    card.innerHTML = `<strong>${char.name}</strong><br><small style="color:#888">HP: ${char.hp}</small>`;
    card.onclick = () => selectCharacter(char);
    charGrid.appendChild(card);
  });

  // --- Tela de Batalha ---
  battleScreen = document.createElement('div');
  battleScreen.className = 'screen';
  battleScreen.style.display = 'none';

  battleScreen.innerHTML = `
    <div class="arena">
      <div class="fighter">
        <h2 id="p1-name">Jogador</h2>
        <div class="hp-bg"><div id="p1-hp" class="hp-fill"></div></div>
        <p id="p1-hp-text">100/100</p>
        <div id="skills-box" class="skills"></div>
      </div>
      <div class="fighter">
        <h2 id="p2-name">BOT</h2>
        <div class="hp-bg"><div id="p2-hp" class="hp-fill bot-fill"></div></div>
        <p id="p2-hp-text">100/100</p>
        <p style="margin-top:20px; font-style:italic; color:#777;">Aguardando ação do Bot...</p>
      </div>
    </div>
    <h3 style="margin-bottom: 5px;">Log de Combate</h3>
    <div id="battle-log" class="log"></div>
  `;

  resetBtn = document.createElement('button');
  resetBtn.className = 'btn';
  resetBtn.style.marginTop = '15px';
  resetBtn.style.display = 'none';
  resetBtn.innerText = 'Jogar Novamente';
  resetBtn.onclick = resetGame;
  battleScreen.appendChild(resetBtn);

  document.body.appendChild(battleScreen);

  // Capturando referências criadas na Battle Screen
  p1HpFill = document.getElementById('p1-hp');
  p2HpFill = document.getElementById('p2-hp');
  p1HpText = document.getElementById('p1-hp-text');
  p2HpText = document.getElementById('p2-hp-text');
  skillsContainer = document.getElementById('skills-box');
  logBox = document.getElementById('battle-log');
}

// ==========================================
// 5. LÓGICA DE JOGO E COMBATE
// ==========================================
function selectCharacter(char) {
  player1 = JSON.parse(JSON.stringify(char));
  player1.currentHp = player1.hp;

  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  document.getElementById(`card-${char.id}`).classList.add('selected');

  startBtn.disabled = false;
}

function startGame() {
  if (!player1) return;

  // Seleciona um BOT aleatório
  const randomBot = characters[Math.floor(Math.random() * characters.length)];
  player2 = JSON.parse(JSON.stringify(randomBot));
  player2.currentHp = player2.hp;

  selectionScreen.style.display = 'none';
  battleScreen.style.display = 'flex';

  document.getElementById('p1-name').innerText = player1.name;
  document.getElementById('p2-name').innerText = player2.name + " (BOT)";

  updateHealthUI();
  renderSkills();

  addLog(`O combate começou! ${player1.name} VS ${player2.name}!`, 'log-sys');
}

function renderSkills() {
  skillsContainer.innerHTML = '';
  player1.skills.forEach((skill, index) => {
    const btn = document.createElement('button');
    btn.className = 'skill-btn';
    btn.innerHTML = `<strong>${skill.name}</strong><br><small>${skill.desc}</small>`;
    btn.onclick = () => playerTurn(index);
    skillsContainer.appendChild(btn);
  });
}

function playerTurn(skillIndex) {
  if (!isPlayerTurn) return;

  const skill = player1.skills[skillIndex];
  isPlayerTurn = false;
  toggleSkills(false);

  let msg = `${player1.name} usou ${skill.name}.`;

  if (skill.damage > 0) {
    player2.currentHp = Math.max(0, player2.currentHp - skill.damage);
    msg += ` Causou ${skill.damage} de dano!`;
  }
  if (skill.heal > 0) {
    player1.currentHp = Math.min(player1.hp, player1.currentHp + skill.heal);
    msg += ` Recuperou ${skill.heal} de HP!`;
  }

  addLog(msg, 'log-p1');
  updateHealthUI();

  if (checkGameOver()) return;

  // Delay de 1 segundo para resposta do BOT
  setTimeout(botTurn, 1000);
}

function botTurn() {
  const randomSkill = player2.skills[Math.floor(Math.random() * player2.skills.length)];
  let msg = `${player2.name} (BOT) usou ${randomSkill.name}.`;

  if (randomSkill.damage > 0) {
    player1.currentHp = Math.max(0, player1.currentHp - randomSkill.damage);
    msg += ` Causou ${randomSkill.damage} de dano!`;
  }
  if (randomSkill.heal > 0) {
    player2.currentHp = Math.min(player2.hp, player2.currentHp + randomSkill.heal);
    msg += ` Recuperou ${randomSkill.heal} de HP!`;
  }

  addLog(msg, 'log-p2');
  updateHealthUI();

  if (!checkGameOver()) {
    isPlayerTurn = true;
    toggleSkills(true);
  }
}

function updateHealthUI() {
  const p1Pct = (player1.currentHp / player1.hp) * 100;
  const p2Pct = (player2.currentHp / player2.hp) * 100;

  p1HpFill.style.width = `${p1Pct}%`;
  p2HpFill.style.width = `${p2Pct}%`;

  p1HpText.innerText = `${player1.currentHp} / ${player1.hp} HP`;
  p2HpText.innerText = `${player2.currentHp} / ${player2.hp} HP`;
}

function toggleSkills(enable) {
  const btns = skillsContainer.querySelectorAll('button');
  btns.forEach(b => b.disabled = !enable);
}

function checkGameOver() {
  if (player1.currentHp <= 0) {
    addLog(`☠️ ${player1.name} foi derrotado! Você perdeu!`, 'log-sys');
    endGame();
    return true;
  }
  if (player2.currentHp <= 0) {
    addLog(`🏆 ${player2.name} foi derrotado! Você venceu!`, 'log-sys');
    endGame();
    return true;
  }
  return false;
}

function endGame() {
  toggleSkills(false);
  resetBtn.style.display = 'block';
}

function addLog(msg, typeClass) {
  const entry = document.createElement('div');
  entry.className = typeClass;
  entry.innerText = msg;
  logBox.appendChild(entry);
  logBox.scrollTop = logBox.scrollHeight;
}

function resetGame() {
  player1 = null;
  player2 = null;
  isPlayerTurn = true;

  logBox.innerHTML = '';
  resetBtn.style.display = 'none';
  battleScreen.style.display = 'none';
  selectionScreen.style.display = 'flex';

  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  startBtn.disabled = true;
}

// Inicializa a UI do jogo assim que o JS carregar
window.onload = buildUI;