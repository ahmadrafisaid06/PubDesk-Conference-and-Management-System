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
  paperId: string
  title: string
  authors: string
  affiliation: string
  category: string
  conference: string
  status: 'Under Review' | 'Accepted' | 'Revision' | 'Submitted' | 'Rejected'
  submittedAt: string
  abstract?: string
  keywords?: string
  manuscriptFile?: string
  reviewerNotes?: { reviewer: string; note: string }[]
  revisionDeadline?: string
  publicationInfo?: {
    proceedings: string
    isbn: string
    doi: string
    deadline: string
  }
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
  {
    id: 's1',
    paperId: 'PD-1042',
    title: 'AI untuk Deteksi Dini Penyakit',
    authors: 'Rina Ahmad, Dimas Putra',
    affiliation: 'Universitas Indonesia',
    category: 'Artificial Intelligence',
    conference: 'ICTI 2026',
    status: 'Under Review',
    submittedAt: '20 Okt 2026',
    abstract: 'Penelitian ini mengembangkan model kecerdasan buatan berbasis deep learning untuk mendeteksi dini penyakit dari citra medis dengan tingkat akurasi tinggi.',
    keywords: 'artificial intelligence, healthcare',
    manuscriptFile: 'manuscript_PD1042.pdf',
    reviewerNotes: [
      {
        reviewer: 'Catatan reviewer',
        note: 'Metodologi sudah relevan, namun penulis perlu memperjelas sumber dataset, menambahkan evaluasi pembanding, dan memperbaiki format sitasi.'
      },
      {
        reviewer: 'Reviewer 2',
        note: 'Hasil eksperimen menjanjikan. Mohon sertakan pembahasan keterbatasan model dan validasi eksternal.'
      }
    ],
    revisionDeadline: '30 Okt 2026',
    publicationInfo: {
      proceedings: 'ICTI 2026',
      isbn: '978-602-456-789-0',
      doi: 'Segera tersedia',
      deadline: '6 Nov 2026'
    }
  },
  {
    id: 's2',
    paperId: 'PD-1038',
    title: 'Sistem Informasi Desa Cerdas Berbasis Cloud',
    authors: 'Rina Ahmad, Dimas Putra',
    affiliation: 'Universitas Indonesia',
    category: 'Information Systems',
    conference: 'ICTI 2026',
    status: 'Accepted',
    submittedAt: '18 Okt 2026',
    abstract: 'Implementasi arsitektur komputasi awan untuk tata kelola layanan informasi desa cerdas dan integrasi kependudukan terpadu.',
    keywords: 'smart village, cloud computing',
    manuscriptFile: 'manuscript_PD1038.pdf',
    publicationInfo: {
      proceedings: 'ICTI 2026',
      isbn: '978-602-456-789-0',
      doi: 'Segera tersedia',
      deadline: '6 Nov 2026'
    }
  },
  {
    id: 's3',
    paperId: 'PD-1031',
    title: 'Keamanan Data pada IoT',
    authors: 'Rina Ahmad, Dimas Putra',
    affiliation: 'Universitas Indonesia',
    category: 'Cyber Security',
    conference: 'ICTI 2026',
    status: 'Revision',
    submittedAt: '16 Okt 2026',
    abstract: 'Analisis protokol enkripsi ringan untuk perlindungan privasi dan keamanan data pada perangkat IoT berdaya rendah.',
    keywords: 'iot security, encryption',
    manuscriptFile: 'manuscript_PD1031.pdf',
    reviewerNotes: [
      {
        reviewer: 'Catatan reviewer',
        note: 'Metodologi sudah relevan, namun penulis perlu memperjelas sumber dataset, menambahkan evaluasi pembanding, dan memperbaiki format sitasi.'
      },
      {
        reviewer: 'Reviewer 2',
        note: 'Hasil eksperimen menjanjikan. Mohon sertakan pembahasan keterbatasan model dan validasi eksternal.'
      }
    ],
    revisionDeadline: '30 Okt 2026',
    publicationInfo: {
      proceedings: 'ICTI 2026',
      isbn: '978-602-456-789-0',
      doi: 'Segera tersedia',
      deadline: '6 Nov 2026'
    }
  },
  {
    id: 's4',
    paperId: 'PD-1026',
    title: 'Model Pembelajaran Adaptif Berbasis AI',
    authors: 'Rina Ahmad, Dimas Putra',
    affiliation: 'Universitas Indonesia',
    category: 'Artificial Intelligence',
    conference: 'ICTI 2026',
    status: 'Submitted',
    submittedAt: '14 Okt 2026',
    abstract: 'Penerapan algoritma machine learning untuk memetakan jalur belajar personal bagi mahasiswa.',
    keywords: 'adaptive learning, artificial intelligence',
    manuscriptFile: 'manuscript_PD1026.pdf',
    publicationInfo: {
      proceedings: 'ICTI 2026',
      isbn: '978-602-456-789-0',
      doi: 'Segera tersedia',
      deadline: '6 Nov 2026'
    }
  }
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
  cloudUpload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M12 12v9"/>
    <path d="m16 16-4-4-4 4"/>
  </svg>`,
}

// ─────────────────────────────────────────
// APP STATE
// ─────────────────────────────────────────
type PageType = 'home' | 'detail' | 'login' | 'register' | 'dashboard'
type AuthorView = 'dashboard' | 'my-submissions' | 'submit-paper' | 'review-detail' | 'final-paper'

let currentUser: User | null = null
let currentPage: PageType = 'home'
let authorCurrentView: AuthorView = 'my-submissions'
let selectedPaperId: string = 'PD-1042'
let submissionsSearchQuery: string = ''
let submissionsStatusFilter: string = 'all'
let currentConf: Conference = conferences[0]
let activeModal: 'profile' | 'about' | null = null

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
// RENDER: HOMEPAGE (LANDING PAGE)
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
// RENDER: CONFERENCE DETAIL 
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
// RENDER: LOGIN PAGE 
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
// RENDER: REGISTER PAGE 
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
// RENDER: AUTHOR DASHBOARD VIEWS
// ─────────────────────────────────────────
function renderDashboardOverview(userName: string): string {
  const submissionItemsHTML = submissionsDB
    .map((s) => {
      let badgeClass = 'badge-under-review'
      if (s.status === 'Accepted') badgeClass = 'badge-accepted'
      else if (s.status === 'Revision') badgeClass = 'badge-revision'
      else if (s.status === 'Submitted') badgeClass = 'badge-submitted'
      else if (s.status === 'Rejected') badgeClass = 'badge-rejected'

      return `
      <div class="submission-item">
        <div class="submission-info">
          <span class="submission-title">${s.title}</span>
          <span class="submission-meta">${s.paperId} • ${s.conference} • ${s.submittedAt}</span>
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
  </div>`
}

// ─────────────────────────────────────────
// RENDER: SUBMIT PAPER VIEW 
// ─────────────────────────────────────────
function renderSubmitPaperView(userName: string): string {
  return `
  <div class="author-page-container">
    <div class="author-form-card">
      <form id="author-submit-form">
        <!-- Row 1: Judul paper & Kategori -->
        <div class="author-form-grid-2">
          <div class="author-form-group">
            <label class="author-form-label" for="submit-paper-title">Judul paper</label>
            <input type="text" class="author-form-control" id="submit-paper-title" placeholder="Masukkan judul paper" required />
          </div>
          <div class="author-form-group">
            <label class="author-form-label" for="submit-paper-category">Kategori</label>
            <select class="author-form-control author-select" id="submit-paper-category" required>
              <option value="" disabled selected>Pilih kategori</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Information Systems">Information Systems</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Digital Innovation">Digital Innovation</option>
              <option value="Data Science">Data Science</option>
              <option value="Internet of Things">Internet of Things</option>
            </select>
          </div>
        </div>

        <!-- Row 2: Abstrak -->
        <div class="author-form-group">
          <label class="author-form-label" for="submit-paper-abstract">Abstrak</label>
          <textarea class="author-form-control author-textarea" id="submit-paper-abstract" rows="4" placeholder="Tuliskan abstrak singkat paper Anda" required></textarea>
        </div>

        <!-- Row 3: Kata kunci -->
        <div class="author-form-group">
          <label class="author-form-label" for="submit-paper-keywords">Kata kunci</label>
          <input type="text" class="author-form-control" id="submit-paper-keywords" placeholder="Contoh: artificial intelligence, healthcare" required />
        </div>

        <!-- Row 4: Nama penulis & Afiliasi -->
        <div class="author-form-grid-2">
          <div class="author-form-group">
            <label class="author-form-label" for="submit-paper-author">Nama penulis</label>
            <input type="text" class="author-form-control" id="submit-paper-author" value="${userName}" required />
          </div>
          <div class="author-form-group">
            <label class="author-form-label" for="submit-paper-affiliation">Afiliasi</label>
            <input type="text" class="author-form-control" id="submit-paper-affiliation" value="Universitas Indonesia" required />
          </div>
        </div>

        <!-- Row 5: Unggah manuscript -->
        <div class="author-upload-dropzone" id="dropzone-manuscript-box" role="button" tabindex="0" title="Klik untuk mengunggah manuscript">
          <input type="file" id="input-manuscript-file" accept=".pdf" style="display:none;" />
          <div class="author-upload-icon-wrap">
            ${icons.cloudUpload}
          </div>
          <div class="author-upload-maintext">Unggah manuscript</div>
          <div class="author-upload-subtext">PDF, maksimal 10 MB</div>
          <div class="author-upload-feedback" id="manuscript-file-display" style="display:none;"></div>
        </div>

        <!-- Row 6: Submit Button -->
        <div class="author-form-footer">
          <button type="submit" class="btn-author-dark" id="btn-submit-paper-form">
            Submit Paper
          </button>
        </div>
      </form>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: MY SUBMISSIONS VIEW 
