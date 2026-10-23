import './admin.css'

// ─────────────────────────────────────────
// ICONS (Clean SVG icons matching screenshots)
// ─────────────────────────────────────────
const icons = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
  </svg>`,
  submissions: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>`,
  reviewers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>`,
  monitoring: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>`,
  sessions: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>`,
  fileDoc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`,
  checkShield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>`,
}

// ─────────────────────────────────────────
// DATA TYPES
// ─────────────────────────────────────────
type AdminTab =
  | 'dashboard'
  | 'submissions'
  | 'reviewers'
  | 'monitoring'
  | 'sessions'
  | 'settings'

interface SubmissionItem {
  id: string
  title: string
  author: string
  status: 'Under Review' | 'Accepted' | 'Revision' | 'Submitted' | 'Rejected'
  date: string
}

interface ReviewerItem {
  id: string
  name: string
  expertise: string
  paperCount: number
  status: 'Aktif' | 'Nonaktif'
}

interface MonitoringItem {
  paperId: string
  reviewer: string
  assignedDate: string
  deadline: string
  status: 'Selesai' | 'Dalam proses' | 'Terlambat'
}

interface ActivityItem {
  id: string
  text: string
  time: string
  isGreen: boolean
}

// ─────────────────────────────────────────
// STATE MANAGEMENT
// ─────────────────────────────────────────
interface AdminState {
  isLoggedIn: boolean
  currentTab: AdminTab
  submissionsSearch: string
  submissionsStatusFilter: string
  reviewerSearch: string
  monitoringReviewerFilter: string
  monitoringStatusFilter: string
  modal: 'tambahReviewer' | 'eksporData' | 'detailPaper' | null
  activePaperDetail: SubmissionItem | null
}

const state: AdminState = {
  isLoggedIn: false,
  currentTab: 'dashboard',
  submissionsSearch: '',
  submissionsStatusFilter: 'all',
  reviewerSearch: '',
  monitoringReviewerFilter: 'all',
  monitoringStatusFilter: 'all',
  modal: null,
  activePaperDetail: null,
}

// Initial Data matching screenshots exactly
const submissionsData: SubmissionItem[] = [
  {
    id: 'PD-1042',
    title: 'AI untuk Deteksi Dini Pe...',
    author: 'Rina Ahmad',
    status: 'Under Review',
    date: '20 Okt 2026',
  },
  {
    id: 'PD-1038',
    title: 'Sistem Informasi Desa...',
    author: 'Dimas Putra',
    status: 'Accepted',
    date: '18 Okt 2026',
  },
  {
    id: 'PD-1031',
    title: 'Keamanan Data pada IoT',
    author: 'Siti Rahma',
    status: 'Revision',
    date: '16 Okt 2026',
  },
  {
    id: 'PD-1026',
    title: 'Model Pembelajaran Ad...',
    author: 'Andi Wijaya',
    status: 'Submitted',
    date: '14 Okt 2026',
  },
  {
    id: 'PD-1019',
    title: 'Transformasi Digital UM...',
    author: 'Nadia Putri',
    status: 'Rejected',
    date: '12 Okt 2026',
  },
]

const reviewersData: ReviewerItem[] = [
  {
    id: 'RV-012',
    name: 'Dr. Budi Santoso',
    expertise: 'AI & Data Science',
    paperCount: 3,
    status: 'Aktif',
  },
  {
    id: 'RV-018',
    name: 'Dr. Maya Lestari',
    expertise: 'Information Systems',
    paperCount: 2,
    status: 'Aktif',
  },
  {
    id: 'RV-024',
    name: 'Dr. Arif Nugroho',
    expertise: 'Cyber Security',
    paperCount: 4,
    status: 'Aktif',
  },
  {
    id: 'RV-031',
    name: 'Dr. Nia Kurnia',
    expertise: 'Digital Innovation',
    paperCount: 1,
    status: 'Nonaktif',
  },
]

const monitoringData: MonitoringItem[] = [
  {
    paperId: 'PD-1042',
    reviewer: 'Dr. Budi Santoso',
    assignedDate: '20 Okt',
    deadline: '28 Okt',
    status: 'Selesai',
  },
  {
    paperId: 'PD-1038',
    reviewer: 'Dr. Maya Lestari',
    assignedDate: '19 Okt',
    deadline: '30 Okt',
    status: 'Dalam proses',
  },
  {
    paperId: 'PD-1031',
    reviewer: 'Dr. Arif Nugroho',
    assignedDate: '18 Okt',
    deadline: '27 Okt',
    status: 'Terlambat',
  },
  {
    paperId: 'PD-1026',
    reviewer: 'Dr. Nia Kurnia',
    assignedDate: '17 Okt',
    deadline: '29 Okt',
    status: 'Dalam proses',
  },
  {
    paperId: 'PD-1019',
    reviewer: 'Dr. Budi Santoso',
    assignedDate: '16 Okt',
    deadline: '26 Okt',
    status: 'Selesai',
  },
]

const activitiesData: ActivityItem[] = [
  {
    id: '1',
    text: 'Submission baru dari Rina Ahmad',
    time: '1j',
    isGreen: true,
  },
  {
    id: '2',
    text: 'Reviewer ditugaskan ke PD-1042',
    time: '2j',
    isGreen: false,
  },
  {
    id: '3',
    text: 'Sesi presentasi diperbarui',
    time: '3j',
    isGreen: false,
  },
  {
    id: '4',
    text: 'Paper PD-1038 diterima',
    time: '4j',
    isGreen: false,
  },
]

// ─────────────────────────────────────────
// TOAST NOTIFICATION HELPER
// ─────────────────────────────────────────
function showAdminToast(message: string) {
  const existing = document.querySelector('.adm-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.className = 'adm-toast'
  toast.innerHTML = `
    <span style="color:#10b981; font-size:16px;">✓</span>
    <span>${message}</span>
  `
  document.body.appendChild(toast)

  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transition = 'opacity 0.3s ease'
    setTimeout(() => toast.remove(), 300)
  }, 3200)
}

// ─────────────────────────────────────────
// RENDER: ADMIN LOGIN VIEW
// ─────────────────────────────────────────
let loginErrorMsg = ''

function renderLoginView(): string {
  return `
    <div class="admin-login-wrapper">
      <div class="admin-login-card">
        <div class="login-brand-header">
          <div class="login-brand-logo">P</div>
          <h2 class="login-brand-title">PubDesk Admin Portal</h2>
          <p class="login-brand-sub">
            Masuk dengan akun Administrator untuk mengelola konferensi, submission, dan reviewer.
          </p>
        </div>

        ${loginErrorMsg ? `<div class="login-error-box" id="login-error">${loginErrorMsg}</div>` : ''}

        <form id="admin-login-form" autocomplete="on">
          <div class="form-group">
            <label class="form-label" for="adm-email">Email</label>
            <input
              type="email"
              id="adm-email"
              name="email"
              class="form-control"
              required
              placeholder="nama@pubdesk.org"
              autocomplete="email"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="adm-password">Kata Sandi</label>
            <input
              type="password"
              id="adm-password"
              name="password"
              class="form-control"
              required
              placeholder="••••••••"
              autocomplete="current-password"
            />
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:22px; font-size:12.5px; color:#64748b;">
            <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">
              <input type="checkbox" id="adm-remember" checked /> Ingat saya
            </label>
            <span style="color:#2563eb; cursor:pointer; font-weight:500;">Lupa kata sandi?</span>
          </div>

          <button type="submit" class="btn-login-submit" id="btn-submit-admin-login">
            Masuk ke Dashboard Admin
          </button>
        </form>

        <a href="/" class="login-back-link">
          ← Kembali ke Beranda Utama PubDesk
        </a>
      </div>
    </div>
  `
}

// ─────────────────────────────────────────
// RENDER: SIDEBAR
// ─────────────────────────────────────────
function renderSidebar(): string {
  const tabs: { id: AdminTab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: icons.dashboard },
    { id: 'submissions', label: 'Manage Submissions', icon: icons.submissions },
    { id: 'reviewers', label: 'Manage Reviewer', icon: icons.reviewers },
    { id: 'monitoring', label: 'Review Monitoring', icon: icons.monitoring },
    { id: 'sessions', label: 'Sessions & Publication', icon: icons.sessions },
    { id: 'settings', label: 'Pengaturan', icon: icons.settings },
  ]

  const navLinks = tabs
    .map(
      (t) => `
      <button 
        class="sidebar-item ${state.currentTab === t.id ? 'active' : ''}" 
        data-tab="${t.id}"
      >
        ${t.icon}
        <span>${t.label}</span>
      </button>
    `
    )
    .join('')

  return `
    <aside class="admin-sidebar">
      <a href="#dashboard" class="sidebar-brand">
        <div class="sidebar-logo-icon">P</div>
        <div class="sidebar-brand-title">PubDesk</div>
      </a>

      <div class="sidebar-nav">
        ${navLinks}
        <button class="sidebar-item" id="btn-sidebar-logout" style="margin-top:8px;">
          ${icons.logout}
          <span>Logout</span>
        </button>
      </div>

      <div class="sidebar-profile">
        <div class="sidebar-profile-avatar">AD</div>
        <div class="sidebar-profile-info">
          <div class="sidebar-profile-name">Admin PubDesk</div>
          <div class="sidebar-profile-role">Administrator</div>
        </div>
      </div>
    </aside>
  `
}

// ─────────────────────────────────────────
// RENDER: HEADER
// ─────────────────────────────────────────
function renderHeader(): string {
  let title = 'Dashboard Admin'
  let subtitle = 'Ringkasan aktivitas konferensi PubDesk.'

  if (state.currentTab === 'submissions') {
    title = 'Manage Submissions'
    subtitle = 'Kelola dan pantau status seluruh paper.'
  } else if (state.currentTab === 'reviewers') {
    title = 'Manage Reviewer'
    subtitle = 'Kelola reviewer dan distribusi beban review.'
  } else if (state.currentTab === 'monitoring') {
    title = 'Review Monitoring'
    subtitle = 'Pantau progres dan tenggat proses review.'
  } else if (state.currentTab === 'sessions') {
    title = 'Sessions & Publication'
    subtitle = 'Jadwal sesi presentasi dan prosiding konferensi.'
  } else if (state.currentTab === 'settings') {
    title = 'Pengaturan Sistem'
    subtitle = 'Konfigurasi parameter konferensi dan akun admin.'
  }

  return `
    <header class="admin-header">
      <div class="header-title-box">
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="header-actions">
        <button class="header-icon-btn" title="Notifikasi" id="btn-admin-bell">
          ${icons.bell}
          <span style="position:absolute; top:7px; right:8px; width:6px; height:6px; background:#ef4444; border-radius:50%;"></span>
        </button>
        <button class="header-avatar-btn" title="Profil Admin"></button>
      </div>
    </header>
  `
}

// ─────────────────────────────────────────
// SCREEN 1: DASHBOARD ADMIN
// ─────────────────────────────────────────
function renderDashboardScreen(): string {
  const activitiesHtml = activitiesData
    .map(
      (a) => `
      <div class="activity-item">
        <div class="activity-left">
          <span class="activity-dot ${a.isGreen ? 'green' : 'slate'}"></span>
          <span>${a.text}</span>
        </div>
        <div class="activity-time">${a.time}</div>
      </div>
    `
    )
    .join('')

  return `
    <div class="kpi-grid">
      <!-- Total Submission -->
      <div class="kpi-card">
        <div class="kpi-icon-wrap">
          ${icons.fileDoc}
        </div>
        <div class="kpi-value">128</div>
        <div class="kpi-label">Total Submission</div>
      </div>

      <!-- Reviewer Aktif -->
      <div class="kpi-card">
        <div class="kpi-icon-wrap">
          ${icons.reviewers}
        </div>
        <div class="kpi-value">24</div>
        <div class="kpi-label">Reviewer Aktif</div>
      </div>

      <!-- Dalam Review -->
      <div class="kpi-card">
        <div class="kpi-icon-wrap">
          ${icons.clock}
        </div>
        <div class="kpi-value">43</div>
        <div class="kpi-label">Dalam Review</div>
      </div>

      <!-- Accepted -->
      <div class="kpi-card">
        <div class="kpi-icon-wrap">
          ${icons.checkShield}
        </div>
        <div class="kpi-value">36</div>
        <div class="kpi-label">Accepted</div>
      </div>
    </div>

    <div class="dashboard-lower-grid">
      <!-- Status Paper (Donut Chart) -->
      <div class="dash-panel">
        <div class="dash-panel-title">Status paper</div>
        <div class="chart-content-box">
          <div class="chart-donut-wrapper">
            <!-- Exact donut ring matching screenshot -->
            <svg viewBox="0 0 100 100" width="140" height="140">
              <!-- Background ring -->
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#e2e8f0"
                stroke-width="14"
              />
              <!-- Donut segments -->
              <!-- Submitted: 28 / 128 = ~21.8% -->
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#335263"
                stroke-width="14"
                stroke-dasharray="238.76"
                stroke-dashoffset="0"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          <div class="chart-breakdown-list">
            <div class="breakdown-row">
              <span class="breakdown-label">Submitted</span>
              <span class="breakdown-val">28</span>
            </div>
            <div class="breakdown-row">
              <span class="breakdown-label">Under Review</span>
              <span class="breakdown-val">43</span>
            </div>
            <div class="breakdown-row">
              <span class="breakdown-label">Accepted</span>
              <span class="breakdown-val">36</span>
            </div>
            <div class="breakdown-row">
              <span class="breakdown-label">Revision</span>
              <span class="breakdown-val">21</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Aktivitas Terbaru -->
      <div class="dash-panel">
        <div class="dash-panel-title">Aktivitas terbaru</div>
        <div class="activity-list">
          ${activitiesHtml}
        </div>
      </div>
    </div>
  `
}

// ─────────────────────────────────────────
// SCREEN 2: MANAGE SUBMISSIONS
// ─────────────────────────────────────────
function renderSubmissionsScreen(): string {
  // Filter submissions
  const filtered = submissionsData.filter((sub) => {
    const matchesSearch =
      sub.id.toLowerCase().includes(state.submissionsSearch.toLowerCase()) ||
      sub.title.toLowerCase().includes(state.submissionsSearch.toLowerCase()) ||
      sub.author.toLowerCase().includes(state.submissionsSearch.toLowerCase())

    const matchesStatus =
      state.submissionsStatusFilter === 'all' ||
      sub.status.toLowerCase() === state.submissionsStatusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  const rowsHtml = filtered
    .map((sub) => {
      let badgeClass = 'under-review'
      if (sub.status === 'Accepted') badgeClass = 'accepted'
      else if (sub.status === 'Revision') badgeClass = 'revision'
      else if (sub.status === 'Submitted') badgeClass = 'submitted'
      else if (sub.status === 'Rejected') badgeClass = 'rejected'

      return `
      <tr>
        <td class="table-id-cell">${sub.id}</td>
        <td class="table-title-cell">${sub.title}</td>
        <td>${sub.author}</td>
        <td>
          <span class="status-pill ${badgeClass}">${sub.status}</span>
        </td>
        <td>${sub.date}</td>
      </tr>
    `
    })
    .join('')

  return `
    <div class="controls-bar">
      <div class="controls-left">
        <div class="search-input-wrap">
          <input 
            type="text" 
            class="search-input" 
            id="input-submissions-search"
            placeholder="Cari judul atau ID paper"
            value="${state.submissionsSearch}"
          />
        </div>
        <select class="filter-select" id="select-submissions-status">
          <option value="all" ${state.submissionsStatusFilter === 'all' ? 'selected' : ''}>Semua status</option>
          <option value="Submitted" ${state.submissionsStatusFilter === 'Submitted' ? 'selected' : ''}>Submitted</option>
          <option value="Under Review" ${state.submissionsStatusFilter === 'Under Review' ? 'selected' : ''}>Under Review</option>
          <option value="Accepted" ${state.submissionsStatusFilter === 'Accepted' ? 'selected' : ''}>Accepted</option>
          <option value="Revision" ${state.submissionsStatusFilter === 'Revision' ? 'selected' : ''}>Revision</option>
          <option value="Rejected" ${state.submissionsStatusFilter === 'Rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </div>

      <button class="btn-outline" id="btn-export-submissions">
        Ekspor data
      </button>
    </div>

    <div class="table-card">
      <table class="adm-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>JUDUL</th>
            <th>AUTHOR</th>
            <th>STATUS</th>
            <th>TANGGAL</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="5" style="text-align:center; padding:32px; color:#94a3b8;">Tidak ada data paper yang sesuai.</td></tr>`}
        </tbody>
      </table>
    </div>
  `
}

