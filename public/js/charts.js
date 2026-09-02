/**
 * Master Chart.js Visualizations for Dr. Ashish Patni Strategy Portal
 */

window.BhavishyamCharts = {
  instances: {},

  initAllCharts: function() {
    this.renderMacroMarketChart();
    this.renderCompetitorScoreChart();
    this.renderCompetitorRadarChart();
    this.renderRevenuePie();
    this.renderQuarterlyCashFlow();
    this.renderAudienceGrowth();
    this.renderEngagementRateChart();
    this.renderSeoKeywordChart();
    this.renderFunnelConversionChart();
  },

  // 1. Macro Industry Growth (CAGR Comparisons)
  renderMacroMarketChart: function() {
    const ctx = document.getElementById('macroGrowthChart');
    if (!ctx) return;
    if (this.instances.macroGrowth) this.instances.macroGrowth.destroy();

    this.instances.macroGrowth = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['India Astro App', 'India Podcasting', 'Creator Economy', 'Global Ayurveda', 'India MICE (Meetings)', 'India Ayurveda', 'India MICE Tourism', 'Religious Tourism', 'Spiritual Products'],
        datasets: [{
          label: 'Compound Annual Growth Rate (CAGR %)',
          data: [49.19, 28.00, 22.40, 19.72, 18.00, 15.52, 11.92, 8.50, 8.30],
          backgroundColor: [
            '#c59b27', // Gold
            '#135e43', // Emerald
            '#24509e', // Royal Blue
            '#8e2a6d', // Magenta
            '#1e7d5a', // Light Emerald
            '#e8c046', // Yellow Gold
            '#3a6b5c', // Sea Green
            '#52665d', // Slate
            '#b45309'  // Amber
          ],
          borderColor: '#091510',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` CAGR: ${ctx.parsed.y}% Annual Growth`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'CAGR % (2025–2034)', font: { size: 12, weight: 'bold' } },
            grid: { color: '#e5ebe7' }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 11, weight: '600' } }
          }
        }
      }
    });
  },

  // 2. Competitor Composite Bar
  renderCompetitorScoreChart: function() {
    const ctx = document.getElementById('competitorScoreChart');
    if (!ctx) return;
    if (this.instances.competitorScore) this.instances.competitorScore.destroy();

    this.instances.competitorScore = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Dr. Jai Madaan', 'Dr. Ashish Patni (Bhavishyam)', 'Preetika Rao', 'Bhoomika Kalam', 'Askin Astrology', 'Acharya Vinod Kumar', 'Master Aditya Varma'],
        datasets: [{
          label: 'Total Brand Composite Score (Out of 50)',
          data: [42.5, 40.5, 34.5, 33.5, 33.0, 33.0, 22.5],
          backgroundColor: [
            'rgba(19, 94, 67, 0.85)',
            'rgba(197, 155, 39, 0.95)', // Standout Gold for Patni
            'rgba(36, 80, 158, 0.75)',
            'rgba(142, 42, 109, 0.75)',
            'rgba(30, 125, 90, 0.75)',
            'rgba(82, 102, 93, 0.75)',
            'rgba(185, 28, 28, 0.65)'
          ],
          borderColor: ['#091510', '#a5802c', '#1e3a8a', '#701a75', '#135e43', '#334155', '#991b1b'],
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: (ctx) => ctx.dataIndex === 1 ? ' ★ Leads in 6 of 10 Dimensions: Offline, Credentials, Product, Trust, Moat, PR.' : ''
            }
          }
        },
        scales: {
          x: {
            min: 0,
            max: 50,
            title: { display: true, text: 'Composite Score (Max 50)', font: { size: 12, weight: 'bold' } },
            grid: { color: '#e5ebe7' }
          },
          y: {
            grid: { display: false },
            ticks: { font: { size: 12, weight: 'bold' } }
          }
        }
      }
    });
  },

  // 3. Multi-Axis Competitor Radar Chart
  renderCompetitorRadarChart: function() {
    const ctx = document.getElementById('competitorRadarChart');
    if (!ctx) return;
    if (this.instances.competitorRadar) this.instances.competitorRadar.destroy();

    this.instances.competitorRadar = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Digital Reach', 'Offline Events', 'Credentials', 'Product Depth', 'Content Consistency', 'Audience Trust', 'Geography', 'Monetization', 'Moat / Uniqueness', 'Media / PR'],
        datasets: [
          {
            label: 'Dr. Ashish Patni (Bhavishyam)',
            data: [1.0, 5.0, 5.0, 5.0, 1.5, 4.5, 4.0, 4.5, 5.0, 5.0],
            backgroundColor: 'rgba(197, 155, 39, 0.25)',
            borderColor: '#c59b27',
            borderWidth: 3,
            pointBackgroundColor: '#c59b27',
            pointRadius: 4
          },
          {
            label: 'Dr. Jai Madaan (Market #1)',
            data: [5.0, 3.5, 4.0, 4.0, 4.0, 4.0, 4.5, 5.0, 4.0, 4.5],
            backgroundColor: 'rgba(19, 94, 67, 0.15)',
            borderColor: '#135e43',
            borderWidth: 2,
            pointBackgroundColor: '#135e43',
            pointRadius: 3
          },
          {
            label: 'Askin Astrology (Remedy Machine)',
            data: [4.5, 2.0, 2.5, 3.5, 5.0, 3.5, 4.0, 3.5, 2.5, 2.0],
            backgroundColor: 'rgba(36, 80, 158, 0.10)',
            borderColor: '#24509e',
            borderWidth: 1.5,
            pointBackgroundColor: '#24509e',
            pointRadius: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 5,
            ticks: { stepSize: 1, display: false },
            pointLabels: { font: { size: 11, weight: 'bold' } },
            grid: { color: '#dce5df' }
          }
        },
        plugins: {
          legend: { position: 'top', labels: { font: { size: 11, weight: 'bold' } } }
        }
      }
    });
  },

  // 4. Revenue Breakdown Doughnut
  renderRevenuePie: function() {
    const ctx = document.getElementById('revenuePieChart');
    if (!ctx) return;
    if (this.instances.revenuePie) this.instances.revenuePie.destroy();

    this.instances.revenuePie = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'E.Y.E. Keynotes (Tour + Digital) - ₹107L (51%)',
          'SOIL D2C Storefront - ₹27L (13%)',
          'Kundali, Vastu & Mantra - ₹28L (13%)',
          'CXO Mentoring Retainers - ₹26L (12%)',
          'Corporate/Industrial Vastu - ₹17L (8%)',
          'Media & TV Honoraria - ₹5L (3%)'
        ],
        datasets: [{
          data: [107, 27, 28, 26, 17, 5],
          backgroundColor: ['#135e43', '#c59b27', '#24509e', '#8e2a6d', '#1e7d5a', '#e8c046'],
          borderWidth: 3,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { font: { size: 12, weight: '600' }, boxWidth: 14 }
          }
        },
        cutout: '62%'
      }
    });
  },

  // 5. Quarterly Cash Flow Bar
  renderQuarterlyCashFlow: function() {
    const ctx = document.getElementById('quarterlyCashFlowChart');
    if (!ctx) return;
    if (this.instances.cashFlow) this.instances.cashFlow.destroy();

    this.instances.cashFlow = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Q1 (Jan–Mar)', 'Q2 (Apr–Jun)', 'Q3 (Jul–Sep)', 'Q4 (Oct–Dec)'],
        datasets: [
          {
            label: 'Revenue (₹ Lakhs)',
            data: [27.5, 41.0, 60.5, 81.0],
            backgroundColor: 'rgba(19, 94, 67, 0.85)',
            borderColor: '#091510',
            borderWidth: 1.5,
            borderRadius: 6
          },
          {
            label: 'OpEx & COGS (₹ Lakhs)',
            data: [10.5, 18.6, 26.6, 33.9],
            backgroundColor: 'rgba(217, 119, 36, 0.75)',
            borderColor: '#b45309',
            borderWidth: 1.5,
            borderRadius: 6
          },
          {
            label: 'Net Profit (₹ Lakhs)',
            data: [17.0, 22.4, 33.9, 47.1],
            backgroundColor: 'rgba(197, 155, 39, 0.95)',
            borderColor: '#a5802c',
            borderWidth: 1.5,
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { size: 11, weight: 'bold' } } }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: '₹ in Lakhs', font: { size: 12, weight: 'bold' } },
            grid: { color: '#e5ebe7' }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 11, weight: 'bold' } }
          }
        }
      }
    });
  },

  // 6. Audience Growth Line Chart
  renderAudienceGrowth: function() {
    const ctx = document.getElementById('audienceGrowthChart');
    if (!ctx) return;
    if (this.instances.audienceGrowth) this.instances.audienceGrowth.destroy();

    this.instances.audienceGrowth = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mo 1', 'Mo 2 (Budget)', 'Mo 3', 'Mo 4', 'Mo 6', 'Mo 8 (Diwali)', 'Mo 10', 'Mo 12'],
        datasets: [
          {
            label: 'Instagram Followers (Target: 100K)',
            data: [7.5, 18.0, 30.0, 40.0, 50.0, 68.0, 85.0, 100.0],
            borderColor: '#8e2a6d',
            backgroundColor: 'rgba(142, 42, 109, 0.15)',
            borderWidth: 3,
            fill: true,
            tension: 0.35,
            pointRadius: 5
          },
          {
            label: 'YouTube Subscribers (Target: 50K)',
            data: [1.2, 5.0, 10.0, 15.0, 20.0, 28.0, 38.0, 50.0],
            borderColor: '#b3352c',
            backgroundColor: 'rgba(179, 53, 44, 0.15)',
            borderWidth: 3,
            fill: true,
            tension: 0.35,
            pointRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { size: 11, weight: 'bold' } } }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Audience (in Thousands)', font: { size: 12, weight: 'bold' } },
            grid: { color: '#e5ebe7' }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 11, weight: '600' } }
          }
        }
      }
    });
  },

  // 7. Engagement Rate Comparison Bar
  renderEngagementRateChart: function() {
    const ctx = document.getElementById('erVsReachChart');
    if (!ctx) return;
    if (this.instances.erChart) this.instances.erChart.destroy();

    this.instances.erChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Preetika Rao', 'Bhavishyam (Target)', 'Dr. Jai Madaan', 'Askin Astrology', 'Acharya Vinod', 'Aditya Varma (Flagged)'],
        datasets: [{
          label: 'Verified Engagement Rate (%)',
          data: [2.00, 1.85, 1.42, 1.25, 0.91, 0.18],
          backgroundColor: [
            '#24509e',
            '#c59b27', // Patni Target
            '#135e43',
            '#1e7d5a',
            '#52665d',
            '#dc2626'
          ],
          borderColor: '#091510',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Engagement Rate: ${ctx.parsed.y}%`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Engagement Rate %', font: { size: 12, weight: 'bold' } },
            grid: { color: '#e5ebe7' }
          },
          x: { grid: { display: false } }
        }
      }
    });
  },

  // 8. SEO Keyword Search Volume vs Difficulty
  renderSeoKeywordChart: function() {
    const ctx = document.getElementById('seoKeywordChart');
    if (!ctx) return;
    if (this.instances.seoChart) this.instances.seoChart.destroy();

    this.instances.seoChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Kundali Matching', 'Rahu Kaal Today', 'Budget Astrology', 'Vastu for Office', 'Signature Analysis', 'Vastu for Factory', 'Spiritual Oil', 'Cosmic Finance'],
        datasets: [{
          label: 'Monthly Search Volume (India)',
          data: [200000, 150000, 50000, 18000, 5000, 3000, 2000, 500],
          backgroundColor: [
            '#52665d',
            '#52665d',
            '#c59b27', // High Opportunity Budget
            '#135e43', // High Opportunity Vastu Office
            '#24509e', // High Opportunity Signature
            '#1e7d5a', // High Opportunity Factory Vastu
            '#c59b27', // Ownable Spiritual Oil
            '#135e43'  // Owned Brand Term
          ],
          borderColor: '#091510',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Search Volume: ${ctx.parsed.y.toLocaleString('en-IN')} searches/mo`
            }
          }
        },
        scales: {
          y: {
            type: 'logarithmic',
            title: { display: true, text: 'Monthly Volume (Log Scale)', font: { size: 11, weight: 'bold' } },
            grid: { color: '#e5ebe7' }
          },
          x: { grid: { display: false } }
        }
      }
    });
  },

  // 9. Marketing & WhatsApp Funnel Flow
  renderFunnelConversionChart: function() {
    const ctx = document.getElementById('funnelConversionChart');
    if (!ctx) return;
    if (this.instances.funnelChart) this.instances.funnelChart.destroy();

    this.instances.funnelChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1. Video Impressions (Mo 12)', '2. High-Intent Engagements', '3. WhatsApp Inbound Leads', '4. Paid Consult / SOIL Orders', '5. High-Ticket Retainers / Keynotes'],
        datasets: [{
          label: 'Monthly Volume',
          data: [1500000, 75000, 3000, 360, 14],
          backgroundColor: ['#135e43', '#1e7d5a', '#c59b27', '#e8c046', '#8e2a6d'],
          borderColor: '#091510',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Volume: ${ctx.parsed.x.toLocaleString('en-IN')} units/mo`
            }
          }
        },
        scales: {
          x: {
            type: 'logarithmic',
            title: { display: true, text: 'Monthly Units (Log Scale)', font: { size: 11, weight: 'bold' } },
            grid: { color: '#e5ebe7' }
          },
          y: { grid: { display: false } }
        }
      }
    });
  }
};
