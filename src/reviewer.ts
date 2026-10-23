import './style.css'
import './reviewer.css'

// ─────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────
const revIcons = {
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>`,
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
  </svg>`,
  myReviews: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 14l2 2 4-4"/>
  </svg>`,
  assigned: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,
  cloudDownload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>`,
  cloudUpload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M16 16l-4-4-4 4"/>
    <path d="M12 12v9"/>
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>
    <polyline points="16 16 12 12 8 16"/>
  </svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>`,
  moreVertical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="1"/>
    <circle cx="12" cy="5" r="1"/>
    <circle cx="12" cy="19" r="1"/>
  </svg>`,
}

// ─────────────────────────────────────────
// REVIEWER DATA & STATE
// ─────────────────────────────────────────
export type ReviewerView =
  | 'dashboard'
  | 'assigned-papers'
  | 'review-paper'
  | 'hasil-review'
  | 'revisi-paper'
  | 'my-reviews'
  | 'final-paper'
  | 'notifications'

interface ReviewerState {
  isLoggedIn: boolean
  currentView: ReviewerView
  manuscriptSubtab: 'abstrak' | 'manuskrip' | 'riwayat'
  assignedSearch: string
  assignedFilter: string
  myReviewsSearch: string
  myReviewsFilter: string
  profileModalOpen: boolean
  // Review form state
  formOriginalitas: string
  formMetodologi: string
  formKejelasan: string
  formKomentar: string
  formRekomendasi: string
  // Revision decision
  revisiCatatan: string
}

const state: ReviewerState = {
  isLoggedIn: false,
  currentView: 'dashboard',
  manuscriptSubtab: 'abstrak',
  assignedSearch: '',
  assignedFilter: 'all',
  myReviewsSearch: '',
  myReviewsFilter: 'all',
  profileModalOpen: false,
  formOriginalitas: '4',
  formMetodologi: '4',
  formKejelasan: '3',
  formKomentar: 'Makalah ini memiliki kontribusi baik, namun evaluasi performa perlu dilengkapi dengan perbandingan baseline model yang lebih komprehensif.',
  formRekomendasi: 'Minor Revision',
  revisiCatatan: '',
}

const reviewerUser = {
  name: 'Dr. Budi Santoso',
  role: 'Reviewer',
  email: 'budi.santoso@univ.ac.id',
  institution: 'Institut Teknologi Sepuluh Nopember',
  expertise: 'Artificial Intelligence, Machine Learning, Data Mining',
}

const assignedPapers = [
  {
    id: 'PD-1042',
    title: 'AI untuk Deteksi Dini Penyakit Berbasis Machine Learning',
    shortTitle: 'AI untuk Deteksi Dini Pe...',
    assignedDate: '20 Okt 2026',
    deadline: '28 Okt 2026',
    status: 'Belum direview',
    badgeClass: 'rev-badge-gray',
  },
  {
    id: 'PD-1038',
    title: 'Sistem Informasi Desa Cerdas Terintegrasi Cloud',
    shortTitle: 'Sistem Informasi Desa...',
    assignedDate: '19 Okt 2026',
    deadline: '27 Okt 2026',
    status: 'Dalam proses',
    badgeClass: 'rev-badge-yellow',
  },
  {
    id: 'PD-1031',
    title: 'Keamanan Data pada IoT dengan Kriptografi Ringan',
    shortTitle: 'Keamanan Data pada IoT',
    assignedDate: '18 Okt 2026',
    deadline: '26 Okt 2026',
    status: 'Selesai',
    badgeClass: 'rev-badge-green',
  },
  {
    id: 'PD-1026',
    title: 'Model Pembelajaran Adaptif Berbantuan Agentic AI',
    shortTitle: 'Model Pembelajaran Ad...',
    assignedDate: '17 Okt 2026',
    deadline: '25 Okt 2026',
    status: 'Selesai',
    badgeClass: 'rev-badge-green',
  },
]

const myReviewsHistory = [
  {
    id: 'PD-1014',
    title: 'Optimasi Jaringan 5G untuk Komunikasi Kendaraan Otonom',
    shortTitle: 'Optimasi Jaringan 5G',
    reviewDate: '8 Okt 2026',
    rekomendasi: 'Diterima',
    badgeClass: 'rev-badge-green',
    targetView: 'final-paper',
  },
  {
    id: 'PD-1009',
    title: 'Analitik Pembelajaran Berbasis Rekam Jejak Digital Siswa',
    shortTitle: 'Analitik Pembelajaran',
    reviewDate: '5 Okt 2026',
    rekomendasi: 'Revisi',
    badgeClass: 'rev-badge-yellow',
    targetView: 'hasil-review',
  },
  {
    id: 'PD-0998',
    title: 'Enkripsi Data Medis Menggunakan Kurva Elips Hybrid',
    shortTitle: 'Enkripsi Data Medis',
    reviewDate: '1 Okt 2026',
    rekomendasi: 'Diterima',
    badgeClass: 'rev-badge-green',
    targetView: 'final-paper',
  },
  {
    id: 'PD-0982',
    title: 'Smart City Berkelanjutan Berbasis Sensor Edge',
    shortTitle: 'Smart City Berkelanjutan',
    reviewDate: '28 Sep 2026',
    rekomendasi: 'Ditolak',
    badgeClass: 'rev-badge-red',
    targetView: 'hasil-review',
  },
]

const notificationsList = [
  {
    id: 'n1',
    icon: revIcons.document,
    title: 'Paper PD-1042 telah mengunggah revisi',
    time: 'Hari ini, 09:15',
    actionView: 'revisi-paper',
  },
  {
    id: 'n2',
    icon: revIcons.calendar,
    title: 'Deadline review PD-1038 tinggal 3 hari',
    time: 'Kemarin, 15:42',
    actionView: 'review-paper',
  },
  {
    id: 'n3',
    icon: revIcons.checkCircle,
    title: 'Review PD-1031 berhasil dikirim',
    time: '24 Okt 2026',
    actionView: 'hasil-review',
  },
  {
    id: 'n4',
    icon: revIcons.chat,
    title: 'Admin menambahkan catatan penugasan',
    time: '22 Okt 2026',
    actionView: 'assigned-papers',
  },
]