// ─────────────────────────────────────────
// SCREEN 3: MANAGE REVIEWER
// ─────────────────────────────────────────
function renderReviewersScreen(): string {
  const filtered = reviewersData.filter((rev) => {
    return (
      rev.name.toLowerCase().includes(state.reviewerSearch.toLowerCase()) ||
      rev.expertise.toLowerCase().includes(state.reviewerSearch.toLowerCase()) ||
      rev.id.toLowerCase().includes(state.reviewerSearch.toLowerCase())
    )
  })

  const rowsHtml = filtered
    .map((rev) => {
      const badgeClass = rev.status === 'Aktif' ? 'aktif' : 'nonaktif'
      return `
      <tr>
        <td class="table-id-cell">${rev.id}</td>
        <td class="table-title-cell">${rev.name}</td>
        <td>${rev.expertise}</td>
        <td>${rev.paperCount}</td>
        <td>
          <span class="status-pill ${badgeClass}">${rev.status}</span>
        </td>
      </tr>
    `
    })
    .join('')

  return `
    <div class="controls-bar">
      <div class="controls-left">
        <div class="search-input-wrap" style="max-width: 600px;">
          <input 
            type="text" 
            class="search-input" 
            id="input-reviewer-search"
            placeholder="Cari reviewer"
            value="${state.reviewerSearch}"
          />
        </div>
      </div>

      <button class="btn-dark" id="btn-add-reviewer">
        Tambah reviewer
      </button>
    </div>

    <div class="table-card">
      <table class="adm-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAMA REVIEWER</th>
            <th>BIDANG KEAHLIAN</th>
            <th>PAPER</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="5" style="text-align:center; padding:32px; color:#94a3b8;">Tidak ada reviewer ditemukan.</td></tr>`}
        </tbody>
      </table>
    </div>
  `
}

// ─────────────────────────────────────────
// SCREEN 4: REVIEW MONITORING
// ─────────────────────────────────────────
function renderMonitoringScreen(): string {
  const filtered = monitoringData.filter((item) => {
    const matchesRev =
      state.monitoringReviewerFilter === 'all' ||
      item.reviewer.toLowerCase().includes(state.monitoringReviewerFilter.toLowerCase())

    const matchesStatus =
      state.monitoringStatusFilter === 'all' ||
      item.status.toLowerCase() === state.monitoringStatusFilter.toLowerCase()

    return matchesRev && matchesStatus
  })

  const rowsHtml = filtered
    .map((item) => {
      let badgeClass = 'dalam-proses'
      if (item.status === 'Selesai') badgeClass = 'selesai'
      else if (item.status === 'Terlambat') badgeClass = 'terlambat'

      return `
      <tr>
        <td class="table-id-cell">${item.paperId}</td>
        <td class="table-title-cell">${item.reviewer}</td>
        <td>${item.assignedDate}</td>
        <td>${item.deadline}</td>
        <td>
          <span class="status-pill ${badgeClass}">${item.status}</span>
        </td>
      </tr>
    `
    })
    .join('')

  return `
    <div class="controls-bar">
      <div class="controls-left">
        <select class="filter-select" id="select-monitoring-reviewer" style="min-width: 220px;">
          <option value="all" ${state.monitoringReviewerFilter === 'all' ? 'selected' : ''}>Semua reviewer</option>
          <option value="Dr. Budi Santoso" ${state.monitoringReviewerFilter === 'Dr. Budi Santoso' ? 'selected' : ''}>Dr. Budi Santoso</option>
          <option value="Dr. Maya Lestari" ${state.monitoringReviewerFilter === 'Dr. Maya Lestari' ? 'selected' : ''}>Dr. Maya Lestari</option>
          <option value="Dr. Arif Nugroho" ${state.monitoringReviewerFilter === 'Dr. Arif Nugroho' ? 'selected' : ''}>Dr. Arif Nugroho</option>
          <option value="Dr. Nia Kurnia" ${state.monitoringReviewerFilter === 'Dr. Nia Kurnia' ? 'selected' : ''}>Dr. Nia Kurnia</option>
        </select>

        <select class="filter-select" id="select-monitoring-status" style="min-width: 180px;">
          <option value="all" ${state.monitoringStatusFilter === 'all' ? 'selected' : ''}>Semua status</option>
          <option value="Selesai" ${state.monitoringStatusFilter === 'Selesai' ? 'selected' : ''}>Selesai</option>
          <option value="Dalam proses" ${state.monitoringStatusFilter === 'Dalam proses' ? 'selected' : ''}>Dalam proses</option>
          <option value="Terlambat" ${state.monitoringStatusFilter === 'Terlambat' ? 'selected' : ''}>Terlambat</option>
        </select>
      </div>

      <button class="btn-outline" id="btn-send-reminder">
        Kirim pengingat
      </button>
    </div>

    <div class="table-card">
      <table class="adm-table">
        <thead>
          <tr>
            <th>PAPER</th>
            <th>REVIEWER</th>
            <th>DITUGASKAN</th>
            <th>DEADLINE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="5" style="text-align:center; padding:32px; color:#94a3b8;">Tidak ada data monitoring review yang sesuai.</td></tr>`}
        </tbody>
      </table>
    </div>
  `
}

