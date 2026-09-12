/* ═══════════════════════════════════════════════════════════════════
   PAY KARO — Premium Fintech Web Application
   SPA Router, Mock Data, Interactive Features
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

// ── Mock Data Layer ──────────────────────────────────────────────

const USER = {
  uid: 'usr_001',
  name: 'Arjun',
  phone: '+919876543210',
  upiId: 'arjun@paykaro',
  totalBalance: 24850.75,
  spentThisMonth: 4557,
  greenProfile: {
    monthlyScore: 95,
    totalCo2Kg: 4.03,
    grade: 'A+',
    gradeLabel: 'Excellent',
    treesEquivalent: 1,
    categoryBreakdown: {
      shopping: 3.08,
      split: 0.48,
      food: 0.28,
      entertainment: 0.19
    }
  }
};

const TRANSACTIONS = [
  { id: 't1', name: 'Rahul Sharma', upi: 'rahul@upi', amount: 200, type: 'debit', category: 'other', note: '', time: 'Just now', date: '14 Mar 2026, 12:02' },
  { id: 't2', name: 'Swiggy', upi: 'swiggy@axisbank', amount: 350, type: 'debit', category: 'food', note: 'Dinner', time: '1h ago', date: '14 Mar 2026, 11:05' },
  { id: 't3', name: 'Rahul Sharma', upi: 'rahul@upi', amount: 1500, type: 'credit', category: 'other', note: 'Goa trip share', time: '5h ago', date: '14 Mar 2026, 07:15' },
  { id: 't4', name: 'Metro Rail', upi: 'metro@paytm', amount: 60, type: 'debit', category: 'travel', note: 'Daily commute', time: '8h ago', date: '14 Mar 2026, 04:30' },
  { id: 't5', name: 'Netflix', upi: 'netflix@razorpay', amount: 649, type: 'debit', category: 'entertainment', note: 'Monthly subscription', time: '1d ago', date: '13 Mar 2026, 20:00' },
  { id: 't6', name: 'Amazon', upi: 'amazon@icici', amount: 2199, type: 'debit', category: 'shopping', note: 'Wireless earbuds', time: '2d ago', date: '12 Mar 2026, 15:30' },
  { id: 't7', name: 'Airtel', upi: 'airtel@paykaro', amount: 499, type: 'debit', category: 'bills', note: 'Recharge', time: '3d ago', date: '11 Mar 2026, 10:00' },
  { id: 't8', name: 'Priya Menon', upi: 'priya@phonepe', amount: 800, type: 'debit', category: 'other', note: 'Split payment', time: '4d ago', date: '10 Mar 2026, 14:00' },
];

const SPLITS = [
  {
    id: 's1', title: 'Goa Weekend Trip', totalAmount: 12000, splitType: 'equal',
    status: 'active', note: 'Hotel + activities', createdAt: '2d ago',
    members: [
      { uid: 'usr_001', name: 'You', upi: 'you@upi', owes: 3000, hasPaid: true },
      { uid: 'usr_002', name: 'Rahul', upi: 'rahul@upi', owes: 3000, hasPaid: true },
      { uid: 'usr_003', name: 'Priya', upi: 'priya@phonepe', owes: 3000, hasPaid: false },
      { uid: 'usr_004', name: 'Amit', upi: 'amit@gpay', owes: 3000, hasPaid: false },
    ]
  },
  {
    id: 's2', title: 'Office Lunch', totalAmount: 2400, splitType: 'equal',
    status: 'active', note: 'BBQ Nation', createdAt: '5d ago',
    members: [
      { uid: 'usr_001', name: 'You', upi: 'you@upi', owes: 600, hasPaid: true },
      { uid: 'usr_002', name: 'Rahul', upi: 'rahul@upi', owes: 600, hasPaid: true },
      { uid: 'usr_005', name: 'Sneha', upi: 'sneha@paytm', owes: 600, hasPaid: true },
      { uid: 'usr_006', name: 'Vikram', upi: 'vikram@upi', owes: 600, hasPaid: false },
    ]
  },
  {
    id: 's3', title: 'Movie Night', totalAmount: 1200, splitType: 'equal',
    status: 'settled', note: 'BookMyShow', createdAt: '2w ago',
    members: [
      { uid: 'usr_001', name: 'You', upi: 'you@upi', owes: 400, hasPaid: true },
      { uid: 'usr_003', name: 'Priya', upi: 'priya@phonepe', owes: 400, hasPaid: true },
      { uid: 'usr_004', name: 'Amit', upi: 'amit@gpay', owes: 400, hasPaid: true },
    ]
  }
];

const INSIGHTS = {
  currentMonth: 'Sep 2026',
  totalSpent: 4557,
  totalIncome: 86500,
  monthlySpending: [
    { month: 'Jul', amount: 18200 },
    { month: 'Aug', amount: 22100 },
    { month: 'Sep', amount: 4557 },
  ],
  categories: {
    spending: [
      { name: 'Shopping', key: 'shopping', amount: 2199, icon: '🛍️' },
      { name: 'Split', key: 'other', amount: 800, icon: '👥' },
      { name: 'Entertainment', key: 'entertainment', amount: 649, icon: '🎬' },
      { name: 'Bills', key: 'bills', amount: 499, icon: '📱' },
      { name: 'Food & Dining', key: 'food', amount: 350, icon: '🍕' },
      { name: 'Travel', key: 'travel', amount: 60, icon: '🚇' },
    ],
    income: [
      { name: 'Salary', key: 'other', amount: 85000, icon: '💼' },
      { name: 'Split Received', key: 'other', amount: 1500, icon: '👥' },
    ]
  }
};

const ECO_TIPS = [
  { emoji: '🚇', text: 'Switch 3 cab rides/week to metro — saves ~4 kg CO₂/month', saving: '4.0 kg CO₂/month', category: 'travel' },
  { emoji: '🥘', text: 'Cook at home twice a week — reduces food carbon footprint by 30%', saving: '2.5 kg CO₂/month', category: 'food' },
  { emoji: '🌿', text: 'Choose thrifted or local brands over fast fashion', saving: '3.0 kg CO₂/month', category: 'shopping' },
  { emoji: '⚡', text: 'Switch off standby appliances — saves electricity and carbon', saving: '1.2 kg CO₂/month', category: 'bills' },
];

const CATEGORY_COLORS = {
  food: '#f97316',
  travel: '#3b82f6',
  shopping: '#a855f7',
  bills: '#eab308',
  entertainment: '#ec4899',
  other: '#6b7280',
};

const CATEGORY_ICONS = {
  food: '🍕',
  travel: '🚇',
  shopping: '🛍️',
  bills: '📱',
  entertainment: '🎬',
  other: '👤',
};

// ── SPA Router ───────────────────────────────────────────────────

const PAGES = ['home', 'insights', 'split', 'green'];
let currentPage = 'home';

function navigateTo(page) {
  if (!PAGES.includes(page)) return;
  currentPage = page;

  // Update page views
  document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active');
    target.style.animation = 'none';
    // Force reflow to restart animation
    void target.offsetWidth;
    target.style.animation = '';
  }

  // Update nav
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navItem) navItem.classList.add('active');

  // Run page-specific init
  if (page === 'insights') drawMonthlyChart();
  if (page === 'green') drawCarbonRing();

  // Animate stagger items
  requestAnimationFrame(() => {
    target?.querySelectorAll('.animate-in').forEach(el => {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
  });
}

// ── Render Functions ─────────────────────────────────────────────

function renderHome() {
  const page = document.getElementById('page-home');
  const greeting = getGreeting();

  page.innerHTML = `
    <div class="home-header animate-in stagger-1">
      <div>
        <div class="home-greeting">${greeting},</div>
        <div class="home-name">${USER.name}</div>
      </div>
      <button class="notification-btn" id="notif-btn" aria-label="Notifications">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <span class="badge"></span>
      </button>
    </div>

    <div class="balance-card animate-in stagger-2">
      <div class="balance-top">
        <div class="balance-label">Total Balance</div>
        <div class="upi-badge">${USER.upiId}</div>
      </div>
      <div class="balance-amount" id="balance-display">₹${formatMoney(USER.totalBalance)}</div>
      <div class="balance-bottom">
        <div>
          <div class="balance-sub-label">Spent this month</div>
          <div class="balance-sub-value" style="color: #fbbf24;">₹${formatMoney(USER.spentThisMonth)}</div>
        </div>
        <div>
          <div class="balance-sub-label">UPI ID</div>
          <div class="balance-sub-value">${USER.upiId}</div>
        </div>
      </div>
    </div>

    <div class="quick-actions animate-in stagger-3">
      <button class="quick-action-btn ripple" id="btn-send" aria-label="Send money">
        <div class="quick-action-icon send">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
        </div>
        <span>Send</span>
      </button>
      <button class="quick-action-btn ripple" id="btn-scan" aria-label="Scan QR">
        <div class="quick-action-icon scan">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        </div>
        <span>Scan</span>
      </button>
      <button class="quick-action-btn ripple" id="btn-receive" aria-label="Receive money">
        <div class="quick-action-icon receive">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v16m0 0l-6-6m6 6l6-6"/><path d="M4 22h16"/></svg>
        </div>
        <span>Receive</span>
      </button>
      <button class="quick-action-btn ripple" id="btn-history" aria-label="Transaction history">
        <div class="quick-action-icon history">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <span>History</span>
      </button>
    </div>

    <div class="animate-in stagger-4">
      <div class="section-header">
        <div class="section-title">Recent Activity</div>
        <button class="section-link" id="btn-see-all">See all</button>
      </div>
      <div class="txn-list" id="txn-list">
        ${TRANSACTIONS.slice(0, 6).map(t => renderTxnItem(t)).join('')}
      </div>
    </div>
  `;

  // Bind events
  document.getElementById('btn-send')?.addEventListener('click', () => openModal('send-modal'));
  document.getElementById('btn-scan')?.addEventListener('click', () => showToast('📷', 'QR Scanner opened — point at a QR code'));
  document.getElementById('btn-receive')?.addEventListener('click', () => showToast('📲', `Share your UPI ID: ${USER.upiId}`));
  document.getElementById('btn-history')?.addEventListener('click', () => navigateTo('insights'));
  document.getElementById('btn-see-all')?.addEventListener('click', () => navigateTo('insights'));
  document.getElementById('notif-btn')?.addEventListener('click', () => showToast('🔔', 'You have 2 new notifications'));
}

function renderTxnItem(t) {
  const isCredit = t.type === 'credit';
  const avatarClass = isCredit ? 'credit' : t.category;
  const initial = t.name.charAt(0).toUpperCase();
  const icon = isCredit ? '↓' : (CATEGORY_ICONS[t.category] || initial);

  return `
    <div class="txn-item" data-txn-id="${t.id}">
      <div class="txn-avatar ${avatarClass}">${icon}</div>
      <div class="txn-details">
        <div class="txn-name">${t.name}</div>
        <div class="txn-sub">${t.note || t.upi}</div>
      </div>
      <div class="txn-right">
        <div class="txn-amount ${t.type}">${isCredit ? '+' : '-'}₹${formatMoney(t.amount)}</div>
        <div class="txn-time">${t.time}</div>
      </div>
    </div>
  `;
}

function renderInsights() {
  const page = document.getElementById('page-insights');
  const maxCatAmount = Math.max(...INSIGHTS.categories.spending.map(c => c.amount));

  page.innerHTML = `
    <div class="insights-header animate-in stagger-1">
      <div class="insights-title">Insights</div>
      <div class="month-badge">${INSIGHTS.currentMonth}</div>
    </div>

    <div class="summary-grid animate-in stagger-2">
      <div class="summary-card spent">
        <div class="summary-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20m0-20l-4 4m4-4l4 4"/></svg>
        </div>
        <div class="summary-amount count-animate">₹${formatMoney(INSIGHTS.totalSpent)}</div>
        <div class="summary-label">Total Spent</div>
        <div class="summary-label">This month</div>
      </div>
      <div class="summary-card income">
        <div class="summary-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V2m0 20l4-4m-4 4l-4-4"/></svg>
        </div>
        <div class="summary-amount count-animate">₹${formatMoney(INSIGHTS.totalIncome)}</div>
        <div class="summary-label">Total Income</div>
        <div class="summary-label">This month</div>
      </div>
    </div>

    <div class="chart-card animate-in stagger-3">
      <div class="chart-title">Monthly Spending</div>
      <div class="chart-container">
        <canvas id="monthly-chart"></canvas>
      </div>
    </div>

    <div class="toggle-tabs animate-in stagger-4" id="insight-tabs">
      <button class="toggle-tab active" data-tab="spending">Spending</button>
      <button class="toggle-tab" data-tab="income">Income</button>
    </div>

    <div class="category-card animate-in stagger-5" id="category-list">
      <div class="chart-title" style="margin-bottom: var(--space-md);">By Category</div>
      ${renderCategoryList('spending')}
    </div>
  `;

  // Tab switching
  document.querySelectorAll('#insight-tabs .toggle-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#insight-tabs .toggle-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const type = tab.dataset.tab;
      document.getElementById('category-list').innerHTML = `
        <div class="chart-title" style="margin-bottom: var(--space-md);">By Category</div>
        ${renderCategoryList(type)}
      `;
    });
  });

  requestAnimationFrame(() => drawMonthlyChart());
}

function renderCategoryList(type) {
  const categories = INSIGHTS.categories[type] || [];
  const maxAmount = Math.max(...categories.map(c => c.amount), 1);
  const catColorMap = {
    'Shopping': 'shopping', 'Split': 'other', 'Entertainment': 'entertainment',
    'Bills': 'bills', 'Food & Dining': 'food', 'Travel': 'travel',
    'Salary': 'other', 'Split Received': 'other'
  };

  return categories.map(c => {
    const catClass = catColorMap[c.name] || 'other';
    const pct = Math.max(5, (c.amount / maxAmount) * 100);
    return `
      <div class="category-item">
        <div class="cat-icon ${catClass}">${c.icon}</div>
        <div class="cat-info">
          <div class="cat-name">${c.name}</div>
          <div class="cat-bar-track">
            <div class="cat-bar-fill ${catClass}" style="width: ${pct}%;"></div>
          </div>
        </div>
        <div class="cat-amount">₹${formatMoney(c.amount)}</div>
      </div>
    `;
  }).join('');
}

function renderSplit() {
  const page = document.getElementById('page-split');
  const activeSplits = SPLITS.filter(s => s.status === 'active');
  const settledSplits = SPLITS.filter(s => s.status === 'settled');

  page.innerHTML = `
    <div class="split-header animate-in stagger-1">
      <div>
        <div class="split-title">Split Bills</div>
        <div class="split-subtitle">${activeSplits.length} active split${activeSplits.length !== 1 ? 's' : ''}</div>
      </div>
      <button class="create-split-btn" id="btn-create-split" aria-label="Create split">+</button>
    </div>

    ${activeSplits.length > 0 ? `
      <div class="split-section-label animate-in stagger-2">ACTIVE</div>
      ${activeSplits.map((s, i) => renderSplitCard(s, i + 2)).join('')}
    ` : ''}

    ${settledSplits.length > 0 ? `
      <div class="split-section-label animate-in mt-lg" style="animation-delay: 0.3s;">SETTLED</div>
      ${settledSplits.map((s, i) => renderSplitCard(s, i + 4)).join('')}
    ` : ''}
  `;

  document.getElementById('btn-create-split')?.addEventListener('click', () => openModal('split-modal'));
}

function renderSplitCard(split, staggerIdx) {
  const paidCount = split.members.filter(m => m.hasPaid).length;
  const totalMembers = split.members.length;
  const paidPct = (paidCount / totalMembers) * 100;
  const pendingAmount = split.members.filter(m => !m.hasPaid).reduce((sum, m) => sum + m.owes, 0);

  return `
    <div class="split-card animate-in stagger-${Math.min(staggerIdx, 5)}">
      <div class="split-card-top">
        <div class="split-card-title">${split.title}</div>
        <div class="split-card-amount">₹${formatMoney(split.totalAmount)}</div>
      </div>
      <div class="split-card-meta">
        <span class="split-time">${split.createdAt}</span>
        <span class="split-status ${split.status}">${capitalize(split.status)}</span>
      </div>
      ${split.note ? `<div class="split-note">${split.note}</div>` : ''}
      <div class="split-progress-wrap">
        <div class="split-progress-bar">
          <div class="split-progress-fill" style="width: ${paidPct}%;"></div>
        </div>
        <div class="split-progress-text">${paidCount}/${totalMembers} paid</div>
      </div>
      <div class="split-members">
        ${split.members.map(m => renderSplitMember(m, split)).join('')}
      </div>
      ${pendingAmount > 0 ? `
        <div class="split-pending-label">⏳ ₹${formatMoney(pendingAmount)} pending</div>
      ` : ''}
    </div>
  `;
}

function renderSplitMember(member, split) {
  const initial = member.name.charAt(0);
  const isYou = member.uid === USER.uid;

  if (member.hasPaid) {
    return `
      <div class="split-member">
        <div class="member-avatar">${initial}</div>
        <div class="member-info">
          <div class="member-name">${member.name}</div>
          <div class="member-upi">${member.upi}</div>
        </div>
        <div class="member-status paid">Paid</div>
      </div>
    `;
  }

  return `
    <div class="split-member">
      <div class="member-avatar">${initial}</div>
      <div class="member-info">
        <div class="member-name">${member.name}</div>
        <div class="member-upi">${member.upi}</div>
      </div>
      <div class="member-status pending">₹${formatMoney(member.owes)}</div>
      <button class="member-action-btn" title="Send reminder" onclick="showToast('⏰', 'Reminder sent to ${member.name}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </button>
    </div>
  `;
}

function renderGreen() {
  const page = document.getElementById('page-green');
  const gp = USER.greenProfile;
  const maxCo2 = Math.max(...Object.values(gp.categoryBreakdown), 0.01);

  page.innerHTML = `
    <div class="green-header animate-in stagger-1">
      <div class="green-title">Carbon Score</div>
      <div class="eco-mode-badge">🌍 Eco Mode</div>
    </div>

    <div class="score-ring-card animate-in stagger-2">
      <div class="ring-container">
        <canvas id="carbon-ring" width="360" height="360"></canvas>
        <div class="ring-center">
          <div class="ring-grade">${gp.grade}</div>
          <div class="ring-label">${gp.gradeLabel}</div>
        </div>
      </div>
      <div class="co2-main">
        <div class="co2-value">${gp.totalCo2Kg} kg CO<sub>2</sub></div>
        <div class="co2-desc">emitted this month via spending</div>
      </div>
      <div class="green-stats">
        <div class="green-stat">
          <div class="green-stat-value">${gp.treesEquivalent}</div>
          <div class="green-stat-label">trees/year to offset</div>
        </div>
        <div class="green-stat">
          <div class="green-stat-value">${gp.grade}</div>
          <div class="green-stat-label">green grade</div>
        </div>
        <div class="green-stat">
          <div class="green-stat-value">₹${formatMoney(USER.spentThisMonth)}</div>
          <div class="green-stat-label">tracked spend</div>
        </div>
      </div>
    </div>

    <div class="co2-category-card animate-in stagger-3">
      <div class="chart-title" style="margin-bottom: var(--space-md);">CO₂ by Category</div>
      ${Object.entries(gp.categoryBreakdown).map(([cat, val]) => {
        const pct = Math.max(5, (val / maxCo2) * 100);
        const color = CATEGORY_COLORS[cat] || '#6b7280';
        const label = capitalize(cat === 'food' ? 'Food & Dining' : cat);
        return `
          <div class="co2-cat-item">
            <div class="co2-cat-name">${label}</div>
            <div class="co2-cat-bar-track">
              <div class="co2-cat-bar-fill" style="width: ${pct}%; background: ${color};"></div>
            </div>
            <div class="co2-cat-value">${val.toFixed(2)}kg</div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="animate-in stagger-4">
      <div class="tips-section-title">Green Tips</div>
      ${ECO_TIPS.map(tip => `
        <div class="tip-card">
          <div class="tip-emoji">${tip.emoji}</div>
          <div class="tip-content">
            <div class="tip-text">${tip.text}</div>
            <div class="tip-saving">💚 Saves ${tip.saving}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  requestAnimationFrame(() => drawCarbonRing());
}

// ── Chart Drawing ────────────────────────────────────────────────

function drawMonthlyChart() {
  const canvas = document.getElementById('monthly-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const data = INSIGHTS.monthlySpending;
  const maxVal = Math.max(...data.map(d => d.amount)) * 1.2;
  const barWidth = Math.min(80, Math.max(40, (w - 60) / data.length - 20));
  const gap = (w - data.length * barWidth) / (data.length + 1);

  // Clear
  ctx.clearRect(0, 0, w, h);

  // Grid lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    const y = 20 + (i / 3) * (h - 50);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Bars
  data.forEach((d, i) => {
    const x = gap + i * (barWidth + gap);
    const barH = (d.amount / maxVal) * (h - 50);
    const y = h - 30 - barH;

    // Bar gradient
    const grad = ctx.createLinearGradient(x, y, x, h - 30);
    grad.addColorStop(0, '#00d4aa');
    grad.addColorStop(1, 'rgba(0, 212, 170, 0.3)');
    ctx.fillStyle = grad;

    // Rounded top bar
    const radius = 6;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + barWidth - radius, y);
    ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
    ctx.lineTo(x + barWidth, h - 30);
    ctx.lineTo(x, h - 30);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.fill();

    // Month label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(d.month, x + barWidth / 2, h - 10);

    // Value on top
    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillText(`₹${(d.amount / 1000).toFixed(1)}k`, x + barWidth / 2, y - 8);
  });
}

function drawCarbonRing() {
  const canvas = document.getElementById('carbon-ring');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const container = canvas.parentElement;
  const size = container ? container.clientWidth : 180;

  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.38;
  const lineWidth = Math.max(8, size * 0.055);
  const score = USER.greenProfile.monthlyScore / 100;

  // Background ring
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(0, 212, 170, 0.12)';
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Animated score ring
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + (Math.PI * 2 * score);

  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#00d4aa');
  gradient.addColorStop(1, '#00b4d8');

  ctx.beginPath();
  ctx.arc(cx, cy, radius, startAngle, endAngle);
  ctx.strokeStyle = gradient;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Glow effect
  ctx.shadowColor = '#00d4aa';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, endAngle - 0.1, endAngle);
  ctx.strokeStyle = '#00d4aa';
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.shadowBlur = 0;
}

// ── Modals ───────────────────────────────────────────────────────

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('.success-overlay').forEach(s => s.classList.remove('open'));
  document.body.style.overflow = '';
}

function handleSendMoney(e) {
  e.preventDefault();
  const upiId = document.getElementById('send-upi')?.value?.trim();
  const amount = parseFloat(document.getElementById('send-amount')?.value);
  const note = document.getElementById('send-note')?.value?.trim() || '';

  if (!upiId || !amount || amount <= 0) {
    showToast('⚠️', 'Please enter valid UPI ID and amount');
    return;
  }

  // Close send modal
  closeModal('send-modal');

  // Generate a random transaction reference
  const txnRef = 'UPI' + Date.now().toString().slice(-10);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
    now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });

  // Show success screen
  showPaymentSuccess({
    amount,
    toName: upiId.split('@')[0] || 'User',
    toUpi: upiId,
    txnRef,
    dateStr,
    note
  });

  // Update mock data
  USER.totalBalance -= amount;
  USER.spentThisMonth += amount;

  const newTxn = {
    id: 't' + Date.now(),
    name: capitalize(upiId.split('@')[0] || 'User'),
    upi: upiId,
    amount,
    type: 'debit',
    category: 'other',
    note,
    time: 'Just now',
    date: dateStr
  };
  TRANSACTIONS.unshift(newTxn);
}

function showPaymentSuccess(data) {
  const overlay = document.getElementById('success-overlay');
  overlay.innerHTML = `
    <div style="max-width: 400px; width: 100%; display: flex; flex-direction: column; align-items: center;">
    <div class="success-check-wrap">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
    </div>
    <div class="success-title">Payment Sent!</div>
    <div class="success-amount">₹${formatMoney(data.amount)}</div>
    <div class="success-to">to ${capitalize(data.toName)}</div>

    <div class="success-details">
      <div class="success-row">
        <span class="success-row-label">UPI ID</span>
        <span class="success-row-value">${data.toUpi}</span>
      </div>
      <div class="success-row">
        <span class="success-row-label">Transaction ID</span>
        <span class="success-row-value">${data.txnRef}</span>
      </div>
      <div class="success-row">
        <span class="success-row-label">Date & Time</span>
        <span class="success-row-value">${data.dateStr}</span>
      </div>
      <div class="success-row">
        <span class="success-row-label">Status</span>
        <span class="success-status">Success</span>
      </div>
    </div>

    <div class="eco-note">🌱 Digital payment — zero paper waste</div>

    <div class="success-actions">
      <button class="btn-secondary" onclick="showToast('📤', 'Receipt shared!')">📤 Share Receipt</button>
      <button class="btn-primary" id="btn-success-done">Done</button>
    </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('btn-success-done')?.addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    renderHome();
  });
}

function handleCreateSplit(e) {
  e.preventDefault();
  const title = document.getElementById('split-title-input')?.value?.trim();
  const amount = parseFloat(document.getElementById('split-amount-input')?.value);
  const splitType = document.getElementById('split-type-input')?.value || 'equal';

  // Gather members
  const memberRows = document.querySelectorAll('.member-input-row');
  const members = [];
  memberRows.forEach(row => {
    const name = row.querySelector('.member-name-input')?.value?.trim();
    const upi = row.querySelector('.member-upi-input')?.value?.trim();
    if (name && upi) members.push({ name, upi });
  });

  if (!title || !amount || members.length === 0) {
    showToast('⚠️', 'Please fill in all fields and add at least 1 member');
    return;
  }

  const share = Math.round((amount / (members.length + 1)) * 100) / 100;

  const newSplit = {
    id: 's' + Date.now(),
    title,
    totalAmount: amount,
    splitType,
    status: 'active',
    note: '',
    createdAt: 'Just now',
    members: [
      { uid: USER.uid, name: 'You', upi: USER.upiId, owes: share, hasPaid: true },
      ...members.map((m, i) => ({
        uid: 'usr_new_' + i,
        name: m.name,
        upi: m.upi,
        owes: share,
        hasPaid: false,
      }))
    ]
  };

  SPLITS.unshift(newSplit);
  closeModal('split-modal');
  renderSplit();
  showToast('✅', `Split "${title}" created! ${members.length} member${members.length > 1 ? 's' : ''} notified.`);
}

// ── Toast Notification ───────────────────────────────────────────

let toastTimeout;
function showToast(icon, message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-icon').textContent = icon;
  toast.querySelector('.toast-message').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Utility Functions ────────────────────────────────────────────

function formatMoney(n) {
  if (n === undefined || n === null) return '0';
  const num = parseFloat(n);
  if (num >= 10000) {
    return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  }
  return num.toLocaleString('en-IN', { minimumFractionDigits: num % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 });
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

// ── Split Modal: Add/Remove Members ──────────────────────────────

let memberCounter = 1;

function addMemberRow() {
  memberCounter++;
  const container = document.getElementById('members-container');
  if (!container) return;

  const row = document.createElement('div');
  row.className = 'member-input-row';
  row.id = `member-row-${memberCounter}`;
  row.innerHTML = `
    <input type="text" class="form-input member-name-input" placeholder="Name" required>
    <input type="text" class="form-input member-upi-input" placeholder="UPI ID" required>
    <button type="button" class="remove-member-btn" onclick="removeMemberRow('member-row-${memberCounter}')">✕</button>
  `;
  container.appendChild(row);
}

function removeMemberRow(rowId) {
  const row = document.getElementById(rowId);
  if (row) row.remove();
}

// ── Initialize ───────────────────────────────────────────────────

function init() {
  // Render all pages
  renderHome();
  renderInsights();
  renderSplit();
  renderGreen();

  // Navigate to home
  navigateTo('home');

  // Bind bottom nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const page = item.dataset.page;
      navigateTo(page);
    });
  });

  // Send money form
  document.getElementById('send-form')?.addEventListener('submit', handleSendMoney);

  // Create split form
  document.getElementById('split-form')?.addEventListener('submit', handleCreateSplit);

  // Modal close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // Window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (currentPage === 'insights') drawMonthlyChart();
      if (currentPage === 'green') drawCarbonRing();
    }, 200);
  });
}

// Make functions available globally for inline handlers
window.showToast = showToast;
window.addMemberRow = addMemberRow;
window.removeMemberRow = removeMemberRow;
window.closeModal = closeModal;
window.openModal = openModal;

// Start
document.addEventListener('DOMContentLoaded', init);
