import './style.css'

// ─────────────────────────────────────────
// TYPES & DATA INTERFACES
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

interface User {
  name: string
  email: string
  password?: string
  role: 'author' | 'reviewer' | 'admin'
}

interface Submission {
  id: string
  title: string
  conference: string
  status: 'Under Review' | 'Accepted' | 'Revision' | 'Rejected'
  submittedAt: string
}

interface ActivityItem {
  id: string
  title: string
  time: string
}

// ─────────────────────────────────────────
// DATABASE & INITIAL STATE
// ─────────────────────────────────────────
const usersDB: User[] = [
  { name: 'Rina Ahmad', email: 'rina@email.com', password: 'password123', role: 'author' },
  { name: 'Dr. Budi Santoso', email: 'budi.santoso@univ.ac.id', password: 'password123', role: 'reviewer' },
  { name: 'Admin PubDesk', email: 'admin@pubdesk.org', password: 'password123', role: 'admin' },
]

const submissionsDB: Submission[] = [
  { id: 's1', title: 'AI untuk Deteksi Dini Penyakit', conference: 'ICAI 2027', status: 'Under Review', submittedAt: 'Hari ini, 09:42' },
  { id: 's2', title: 'Sistem Informasi Desa Cerdas', conference: 'SNTI 2027', status: 'Accepted', submittedAt: '10 Okt, 14:20' },
  { id: 's3', title: 'Keamanan Data pada IoT', conference: 'ICTI 2026', status: 'Revision', submittedAt: '5 Okt, 11:00' },
  { id: 's4', title: 'Optimasi Query Graph Database', conference: 'ICSD 2026', status: 'Under Review', submittedAt: '1 Okt, 08:15' },
]