// ─────────────────────────────────────────
// EXTRA SCREENS: SESSIONS & SETTINGS
// ─────────────────────────────────────────
function renderSessionsScreen(): string {
  return `
    <div class="table-card" style="padding: 24px;">
      <h3 style="font-size: 16px; margin-bottom: 12px; color:#0f172a;">Jadwal Sesi Presentasi & Prosiding</h3>
      <p style="color:#64748b; font-size: 13.5px; margin-bottom: 24px;">
        Kelola ruangan, waktu presentasi author, dan kompilasi buku prosiding konferensi PubDesk.
      </p>

      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
        <div style="border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
          <div style="font-weight: 600; color:#0f172a; margin-bottom: 4px;">Sesi 1: Artificial Intelligence</div>
          <div style="font-size: 12.5px; color:#64748b;">Ruang Melati • 12 Nov, 09:00 - 11:30</div>
          <div style="margin-top: 12px; font-size: 13px; color:#1e293b;">6 Paper Terjadwal</div>
        </div>
        <div style="border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
          <div style="font-weight: 600; color:#0f172a; margin-bottom: 4px;">Sesi 2: Cyber Security</div>
          <div style="font-size: 12.5px; color:#64748b;">Ruang Anggrek • 12 Nov, 13:00 - 15:30</div>
          <div style="margin-top: 12px; font-size: 13px; color:#1e293b;">5 Paper Terjadwal</div>
        </div>
        <div style="border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
          <div style="font-weight: 600; color:#0f172a; margin-bottom: 4px;">Sesi 3: Information Systems</div>
          <div style="font-size: 12.5px; color:#64748b;">Ruang Cempaka • 13 Nov, 09:00 - 11:30</div>
          <div style="margin-top: 12px; font-size: 13px; color:#1e293b;">7 Paper Terjadwal</div>
        </div>
      </div>
    </div>
  `
}

