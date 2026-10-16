import './style.css'

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
interface Conference {
  id: string
  title: string
  shortName: string
  tagline: string
  location: string
  dates: string
  dateRange: string
  colorFrom: string
  colorTo: string
  description: string
  topics: string[]
  fees: { category: string; earlyBird: string; regular: string; onSite: string }[]
  deadlines: { label: string; date: string; status: 'urgent' | 'soon' | 'normal' }[]
  timeline: { label: string; date: string; status: 'done' | 'active' | 'upcoming' }[]
}

const conferences: Conference[] = [
  {
    id: 'icti2026',
    title: 'International Conference on Technology and Innovation 2026',
    shortName: 'ICTI 2026',
    tagline: 'Beyond Ideas, shaping tomorrow.',
    location: 'Jakarta Convention Center',
    dates: '12–14 November 2026',
    dateRange: 'Jakarta • 12–14 Nov',
    colorFrom: '#dbeafe',
    colorTo: '#eff6ff',
    description:
      'Konferensi internasional untuk peneliti, praktisi, dan akademisi berbagi inovasi terkini di bidang teknologi dan transformasi digital. ICTI 2026 menghadirkan para pemimpin industri, inovator, dan akademisi dari seluruh penjuru dunia untuk mendiskusikan tren teknologi masa depan.',
    topics: [
      'Artificial Intelligence dan Data Science',
      'Information Systems',
      'Cyber Security',
      'Digital Innovation',
      'Cloud Computing & Edge Intelligence',
      'Human-Computer Interaction',
    ],
    fees: [
      { category: 'Mahasiswa', earlyBird: 'Rp 500.000', regular: 'Rp 750.000', onSite: 'Rp 900.000' },
      { category: 'Akademisi', earlyBird: 'Rp 1.200.000', regular: 'Rp 1.500.000', onSite: 'Rp 1.800.000' },
      { category: 'Profesional', earlyBird: 'Rp 1.800.000', regular: 'Rp 2.200.000', onSite: 'Rp 2.500.000' },
      { category: 'Pendengar', earlyBird: 'Rp 300.000', regular: 'Rp 400.000', onSite: 'Rp 500.000' },
    ],
    deadlines: [
      { label: 'Batas submission', date: '20 Okt 2026', status: 'urgent' },
      { label: 'Pengumuman', date: '1 Nov 2026', status: 'soon' },
      { label: 'Camera ready', date: '6 Nov 2026', status: 'normal' },
      { label: 'Konferensi', date: '12 Nov 2026', status: 'normal' },
    ],
    timeline: [
      { label: 'Call for Paper', date: '15 Sep 2026', status: 'done' },
      { label: 'Batas Submit', date: '20 Okt 2026', status: 'active' },
      { label: 'Review', date: '1 Nov 2026', status: 'upcoming' },
      { label: 'Konferensi', date: '12 Nov 2026', status: 'upcoming' },
    ],
  },
  {
    id: 'icsd2026',
    title: 'International Conference on Software Development 2026',
    shortName: 'ICSD 2026',
    tagline: 'Building the future, one line at a time.',
    location: 'Bandung Convention Hall',
    dates: '4–6 Desember 2026',
    dateRange: 'Bandung • 4–6 Des',
    colorFrom: '#d1fae5',
    colorTo: '#ecfdf5',
    description:
      'ICSD 2026 adalah forum internasional bagi pengembang perangkat lunak, insinyur, dan peneliti untuk bertukar pengetahuan tentang praktik, alat, dan metodologi pengembangan perangkat lunak terkini.',
    topics: [
      'Agile & DevOps Methodologies',
      'Software Architecture & Design Patterns',
      'Mobile & Web Development',
      'Quality Assurance & Testing',
      'Open Source Software',
      'Low-Code / No-Code Platforms',
    ],
    fees: [
      { category: 'Mahasiswa', earlyBird: 'Rp 450.000', regular: 'Rp 700.000', onSite: 'Rp 850.000' },
      { category: 'Akademisi', earlyBird: 'Rp 1.100.000', regular: 'Rp 1.400.000', onSite: 'Rp 1.700.000' },
      { category: 'Profesional', earlyBird: 'Rp 1.700.000', regular: 'Rp 2.100.000', onSite: 'Rp 2.400.000' },
    ],
    deadlines: [
      { label: 'Batas submission', date: '15 Okt 2026', status: 'urgent' },
      { label: 'Pengumuman', date: '10 Nov 2026', status: 'soon' },
      { label: 'Camera ready', date: '20 Nov 2026', status: 'normal' },
      { label: 'Konferensi', date: '4 Des 2026', status: 'normal' },
    ],
    timeline: [
      { label: 'Call for Paper', date: '1 Sep 2026', status: 'done' },
      { label: 'Batas Submit', date: '15 Okt 2026', status: 'active' },
      { label: 'Review', date: '10 Nov 2026', status: 'upcoming' },
      { label: 'Konferensi', date: '4 Des 2026', status: 'upcoming' },
    ],
  },
  {
    id: 'snti2027',
    title: 'Seminar Nasional Teknologi Informasi 2027',
    shortName: 'SNTI 2027',
    tagline: 'Inovasi digital untuk Indonesia maju.',
    location: 'Surabaya Expo Center',
    dates: '7–9 Januari 2027',
    dateRange: 'Surabaya • 7–9 Jan',
    colorFrom: '#fef3c7',
    colorTo: '#fffbeb',
    description:
      'SNTI 2027 adalah seminar nasional yang berfokus pada perkembangan teknologi informasi di Indonesia. Forum ini menjadi ajang bagi para akademisi dan praktisi lokal untuk berbagi riset dan inovasi terkini.',
    topics: [
      'e-Government & Smart City',
      'Fintech & Ekonomi Digital',
      'Pendidikan Berbasis Teknologi',
      'Internet of Things (IoT)',
      'Big Data & Analitik',
      'Keamanan Siber Nasional',
    ],
    fees: [
      { category: 'Mahasiswa', earlyBird: 'Rp 300.000', regular: 'Rp 450.000', onSite: 'Rp 550.000' },
      { category: 'Akademisi', earlyBird: 'Rp 800.000', regular: 'Rp 1.000.000', onSite: 'Rp 1.200.000' },
      { category: 'Profesional', earlyBird: 'Rp 1.200.000', regular: 'Rp 1.500.000', onSite: 'Rp 1.800.000' },
    ],
    deadlines: [
      { label: 'Batas submission', date: '30 Okt 2026', status: 'soon' },
      { label: 'Pengumuman', date: '20 Nov 2026', status: 'normal' },
      { label: 'Camera ready', date: '1 Des 2026', status: 'normal' },
      { label: 'Konferensi', date: '7 Jan 2027', status: 'normal' },
    ],
    timeline: [
      { label: 'Call for Paper', date: '10 Sep 2026', status: 'done' },
      { label: 'Batas Submit', date: '30 Okt 2026', status: 'upcoming' },
      { label: 'Review', date: '20 Nov 2026', status: 'upcoming' },
      { label: 'Konferensi', date: '7 Jan 2027', status: 'upcoming' },
    ],
  },
  {
    id: 'icai2027',
    title: 'International Conference on Artificial Intelligence 2027',
    shortName: 'ICAI 2027',
    tagline: 'Where intelligence meets innovation.',
    location: 'Bali International Convention Center',
    dates: '7–9 Februari 2027',
    dateRange: 'Bali • 7–9 Feb',
    colorFrom: '#ede9fe',
    colorTo: '#f5f3ff',
    description:
      'ICAI 2027 adalah konferensi internasional terkemuka di bidang kecerdasan buatan yang mengumpulkan para peneliti, insinyur, dan pembuat kebijakan untuk mendiskusikan perkembangan mutakhir dalam AI dan dampaknya terhadap masyarakat.',
    topics: [
      'Machine Learning & Deep Learning',
      'Natural Language Processing',
      'Computer Vision & Image Processing',
      'Robotics & Autonomous Systems',
      'Explainable AI & Ethics',
      'Generative AI & Large Language Models',
    ],
    fees: [
      { category: 'Mahasiswa', earlyBird: 'Rp 600.000', regular: 'Rp 900.000', onSite: 'Rp 1.100.000' },
      { category: 'Akademisi', earlyBird: 'Rp 1.500.000', regular: 'Rp 1.800.000', onSite: 'Rp 2.100.000' },
      { category: 'Profesional', earlyBird: 'Rp 2.200.000', regular: 'Rp 2.700.000', onSite: 'Rp 3.000.000' },
      { category: 'Pendengar', earlyBird: 'Rp 400.000', regular: 'Rp 550.000', onSite: 'Rp 650.000' },
    ],
    deadlines: [
      { label: 'Batas submission', date: '15 Nov 2026', status: 'normal' },
      { label: 'Pengumuman', date: '15 Des 2026', status: 'normal' },
      { label: 'Camera ready', date: '5 Jan 2027', status: 'normal' },
      { label: 'Konferensi', date: '7 Feb 2027', status: 'normal' },
    ],
    timeline: [
      { label: 'Call for Paper', date: '1 Okt 2026', status: 'done' },
      { label: 'Batas Submit', date: '15 Nov 2026', status: 'upcoming' },
      { label: 'Review', date: '15 Des 2026', status: 'upcoming' },
      { label: 'Konferensi', date: '7 Feb 2027', status: 'upcoming' },
    ],
  },
]

