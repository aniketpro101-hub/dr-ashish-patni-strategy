/**
 * Master Application Controller for Dr. Ashish Patni (Bhavishyam) Strategy Portal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Initialize Navigation Tabs & Mobile Drawer
  initTabs();
  initMobileDrawer();

  // 3. Initialize Interactive Components
  initSearchAndFilters();
  initCopyButtons();
  initModals();

  // 4. Initialize Charts & Calculator after DOM paint
  setTimeout(() => {
    if (window.BhavishyamCharts) {
      BhavishyamCharts.initAllCharts();
    }
    if (window.BhavishyamCalculator) {
      BhavishyamCalculator.init();
    }
    if (window.lucide) {
      lucide.createIcons();
    }
  }, 100);
});

// Tab Switcher
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.tab-btn[data-tab="${targetId}"]`).forEach(b => b.classList.add('active'));

      // Update pane visibility
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.remove('hidden');
          pane.classList.add('block');
        } else {
          pane.classList.add('hidden');
          pane.classList.remove('block');
        }
      });

      // Close mobile drawer if open
      const drawer = document.getElementById('mobileDrawer');
      if (drawer) {
        drawer.classList.remove('open');
      }

      // Re-trigger chart resize
      window.dispatchEvent(new Event('resize'));

      // Re-render icons in new view
      if (window.lucide) {
        lucide.createIcons();
      }

      // Smooth scroll to top of content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Mobile Drawer
function initMobileDrawer() {
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (openBtn && drawer) {
    openBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      if (overlay) overlay.classList.remove('hidden');
    });
  }

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.add('hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
}

// Search and Filter Handlers
function initSearchAndFilters() {
  // 1. Calendar Search & Pillar Filter
  const calSearch = document.getElementById('calSearchInput');
  const calFilter = document.getElementById('calPillarFilter');
  if (calSearch || calFilter) {
    const filterCal = () => {
      const query = (calSearch?.value || '').toLowerCase();
      const pillar = calFilter?.value || 'ALL';
      const rows = document.querySelectorAll('.calendar-row');

      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        const rowPillar = row.getAttribute('data-pillar') || '';
        const matchesQuery = text.includes(query);
        const matchesPillar = pillar === 'ALL' || rowPillar.includes(pillar);

        row.style.display = (matchesQuery && matchesPillar) ? '' : 'none';
      });
    };

    if (calSearch) calSearch.addEventListener('input', filterCal);
    if (calFilter) calFilter.addEventListener('change', filterCal);
  }

  // 2. Influencer Lane Filter
  const inflFilter = document.getElementById('influencerLaneFilter');
  if (inflFilter) {
    inflFilter.addEventListener('change', () => {
      const lane = inflFilter.value;
      const cards = document.querySelectorAll('.influencer-card');

      cards.forEach(card => {
        const cardLane = card.getAttribute('data-lane') || '';
        card.style.display = (lane === 'ALL' || cardLane === lane) ? '' : 'none';
      });
    });
  }

  // 3. Hook Search
  const hookSearch = document.getElementById('hookSearchInput');
  if (hookSearch) {
    hookSearch.addEventListener('input', () => {
      const q = hookSearch.value.toLowerCase();
      const hooks = document.querySelectorAll('.hook-item');
      hooks.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
}

// Copy to Clipboard with Toast
function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.btn-copy');
    if (!copyBtn) return;

    const targetText = copyBtn.getAttribute('data-copy') || '';
    if (!targetText) return;

    navigator.clipboard.writeText(targetText).then(() => {
      showToast('Copied to clipboard successfully! (क्लिपबोर्ड पर कॉपी हो गया)');
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'fixed bottom-6 right-6 bg-[#091510] text-[#e8c046] px-5 py-3.5 rounded-xl shadow-2xl z-50 text-xs font-bold flex items-center gap-3 border border-[#c59b27] transition-all duration-300 transform translate-y-12 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 text-[#e8c046]"></i> <span>${message}</span>`;
  if (window.lucide) lucide.createIcons();

  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 2500);
}

// Deep-Dive Modal Handlers
function initModals() {
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };
}

// Programmatic tab switch
window.goToTab = function(tabId) {
  const targetBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (targetBtn) {
    targetBtn.click();
  }
};