function renderSettingsScreen(): string {
  return `
    <div class="table-card" style="padding: 24px; max-width: 680px;">
      <h3 style="font-size: 16px; margin-bottom: 8px; color:#0f172a;">Pengaturan Akun & Konferensi</h3>
      <p style="color:#64748b; font-size: 13.5px; margin-bottom: 24px;">
        Sesuaikan profil administrator dan parameter sistem PubDesk.
      </p>

      <div class="form-group">
        <label class="form-label">Nama Administrator</label>
        <input type="text" class="form-control" value="Admin PubDesk" />
      </div>

      <div class="form-group">
        <label class="form-label">Email Administrator</label>
        <input type="email" class="form-control" value="admin@pubdesk.org" />
      </div>

      <div class="form-group">
        <label class="form-label">Nama Konferensi Aktif</label>
        <input type="text" class="form-control" value="ICTI 2026 - International Conference on Technology & Innovation" />
      </div>

      <div class="form-group">
        <label class="form-label">Batas Waktu Review Maksimal (Hari)</label>
        <input type="number" class="form-control" value="14" />
      </div>

      <button class="btn-dark" style="margin-top: 12px;" onclick="alert('Pengaturan berhasil disimpan!')">
        Simpan Perubahan
      </button>
    </div>
  `
}