// ─────────────────────────────────────────
// SVG ICONS
// ─────────────────────────────────────────
const icons = {
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <path d="M21 15l-5-5L5 21"/>
  </svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>`,
}

// ─────────────────────────────────────────
// RENDER: NAVBAR
// ─────────────────────────────────────────
function renderNavbar(): string {
  return `
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="navbar-logo">
        <div class="navbar-logo-icon">P</div>
        PubDesk
      </div>
      <div class="navbar-nav">
        <a href="#" class="active" id="nav-beranda">Beranda</a>
        <a href="#" id="nav-konferensi">Konferensi</a>
        <a href="#" id="nav-tentang">Tentang</a>
      </div>
      <div class="navbar-actions">
        <button class="btn btn-outline btn-sm" id="btn-masuk">Masuk</button>
      </div>
    </div>
  </nav>`
}

// ─────────────────────────────────────────
// RENDER: HOMEPAGE (PAGE 1)
// ─────────────────────────────────────────
function renderHomepage(): string {
  const confCards = conferences
    .map(
      (c) => `
    <div class="conf-card" data-conf-id="${c.id}" role="button" tabindex="0" aria-label="Lihat detail ${c.shortName}">
      <div class="conf-card-image" style="background: linear-gradient(135deg, ${c.colorFrom} 0%, ${c.colorTo} 100%);">
        ${icons.image}
      </div>
      <div class="conf-card-body">
        <div class="conf-card-title">${c.shortName}</div>
        <div class="conf-card-meta">${c.dateRange}</div>
      </div>
    </div>`
    )
    .join('')

  const timelineSteps = [
    { label: 'Call for Paper', date: '15 Sep', status: 'done' },
    { label: 'Batas Submit', date: '20 Okt', status: 'active' },
    { label: 'Review', date: '1 Nov', status: 'upcoming' },
    { label: 'Konferensi', date: '12 Nov', status: 'upcoming' },
  ]

  const timelineHTML = timelineSteps
    .map(
      (s, i) => `
    <div class="timeline-step">
      <div class="timeline-dot ${s.status === 'done' ? 'done' : s.status === 'active' ? 'active' : ''}">
        ${
          s.status === 'done'
            ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>`
            : i + 1
        }
      </div>
      <div class="timeline-step-info">
        <div class="timeline-step-name">${s.label}</div>
        <div class="timeline-step-date">${s.date}</div>
      </div>
    </div>`
    )
    .join('')

  return `
  <div class="page active" id="page-home">
    <!-- HERO -->
    <section class="hero-section">
      <div class="hero-inner">
        <div>
          <div class="hero-badge">Platform Manajemen Konferensi</div>
          <h1 class="hero-title">Conference and Management System</h1>
          <p class="hero-subtitle">
            Satu platform publikasi, konferensi, dan kolaborasi akademik yang lebih efisien.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary btn-lg" id="btn-jelajahi">Jelajahi konferensi</button>
            <button class="btn btn-outline btn-lg" id="btn-pelajari">Pelajari lebih</button>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-number">120+</span>
              <span class="hero-stat-label">Konferensi aktif</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">8.400+</span>
              <span class="hero-stat-label">Paper diterbitkan</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">32</span>
              <span class="hero-stat-label">Negara anggota</span>
            </div>
          </div>
        </div>
        <div class="hero-image-area">
          <div class="hero-image-placeholder">
            ${icons.image}
            <span>Ilustrasi platform</span>
          </div>
        </div>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <div class="main-content">
      <div class="main-inner">
        <!-- UPCOMING CONFERENCES -->
        <div class="content-section">
          <div class="section-header">
            <h2 class="section-title">Konferensi yang akan datang</h2>
            <a href="#" class="section-link" id="link-lihat-semua">
              Lihat semua ${icons.arrowRight}
            </a>
          </div>
          <div class="conference-grid" id="conference-grid">
            ${confCards}
          </div>
        </div>

        <!-- TIMELINE -->
        <div class="content-section">
          <div class="timeline-section">
            <div class="timeline-label">Timeline konferensi</div>
            <div class="timeline-track">
              <div class="timeline-line"></div>
              <div class="timeline-line-progress"></div>
              <div class="timeline-steps">
                ${timelineHTML}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: CONFERENCE DETAIL (PAGE 2)
// ─────────────────────────────────────────
function renderDetailPage(conf: Conference): string {
  const deadlinesHTML = conf.deadlines
    .map(
      (d) => `
    <div class="deadline-item">
      <span class="deadline-label">${d.label}</span>
      <span class="deadline-date ${d.status}">${d.date}</span>
    </div>`
    )
    .join('')

  const topicsListHTML = conf.topics.map((t) => `<li>${t}</li>`).join('')
  const topicsGridHTML = conf.topics.map((t) => `<div class="topic-chip">${t}</div>`).join('')

  const feesRowsHTML = conf.fees
    .map(
      (f) => `
    <tr>
      <td>${f.category}</td>
      <td class="fee-highlight">${f.earlyBird}</td>
      <td>${f.regular}</td>
      <td>${f.onSite}</td>
    </tr>`
    )
    .join('')

  const timelineDetailHTML = conf.timeline
    .map(
      (t) => `
    <div class="detail-timeline-item">
      <div class="detail-timeline-dot ${t.status}"></div>
      <div class="detail-timeline-label">${t.label}</div>
      <div class="detail-timeline-date">${t.date}</div>
      <span class="detail-timeline-badge ${t.status === 'done' ? 'badge-done' : t.status === 'active' ? 'badge-active' : 'badge-upcoming'}">
        ${t.status === 'done' ? 'Selesai' : t.status === 'active' ? 'Berlangsung' : 'Akan datang'}
      </span>
    </div>`
    )
    .join('')

  return `
  <div class="page active" id="page-detail">
    <div class="detail-page">

      <!-- DETAIL HERO -->
      <div class="detail-hero">
        <div class="detail-hero-inner">
          <div class="detail-hero-image" style="background: linear-gradient(135deg, ${conf.colorFrom} 0%, ${conf.colorTo} 100%);">
            ${icons.image}
          </div>
          <div class="detail-hero-content">
            <div>
              <button class="back-btn" id="btn-back">
                ${icons.arrowLeft}
                Kembali ke beranda
              </button>
              <div class="detail-breadcrumb">
                <a href="#" id="breadcrumb-home">Beranda</a>
                <span>›</span>
                <span>Konferensi</span>
                <span>›</span>
                <span>${conf.shortName}</span>
              </div>
            </div>
            <h1 class="detail-title">${conf.title}</h1>
            <p class="detail-subtitle">${conf.tagline}</p>
            <div class="detail-meta-row">
              <div class="detail-meta-item">
                ${icons.calendar}
                ${conf.dates}
              </div>
              <div class="detail-meta-item">
                ${icons.location}
                ${conf.location}
              </div>
            </div>
            <div class="detail-actions">
              <button class="btn btn-primary" id="btn-daftar">Daftar</button>
              <button class="btn btn-outline" id="btn-submit">Submit paper</button>
            </div>
          </div>
        </div>
      </div>

      <!-- DETAIL TABS -->
      <div class="detail-tabs">
        <div class="detail-tabs-inner">
          <button class="detail-tab active" data-tab="overview" id="tab-overview">Overview</button>
          <button class="detail-tab" data-tab="topics" id="tab-topics">Topics</button>
          <button class="detail-tab" data-tab="fees" id="tab-fees">Fees</button>
          <button class="detail-tab" data-tab="timeline" id="tab-timeline">Timeline</button>
        </div>
      </div>

      <!-- DETAIL BODY -->
      <div class="detail-body">
        <div class="detail-body-inner">
          <!-- MAIN COLUMN -->
          <div>
            <!-- OVERVIEW TAB -->
            <div class="tab-panel active" id="panel-overview">
              <div class="detail-card">
                <h3 class="detail-card-title">Tentang konferensi</h3>
                <p class="detail-description">${conf.description}</p>
              </div>
              <div class="detail-card">
                <h3 class="detail-card-title">Topik utama</h3>
                <ul class="topics-list">${topicsListHTML}</ul>
              </div>
            </div>

            <!-- TOPICS TAB -->
            <div class="tab-panel" id="panel-topics">
              <div class="detail-card">
                <h3 class="detail-card-title">Semua topik penelitian</h3>
                <p class="detail-description" style="margin-bottom:16px;">
                  Konferensi ini menerima submission di berbagai bidang berikut:
                </p>
                <div class="topics-grid">${topicsGridHTML}</div>
              </div>
            </div>

            <!-- FEES TAB -->
            <div class="tab-panel" id="panel-fees">
              <div class="detail-card">
                <h3 class="detail-card-title">Biaya registrasi</h3>
                <table class="fees-table">
                  <thead>
                    <tr>
                      <th>Kategori</th>
                      <th>Early Bird</th>
                      <th>Regular</th>
                      <th>On-Site</th>
                    </tr>
                  </thead>
                  <tbody>${feesRowsHTML}</tbody>
                </table>
                <p class="text-xs text-muted" style="margin-top:12px;">
                  * Harga belum termasuk PPN 11%. Pembayaran dapat dilakukan melalui transfer bank atau kartu kredit.
                </p>
              </div>
            </div>

            <!-- TIMELINE TAB -->
            <div class="tab-panel" id="panel-timeline">
              <div class="detail-card">
                <h3 class="detail-card-title">Timeline konferensi</h3>
                <div class="detail-timeline">${timelineDetailHTML}</div>
              </div>
            </div>
          </div>

          <!-- SIDEBAR -->
          <aside class="detail-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-card-title">Jadwal penting</h3>
              <div class="deadline-list">${deadlinesHTML}</div>
            </div>
            <div class="sidebar-card" style="background:var(--primary-light); border-color:var(--primary-border);">
              <h3 class="sidebar-card-title" style="color:var(--primary);">Ikut berpartisipasi?</h3>
              <p class="text-sm text-muted" style="margin-bottom:12px; line-height:1.6;">
                Kirimkan makalah Anda sebelum batas waktu submission.
              </p>
              <button class="btn btn-primary" style="width:100%; justify-content:center;" id="btn-submit-sidebar">
                Submit paper
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// NAVIGATION & STATE
// ─────────────────────────────────────────
const appEl = document.querySelector<HTMLDivElement>('#app')!

let currentPage: 'home' | 'detail' = 'home'
let currentConf: Conference | null = null

function renderApp() {
  let html = renderNavbar()
  if (currentPage === 'home') {
    html += renderHomepage()
  } else if (currentPage === 'detail' && currentConf) {
    html += renderDetailPage(currentConf)
  }
  appEl.innerHTML = html
  attachEventListeners()
}

function navigateTo(page: 'home' | 'detail', confId?: string) {
  if (page === 'home') {
    currentPage = 'home'
    currentConf = null
  } else if (page === 'detail' && confId) {
    const conf = conferences.find((c) => c.id === confId)
    if (!conf) return
    currentPage = 'detail'
    currentConf = conf
  }
  renderApp()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ─────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────
function attachEventListeners() {
  // Conference cards
  document.querySelectorAll<HTMLElement>('.conf-card').forEach((card) => {
    const id = card.dataset.confId
    if (!id) return
    card.addEventListener('click', () => navigateTo('detail', id))
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        navigateTo('detail', id)
      }
    })
  })

  // Back button
  document.getElementById('btn-back')?.addEventListener('click', () => navigateTo('home'))
  document.getElementById('breadcrumb-home')?.addEventListener('click', (e) => {
    e.preventDefault()
    navigateTo('home')
  })

  // Navbar links
  document.getElementById('nav-beranda')?.addEventListener('click', (e) => {
    e.preventDefault()
    navigateTo('home')
  })
  document.getElementById('nav-konferensi')?.addEventListener('click', (e) => {
    e.preventDefault()
    navigateTo('home')
  })

  // Hero CTA scroll
  document.getElementById('btn-jelajahi')?.addEventListener('click', () => {
    document.querySelector('.conference-grid')?.scrollIntoView({ behavior: 'smooth' })
  })

  // Detail tabs
  document.querySelectorAll<HTMLButtonElement>('.detail-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab
      if (!tabName) return
      document.querySelectorAll('.detail-tab').forEach((t) => t.classList.remove('active'))
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'))
      tab.classList.add('active')
      document.getElementById(`panel-${tabName}`)?.classList.add('active')
    })
  })
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
renderApp()
