/**
 * Universal Navigation for all Bhavishyam standalone pages (Mobile-Optimized & Clean)
 */
document.addEventListener('DOMContentLoaded', () => {
  // Check if top navigation bar already exists
  if (document.getElementById('bhavishyamUniversalNav')) return;

  const navContainer = document.createElement('div');
  navContainer.id = 'bhavishyamUniversalNav';
  navContainer.className = 'bhavishyam-nav-wrapper';
  
  navContainer.innerHTML = `
    <style>
      .bhavishyam-nav-wrapper {
        background: #091510;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        border-bottom: 2px solid #c59b27;
        position: sticky;
        top: 0;
        z-index: 99999;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      }
      .bhavishyam-nav-inner {
        max-width: 1280px;
        margin: 0 auto;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .bhavishyam-logo-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        color: #fff;
        flex-shrink: 0;
      }
      .bhavishyam-logo-icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #c59b27, #e8c046);
        color: #091510;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 16px;
      }
      .bhavishyam-logo-text {
        font-weight: 800;
        font-size: 13px;
        letter-spacing: 0.5px;
      }
      .bhavishyam-logo-text span {
        color: #e8c046;
        font-size: 10px;
        display: block;
        font-weight: 500;
      }
      .bhavishyam-menu-links {
        display: flex;
        align-items: center;
        gap: 6px;
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        padding: 4px 0;
        scrollbar-width: none; /* Firefox */
      }
      .bhavishyam-menu-links::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
      .bhavishyam-nav-btn {
        background: rgba(255,255,255,0.08);
        color: #d1d5db;
        border: 1px solid rgba(255,255,255,0.15);
        padding: 5px 11px;
        border-radius: 6px;
        font-size: 11.5px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .bhavishyam-nav-btn:hover, .bhavishyam-nav-btn.active {
        background: #135e43;
        color: #fff;
        border-color: #1e7d5a;
      }
      .bhavishyam-nav-btn.highlight {
        background: linear-gradient(135deg, #c59b27, #f59e0b);
        color: #091510;
        border-color: #ffd700;
        font-weight: 800;
        box-shadow: 0 2px 8px rgba(197, 155, 39, 0.4);
      }
      .bhavishyam-nav-btn.highlight:hover {
        background: #ffd700;
        color: #091510;
      }
      .bhavishyam-author-tag {
        font-size: 11px;
        color: #9ca3af;
        flex-shrink: 0;
        display: none;
      }
      @media (min-width: 1100px) {
        .bhavishyam-author-tag {
          display: block;
        }
      }
      @media (max-width: 768px) {
        .bhavishyam-nav-inner {
          padding: 6px 10px;
          flex-direction: column;
          align-items: stretch;
          gap: 6px;
        }
        .bhavishyam-logo-badge {
          justify-content: space-between;
        }
        .bhavishyam-menu-links {
          width: 100%;
        }
        .bhavishyam-nav-btn {
          font-size: 11px;
          padding: 4px 9px;
        }
      }
    </style>

    <div class="bhavishyam-nav-inner">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <a href="/" class="bhavishyam-logo-badge">
          <div class="bhavishyam-logo-icon">भ</div>
          <div class="bhavishyam-logo-text">
            BHAVISHYAM
            <span>Dr. Ashish Patni Master Strategy</span>
          </div>
        </a>
      </div>

      <!-- Quick Nav Links -->
      <div class="bhavishyam-menu-links">
        <a href="/page-one-view.html" class="bhavishyam-nav-btn highlight">🌟 THE ONE VIEW (Topper Blueprint)</a>
        <a href="/" class="bhavishyam-nav-btn">🏠 Master 360° Portal</a>
        <a href="/page-creator-analysis.html" class="bhavishyam-nav-btn">📊 Creator Analysis</a>
        <a href="/page-market-playbook.html" class="bhavishyam-nav-btn">🚀 12-Mo Playbook</a>
        <a href="/page-research-report.html" class="bhavishyam-nav-btn">🏛️ Research Report</a>
        <a href="/page-competitive-positioning.html" class="bhavishyam-nav-btn">⚔️ Positioning Matrix</a>
        <a href="/page-rd-supplement.html" class="bhavishyam-nav-btn">📈 Market R&D §13-14</a>
        <a href="/page-additional-rd.html" class="bhavishyam-nav-btn">🔬 12 R&D Modules</a>
        <a href="/page-operational-intelligence.html" class="bhavishyam-nav-btn">⚙️ Operations & Finance</a>
        <a href="/page-email-seo-team-crisis.html" class="bhavishyam-nav-btn">🛡️ Email, SEO & Crisis</a>
        <a href="/page-strategic-breakthroughs.html" class="bhavishyam-nav-btn">💡 8 Breakthroughs</a>
      </div>

      <div class="bhavishyam-author-tag">
        By <strong style="color: #fff;">Aniket Samant</strong> · <strong style="color: #e8c046;">RoasBodhi.in</strong>
      </div>
    </div>
  `;

  document.body.insertBefore(navContainer, document.body.firstChild);

  // Set active link
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.bhavishyam-nav-btn');
  links.forEach(l => {
    if (l.getAttribute('href') === currentPath) {
      l.classList.add('active');
    }
  });
});