// ─────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────
function renderModals(): string {
  if (!state.modal) return ''

  if (state.modal === 'tambahReviewer') {
    return `
      <div class="adm-modal-backdrop" id="modal-backdrop">
        <div class="adm-modal">
          <div class="adm-modal-header">
            <h3 class="adm-modal-title">Tambah Reviewer Baru</h3>
            <button class="adm-modal-close" id="btn-close-modal">✕</button>
          </div>
          <form id="form-tambah-reviewer">
            <div class="form-group">
              <label class="form-label">Nama Lengkap & Gelar</label>
              <input type="text" id="add-rev-name" class="form-control" placeholder="Contoh: Prof. Hendra Wijaya, Ph.D." required />
            </div>
            <div class="form-group">
              <label class="form-label">Email Institusi</label>
              <input type="email" id="add-rev-email" class="form-control" placeholder="hendra@univ.ac.id" required />
            </div>
            <div class="form-group">
              <label class="form-label">Bidang Keahlian</label>
              <input type="text" id="add-rev-expertise" class="form-control" placeholder="Contoh: Cloud Computing, IoT" required />
            </div>
            <div class="adm-modal-footer">
              <button type="button" class="btn-outline" id="btn-cancel-modal">Batal</button>
              <button type="submit" class="btn-dark">Simpan Reviewer</button>
            </div>
          </form>
        </div>
      </div>
    `
  }

  if (state.modal === 'eksporData') {
    return `
      <div class="adm-modal-backdrop" id="modal-backdrop">
        <div class="adm-modal">
          <div class="adm-modal-header">
            <h3 class="adm-modal-title">Ekspor Data Paper Submissions</h3>
            <button class="adm-modal-close" id="btn-close-modal">✕</button>
          </div>
          <p style="font-size: 13.5px; color:#475569; margin-bottom: 20px;">
            Pilih format dokumen untuk mengekspor rekapitulasi data 128 submissions:
          </p>
          <div style="display:flex; flex-direction:column; gap:10px; margin-bottom: 24px;">
            <label style="display:flex; align-items:center; gap:8px; font-size:13.5px; cursor:pointer;">
              <input type="radio" name="export-fmt" value="csv" checked /> CSV Spreadsheet (.csv)
            </label>
            <label style="display:flex; align-items:center; gap:8px; font-size:13.5px; cursor:pointer;">
              <input type="radio" name="export-fmt" value="pdf" /> Laporan PDF Formal (.pdf)
            </label>
          </div>
          <div class="adm-modal-footer">
            <button type="button" class="btn-outline" id="btn-cancel-modal">Batal</button>
            <button type="button" class="btn-dark" id="btn-confirm-export">Unduh File</button>
          </div>
        </div>
      </div>
    `
  }

  return ''
}