// ─────────────────────────────────────────
// HELPER TOAST
// ─────────────────────────────────────────
function showToast(message: string) {
  const existing = document.querySelector('.rev-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.className = 'rev-toast'
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 16v-4M12 8h.01"/>
    </svg>
    <span>${message}</span>
  `
  document.body.appendChild(toast)
  setTimeout(() => {
    toast.style.transition = 'opacity 0.25s, transform 0.25s'
    toast.style.opacity = '0'
    toast.style.transform = 'translateY(10px)'
    setTimeout(() => toast.remove(), 250)
  }, 2800)
}

// ─────────────────────────────────────────
// RENDERERS FOR EACH SCREEN
// ─────────────────────────────────────────

// SCREEN 1: Dashboard Reviewer
function renderDashboardView(): string {
  return `
  <!-- 4 STATS CARDS -->
  <div class="rev-stats-grid">
    <div class="rev-stat-card">
      <div class="rev-stat-icon-wrap">${revIcons.document}</div>
      <div class="rev-stat-number">7</div>
      <div class="rev-stat-label">Paper ditugaskan</div>
    </div>
    <div class="rev-stat-card">
      <div class="rev-stat-icon-wrap">${revIcons.clock}</div>
      <div class="rev-stat-number">3</div>
      <div class="rev-stat-label">Belum direview</div>
    </div>
    <div class="rev-stat-card">
      <div class="rev-stat-icon-wrap">${revIcons.checkCircle}</div>
      <div class="rev-stat-number">4</div>
      <div class="rev-stat-label">Selesai</div>
    </div>
    <div class="rev-stat-card">
      <div class="rev-stat-icon-wrap">${revIcons.calendar}</div>
      <div class="rev-stat-number">3 hari</div>
      <div class="rev-stat-label">Tenggat terdekat</div>
    </div>
  </div>

  <!-- 2 COLUMNS: REVIEW TERBARU & PENGINGAT -->
  <div class="rev-2col-grid">
    <!-- LEFT: REVIEW TERBARU -->
    <div class="rev-card">
      <div class="rev-card-header">
        <h3 class="rev-card-title">Review terbaru</h3>
      </div>
      <div class="rev-list">
        <div class="rev-item-row" data-open-view="review-paper">
          <div class="rev-item-info">
            <span class="rev-item-id">PD-1042</span>
            <span class="rev-item-title">AI untuk Deteksi Dini Penyakit</span>
          </div>
          <div>
            <span class="rev-badge rev-badge-gray">Belum direview</span>
          </div>
        </div>

        <div class="rev-item-row" data-open-view="review-paper">
          <div class="rev-item-info">
            <span class="rev-item-id">PD-1038</span>
            <span class="rev-item-title">Sistem Informasi Desa Cerdas</span>
          </div>
          <div>
            <span class="rev-badge rev-badge-yellow">Dalam proses</span>
          </div>
        </div>

        <div class="rev-item-row" data-open-view="hasil-review">
          <div class="rev-item-info">
            <span class="rev-item-id">PD-1031</span>
            <span class="rev-item-title">Keamanan Data pada IoT</span>
          </div>
          <div>
            <span class="rev-badge rev-badge-green">Selesai</span>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT: PENGINGAT -->
    <div class="rev-card">
      <div class="rev-card-header">
        <h3 class="rev-card-title">Pengingat</h3>
      </div>
      <div>
        <div class="rev-reminder-item">
          <div class="rev-reminder-left">
            <span class="rev-reminder-icon urgent">${revIcons.bell}</span>
            <span>PD-1042</span>
          </div>
          <span class="rev-reminder-time">3 hari lagi</span>
        </div>

        <div class="rev-reminder-item">
          <div class="rev-reminder-left">
            <span class="rev-reminder-icon">${revIcons.bell}</span>
            <span>PD-1038</span>
          </div>
          <span class="rev-reminder-time">5 hari lagi</span>
        </div>

        <div class="rev-reminder-item">
          <div class="rev-reminder-left">
            <span class="rev-reminder-icon">${revIcons.bell}</span>
            <span>PD-1031</span>
          </div>
          <span class="rev-reminder-time">Selesai</span>
        </div>
      </div>
    </div>
  </div>
  `
}

// SCREEN 2: Assigned Papers
function renderAssignedPapersView(): string {
  const filtered = assignedPapers.filter((p) => {
    const matchSearch =
      p.id.toLowerCase().includes(state.assignedSearch.toLowerCase()) ||
      p.title.toLowerCase().includes(state.assignedSearch.toLowerCase())
    const matchFilter =
      state.assignedFilter === 'all' ||
      (state.assignedFilter === 'pending' && p.status === 'Belum direview') ||
      (state.assignedFilter === 'in_progress' && p.status === 'Dalam proses') ||
      (state.assignedFilter === 'done' && p.status === 'Selesai')
    return matchSearch && matchFilter
  })

  const rows = filtered
    .map(
      (p) => `
    <tr style="cursor:pointer;" data-paper-id="${p.id}" class="assigned-row">
      <td class="rev-table-id">${p.id}</td>
      <td class="rev-table-title" title="${p.title}">${p.shortTitle}</td>
      <td class="rev-table-date">${p.assignedDate}</td>
      <td class="rev-table-date">${p.deadline}</td>
      <td>
        <span class="rev-badge ${p.badgeClass}">${p.status}</span>
      </td>
    </tr>
  `
    )
    .join('')

  return `
  <div class="rev-filter-bar">
    <div class="rev-search-box">
      <input type="text" class="rev-search-input" id="assigned-search" placeholder="Cari paper..." value="${state.assignedSearch}" />
    </div>
    <select class="rev-filter-select" id="assigned-filter">
      <option value="all" ${state.assignedFilter === 'all' ? 'selected' : ''}>Semua status</option>
      <option value="pending" ${state.assignedFilter === 'pending' ? 'selected' : ''}>Belum direview</option>
      <option value="in_progress" ${state.assignedFilter === 'in_progress' ? 'selected' : ''}>Dalam proses</option>
      <option value="done" ${state.assignedFilter === 'done' ? 'selected' : ''}>Selesai</option>
    </select>
  </div>

  <div class="rev-table-wrap">
    <table class="rev-table">
      <thead>
        <tr>
          <th>ID PAPER</th>
          <th>JUDUL PAPER</th>
          <th>DITUGASKAN</th>
          <th>DEADLINE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        ${rows || `<tr><td colspan="5" style="text-align:center; padding:32px; color:#94a3b8;">Tidak ada paper yang cocok dengan pencarian.</td></tr>`}
      </tbody>
    </table>
  </div>
  `
}

// Helper for Manuscript Details Card
function renderManuscriptCard(): string {
  let subtabContent = ''
  if (state.manuscriptSubtab === 'abstrak') {
    subtabContent = `
      <p class="rev-manuscript-text">
        Penelitian ini mengusulkan model klasifikasi untuk membantu deteksi dini penyakit dengan memanfaatkan rekam medis terstruktur. Evaluasi dilakukan pada tiga arsitektur pembelajaran mesin.
      </p>
    `
  } else if (state.manuscriptSubtab === 'manuskrip') {
    subtabContent = `
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; font-size:13px; color:#475569;">
        <div style="font-weight:600; color:#0f172a; margin-bottom:8px;">File Manuskrip Utama:</div>
        <div>📄 ICTI2026_PD1042_MainManuscript.pdf (4.2 MB)</div>
        <div style="font-size:12px; color:#94a3b8; margin-top:4px;">Diunggah oleh author pada 20 Okt 2026, 09:42 WIB</div>
      </div>
    `
  } else {
    subtabContent = `
      <div style="font-size:13px; color:#475569; display:flex; flex-direction:column; gap:8px;">
        <div>• <strong>20 Okt 2026:</strong> Manuskrip awal diserahkan oleh Author (PD-1042).</div>
        <div>• <strong>21 Okt 2026:</strong> Ditugaskan ke Dr. Budi Santoso oleh Editor in Chief.</div>
        <div>• <strong>27 Okt 2026:</strong> Dokumen revisi dan tanggapan diunggah.</div>
      </div>
    `
  }

  return `
  <div class="rev-manuscript-card">
    <div class="rev-deadline-pill">Deadline 28 Okt 2026</div>
    <div>
      <h2 class="rev-paper-heading">AI untuk Deteksi Dini Penyakit Berbasis Machine Learning</h2>
      <div class="rev-paper-track" style="margin-top:6px;">Anonim • Track Artificial Intelligence</div>
    </div>

    <!-- TABS -->
    <div class="rev-manuscript-tabs">
      <button class="rev-subtab ${state.manuscriptSubtab === 'abstrak' ? 'active' : ''}" data-subtab="abstrak">Abstrak</button>
      <button class="rev-subtab ${state.manuscriptSubtab === 'manuskrip' ? 'active' : ''}" data-subtab="manuskrip">Manuskrip</button>
      <button class="rev-subtab ${state.manuscriptSubtab === 'riwayat' ? 'active' : ''}" data-subtab="riwayat">Riwayat</button>
    </div>

    <!-- TAB CONTENT -->
    ${subtabContent}

    <!-- DOWNLOAD BUTTON -->
    <div>
      <button class="rev-btn-outline" id="btn-download-manuscript">
        Unduh manuskrip
      </button>
    </div>
  </div>
  `
}

// SCREEN 3: Review Paper (Form Review)
function renderReviewPaperView(): string {
  return `
  <div class="rev-split-layout">
    <!-- LEFT: MANUSCRIPT CARD -->
    ${renderManuscriptCard()}

    <!-- RIGHT: FORM REVIEW -->
    <div class="rev-form-card">
      <h3 class="rev-card-title">Form review</h3>
      <form id="form-review-submit" style="display:flex; flex-direction:column; gap:14px;">
        <div class="rev-form-group">
          <label class="rev-form-label">Originalitas</label>
          <select class="rev-form-select" id="input-orig">
            <option value="" disabled ${!state.formOriginalitas ? 'selected' : ''}>Pilih skor 1-5</option>
            <option value="5" ${state.formOriginalitas === '5' ? 'selected' : ''}>5 - Sangat Baik / Orisinal</option>
            <option value="4" ${state.formOriginalitas === '4' ? 'selected' : ''}>4 - Baik</option>
            <option value="3" ${state.formOriginalitas === '3' ? 'selected' : ''}>3 - Cukup</option>
            <option value="2" ${state.formOriginalitas === '2' ? 'selected' : ''}>2 - Kurang</option>
            <option value="1" ${state.formOriginalitas === '1' ? 'selected' : ''}>1 - Sangat Kurang</option>
          </select>
        </div>

        <div class="rev-form-group">
          <label class="rev-form-label">Metodologi</label>
          <select class="rev-form-select" id="input-metod">
            <option value="" disabled ${!state.formMetodologi ? 'selected' : ''}>Pilih skor 1-5</option>
            <option value="5" ${state.formMetodologi === '5' ? 'selected' : ''}>5 - Sangat Kuat & Valid</option>
            <option value="4" ${state.formMetodologi === '4' ? 'selected' : ''}>4 - Memadai & Jelas</option>
            <option value="3" ${state.formMetodologi === '3' ? 'selected' : ''}>3 - Cukup namun perlu detail</option>
            <option value="2" ${state.formMetodologi === '2' ? 'selected' : ''}>2 - Kurang valid</option>
            <option value="1" ${state.formMetodologi === '1' ? 'selected' : ''}>1 - Sangat Lemah</option>
          </select>
        </div>

        <div class="rev-form-group">
          <label class="rev-form-label">Kejelasan tulisan</label>
          <select class="rev-form-select" id="input-kejelasan">
            <option value="" disabled ${!state.formKejelasan ? 'selected' : ''}>Pilih skor 1-5</option>
            <option value="5" ${state.formKejelasan === '5' ? 'selected' : ''}>5 - Sangat Mudah Dipahami</option>
            <option value="4" ${state.formKejelasan === '4' ? 'selected' : ''}>4 - Baik dan Terstruktur</option>
            <option value="3" ${state.formKejelasan === '3' ? 'selected' : ''}>3 - Cukup, ada beberapa typo</option>
            <option value="2" ${state.formKejelasan === '2' ? 'selected' : ''}>2 - Sulit diikuti</option>
            <option value="1" ${state.formKejelasan === '1' ? 'selected' : ''}>1 - Sangat Membingungkan</option>
          </select>
        </div>

        <div class="rev-form-group">
          <label class="rev-form-label">Komentar untuk author</label>
          <textarea class="rev-form-textarea" id="input-komentar" placeholder="Tuliskan catatan konstruktif">${state.formKomentar}</textarea>
        </div>

        <div class="rev-form-group">
          <label class="rev-form-label">Rekomendasi</label>
          <select class="rev-form-select" id="input-rekom">
            <option value="" disabled ${!state.formRekomendasi ? 'selected' : ''}>Pilih rekomendasi</option>
            <option value="Minor Revision" ${state.formRekomendasi === 'Minor Revision' ? 'selected' : ''}>Minor Revision</option>
            <option value="Major Revision" ${state.formRekomendasi === 'Major Revision' ? 'selected' : ''}>Major Revision</option>
            <option value="Accept" ${state.formRekomendasi === 'Accept' ? 'selected' : ''}>Accept / Diterima</option>
            <option value="Reject" ${state.formRekomendasi === 'Reject' ? 'selected' : ''}>Reject / Ditolak</option>
          </select>
        </div>

        <button type="submit" class="rev-btn-primary" style="margin-top:6px;">
          Simpan review
        </button>
      </form>
    </div>
  </div>
  `
}

// SCREEN 4: Hasil Review
function renderHasilReviewView(): string {
  return `
  <div class="rev-split-layout">
    <!-- LEFT: MANUSCRIPT CARD -->
    ${renderManuscriptCard()}

    <!-- RIGHT: HASIL REVIEW RESULT -->
    <div class="rev-hasil-card">
      <h3 class="rev-card-title">Hasil review</h3>

      <div class="rev-recom-box">
        <span class="rev-recom-subtitle">REKOMENDASI</span>
        <span class="rev-recom-title">${state.formRekomendasi || 'Minor Revision'}</span>
      </div>

      <div class="rev-scores-list">
        <div class="rev-score-row">
          <span>Originalitas</span>
          <span class="rev-score-val">${state.formOriginalitas || '4'} / 5</span>
        </div>
        <div class="rev-score-row">
          <span>Metodologi</span>
          <span class="rev-score-val">${state.formMetodologi || '4'} / 5</span>
        </div>
        <div class="rev-score-row">
          <span>Kejelasan</span>
          <span class="rev-score-val">${state.formKejelasan || '3'} / 5</span>
        </div>
      </div>

      <div class="rev-time-subtle">
        Dikirim 24 Okt 2026, 14:32
      </div>

      <div>
        <button class="rev-btn-outline" id="btn-edit-review" style="width:100%; justify-content:center;">
          Edit review
        </button>
      </div>
    </div>
  </div>
  `
}

// SCREEN 5: Revisi Paper
function renderRevisiPaperView(): string {
  return `
  <div class="rev-revisi-container">
    <!-- TOP CARD: REVISI PAPER TERSEDIA -->
    <div class="rev-card">
      <h3 class="rev-card-title" style="margin-bottom:8px;">Revisi paper tersedia</h3>
      <p style="font-size:13.5px; color:#64748b; line-height:1.6;">
        Author telah mengunggah versi revisi untuk paper PD-1042. Periksa perubahan dan berikan keputusan akhir.
      </p>

      <div class="rev-attach-grid">
        <div class="rev-attach-box" id="download-manuscript-revisi" title="Klik untuk mengunduh manuskrip revisi">
          <div class="rev-attach-icon">${revIcons.cloudUpload}</div>
          <div class="rev-attach-name">Manuscript revisi.pdf</div>
          <div class="rev-attach-meta">2.8 MB • 27 Okt 2026</div>
        </div>

        <div class="rev-attach-box" id="download-response-reviewers" title="Klik untuk mengunduh respon terhadap reviewers">
          <div class="rev-attach-icon">${revIcons.cloudUpload}</div>
          <div class="rev-attach-name">Response to reviewers.pdf</div>
          <div class="rev-attach-meta">620 KB • 27 Okt 2026</div>
        </div>
      </div>
    </div>

    <!-- BOTTOM CARD: EVALUASI REVISI -->
    <div class="rev-card">
      <h3 class="rev-card-title" style="margin-bottom:16px;">Evaluasi revisi</h3>
      <div class="rev-form-group">
        <label class="rev-form-label">Catatan keputusan</label>
        <textarea class="rev-form-textarea" id="input-catatan-revisi" placeholder="Tuliskan hasil evaluasi revisi">${state.revisiCatatan}</textarea>
      </div>

      <div style="display:flex; align-items:center; gap:12px; margin-top:20px;">
        <button class="rev-btn-primary" id="btn-terima-revisi">
          Terima revisi
        </button>
        <button class="rev-btn-outline" id="btn-minta-revisi-lanjutan">
          Minta revisi lanjutan
        </button>
      </div>
    </div>
  </div>
  `
}

// SCREEN 6: My Reviews
function renderMyReviewsView(): string {
  const filtered = myReviewsHistory.filter((r) => {
    const matchSearch =
      r.id.toLowerCase().includes(state.myReviewsSearch.toLowerCase()) ||
      r.title.toLowerCase().includes(state.myReviewsSearch.toLowerCase())
    const matchFilter =
      state.myReviewsFilter === 'all' ||
      (state.myReviewsFilter === 'accepted' && r.rekomendasi === 'Diterima') ||
      (state.myReviewsFilter === 'revision' && r.rekomendasi === 'Revisi') ||
      (state.myReviewsFilter === 'rejected' && r.rekomendasi === 'Ditolak')
    return matchSearch && matchFilter
  })

  const rows = filtered
    .map(
      (r) => `
    <tr>
      <td class="rev-table-id">${r.id}</td>
      <td class="rev-table-title" title="${r.title}">${r.shortTitle}</td>
      <td class="rev-table-date">${r.reviewDate}</td>
      <td>
        <span class="rev-badge ${r.badgeClass}">${r.rekomendasi}</span>
      </td>
      <td>
        <button class="rev-btn-link" data-open-view="${r.targetView}">Lihat</button>
      </td>
    </tr>
  `
    )
    .join('')

  return `
  <div class="rev-filter-bar">
    <div class="rev-search-box">
      <input type="text" class="rev-search-input" id="myreviews-search" placeholder="Cari paper..." value="${state.myReviewsSearch}" />
    </div>
    <select class="rev-filter-select" id="myreviews-filter">
      <option value="all" ${state.myReviewsFilter === 'all' ? 'selected' : ''}>Semua rekomendasi</option>
      <option value="accepted" ${state.myReviewsFilter === 'accepted' ? 'selected' : ''}>Diterima</option>
      <option value="revision" ${state.myReviewsFilter === 'revision' ? 'selected' : ''}>Revisi</option>
      <option value="rejected" ${state.myReviewsFilter === 'rejected' ? 'selected' : ''}>Ditolak</option>
    </select>
  </div>

  <div class="rev-table-wrap">
    <table class="rev-table">
      <thead>
        <tr>
          <th>ID PAPER</th>
          <th>JUDUL PAPER</th>
          <th>TANGGAL REVIEW</th>
          <th>REKOMENDASI</th>
          <th>AKSI</th>
        </tr>
      </thead>
      <tbody>
        ${rows || `<tr><td colspan="5" style="text-align:center; padding:32px; color:#94a3b8;">Tidak ada riwayat review yang sesuai.</td></tr>`}
      </tbody>
    </table>
  </div>
  `
}

// SCREEN 7: Final Paper
function renderFinalPaperView(): string {
  return `
  <div class="rev-split-layout">
    <!-- LEFT CARD -->
    <div class="rev-card" style="display:flex; flex-direction:column; gap:16px;">
      <div class="rev-green-pill">Accepted for publication</div>
      <div>
        <h2 class="rev-paper-heading">AI untuk Deteksi Dini Penyakit Berbasis Machine Learning</h2>
        <div class="rev-paper-track" style="margin-top:6px;">Paper ID PD-1042 • Keputusan 29 Okt 2026</div>
      </div>

      <div style="margin-top:8px;">
        <h4 style="font-size:14px; font-weight:700; color:#0f172a; margin-bottom:12px;">Final camera-ready paper</h4>
        <div class="rev-attach-box" id="btn-download-final-pdf" style="margin-bottom:16px;">
          <div class="rev-attach-icon">${revIcons.cloudUpload}</div>
          <div class="rev-attach-name">ICTI2026_PD1042_Final.pdf</div>
          <div class="rev-attach-meta">3.1 MB • Versi final</div>
        </div>
      </div>

      <div>
        <button class="rev-btn-outline" id="btn-download-final-btn">
          Unduh final paper
        </button>
      </div>
    </div>

    <!-- RIGHT CARD: RINGKASAN KEPUTUSAN -->
    <div class="rev-card" style="display:flex; flex-direction:column; gap:18px;">
      <h3 class="rev-card-title">Ringkasan keputusan</h3>

      <div class="rev-scores-list" style="border-top:none; padding-top:0;">
        <div class="rev-score-row">
          <span>Originalitas</span>
          <span class="rev-score-val">4.0</span>
        </div>
        <div class="rev-score-row">
          <span>Metodologi</span>
          <span class="rev-score-val">4.2</span>
        </div>
        <div class="rev-score-row">
          <span>Kejelasan</span>
          <span class="rev-score-val">4.1</span>
        </div>
        <div class="rev-score-row" style="margin-top:6px; padding-top:8px; border-top:1px dashed #e2e8f0;">
          <span style="font-weight:600; color:#0f172a;">Rata-rata</span>
          <span class="rev-score-val highlight">4.1 / 5</span>
        </div>
      </div>

      <div class="rev-checklist">
        <div class="rev-check-item">
          <span class="rev-check-icon">${revIcons.checkCircle}</span>
          <span>Review selesai</span>
        </div>
        <div class="rev-check-item">
          <span class="rev-check-icon">${revIcons.checkCircle}</span>
          <span>Revisi disetujui</span>
        </div>
        <div class="rev-check-item">
          <span class="rev-check-icon">${revIcons.checkCircle}</span>
          <span>Final paper diterima</span>
        </div>
      </div>
    </div>
  </div>
  `
}

// SCREEN 8: Notifikasi
function renderNotificationsView(): string {
  const notifItems = notificationsList
    .map(
      (n) => `
    <div class="rev-notif-item" data-notif-view="${n.actionView}" style="cursor:pointer;">
      <div class="rev-notif-left">
        <div class="rev-notif-icon-circle">
          ${n.icon}
        </div>
        <div class="rev-notif-content">
          <span class="rev-notif-title">${n.title}</span>
          <span class="rev-notif-time">${n.time}</span>
        </div>
      </div>
      <button class="rev-notif-more-btn" title="Opsi" onclick="event.stopPropagation();">
        ${revIcons.moreVertical}
      </button>
    </div>
  `
    )
    .join('')

  return `
  <div class="rev-notif-card">
    <h3 class="rev-card-title">Notifikasi terbaru</h3>
    <div class="rev-notif-list">
      ${notifItems}
    </div>
  </div>
  `
}

// Profile Modal
function renderProfileModal(): string {
  if (!state.profileModalOpen) return ''

  return `
  <div class="rev-modal-backdrop" id="profile-modal-backdrop">
    <div class="rev-modal">
      <div class="rev-modal-header">
        <h3 class="rev-modal-title">Profil Reviewer</h3>
        <button class="rev-modal-close" id="profile-modal-close">&times;</button>
      </div>

      <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; padding:16px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;">
        <div class="rev-avatar-circle" style="width:52px; height:52px; font-size:18px;">
          BS
        </div>
        <div>
          <h4 style="font-size:16px; font-weight:700; color:#0f172a;">${reviewerUser.name}</h4>
          <p style="font-size:12.5px; color:#64748b;">${reviewerUser.email}</p>
          <span class="rev-badge rev-badge-green" style="margin-top:6px;">Reviewer Aktif Terverifikasi</span>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;">
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9;">
          <span style="color:#64748b;">Institusi:</span>
          <span style="font-weight:600; color:#0f172a; text-align:right;">${reviewerUser.institution}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9;">
          <span style="color:#64748b;">Bidang Kepakaran:</span>
          <span style="font-weight:500; color:#0f172a; text-align:right;">${reviewerUser.expertise}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9;">
          <span style="color:#64748b;">Total Penugasan:</span>
          <span style="font-weight:700; color:#0284c7;">7 Paper</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0;">
          <span style="color:#64748b;">Review Terselesaikan:</span>
          <span style="font-weight:700; color:#166534;">4 Paper Selesai</span>
        </div>
      </div>

      <div style="margin-top:22px; display:flex; justify-content:flex-end;">
        <button class="rev-btn-primary" id="profile-modal-btn-close">
          Tutup
        </button>
      </div>
    </div>
  </div>
  `
}

// ─────────────────────────────────────────
// HEADER TITLES & SUBTITLES PER VIEW
// ─────────────────────────────────────────
function getHeaderInfo(): { title: string; subtitle: string } {
  switch (state.currentView) {
    case 'dashboard':
      return {
        title: 'Dashboard Reviewer',
        subtitle: 'Ringkasan tugas dan progres review Anda.',
      }
    case 'assigned-papers':
      return {
        title: 'Assigned Papers',
        subtitle: 'Daftar paper yang ditugaskan untuk Anda review.',
      }
    case 'review-paper':
      return {
        title: 'Review Paper',
        subtitle: 'Baca manuskrip dan isi formulir penilaian.',
      }
    case 'hasil-review':
      return {
        title: 'Hasil Review',
        subtitle: 'Ringkasan skor dan rekomendasi review.',
      }
    case 'revisi-paper':
      return {
        title: 'Revisi Paper',
        subtitle: 'Periksa perubahan yang dikirimkan author.',
      }
    case 'my-reviews':
      return {
        title: 'My Reviews',
        subtitle: 'Riwayat review yang telah Anda kirimkan.',
      }
    case 'final-paper':
      return {
        title: 'Final Paper',
        subtitle: 'Paper telah diterima untuk publikasi.',
      }
    case 'notifications':
      return {
        title: 'Notifikasi',
        subtitle: 'Pembaruan terbaru terkait penugasan review.',
      }
  }
}

// ─────────────────────────────────────────
// RENDER: REVIEWER LOGIN PAGE (TANPA REGISTER)
// ─────────────────────────────────────────
function renderReviewerLoginPage(): string {
  return `
  <div class="auth-page">
    <div class="auth-top-nav">
      <a href="/" class="auth-back-btn" id="btn-reviewer-back-home" title="Kembali ke Beranda" style="text-decoration:none;">
        ${revIcons.arrowLeft}
        <span>Kembali ke Beranda</span>
      </a>
    </div>
    <div class="auth-card">
      <div class="auth-header">
        <div class="auth-logo-badge" style="background-color:#1e293b;">P</div>
        <h2 class="auth-title">Login Reviewer</h2>
        <p style="font-size:12.5px; color:#64748b; margin-top:4px;">Portal Khusus Mitra Bestari & Reviewer</p>
      </div>

      <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:10px; padding:12px 14px; margin-bottom:20px; font-size:12.5px; color:#0369a1; display:flex; align-items:center; gap:10px; line-height:1.5;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <span>Akun reviewer terdaftar otomatis untuk <strong>Dr. Budi Santoso</strong>. Klik Login untuk langsung masuk.</span>
      </div>

      <form class="auth-form" id="form-reviewer-login">
        <div class="auth-field">
          <label class="auth-label">Email institusi / reviewer</label>
          <input type="email" class="auth-input" id="rev-login-email" value="budi.santoso@univ.ac.id" placeholder="nama@univ.ac.id" required />
        </div>
        <div class="auth-field">
          <label class="auth-label">Password</label>
          <input type="password" class="auth-input" id="rev-login-password" value="password123" placeholder="Masukkan password" required />
        </div>
        <div class="auth-row-options">
          <label class="auth-checkbox-label">
            <input type="checkbox" id="rev-login-remember" checked />
            <span>Ingat saya</span>
          </label>
          <span class="auth-link-subtle" id="rev-link-forgot-pass">Lupa password?</span>
        </div>
        <button type="submit" class="auth-btn-primary" id="btn-submit-reviewer-login" style="background-color:#1e293b;">
          Login Reviewer
        </button>
      </form>

      <div class="auth-footer" style="margin-top:24px; padding-top:16px; border-top:1px solid #f1f5f9; font-size:12px; color:#94a3b8; line-height:1.6;">
        <span>🔒 Hak akses khusus Reviewer. Kredensial akun dikelola langsung oleh Sekretariat Konferensi tanpa pendaftaran mandiri (tanpa register).</span>
      </div>
    </div>
  </div>`
}

function attachReviewerLoginListeners() {
  const form = document.getElementById('form-reviewer-login') as HTMLFormElement | null
  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    state.isLoggedIn = true
    showToast(`Selamat datang kembali, ${reviewerUser.name}!`)
    renderReviewerApp()
  })

  document.getElementById('rev-link-forgot-pass')?.addEventListener('click', () => {
    showToast('Tautan pemulihan kata sandi telah dikirimkan ke email institusi Anda.')
  })
}

// ─────────────────────────────────────────
// MAIN APP COMPONENT
// ─────────────────────────────────────────
export function renderReviewerApp(containerSelector = '#reviewer-app') {
  const container = document.querySelector<HTMLDivElement>(containerSelector)
  if (!container) return

  // Tampilkan halaman login terlebih dahulu tanpa register
  if (!state.isLoggedIn) {
    container.innerHTML = renderReviewerLoginPage()
    attachReviewerLoginListeners()
    return
  }

  const headerInfo = getHeaderInfo()

  // Determine which sidebar item is active
  const isDashboardActive = state.currentView === 'dashboard'
  const isMyReviewsActive = state.currentView === 'my-reviews' || state.currentView === 'hasil-review' || state.currentView === 'final-paper'
  const isAssignedActive = state.currentView === 'assigned-papers' || state.currentView === 'review-paper' || state.currentView === 'revisi-paper'
  const isNotifActive = state.currentView === 'notifications'

  // Render view body
  let viewHTML = ''
  if (state.currentView === 'dashboard') viewHTML = renderDashboardView()
  else if (state.currentView === 'assigned-papers') viewHTML = renderAssignedPapersView()
  else if (state.currentView === 'review-paper') viewHTML = renderReviewPaperView()
  else if (state.currentView === 'hasil-review') viewHTML = renderHasilReviewView()
  else if (state.currentView === 'revisi-paper') viewHTML = renderRevisiPaperView()
  else if (state.currentView === 'my-reviews') viewHTML = renderMyReviewsView()
  else if (state.currentView === 'final-paper') viewHTML = renderFinalPaperView()
  else if (state.currentView === 'notifications') viewHTML = renderNotificationsView()

  container.innerHTML = `
  <div class="rev-layout">
    <!-- SIDEBAR -->
    <aside class="rev-sidebar">
      <div class="rev-brand" id="rev-brand-logo" title="PubDesk Reviewer Portal">
        <div class="rev-brand-logo">P</div>
        PubDesk
      </div>

      <nav class="rev-nav">
        <button class="rev-nav-item ${isDashboardActive ? 'active' : ''}" id="nav-rev-dashboard">
          ${revIcons.dashboard} Dashboard
        </button>
        <button class="rev-nav-item ${isMyReviewsActive ? 'active' : ''}" id="nav-rev-my-reviews">
          ${revIcons.myReviews} My Reviews
        </button>
        <button class="rev-nav-item ${isAssignedActive ? 'active' : ''}" id="nav-rev-assigned">
          ${revIcons.assigned} Assigned Papers
        </button>
        <button class="rev-nav-item ${isNotifActive ? 'active' : ''}" id="nav-rev-notifications">
          ${revIcons.bell} Notifikasi
        </button>
        <button class="rev-nav-item" id="nav-rev-profile">
          ${revIcons.user} Profil
        </button>
        <div class="rev-nav-divider"></div>
        <button class="rev-nav-item" id="nav-rev-logout" style="color:#ef4444;">
          ${revIcons.logout} Logout
        </button>
      </nav>

      <!-- SIDEBAR FOOTER: USER CARD -->
      <div class="rev-sidebar-footer" id="rev-user-card" title="Klik untuk membuka profil">
        <div class="rev-avatar-circle">
          BS
        </div>
        <div class="rev-user-meta">
          <span class="rev-user-name">${reviewerUser.name}</span>
          <span class="rev-user-role">${reviewerUser.role}</span>
        </div>
      </div>
    </aside>

    <!-- MAIN BODY -->
    <main class="rev-main">
      <!-- TOP BAR -->
      <header class="rev-topbar">
        <div class="rev-topbar-title">
          <h1>${headerInfo.title}</h1>
          <p>${headerInfo.subtitle}</p>
        </div>
        <div class="rev-topbar-actions">
          <button class="rev-icon-btn" id="rev-btn-bell" title="Notifikasi Review">
            ${revIcons.bell}
            <span class="rev-badge-dot"></span>
          </button>
          <div class="rev-top-avatar" id="rev-btn-avatar" title="${reviewerUser.name}">
            BS
          </div>
        </div>
      </header>

      <!-- QUICK SCREEN SWITCHER (allows testing & inspecting all 8 screenshot views in 1 click) -->
      <div class="rev-quick-views">
        <span style="font-size:11px; font-weight:700; color:#94a3b8; text-transform:uppercase; padding:0 8px; letter-spacing:0.05em;">Screens:</span>
        <button class="rev-quick-pill ${state.currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard">1. Dashboard Reviewer</button>
        <button class="rev-quick-pill ${state.currentView === 'assigned-papers' ? 'active' : ''}" data-view="assigned-papers">2. Assigned Papers</button>
        <button class="rev-quick-pill ${state.currentView === 'review-paper' ? 'active' : ''}" data-view="review-paper">3. Review Paper</button>
        <button class="rev-quick-pill ${state.currentView === 'hasil-review' ? 'active' : ''}" data-view="hasil-review">4. Hasil Review</button>
        <button class="rev-quick-pill ${state.currentView === 'revisi-paper' ? 'active' : ''}" data-view="revisi-paper">5. Revisi Paper</button>
        <button class="rev-quick-pill ${state.currentView === 'my-reviews' ? 'active' : ''}" data-view="my-reviews">6. My Reviews</button>
        <button class="rev-quick-pill ${state.currentView === 'final-paper' ? 'active' : ''}" data-view="final-paper">7. Final Paper</button>
        <button class="rev-quick-pill ${state.currentView === 'notifications' ? 'active' : ''}" data-view="notifications">8. Notifikasi</button>
      </div>

      <!-- CONTENT BODY -->
      <div class="rev-content-body">
        ${viewHTML}
      </div>
    </main>
  </div>

  ${renderProfileModal()}
  `

  attachReviewerListeners()
}

// ─────────────────────────────────────────
// EVENT LISTENERS FOR REVIEWER PORTAL
// ─────────────────────────────────────────
function attachReviewerListeners() {
  // Brand Logo -> Dashboard
  document.getElementById('rev-brand-logo')?.addEventListener('click', () => {
    state.currentView = 'dashboard'
    renderReviewerApp()
  })

  // Sidebar navigation
  document.getElementById('nav-rev-dashboard')?.addEventListener('click', () => {
    state.currentView = 'dashboard'
    renderReviewerApp()
  })

  document.getElementById('nav-rev-my-reviews')?.addEventListener('click', () => {
    state.currentView = 'my-reviews'
    renderReviewerApp()
  })

  document.getElementById('nav-rev-assigned')?.addEventListener('click', () => {
    state.currentView = 'assigned-papers'
    renderReviewerApp()
  })

  document.getElementById('nav-rev-notifications')?.addEventListener('click', () => {
    state.currentView = 'notifications'
    renderReviewerApp()
  })

  document.getElementById('nav-rev-profile')?.addEventListener('click', () => {
    state.profileModalOpen = true
    renderReviewerApp()
  })

  document.getElementById('rev-user-card')?.addEventListener('click', () => {
    state.profileModalOpen = true
    renderReviewerApp()
  })

  document.getElementById('rev-btn-avatar')?.addEventListener('click', () => {
    state.profileModalOpen = true
    renderReviewerApp()
  })

  document.getElementById('rev-btn-bell')?.addEventListener('click', () => {
    state.currentView = 'notifications'
    renderReviewerApp()
  })

  document.getElementById('nav-rev-logout')?.addEventListener('click', () => {
    if (confirm('Apakah Anda ingin keluar dari Portal Reviewer?')) {
      state.isLoggedIn = false
      showToast('Anda telah keluar dari Portal Reviewer.')
      renderReviewerApp()
    }
  })

  // Quick View Selector pills
  document.querySelectorAll<HTMLButtonElement>('.rev-quick-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const view = pill.dataset.view as ReviewerView
      if (view) {
        state.currentView = view
        renderReviewerApp()
      }
    })
  })

  // Dynamic view triggers (e.g. data-open-view attributes)
  document.querySelectorAll<HTMLElement>('[data-open-view]').forEach((el) => {
    el.addEventListener('click', () => {
      const targetView = el.dataset.openView as ReviewerView
      if (targetView) {
        state.currentView = targetView
        renderReviewerApp()
      }
    })
  })

  // Assigned Papers table row click
  document.querySelectorAll<HTMLElement>('.assigned-row').forEach((row) => {
    row.addEventListener('click', () => {
      const paperId = row.dataset.paperId
      if (paperId === 'PD-1042') {
        state.currentView = 'review-paper'
      } else if (paperId === 'PD-1038') {
        state.currentView = 'review-paper'
      } else if (paperId === 'PD-1031') {
        state.currentView = 'hasil-review'
      } else {
        state.currentView = 'hasil-review'
      }
      renderReviewerApp()
    })
  })

  // Notification item click
  document.querySelectorAll<HTMLElement>('[data-notif-view]').forEach((item) => {
    item.addEventListener('click', () => {
      const targetView = item.dataset.notifView as ReviewerView
      if (targetView) {
        state.currentView = targetView
        renderReviewerApp()
      }
    })
  })

  // Search & Filter Assigned Papers
  const assignedSearchInput = document.getElementById('assigned-search') as HTMLInputElement | null
  assignedSearchInput?.addEventListener('input', (e) => {
    state.assignedSearch = (e.target as HTMLInputElement).value
    renderReviewerApp()
  })

  const assignedFilterSelect = document.getElementById('assigned-filter') as HTMLSelectElement | null
  assignedFilterSelect?.addEventListener('change', (e) => {
    state.assignedFilter = (e.target as HTMLSelectElement).value
    renderReviewerApp()
  })

  // Search & Filter My Reviews
  const myReviewsSearchInput = document.getElementById('myreviews-search') as HTMLInputElement | null
  myReviewsSearchInput?.addEventListener('input', (e) => {
    state.myReviewsSearch = (e.target as HTMLInputElement).value
    renderReviewerApp()
  })

  const myReviewsFilterSelect = document.getElementById('myreviews-filter') as HTMLSelectElement | null
  myReviewsFilterSelect?.addEventListener('change', (e) => {
    state.myReviewsFilter = (e.target as HTMLSelectElement).value
    renderReviewerApp()
  })

  // Manuscript subtabs switcher
  document.querySelectorAll<HTMLButtonElement>('.rev-subtab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const sub = tab.dataset.subtab as 'abstrak' | 'manuskrip' | 'riwayat'
      if (sub) {
        state.manuscriptSubtab = sub
        renderReviewerApp()
      }
    })
  })

  // Manuscript downloads
  document.getElementById('btn-download-manuscript')?.addEventListener('click', () => {
    showToast('Mengunduh manuskrip: PD1042_AI_Deteksi_Penyakit.pdf')
  })

  document.getElementById('download-manuscript-revisi')?.addEventListener('click', () => {
    showToast('Mengunduh Manuscript revisi.pdf (2.8 MB)')
  })

  document.getElementById('download-response-reviewers')?.addEventListener('click', () => {
    showToast('Mengunduh Response to reviewers.pdf (620 KB)')
  })

  document.getElementById('btn-download-final-pdf')?.addEventListener('click', () => {
    showToast('Mengunduh ICTI2026_PD1042_Final.pdf (3.1 MB)')
  })

  document.getElementById('btn-download-final-btn')?.addEventListener('click', () => {
    showToast('Mengunduh ICTI2026_PD1042_Final.pdf (3.1 MB)')
  })

  // Review Paper Form Submission
  const formReview = document.getElementById('form-review-submit') as HTMLFormElement | null
  formReview?.addEventListener('submit', (e) => {
    e.preventDefault()
    state.formOriginalitas = (document.getElementById('input-orig') as HTMLSelectElement)?.value || '4'
    state.formMetodologi = (document.getElementById('input-metod') as HTMLSelectElement)?.value || '4'
    state.formKejelasan = (document.getElementById('input-kejelasan') as HTMLSelectElement)?.value || '3'
    state.formKomentar = (document.getElementById('input-komentar') as HTMLTextAreaElement)?.value || ''
    state.formRekomendasi = (document.getElementById('input-rekom') as HTMLSelectElement)?.value || 'Minor Revision'

    showToast('Review berhasil disimpan! Membuka ringkasan hasil review...')
    state.currentView = 'hasil-review'
    renderReviewerApp()
  })

  // Edit Review button
  document.getElementById('btn-edit-review')?.addEventListener('click', () => {
    state.currentView = 'review-paper'
    renderReviewerApp()
  })

  // Revisi Paper: Terima revisi
  document.getElementById('btn-terima-revisi')?.addEventListener('click', () => {
    const notes = (document.getElementById('input-catatan-revisi') as HTMLTextAreaElement)?.value || ''
    state.revisiCatatan = notes
    showToast('Revisi paper diterima! Status diperbarui menjadi Final Paper.')
    state.currentView = 'final-paper'
    renderReviewerApp()
  })

  // Revisi Paper: Minta revisi lanjutan
  document.getElementById('btn-minta-revisi-lanjutan')?.addEventListener('click', () => {
    const notes = (document.getElementById('input-catatan-revisi') as HTMLTextAreaElement)?.value || ''
    state.revisiCatatan = notes
    showToast('Permintaan revisi lanjutan telah dikirimkan ke Author.')
    state.currentView = 'assigned-papers'
    renderReviewerApp()
  })

  // Profile Modal Closes
  document.getElementById('profile-modal-close')?.addEventListener('click', () => {
    state.profileModalOpen = false
    renderReviewerApp()
  })

  document.getElementById('profile-modal-btn-close')?.addEventListener('click', () => {
    state.profileModalOpen = false
    renderReviewerApp()
  })

  document.getElementById('profile-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      state.profileModalOpen = false
      renderReviewerApp()
    }
  })
}

// Auto-run if container is present on page load
if (document.querySelector('#reviewer-app')) {
  renderReviewerApp('#reviewer-app')
}