const activityLogDB: ActivityItem[] = [
  { id: 'a1', title: 'Paper berhasil dikirim', time: 'Hari ini, 09:42' },
  { id: 'a2', title: 'Reviewer memberikan catatan', time: 'Kemarin, 15:30' },
  { id: 'a3', title: 'Batas revisi diperbaharui', time: '12 Okt, 11:05' },
]

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
    colorFrom: '#dcfce7',
    colorTo: '#f0fdf4',
    description:
      'Forum utama untuk insinyur perangkat lunak, arsitek sistem, dan peneliti bertukar pengalaman dalam metode pengembangan modern, DevOps, arsitektur microservices, dan keandalan sistem berskala besar.',
    topics: [
      'Software Architecture & Microservices',
      'DevOps & Continuous Delivery',
      'Software Quality & Testing',
      'Agile & Modern Engineering Practices',
      'Open Source Ecosystems',
      'Cloud Native Applications',
    ],
    fees: [
      { category: 'Mahasiswa', earlyBird: 'Rp 450.000', regular: 'Rp 650.000', onSite: 'Rp 800.000' },
      { category: 'Akademisi', earlyBird: 'Rp 1.000.000', regular: 'Rp 1.300.000', onSite: 'Rp 1.600.000' },
      { category: 'Profesional', earlyBird: 'Rp 1.600.000', regular: 'Rp 2.000.000', onSite: 'Rp 2.300.000' },
      { category: 'Pendengar', earlyBird: 'Rp 250.000', regular: 'Rp 350.000', onSite: 'Rp 450.000' },
    ],
    deadlines: [
      { label: 'Batas submission', date: '5 Nov 2026', status: 'soon' },
      { label: 'Pengumuman', date: '20 Nov 2026', status: 'normal' },
      { label: 'Camera ready', date: '1 Des 2026', status: 'normal' },
      { label: 'Konferensi', date: '4 Des 2026', status: 'normal' },
    ],
    timeline: [
      { label: 'Call for Paper', date: '20 Sep 2026', status: 'done' },
      { label: 'Batas Submit', date: '5 Nov 2026', status: 'active' },
      { label: 'Review', date: '20 Nov 2026', status: 'upcoming' },
      { label: 'Konferensi', date: '4 Des 2026', status: 'upcoming' },
    ],
  },
  {
    id: 'snti2027',
    title: 'Seminar Nasional Teknologi Informasi 2027',
    shortName: 'SNTI 2027',
    tagline: 'Inovasi lokal berdaya saing global.',
    location: 'Surabaya Grand City',
    dates: '7–9 Januari 2027',
    dateRange: 'Surabaya • 7–9 Jan',
    colorFrom: '#fef9c3',
    colorTo: '#fefce8',
    description:
      'Pertemuan akademisi dan praktisi nasional untuk memaparkan hasil riset terapan di bidang tata kelola TI, e-Government, Smart City, dan transformasi digital UMKM.',
    topics: [
      'Smart City & e-Government',
      'Tata Kelola & Keamanan Sistem Informasi',
      'Teknologi Finansial & E-Commerce',
      'Infrastruktur Jaringan & Telekomunikasi',
      'Sistem Cerdas Pertanian & Maritim',
      'Pendidikan Berbasis Teknologi',
    ],
    fees: [
      { category: 'Mahasiswa', earlyBird: 'Rp 350.000', regular: 'Rp 500.000', onSite: 'Rp 650.000' },
      { category: 'Akademisi', earlyBird: 'Rp 750.000', regular: 'Rp 950.000', onSite: 'Rp 1.200.000' },
      { category: 'Profesional', earlyBird: 'Rp 1.100.000', regular: 'Rp 1.400.000', onSite: 'Rp 1.700.000' },
      { category: 'Pendengar', earlyBird: 'Rp 200.000', regular: 'Rp 250.000', onSite: 'Rp 300.000' },
    ],
    deadlines: [
      { label: 'Batas submission', date: '15 Nov 2026', status: 'soon' },
      { label: 'Pengumuman', date: '15 Des 2026', status: 'normal' },
      { label: 'Camera ready', date: '5 Jan 2027', status: 'normal' },
      { label: 'Konferensi', date: '7 Jan 2027', status: 'normal' },
    ],
    timeline: [
      { label: 'Call for Paper', date: '1 Okt 2026', status: 'done' },
      { label: 'Batas Submit', date: '15 Nov 2026', status: 'upcoming' },
      { label: 'Review', date: '15 Des 2026', status: 'upcoming' },
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
    colorTo: '#faf5ff',
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
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
  </svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>`,
  alertCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>`,
}

// ─────────────────────────────────────────
// APP STATE
// ─────────────────────────────────────────
type PageType = 'home' | 'detail' | 'login' | 'register' | 'dashboard'

let currentUser: User | null = null
let currentPage: PageType = 'home'
let currentConf: Conference = conferences[0]
let activeModal: 'submit-paper' | 'my-submissions' | 'profile' | 'about' | null = null

const appEl = document.querySelector<HTMLDivElement>('#app')!

// Helper toast notification
function showToast(message: string) {
  const existing = document.querySelector('.toast-notice')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.className = 'toast-notice'
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
    <span>${message}</span>
  `
  document.body.appendChild(toast)
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s, transform 0.3s'
    toast.style.opacity = '0'
    toast.style.transform = 'translateY(15px)'
    setTimeout(() => toast.remove(), 300)
  }, 3200)
}

// ─────────────────────────────────────────
// RENDER: NAVBAR
// ─────────────────────────────────────────
function renderNavbar(): string {
  const userActions = currentUser
    ? `
      <div style="display:flex; align-items:center; gap:10px;">
        <button class="btn btn-outline btn-sm" id="btn-to-dashboard" style="display:flex; align-items:center; gap:6px;">
          ${icons.dashboard} Dashboard
        </button>
        <button class="btn btn-sm" id="btn-logout-nav" style="background:#f1f5f9; color:#475569; border:1px solid #cbd5e1;">
          Keluar
        </button>
      </div>`
    : `
      <div class="navbar-actions">
        <a href="/reviewer.html" class="btn btn-sm" id="btn-reviewer-nav" style="background:#f0f9ff; color:#0284c7; border:1px solid #bae6fd; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
          Portal Reviewer
        </a>
        <a href="/admin.html" class="btn btn-sm" id="btn-admin-nav" style="background:#1e293b; color:#ffffff; border:1px solid #0f172a; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
          Portal Admin
        </a>
        <button class="btn btn-outline btn-sm" id="btn-masuk">Masuk</button>
      </div>`

  return `
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="navbar-logo" id="nav-brand" style="cursor:pointer;" title="PubDesk - Beranda">
        <div class="navbar-logo-icon">P</div>
        PubDesk
      </div>
      <div class="navbar-nav">
        <a href="#" class="${currentPage === 'home' ? 'active' : ''}" id="nav-beranda">Beranda</a>
        <a href="#" id="nav-konferensi">Konferensi</a>
        <a href="#" id="nav-tentang">Tentang</a>
      </div>
      ${userActions}
    </div>
  </nav>`
}

// ─────────────────────────────────────────
// RENDER: HOMEPAGE (LANDING PAGE SESUAI SCREENSHOT 1)
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
            ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M20 6L9 17l-5-5"/></svg>`
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
// RENDER: CONFERENCE DETAIL (SESUAI SCREENSHOT 2 & 3)
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
              <button class="btn btn-primary" id="btn-daftar-detail">Daftar</button>
              <button class="btn btn-outline" id="btn-submit-detail">Submit paper</button>
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
// RENDER: LOGIN PAGE (DENGAN TOMBOL KEMBALI LEBIH RAPI & ENAK DIPANDANG)
// ─────────────────────────────────────────
function renderLoginPage(): string {
  return `
  <div class="auth-page">
    <div class="auth-top-nav">
      <button class="auth-back-btn" id="btn-auth-back-home" title="Kembali ke Beranda">
        ${icons.arrowLeft}
        <span>Kembali ke Beranda</span>
      </button>
    </div>
    <div class="auth-card">
      <div class="auth-header">
        <div class="auth-logo-badge">P</div>
        <h2 class="auth-title">Login</h2>
      </div>
      <form class="auth-form" id="form-login">
        <div class="auth-field">
          <label class="auth-label">Email address</label>
          <input type="email" class="auth-input" id="login-email" placeholder="nama@email.com" value="rina@email.com" required />
        </div>
        <div class="auth-field">
          <label class="auth-label">Password</label>
          <input type="password" class="auth-input" id="login-password" placeholder="Masukkan password" value="password123" required />
        </div>
        <div class="auth-row-options">
          <label class="auth-checkbox-label">
            <input type="checkbox" id="login-remember" checked />
            <span>Ingat saya</span>
          </label>
          <span class="auth-link-subtle" id="link-forgot-pass">Lupa password?</span>
        </div>
        <button type="submit" class="auth-btn-primary" id="btn-submit-login">
          Login
        </button>
      </form>
      <div class="auth-footer">
        Belum punya akun? <span id="link-go-to-register">Register</span>
      </div>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: REGISTER PAGE (DENGAN TOMBOL KEMBALI LEBIH RAPI & ENAK DIPANDANG)
// ─────────────────────────────────────────
function renderRegisterPage(): string {
  return `
  <div class="auth-page">
    <div class="auth-top-nav">
      <button class="auth-back-btn" id="btn-auth-back-home" title="Kembali ke Beranda">
        ${icons.arrowLeft}
        <span>Kembali ke Beranda</span>
      </button>
    </div>
    <div class="auth-card">
      <div class="auth-header">
        <div class="auth-logo-badge">P</div>
        <h2 class="auth-title">Register</h2>
      </div>
      <form class="auth-form" id="form-register">
        <div class="auth-field">
          <label class="auth-label">Nama lengkap</label>
          <input type="text" class="auth-input" id="reg-name" placeholder="Masukkan nama lengkap" required />
        </div>
        <div class="auth-field">
          <label class="auth-label">Email address</label>
          <input type="email" class="auth-input" id="reg-email" placeholder="nama@email.com" required />
        </div>
        <div class="auth-field">
          <label class="auth-label">Password</label>
          <input type="password" class="auth-input" id="reg-password" placeholder="Minimal 8 karakter" minlength="8" required />
        </div>
        <div class="auth-field">
          <label class="auth-label">Konfirmasi password</label>
          <input type="password" class="auth-input" id="reg-confirm-password" placeholder="Ulangi password" minlength="8" required />
        </div>
        <button type="submit" class="auth-btn-primary" id="btn-submit-register">
          Register
        </button>
      </form>
      <div class="auth-footer">
        Sudah punya akun? <span id="link-go-to-login">Login</span>
      </div>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: DASHBOARD (AUTHOR / PESERTA)
// ─────────────────────────────────────────
function renderDashboardPage(): string {
  const userName = currentUser ? currentUser.name : 'Rina Ahmad'

  const submissionItemsHTML = submissionsDB
    .map((s) => {
      let badgeClass = 'badge-under-review'
      if (s.status === 'Accepted') badgeClass = 'badge-accepted'
      else if (s.status === 'Revision') badgeClass = 'badge-revision'
      else if (s.status === 'Rejected') badgeClass = 'badge-rejected'

      return `
      <div class="submission-item">
        <div class="submission-info">
          <span class="submission-title">${s.title}</span>
          <span class="submission-meta">${s.conference} • ${s.submittedAt}</span>
        </div>
        <div>
          <span class="badge-pill ${badgeClass}">${s.status}</span>
        </div>
      </div>`
    })
    .join('')

  const activityItemsHTML = activityLogDB
    .map(
      (a) => `
    <div class="activity-item">
      <div class="activity-dot"></div>
      <div class="activity-content">
        <span class="activity-title">${a.title}</span>
        <span class="activity-time">${a.time}</span>
      </div>
    </div>`
    )
    .join('')

  const totalPaper = submissionsDB.length
  const underReviewCount = submissionsDB.filter((s) => s.status === 'Under Review').length
  const acceptedCount = submissionsDB.filter((s) => s.status === 'Accepted').length
  const revisionCount = submissionsDB.filter((s) => s.status === 'Revision').length

  return `
  <div class="dashboard-container">
    <!-- SIDEBAR -->
    <aside class="dash-sidebar">
      <div class="dash-brand" id="dash-logo-home" title="Kembali ke Beranda">
        <div class="dash-brand-icon">P</div>
        PubDesk
      </div>
      <div class="dash-nav">
        <button class="dash-nav-item active" id="menu-dash">
          ${icons.dashboard} Dashboard
        </button>
        <button class="dash-nav-item" id="menu-submissions">
          ${icons.document} My Submissions
        </button>
        <button class="dash-nav-item" id="menu-submit-paper">
          ${icons.send} Submit Paper
        </button>
        <button class="dash-nav-item" id="menu-profile">
          ${icons.user} Profil
        </button>
        <div class="dash-nav-divider"></div>
        <button class="dash-nav-item" id="menu-home-link" style="color:var(--primary);">
          ${icons.home} Halaman Utama
        </button>
        <button class="dash-nav-item" id="menu-logout" style="color:#ef4444;">
          ${icons.logout} Logout
        </button>
      </div>

      <!-- USER PROFILE FOOTER -->
      <div class="dash-user-profile">
        <div class="dash-avatar-circle">
          ${userName.charAt(0)}
        </div>
        <div class="dash-user-info">
          <span class="dash-user-name">${userName}</span>
          <span class="dash-user-role">Author</span>
        </div>
      </div>
    </aside>

    <!-- MAIN SECTION -->
    <main class="dash-main">
      <!-- TOPBAR -->
      <header class="dash-topbar">
        <div class="dash-topbar-title">
          <h1>Dashboard</h1>
          <p>Selamat datang kembali di PubDesk.</p>
        </div>
        <div class="dash-topbar-actions">
          <button class="dash-icon-btn" id="dash-bell-btn" title="Notifikasi">
            ${icons.bell}
            <span class="dash-icon-badge"></span>
          </button>
          <div class="dash-user-avatar-top" title="${userName}">
            ${userName.charAt(0)}
          </div>
        </div>
      </header>

      <!-- BODY CONTENT -->
      <div class="dash-body">
        <!-- WELCOME GREETING -->
        <div class="dash-welcome">
          <h2>Halo, ${userName}!</h2>
          <p>Pantau status paper dan aktivitas konferensi Anda.</p>
        </div>

        <!-- 4 STATS CARDS -->
        <div class="dash-stats-grid">
          <div class="dash-stat-card">
            <div class="dash-stat-icon-wrap">
              ${icons.document}
            </div>
            <div>
              <div class="dash-stat-number">${totalPaper}</div>
              <div class="dash-stat-label">Total Paper</div>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="dash-stat-icon-wrap">
              ${icons.clock}
            </div>
            <div>
              <div class="dash-stat-number">${underReviewCount}</div>
              <div class="dash-stat-label">Under Review</div>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="dash-stat-icon-wrap">
              ${icons.checkCircle}
            </div>
            <div>
              <div class="dash-stat-number">${acceptedCount}</div>
              <div class="dash-stat-label">Diterima</div>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="dash-stat-icon-wrap">
              ${icons.alertCircle}
            </div>
            <div>
              <div class="dash-stat-number">${revisionCount}</div>
              <div class="dash-stat-label">Perlu Revisi</div>
            </div>
          </div>
        </div>

        <!-- 2 COLUMNS: SUBMISSION STATUS & AKTIVITAS -->
        <div class="dash-grid-2col">
          <div class="dash-box">
            <div class="dash-box-header">
              <h3 class="dash-box-title">Status submission</h3>
              <a href="#" class="dash-box-link" id="link-view-all-submissions">Lihat semua</a>
            </div>
            <div class="submission-list">
              ${submissionItemsHTML}
            </div>
            <div style="margin-top:20px; padding-top:14px; border-top:1px solid #f1f5f9; display:flex; justify-content:flex-end;">
              <button class="btn btn-primary btn-sm" id="btn-quick-submit" style="display:inline-flex; align-items:center; gap:6px;">
                ${icons.send} Submit Paper Baru
              </button>
            </div>
          </div>

          <div class="dash-box">
            <div class="dash-box-header">
              <h3 class="dash-box-title">Aktivitas terbaru</h3>
            </div>
            <div class="activity-list">
              ${activityItemsHTML}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: MODAL DIALOGS
// ─────────────────────────────────────────
function renderModal(): string {
  if (!activeModal) return ''

  if (activeModal === 'submit-paper') {
    const confOptions = conferences.map((c) => `<option value="${c.shortName}" ${c.id === currentConf.id ? 'selected' : ''}>${c.shortName} — ${c.title}</option>`).join('')
    return `
    <div class="modal-overlay" id="modal-container">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Kirim Paper Baru</h3>
          <button class="modal-close" id="modal-btn-close">&times;</button>
        </div>
        <form id="form-new-paper" style="display:flex; flex-direction:column; gap:16px;">
          <div class="auth-field">
            <label class="auth-label">Pilih Konferensi Tujuan</label>
            <select class="auth-input" id="new-paper-conf" required>
              ${confOptions}
            </select>
          </div>
          <div class="auth-field">
            <label class="auth-label">Judul Paper / Manuskrip</label>
            <input type="text" class="auth-input" id="new-paper-title" placeholder="Contoh: Implementasi Deep Learning pada Deteksi Citra..." required />
          </div>
          <div class="auth-field">
            <label class="auth-label">Abstrak Singkat</label>
            <textarea class="auth-input" id="new-paper-abstract" rows="3" placeholder="Tuliskan ringkasan penelitian Anda..." style="resize:vertical;"></textarea>
          </div>
          <div class="auth-field">
            <label class="auth-label">Unggah Manuskrip (PDF)</label>
            <input type="file" class="auth-input" accept=".pdf,.doc,.docx" required />
            <span class="text-xs text-muted">Format yang didukung: PDF, DOCX (Maks. 15MB). Format sesuai template IEEE / ACM.</span>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:8px;">
            <button type="button" class="btn btn-secondary btn-sm" id="modal-btn-cancel">Batal</button>
            <button type="submit" class="btn btn-primary btn-sm">Unggah & Kirim</button>
          </div>
        </form>
      </div>
    </div>`
  }

  if (activeModal === 'my-submissions') {
    const rows = submissionsDB
      .map(
        (s) => `
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 10px; font-weight:600; color:#1e293b;">${s.title}</td>
        <td style="padding:12px 10px; color:#64748b;">${s.conference}</td>
        <td style="padding:12px 10px; color:#64748b;">${s.submittedAt}</td>
        <td style="padding:12px 10px;">
          <span class="badge-pill ${
            s.status === 'Accepted'
              ? 'badge-accepted'
              : s.status === 'Revision'
              ? 'badge-revision'
              : s.status === 'Rejected'
              ? 'badge-rejected'
              : 'badge-under-review'
          }">${s.status}</span>
        </td>
      </tr>`
      )
      .join('')

    return `
    <div class="modal-overlay" id="modal-container">
      <div class="modal-content" style="max-width:680px;">
        <div class="modal-header">
          <h3 class="modal-title">Daftar Semua Submission Anda</h3>
          <button class="modal-close" id="modal-btn-close">&times;</button>
        </div>
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
            <thead>
              <tr style="background:#f8fafc; color:#64748b; font-size:11px; text-transform:uppercase;">
                <th style="padding:10px;">Judul Paper</th>
                <th style="padding:10px;">Konferensi</th>
                <th style="padding:10px;">Waktu</th>
                <th style="padding:10px;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
        <div style="margin-top:20px; display:flex; justify-content:flex-end;">
          <button class="btn btn-secondary btn-sm" id="modal-btn-cancel">Tutup</button>
        </div>
      </div>
    </div>`
  }

  if (activeModal === 'profile') {
    const u = currentUser || { name: 'Rina Ahmad', email: 'rina@email.com', role: 'author' }
    return `
    <div class="modal-overlay" id="modal-container">
      <div class="modal-content" style="max-width:440px;">
        <div class="modal-header">
          <h3 class="modal-title">Profil Pengguna</h3>
          <button class="modal-close" id="modal-btn-close">&times;</button>
        </div>
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; padding:16px; background:#f8fafc; border-radius:12px;">
          <div class="dash-avatar-circle" style="width:50px; height:50px; font-size:18px;">
            ${u.name.charAt(0)}
          </div>
          <div>
            <h4 style="font-size:16px; font-weight:700; color:#1e293b;">${u.name}</h4>
            <p style="font-size:12.5px; color:#64748b;">${u.email}</p>
            <span class="tag tag-blue" style="margin-top:4px;">Peserta / Author Terverifikasi</span>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
          <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9;">
            <span style="color:#64748b;">Afiliasi:</span>
            <span style="font-weight:500;">Institut Teknologi & Sains</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9;">
            <span style="color:#64748b;">Negara:</span>
            <span style="font-weight:500;">Indonesia</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:8px 0;">
            <span style="color:#64748b;">Total Manuskrip:</span>
            <span style="font-weight:600; color:var(--primary);">${submissionsDB.length} Paper</span>
          </div>
        </div>
        <div style="margin-top:20px; display:flex; justify-content:flex-end;">
          <button class="btn btn-secondary btn-sm" id="modal-btn-cancel">Tutup</button>
        </div>
      </div>
    </div>`
  }

  if (activeModal === 'about') {
    return `
    <div class="modal-overlay" id="modal-container">
      <div class="modal-content" style="max-width:500px;">
        <div class="modal-header">
          <h3 class="modal-title">Tentang PubDesk</h3>
          <button class="modal-close" id="modal-btn-close">&times;</button>
        </div>
        <div style="font-size:13.5px; line-height:1.7; color:#334155;">
          <p style="margin-bottom:12px;">
            <strong>PubDesk</strong> adalah sistem manajemen konferensi dan publikasi ilmiah terintegrasi yang memudahkan akademisi, peneliti, dan praktisi dalam mengelola submisi makalah, proses peer-review transparan, pendaftaran peserta, hingga penerbitan prosiding.
          </p>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:14px; margin-top:14px;">
            <div style="font-weight:600; color:#1e293b; margin-bottom:6px;">Fitur Utama:</div>
            <ul style="list-style:disc; margin-left:18px; color:#64748b; font-size:13px;">
              <li>Eksplorasi Konferensi Ilmiah Terakreditasi</li>
              <li>Manajemen Submisi Paper Real-time untuk Author</li>
              <li>Pelacakan Status Review & Revisi</li>
              <li>Registrasi Konferensi & Notifikasi Terpadu</li>
            </ul>
          </div>
        </div>
        <div style="margin-top:22px; display:flex; justify-content:flex-end;">
          <button class="btn btn-primary btn-sm" id="modal-btn-cancel">Tutup</button>
        </div>
      </div>
    </div>`
  }

  return ''
}

// ─────────────────────────────────────────
// NAVIGATION & CONTROLLER
// ─────────────────────────────────────────
function navigateTo(page: PageType, confId?: string) {
  currentPage = page
  if (page === 'detail' && confId) {
    const conf = conferences.find((c) => c.id === confId)
    if (conf) currentConf = conf
  }
  activeModal = null
  renderApp()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function renderApp() {
  let html = ''

  if (currentPage === 'home') {
    html = renderNavbar() + renderHomepage()
  } else if (currentPage === 'detail') {
    html = renderNavbar() + renderDetailPage(currentConf)
  } else if (currentPage === 'login') {
    html = renderLoginPage()
  } else if (currentPage === 'register') {
    html = renderRegisterPage()
  } else if (currentPage === 'dashboard') {
    html = renderDashboardPage()
  }

  html += renderModal()
  appEl.innerHTML = html
  attachEventListeners()
}

// ─────────────────────────────────────────
// EVENT LISTENERS & LOGIC
// ─────────────────────────────────────────
function attachEventListeners() {
  // Brand Logo Click -> Beranda
  document.getElementById('nav-brand')?.addEventListener('click', () => navigateTo('home'))
  document.getElementById('dash-logo-home')?.addEventListener('click', () => navigateTo('home'))

  // Auth Back to Home button
  document.getElementById('btn-auth-back-home')?.addEventListener('click', () => navigateTo('home'))

  // Navbar Links
  document.getElementById('nav-beranda')?.addEventListener('click', (e) => {
    e.preventDefault()
    navigateTo('home')
  })
  document.getElementById('nav-konferensi')?.addEventListener('click', (e) => {
    e.preventDefault()
    if (currentPage !== 'home') {
      navigateTo('home')
    }
    setTimeout(() => {
      document.getElementById('conference-grid')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  })
  document.getElementById('nav-tentang')?.addEventListener('click', (e) => {
    e.preventDefault()
    activeModal = 'about'
    renderApp()
  })

  // Navbar Auth Action Buttons
  document.getElementById('btn-masuk')?.addEventListener('click', () => navigateTo('login'))
  document.getElementById('btn-to-dashboard')?.addEventListener('click', () => navigateTo('dashboard'))
  document.getElementById('btn-logout-nav')?.addEventListener('click', () => {
    currentUser = null
    showToast('Anda telah berhasil keluar.')
    navigateTo('home')
  })

  // Home: Lihat Semua Link
  document.getElementById('link-lihat-semua')?.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('conference-grid')?.scrollIntoView({ behavior: 'smooth' })
  })

  // Home: Conference cards click -> detail page
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

  // Detail: Kembali ke Beranda & Breadcrumb Home
  document.getElementById('btn-back')?.addEventListener('click', () => navigateTo('home'))
  document.getElementById('breadcrumb-home')?.addEventListener('click', (e) => {
    e.preventDefault()
    navigateTo('home')
  })

  // Detail: Action Buttons
  document.getElementById('btn-daftar-detail')?.addEventListener('click', () => {
    if (!currentUser) {
      showToast('Silakan login terlebih dahulu untuk mendaftar.')
      navigateTo('login')
    } else {
      showToast(`Pendaftaran Anda untuk ${currentConf.shortName} berhasil dicatat!`)
    }
  })

  const openSubmitAction = () => {
    if (!currentUser) {
      showToast('Silakan login terlebih dahulu untuk mengirimkan manuskrip.')
      navigateTo('login')
    } else {
      activeModal = 'submit-paper'
      renderApp()
    }
  }

  document.getElementById('btn-submit-detail')?.addEventListener('click', openSubmitAction)
  document.getElementById('btn-submit-sidebar')?.addEventListener('click', openSubmitAction)

  // Detail: Tabs switcher
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

  // Auth: Switch Login <-> Register
  document.getElementById('link-go-to-register')?.addEventListener('click', () => navigateTo('register'))
  document.getElementById('link-go-to-login')?.addEventListener('click', () => navigateTo('login'))
  document.getElementById('link-forgot-pass')?.addEventListener('click', () => {
    showToast('Tautan pemulihan kata sandi telah dikirimkan ke email Anda.')
  })

  // Auth: Submit Login Form
  const formLogin = document.getElementById('form-login') as HTMLFormElement | null
  formLogin?.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = (document.getElementById('login-email') as HTMLInputElement)?.value.trim()
    const password = (document.getElementById('login-password') as HTMLInputElement)?.value

    const matchedUser = usersDB.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (matchedUser && matchedUser.password === password) {
      currentUser = matchedUser
      if (currentUser.role === 'reviewer') {
        window.location.href = '/reviewer.html'
        return
      }
      if (currentUser.role === 'admin') {
        window.location.href = '/admin.html'
        return
      }
    } else {
      currentUser = { name: email.split('@')[0], email, role: 'author' }
      usersDB.push(currentUser)
    }

    showToast(`Selamat datang kembali, ${currentUser.name}!`)
    navigateTo('dashboard')
  })

  // Auth: Submit Register Form
  const formRegister = document.getElementById('form-register') as HTMLFormElement | null
  formRegister?.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = (document.getElementById('reg-name') as HTMLInputElement)?.value.trim()
    const email = (document.getElementById('reg-email') as HTMLInputElement)?.value.trim()
    const password = (document.getElementById('reg-password') as HTMLInputElement)?.value
    const confirmPass = (document.getElementById('reg-confirm-password') as HTMLInputElement)?.value

    if (password !== confirmPass) {
      alert('Konfirmasi password tidak cocok!')
      return
    }

    const newUser: User = { name, email, password, role: 'author' }
    usersDB.push(newUser)
    currentUser = newUser

    showToast(`Registrasi akun berhasil! Selamat datang, ${name}.`)
    navigateTo('dashboard')
  })

  // Dashboard Sidebar Menu
  document.getElementById('menu-dash')?.addEventListener('click', () => {
    activeModal = null
    renderApp()
  })
  document.getElementById('menu-submissions')?.addEventListener('click', () => {
    activeModal = 'my-submissions'
    renderApp()
  })
  document.getElementById('menu-submit-paper')?.addEventListener('click', () => {
    activeModal = 'submit-paper'
    renderApp()
  })
  document.getElementById('menu-profile')?.addEventListener('click', () => {
    activeModal = 'profile'
    renderApp()
  })
  document.getElementById('menu-home-link')?.addEventListener('click', () => {
    navigateTo('home')
  })
  document.getElementById('menu-logout')?.addEventListener('click', () => {
    if (confirm('Apakah Anda yakin ingin keluar dari dashboard?')) {
      currentUser = null
      showToast('Anda telah logout.')
      navigateTo('home')
    }
  })

  // Dashboard Actions & Quick Submit
  document.getElementById('link-view-all-submissions')?.addEventListener('click', (e) => {
    e.preventDefault()
    activeModal = 'my-submissions'
    renderApp()
  })
  document.getElementById('btn-quick-submit')?.addEventListener('click', () => {
    activeModal = 'submit-paper'
    renderApp()
  })
  document.getElementById('dash-bell-btn')?.addEventListener('click', () => {
    showToast('Semua notifikasi paper Anda telah diperbarui.')
  })

  // Modals: Close Handlers
  document.getElementById('modal-btn-close')?.addEventListener('click', () => {
    activeModal = null
    renderApp()
  })
  document.getElementById('modal-btn-cancel')?.addEventListener('click', () => {
    activeModal = null
    renderApp()
  })
  document.getElementById('modal-container')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      activeModal = null
      renderApp()
    }
  })

  // Modal: Submit Paper Form
  const formNewPaper = document.getElementById('form-new-paper') as HTMLFormElement | null
  formNewPaper?.addEventListener('submit', (e) => {
    e.preventDefault()
    const conf = (document.getElementById('new-paper-conf') as HTMLSelectElement)?.value || currentConf.shortName
    const title = (document.getElementById('new-paper-title') as HTMLInputElement)?.value.trim()

    if (!title) return

    const newSub: Submission = {
      id: 's' + (submissionsDB.length + 1),
      title,
      conference: conf,
      status: 'Under Review',
      submittedAt: 'Baru saja',
    }

    submissionsDB.unshift(newSub)
    activityLogDB.unshift({
      id: 'a' + (activityLogDB.length + 1),
      title: `Paper "${title.slice(0, 30)}..." berhasil dikirim`,
      time: 'Baru saja',
    })

    activeModal = null
    showToast('Paper Anda berhasil dikirim ke panel review!')
    renderApp()
  })
}

// ─────────────────────────────────────────
// INITIALIZE
// ─────────────────────────────────────────
if (window.location.hash === '#reviewer' || window.location.search.includes('reviewer')) {
  window.location.href = '/reviewer.html'
} else {
  renderApp()
}