// ─────────────────────────────────────────
// MAIN APP COMPONENT
// ─────────────────────────────────────────
function renderApp(): void {
  const root = document.getElementById('admin-app')
  if (!root) return

  // Belum login → tampilkan halaman login
  if (!state.isLoggedIn) {
    root.innerHTML = renderLoginView()
    attachLoginEvents()
    return
  }

  // Sudah login → tampilkan dashboard admin
  let contentHtml = ''
  if (state.currentTab === 'dashboard') contentHtml = renderDashboardScreen()
  else if (state.currentTab === 'submissions') contentHtml = renderSubmissionsScreen()
  else if (state.currentTab === 'reviewers') contentHtml = renderReviewersScreen()
  else if (state.currentTab === 'monitoring') contentHtml = renderMonitoringScreen()
  else if (state.currentTab === 'sessions') contentHtml = renderSessionsScreen()
  else if (state.currentTab === 'settings') contentHtml = renderSettingsScreen()

  root.innerHTML = `
    <div class="admin-layout">
      ${renderSidebar()}
      <main class="admin-main">
        ${renderHeader()}
        <div class="admin-content">
          ${contentHtml}
        </div>
      </main>
    </div>
    ${renderModals()}
  `

  attachDashboardEvents()
}

// ─────────────────────────────────────────
// ADMIN CREDENTIALS
// ─────────────────────────────────────────
const ADMIN_EMAIL = 'admin@pubdesk.org'
const ADMIN_PASSWORD = 'admin123'