// ─────────────────────────────────────────
function renderMySubmissionsView(): string {
  const filtered = submissionsDB.filter((sub) => {
    const q = submissionsSearchQuery.trim().toLowerCase()
    const matchesSearch = !q || sub.paperId.toLowerCase().includes(q) || sub.title.toLowerCase().includes(q)
    const matchesStatus = submissionsStatusFilter === 'all' || sub.status === submissionsStatusFilter
    return matchesSearch && matchesStatus
  })

  const rowsHtml = filtered.length > 0
    ? filtered
        .map((sub) => {
          let badgeClass = 'badge-under-review'
          if (sub.status === 'Accepted') badgeClass = 'badge-accepted'
          else if (sub.status === 'Revision') badgeClass = 'badge-revision'
          else if (sub.status === 'Submitted') badgeClass = 'badge-submitted'
          else if (sub.status === 'Rejected') badgeClass = 'badge-rejected'

          // Shorten title if long as shown in screenshot (e.g. "AI untuk Deteksi Dini Pe...")
          const truncatedTitle = sub.title.length > 27 ? sub.title.slice(0, 25) + '...' : sub.title

          return `
          <tr class="author-table-row">
            <td class="author-cell-id">${sub.paperId}</td>
            <td class="author-cell-title" title="${sub.title}">${truncatedTitle}</td>
            <td class="author-cell-date">${sub.submittedAt}</td>
            <td class="author-cell-status">
              <span class="badge-pill ${badgeClass}">${sub.status}</span>
            </td>
            <td class="author-cell-action" style="text-align: right;">
              <button class="author-btn-action-view" data-paper-id="${sub.paperId}">Lihat</button>
            </td>
          </tr>`
        })
        .join('')
    : `<tr><td colspan="5" style="text-align:center; padding:36px; color:#94a3b8;">Tidak ada submission yang sesuai filter.</td></tr>`

  return `
  <div class="author-page-container">
    <!-- Toolbar: Search & Filter -->
    <div class="author-filter-toolbar">
      <div class="author-search-wrapper">
        <input
          type="text"
          class="author-search-input"
          id="submissions-search-input"
          placeholder="Cari judul atau ID paper"
          value="${submissionsSearchQuery}"
        />
      </div>
      <div class="author-filter-dropdown-wrapper">
        <select class="author-filter-dropdown" id="submissions-filter-status">
          <option value="all" ${submissionsStatusFilter === 'all' ? 'selected' : ''}>Semua status</option>
          <option value="Under Review" ${submissionsStatusFilter === 'Under Review' ? 'selected' : ''}>Under Review</option>
          <option value="Accepted" ${submissionsStatusFilter === 'Accepted' ? 'selected' : ''}>Accepted</option>
          <option value="Revision" ${submissionsStatusFilter === 'Revision' ? 'selected' : ''}>Revision</option>
          <option value="Submitted" ${submissionsStatusFilter === 'Submitted' ? 'selected' : ''}>Submitted</option>
        </select>
      </div>
    </div>

    <!-- Table Card -->
    <div class="author-table-card">
      <table class="author-submissions-table">
        <thead>
          <tr>
            <th style="width: 15%;">ID PAPER</th>
            <th style="width: 44%;">JUDUL PAPER</th>
            <th style="width: 17%;">TANGGAL</th>
            <th style="width: 14%;">STATUS</th>
            <th style="width: 10%; text-align: right;">AKSI</th>
          </tr>
        </thead>
        <tbody id="submissions-table-body">
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: REVIEW DETAIL VIEW 
// ─────────────────────────────────────────
function renderReviewDetailView(): string {
  const sub = submissionsDB.find((s) => s.paperId === selectedPaperId) || submissionsDB[0]

  return `
  <div class="author-page-container">
    <div style="margin-bottom: 16px;">
      <button class="author-btn-back" id="btn-back-to-submissions">
        ${icons.arrowLeft} Kembali ke My Submissions
      </button>
    </div>

    <div class="author-review-columns">
      <!-- Left Card -->
      <div class="author-white-card">
        <h2 class="author-card-main-title">${sub.title}</h2>
        <div class="author-card-subtitle">${sub.authors} • ${sub.affiliation}</div>
        <div style="margin: 10px 0 24px;">
          <span class="badge-pill badge-revision">Revision required</span>
        </div>

        <div class="author-meta-block">
          <h3 class="author-meta-heading">Metadata submission</h3>
          <div class="author-meta-item">
            <span class="author-meta-key">Paper ID</span>
            <span class="author-meta-value">${sub.paperId}</span>
          </div>
          <div class="author-meta-item">
            <span class="author-meta-key">Track</span>
            <span class="author-meta-value">${sub.category}</span>
          </div>
          <div class="author-meta-item">
            <span class="author-meta-key">Submitted</span>
            <span class="author-meta-value">${sub.submittedAt}</span>
          </div>
        </div>

        <div style="margin-top: 32px;">
          <button class="author-btn-outline" id="btn-unduh-manuscript" data-paper-id="${sub.paperId}">
            Unduh manuscript
          </button>
        </div>
      </div>

      <!-- Right Card -->
      <div class="author-white-card">
        <h3 class="author-card-sec-title">Catatan reviewer</h3>
        <p class="author-card-paragraph">
          Metodologi sudah relevan, namun penulis perlu memperjelas sumber dataset, menambahkan evaluasi pembanding, dan memperbaiki format sitasi.
        </p>

        <h4 class="author-card-sec-title" style="font-size: 14px; margin-top: 20px;">Reviewer 2</h4>
        <p class="author-card-paragraph">
          Hasil eksperimen menjanjikan. Mohon sertakan pembahasan keterbatasan model dan validasi eksternal.
        </p>

        <!-- Batas revisi banner -->
        <div class="author-deadline-banner">
          <span class="author-deadline-title">Batas revisi</span>
          <span class="author-deadline-val">${sub.revisionDeadline || '30 Okt 2026'}</span>
        </div>

        <div style="margin-top: 20px;">
          <input type="file" id="input-revision-file" accept=".pdf" style="display:none;" />
          <button class="btn-author-dark" id="btn-upload-revisi">
            Upload revisi
          </button>
        </div>
      </div>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: FINAL PAPER VIEW 
// ─────────────────────────────────────────
function renderFinalPaperView(): string {
  const sub = submissionsDB.find((s) => s.paperId === selectedPaperId) || submissionsDB[1]

  return `
  <div class="author-page-container">
    <div style="margin-bottom: 16px;">
      <button class="author-btn-back" id="btn-back-to-submissions">
        ${icons.arrowLeft} Kembali ke My Submissions
      </button>
    </div>

    <div class="author-final-columns">
      <!-- Left Card -->
      <div class="author-white-card">
        <div style="margin-bottom: 12px;">
          <span class="badge-pill badge-accepted">Paper accepted</span>
        </div>
        <h2 class="author-card-main-title">${sub.title}</h2>
        <div class="author-card-subtitle" style="margin-bottom: 24px;">${sub.authors}</div>

        <h3 class="author-card-sec-title" style="margin-bottom: 8px;">Instruksi final paper</h3>
        <p class="author-card-paragraph" style="color: #475569; margin-bottom: 24px;">
          Pastikan dokumen mengikuti template konferensi, tidak memiliki komentar aktif, dan memuat biodata singkat seluruh penulis.
        </p>

        <!-- Dropzone final paper -->
        <div class="author-upload-dropzone" id="dropzone-final-paper-box" role="button" tabindex="0" style="padding: 30px 20px; margin-bottom: 20px;" title="Klik untuk mengunggah final paper">
          <input type="file" id="input-final-paper-file" accept=".pdf" style="display:none;" />
          <div class="author-upload-icon-wrap">
            ${icons.cloudUpload}
          </div>
          <div class="author-upload-maintext">Unggah final paper</div>
          <div class="author-upload-subtext">PDF, maksimal 10 MB</div>
          <div class="author-upload-feedback" id="final-paper-file-display" style="display:none;"></div>
        </div>

        <button class="btn-author-dark" id="btn-kirim-final-paper">
          Kirim final paper
        </button>
      </div>

      <!-- Right Card: Informasi publikasi -->
      <div class="author-white-card">
        <h3 class="author-card-sec-title" style="margin-bottom: 22px;">Informasi publikasi</h3>

        <div class="author-pub-group">
          <span class="author-pub-label">Proceedings</span>
          <span class="author-pub-val">${sub.publicationInfo?.proceedings || 'ICTI 2026'}</span>
        </div>

        <div class="author-pub-group">
          <span class="author-pub-label">ISBN</span>
          <span class="author-pub-val">${sub.publicationInfo?.isbn || '978-602-456-789-0'}</span>
        </div>

        <div class="author-pub-group">
          <span class="author-pub-label">DOI</span>
          <span class="author-pub-val">${sub.publicationInfo?.doi || 'Segera tersedia'}</span>
        </div>

        <div class="author-pub-group">
          <span class="author-pub-label">Deadline</span>
          <span class="author-pub-val">${sub.publicationInfo?.deadline || '6 Nov 2026'}</span>
        </div>
      </div>
    </div>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: DASHBOARD (AUTHOR / PESERTA)
// ─────────────────────────────────────────
function renderDashboardPage(): string {
  const userName = currentUser ? currentUser.name : 'Rina Ahmad'

  // Header Title & Subtitle matching the active view
  let pageTitle = 'Dashboard'
  let pageSubtitle = 'Selamat datang kembali di PubDesk.'

  if (authorCurrentView === 'my-submissions') {
    pageTitle = 'My Submissions'
    pageSubtitle = 'Kelola dan pantau status seluruh paper.'
  } else if (authorCurrentView === 'submit-paper') {
    pageTitle = 'Submit Paper'
    pageSubtitle = 'Lengkapi informasi dan unggah manuscript Anda.'
  } else if (authorCurrentView === 'review-detail') {
    pageTitle = 'Review Detail'
    pageSubtitle = 'Lihat catatan reviewer dan tindak lanjut paper.'
  } else if (authorCurrentView === 'final-paper') {
    pageTitle = 'Final Paper / Publication'
    pageSubtitle = 'Selesaikan dokumen final untuk proses publikasi.'
  }

  // Active states for sidebar
  const isDashActive = authorCurrentView === 'dashboard'
  const isSubmissionsActive =
    authorCurrentView === 'my-submissions' ||
    authorCurrentView === 'review-detail' ||
    authorCurrentView === 'final-paper'
  const isSubmitActive = authorCurrentView === 'submit-paper'

  // Render view body
  let bodyContent = ''
  if (authorCurrentView === 'dashboard') {
    bodyContent = renderDashboardOverview(userName)
  } else if (authorCurrentView === 'submit-paper') {
    bodyContent = renderSubmitPaperView(userName)
  } else if (authorCurrentView === 'my-submissions') {
    bodyContent = renderMySubmissionsView()
  } else if (authorCurrentView === 'review-detail') {
    bodyContent = renderReviewDetailView()
  } else if (authorCurrentView === 'final-paper') {
    bodyContent = renderFinalPaperView()
  }

  return `
  <div class="dashboard-container">
    <!-- SIDEBAR -->
    <aside class="dash-sidebar">
      <div class="dash-brand" id="dash-logo-home" title="Kembali ke Beranda">
        <div class="dash-brand-icon">P</div>
        PubDesk
      </div>
      <div class="dash-nav">
        <button class="dash-nav-item ${isDashActive ? 'active' : ''}" id="menu-dash">
          ${icons.dashboard} Dashboard
        </button>
        <button class="dash-nav-item ${isSubmissionsActive ? 'active' : ''}" id="menu-submissions">
          ${icons.document} My Submissions
        </button>
        <button class="dash-nav-item ${isSubmitActive ? 'active' : ''}" id="menu-submit-paper">
          ${icons.send} Submit Paper
        </button>
        <button class="dash-nav-item" id="menu-profile">
          ${icons.user} Profil
        </button>
        <button class="dash-nav-item" id="menu-logout">
          ${icons.logout} Logout
        </button>
      </div>

      <!-- USER PROFILE FOOTER -->
      <div class="dash-user-profile">
        <div class="dash-avatar-circle" style="background:#334155; color:#ffffff;">
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
          <h1>${pageTitle}</h1>
          <p>${pageSubtitle}</p>
        </div>
        <div class="dash-topbar-actions">
          <button class="dash-icon-btn" id="dash-bell-btn" title="Notifikasi">
            ${icons.bell}
          </button>
          <div class="dash-user-avatar-top" title="${userName}">
          </div>
        </div>
      </header>

      <!-- BODY CONTENT -->
      <div class="dash-body">
        ${bodyContent}
      </div>
    </main>
  </div>`
}

// ─────────────────────────────────────────
// RENDER: MODAL DIALOGS
// ─────────────────────────────────────────
function renderModal(): string {
  if (!activeModal) return ''

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
      currentUser = usersDB[0]
    }
    authorCurrentView = 'submit-paper'
    navigateTo('dashboard')
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
    authorCurrentView = 'my-submissions'
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
    authorCurrentView = 'my-submissions'
    navigateTo('dashboard')
  })

  // Dashboard Sidebar Menu
  document.getElementById('menu-dash')?.addEventListener('click', () => {
    authorCurrentView = 'dashboard'
    activeModal = null
    renderApp()
  })
  document.getElementById('menu-submissions')?.addEventListener('click', () => {
    authorCurrentView = 'my-submissions'
    activeModal = null
    renderApp()
  })
  document.getElementById('menu-submit-paper')?.addEventListener('click', () => {
    authorCurrentView = 'submit-paper'
    activeModal = null
    renderApp()
  })
  document.getElementById('menu-profile')?.addEventListener('click', () => {
    activeModal = 'profile'
    renderApp()
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
    authorCurrentView = 'my-submissions'
    renderApp()
  })
  document.getElementById('btn-quick-submit')?.addEventListener('click', () => {
    authorCurrentView = 'submit-paper'
    renderApp()
  })
  document.getElementById('dash-bell-btn')?.addEventListener('click', () => {
    showToast('Semua notifikasi paper Anda telah diperbarui.')
  })

  // Breadcrumb Back button in Review Detail & Final Paper
  document.getElementById('btn-back-to-submissions')?.addEventListener('click', () => {
    authorCurrentView = 'my-submissions'
    renderApp()
  })

  // My Submissions: Search Input
  const searchInput = document.getElementById('submissions-search-input') as HTMLInputElement | null
  searchInput?.addEventListener('input', (e) => {
    submissionsSearchQuery = (e.target as HTMLInputElement).value
    const filtered = submissionsDB.filter((sub) => {
      const q = submissionsSearchQuery.trim().toLowerCase()
      const matchesSearch = !q || sub.paperId.toLowerCase().includes(q) || sub.title.toLowerCase().includes(q)
      const matchesStatus = submissionsStatusFilter === 'all' || sub.status === submissionsStatusFilter
      return matchesSearch && matchesStatus
    })

    const tbody = document.getElementById('submissions-table-body')
    if (tbody) {
      if (filtered.length > 0) {
        tbody.innerHTML = filtered
          .map((sub) => {
            let badgeClass = 'badge-under-review'
            if (sub.status === 'Accepted') badgeClass = 'badge-accepted'
            else if (sub.status === 'Revision') badgeClass = 'badge-revision'
            else if (sub.status === 'Submitted') badgeClass = 'badge-submitted'
            else if (sub.status === 'Rejected') badgeClass = 'badge-rejected'

            const truncatedTitle = sub.title.length > 27 ? sub.title.slice(0, 25) + '...' : sub.title

            return `
            <tr class="author-table-row">
              <td class="author-cell-id">${sub.paperId}</td>
              <td class="author-cell-title" title="${sub.title}">${truncatedTitle}</td>
              <td class="author-cell-date">${sub.submittedAt}</td>
              <td class="author-cell-status">
                <span class="badge-pill ${badgeClass}">${sub.status}</span>
              </td>
              <td class="author-cell-action" style="text-align: right;">
                <button class="author-btn-action-view" data-paper-id="${sub.paperId}">Lihat</button>
              </td>
            </tr>`
          })
          .join('')
        attachSubmissionsRowListeners()
      } else {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:36px; color:#94a3b8;">Tidak ada submission yang sesuai filter.</td></tr>`
      }
    }
  })

  // My Submissions: Filter Status Select
  const filterSelect = document.getElementById('submissions-filter-status') as HTMLSelectElement | null
  filterSelect?.addEventListener('change', (e) => {
    submissionsStatusFilter = (e.target as HTMLSelectElement).value
    renderApp()
  })

  // Attach "Lihat" action listeners
  function attachSubmissionsRowListeners() {
    document.querySelectorAll<HTMLButtonElement>('.author-btn-action-view').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pid = btn.dataset.paperId
        if (!pid) return
        selectedPaperId = pid
        const sub = submissionsDB.find((s) => s.paperId === pid)
        if (sub && sub.status === 'Accepted') {
          authorCurrentView = 'final-paper'
        } else {
          authorCurrentView = 'review-detail'
        }
        renderApp()
      })
    })
  }
  attachSubmissionsRowListeners()

  // Review Detail actions
  document.getElementById('btn-unduh-manuscript')?.addEventListener('click', () => {
    showToast(`Mengunduh manuskrip ${selectedPaperId}...`)
  })

  const inputRevisionFile = document.getElementById('input-revision-file') as HTMLInputElement | null
  document.getElementById('btn-upload-revisi')?.addEventListener('click', () => {
    inputRevisionFile?.click()
  })
  inputRevisionFile?.addEventListener('change', () => {
    const file = inputRevisionFile.files?.[0]
    if (file) {
      showToast(`Revisi manuskrip "${file.name}" berhasil diunggah!`)
      const currentSub = submissionsDB.find((s) => s.paperId === selectedPaperId)
      if (currentSub) {
        currentSub.status = 'Under Review'
      }
      activityLogDB.unshift({
        id: 'a' + (activityLogDB.length + 1),
        title: `Revisi untuk ${selectedPaperId} berhasil diunggah`,
        time: 'Baru saja',
      })
      setTimeout(() => renderApp(), 800)
    }
  })

  // Final Paper actions
  const dropzoneFinal = document.getElementById('dropzone-final-paper-box')
  const inputFinalFile = document.getElementById('input-final-paper-file') as HTMLInputElement | null
  const displayFinalFile = document.getElementById('final-paper-file-display')

  dropzoneFinal?.addEventListener('click', () => {
    inputFinalFile?.click()
  })

  dropzoneFinal?.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropzoneFinal.classList.add('drag-active')
  })
  dropzoneFinal?.addEventListener('dragleave', () => {
    dropzoneFinal.classList.remove('drag-active')
  })
  dropzoneFinal?.addEventListener('drop', (e) => {
    e.preventDefault()
    dropzoneFinal.classList.remove('drag-active')
    const files = e.dataTransfer?.files
    if (files && files.length > 0 && displayFinalFile) {
      displayFinalFile.style.display = 'inline-flex'
      displayFinalFile.textContent = `File terpilih: ${files[0].name} (${(files[0].size / 1024).toFixed(1)} KB)`
    }
  })

  inputFinalFile?.addEventListener('change', () => {
    const file = inputFinalFile.files?.[0]
    if (file && displayFinalFile) {
      displayFinalFile.style.display = 'inline-flex'
      displayFinalFile.textContent = `File terpilih: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`
    }
  })

  document.getElementById('btn-kirim-final-paper')?.addEventListener('click', () => {
    showToast('Dokumen final paper berhasil dikirim untuk proses publikasi!')
    activityLogDB.unshift({
      id: 'a' + (activityLogDB.length + 1),
      title: `Final paper ${selectedPaperId} telah dikirim`,
      time: 'Baru saja',
    })
    setTimeout(() => {
      authorCurrentView = 'my-submissions'
      renderApp()
    }, 1000)
  })

  // Submit Paper View form & file dropzone
  const dropzoneManuscript = document.getElementById('dropzone-manuscript-box')
  const inputManuscriptFile = document.getElementById('input-manuscript-file') as HTMLInputElement | null
  const displayManuscriptFile = document.getElementById('manuscript-file-display')

  dropzoneManuscript?.addEventListener('click', () => {
    inputManuscriptFile?.click()
  })

  dropzoneManuscript?.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropzoneManuscript.classList.add('drag-active')
  })
  dropzoneManuscript?.addEventListener('dragleave', () => {
    dropzoneManuscript.classList.remove('drag-active')
  })
  dropzoneManuscript?.addEventListener('drop', (e) => {
    e.preventDefault()
    dropzoneManuscript.classList.remove('drag-active')
    const files = e.dataTransfer?.files
    if (files && files.length > 0 && displayManuscriptFile) {
      displayManuscriptFile.style.display = 'inline-flex'
      displayManuscriptFile.textContent = `File terpilih: ${files[0].name} (${(files[0].size / 1024).toFixed(1)} KB)`
    }
  })

  inputManuscriptFile?.addEventListener('change', () => {
    const file = inputManuscriptFile.files?.[0]
    if (file && displayManuscriptFile) {
      displayManuscriptFile.style.display = 'inline-flex'
      displayManuscriptFile.textContent = `File terpilih: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`
    }
  })

  const formAuthorSubmit = document.getElementById('author-submit-form') as HTMLFormElement | null
  formAuthorSubmit?.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = currentUser ? currentUser.name : 'Rina Ahmad'
    const title = (document.getElementById('submit-paper-title') as HTMLInputElement)?.value.trim()
    const category = (document.getElementById('submit-paper-category') as HTMLSelectElement)?.value
    const abstract = (document.getElementById('submit-paper-abstract') as HTMLTextAreaElement)?.value.trim()
    const keywords = (document.getElementById('submit-paper-keywords') as HTMLInputElement)?.value.trim()
    const author = (document.getElementById('submit-paper-author') as HTMLInputElement)?.value.trim() || userName
    const affiliation = (document.getElementById('submit-paper-affiliation') as HTMLInputElement)?.value.trim() || 'Universitas Indonesia'

    if (!title) return

    const nextNumber = 1042 + submissionsDB.length + 1
    const nextPaperId = `PD-${nextNumber}`

    const newSub: Submission = {
      id: 's' + (submissionsDB.length + 1),
      paperId: nextPaperId,
      title,
      authors: author,
      affiliation,
      category: category || 'Artificial Intelligence',
      conference: 'ICTI 2026',
      status: 'Under Review',
      submittedAt: 'Hari ini',
      abstract,
      keywords,
      manuscriptFile: `manuscript_${nextPaperId}.pdf`,
      reviewerNotes: [
        {
          reviewer: 'Catatan reviewer',
          note: 'Paper telah diterima dan saat ini sedang dalam proses review.',
        },
      ],
      revisionDeadline: '10 Nov 2026',
      publicationInfo: {
        proceedings: 'ICTI 2026',
        isbn: '978-602-456-789-0',
        doi: 'Segera tersedia',
        deadline: '20 Nov 2026',
      },
    }

    submissionsDB.unshift(newSub)
    activityLogDB.unshift({
      id: 'a' + (activityLogDB.length + 1),
      title: `Paper "${title.slice(0, 30)}..." berhasil dikirim`,
      time: 'Baru saja',
    })

    showToast(`Paper "${title}" berhasil disubmit!`)
    authorCurrentView = 'my-submissions'
    renderApp()
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
}

// ─────────────────────────────────────────
// INITIALIZE
// ─────────────────────────────────────────
if (window.location.hash === '#reviewer' || window.location.search.includes('reviewer')) {
  window.location.href = '/reviewer.html'
} else if (window.location.hash === '#author' || window.location.search.includes('author')) {
  currentUser = usersDB[0]
  currentPage = 'dashboard'
  authorCurrentView = 'my-submissions'
  renderApp()
} else {
  renderApp()
}