// ─────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────
function attachLoginEvents(): void {
  document.getElementById('admin-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = (document.getElementById('adm-email') as HTMLInputElement)?.value.trim()
    const password = (document.getElementById('adm-password') as HTMLInputElement)?.value

    if (email.toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      loginErrorMsg = ''
      state.isLoggedIn = true
      renderApp()
      showAdminToast('Selamat datang, Admin PubDesk!')
    } else {
      loginErrorMsg = 'Email atau kata sandi salah. Silakan coba lagi.'
      renderApp()
      // Refocus email field
      ;(document.getElementById('adm-email') as HTMLInputElement)?.focus()
    }
  })
}

function attachDashboardEvents(): void {
  // Sidebar navigation
  const sidebarButtons = document.querySelectorAll<HTMLButtonElement>('.sidebar-item[data-tab]')
  sidebarButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab') as AdminTab
      if (tab) {
        state.currentTab = tab
        renderApp()
      }
    })
  })

  // Sidebar Logout
  document.getElementById('btn-sidebar-logout')?.addEventListener('click', () => {
    state.isLoggedIn = false
    renderApp()
    showAdminToast('Anda telah logout dari Admin PubDesk.')
  })

  // Search in submissions
  const subSearchInput = document.getElementById('input-submissions-search') as HTMLInputElement | null
  subSearchInput?.addEventListener('input', (e) => {
    state.submissionsSearch = (e.target as HTMLInputElement).value
    renderApp()
    // refocus input
    const reInput = document.getElementById('input-submissions-search') as HTMLInputElement | null
    if (reInput) {
      reInput.focus()
      reInput.setSelectionRange(reInput.value.length, reInput.value.length)
    }
  })

  // Filter status in submissions
  const subStatusSelect = document.getElementById('select-submissions-status') as HTMLSelectElement | null
  subStatusSelect?.addEventListener('change', (e) => {
    state.submissionsStatusFilter = (e.target as HTMLSelectElement).value
    renderApp()
  })

  // Export submissions button
  document.getElementById('btn-export-submissions')?.addEventListener('click', () => {
    state.modal = 'eksporData'
    renderApp()
  })

  // Search reviewer
  const revSearchInput = document.getElementById('input-reviewer-search') as HTMLInputElement | null
  revSearchInput?.addEventListener('input', (e) => {
    state.reviewerSearch = (e.target as HTMLInputElement).value
    renderApp()
    const reInput = document.getElementById('input-reviewer-search') as HTMLInputElement | null
    if (reInput) {
      reInput.focus()
      reInput.setSelectionRange(reInput.value.length, reInput.value.length)
    }
  })

  // Add reviewer button
  document.getElementById('btn-add-reviewer')?.addEventListener('click', () => {
    state.modal = 'tambahReviewer'
    renderApp()
  })

  // Monitoring filters
  document.getElementById('select-monitoring-reviewer')?.addEventListener('change', (e) => {
    state.monitoringReviewerFilter = (e.target as HTMLSelectElement).value
    renderApp()
  })

  document.getElementById('select-monitoring-status')?.addEventListener('change', (e) => {
    state.monitoringStatusFilter = (e.target as HTMLSelectElement).value
    renderApp()
  })

  // Send reminder button
  document.getElementById('btn-send-reminder')?.addEventListener('click', () => {
    showAdminToast('Pengingat email telah berhasil dikirimkan ke seluruh reviewer terkait!')
  })

  // Close modals
  document.getElementById('btn-close-modal')?.addEventListener('click', () => {
    state.modal = null
    renderApp()
  })

  document.getElementById('btn-cancel-modal')?.addEventListener('click', () => {
    state.modal = null
    renderApp()
  })

  document.getElementById('modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      state.modal = null
      renderApp()
    }
  })

  // Submit Add Reviewer Form
  document.getElementById('form-tambah-reviewer')?.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = (document.getElementById('add-rev-name') as HTMLInputElement)?.value.trim()
    const expertise = (document.getElementById('add-rev-expertise') as HTMLInputElement)?.value.trim()

    if (name) {
      const nextId = 'RV-0' + (reviewersData.length + 32)
      reviewersData.push({
        id: nextId,
        name,
        expertise: expertise || 'Computer Science',
        paperCount: 0,
        status: 'Aktif',
      })
      state.modal = null
      renderApp()
      showAdminToast(`Reviewer ${name} berhasil ditambahkan!`)
    }
  })

  // Export Confirmation
  document.getElementById('btn-confirm-export')?.addEventListener('click', () => {
    state.modal = null
    renderApp()
    showAdminToast('File data submission berhasil diunduh.')
  })

  // Header Bell
  document.getElementById('btn-admin-bell')?.addEventListener('click', () => {
    showAdminToast('3 Pengingat baru: Ada 2 reviewer yang mendekati deadline review.')
  })
}

// ─────────────────────────────────────────
// INITIALIZATION — selalu mulai dari Login
// ─────────────────────────────────────────
renderApp()
