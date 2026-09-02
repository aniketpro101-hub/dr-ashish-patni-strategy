/**
 * Interactive Financial & ROI Simulator for Dr. Ashish Patni
 */

window.BhavishyamCalculator = {
  init: function() {
    this.bindEvents();
    this.recalculate();
  },

  bindEvents: function() {
    const inputs = document.querySelectorAll('.calc-input');
    inputs.forEach(input => {
      input.addEventListener('input', () => this.recalculate());
      input.addEventListener('change', () => this.recalculate());
    });
  },

  recalculate: function() {
    // 1. Get input values
    const keynotesCount = parseInt(document.getElementById('calcKeynotesCount')?.value || 35);
    const keynotesAvgFee = parseFloat(document.getElementById('calcKeynotesAvgFee')?.value || 3.0); // Lakhs

    const soilMonthlyUnits = parseInt(document.getElementById('calcSoilMonthlyUnits')?.value || 60);
    const soilAvgPrice = parseInt(document.getElementById('calcSoilAvgPrice')?.value || 11999); // INR

    const cxoClients = parseInt(document.getElementById('calcCxoClients')?.value || 8);
    const cxoRetainerFee = parseFloat(document.getElementById('calcCxoRetainerFee')?.value || 3.5); // Lakhs

    const vastuProjects = parseInt(document.getElementById('calcVastuProjects')?.value || 6);
    const vastuAvgFee = parseFloat(document.getElementById('calcVastuAvgFee')?.value || 3.0); // Lakhs

    const standardConsults = parseInt(document.getElementById('calcStandardConsults')?.value || 300);
    const consultAvgFee = parseInt(document.getElementById('calcConsultAvgFee')?.value || 9000); // INR

    const opexTier = document.getElementById('calcOpexTier')?.value || 'standard';

    // 2. Update display labels for range sliders
    if (document.getElementById('valKeynotesCount')) document.getElementById('valKeynotesCount').innerText = keynotesCount;
    if (document.getElementById('valKeynotesAvgFee')) document.getElementById('valKeynotesAvgFee').innerText = '₹' + keynotesAvgFee.toFixed(1) + ' Lakhs';
    if (document.getElementById('valSoilMonthlyUnits')) document.getElementById('valSoilMonthlyUnits').innerText = soilMonthlyUnits + ' kits/mo (' + (soilMonthlyUnits * 12) + '/yr)';
    if (document.getElementById('valSoilAvgPrice')) document.getElementById('valSoilAvgPrice').innerText = '₹' + soilAvgPrice.toLocaleString('en-IN');
    if (document.getElementById('valCxoClients')) document.getElementById('valCxoClients').innerText = cxoClients + ' Clients';
    if (document.getElementById('valCxoRetainerFee')) document.getElementById('valCxoRetainerFee').innerText = '₹' + cxoRetainerFee.toFixed(1) + ' Lakhs';
    if (document.getElementById('valVastuProjects')) document.getElementById('valVastuProjects').innerText = vastuProjects + ' Audits';
    if (document.getElementById('valVastuAvgFee')) document.getElementById('valVastuAvgFee').innerText = '₹' + vastuAvgFee.toFixed(1) + ' Lakhs';
    if (document.getElementById('valStandardConsults')) document.getElementById('valStandardConsults').innerText = standardConsults + ' Clients';
    if (document.getElementById('valConsultAvgFee')) document.getElementById('valConsultAvgFee').innerText = '₹' + consultAvgFee.toLocaleString('en-IN');

    // 3. Compute revenue streams in Lakhs
    const keynoteRevenue = keynotesCount * keynotesAvgFee; // Lakhs
    const soilAnnualUnits = soilMonthlyUnits * 12;
    const soilRevenue = (soilAnnualUnits * soilAvgPrice) / 100000; // Lakhs
    const cxoRevenue = cxoClients * cxoRetainerFee; // Lakhs
    const vastuRevenue = vastuProjects * vastuAvgFee; // Lakhs
    const consultRevenue = (standardConsults * consultAvgFee) / 100000; // Lakhs
    const mediaRevenue = 5.0; // Fixed baseline 5L

    const totalRevenue = keynoteRevenue + soilRevenue + cxoRevenue + vastuRevenue + consultRevenue + mediaRevenue;

    // 4. Compute COGS
    const soilCOGS = (soilAnnualUnits * (soilAvgPrice * 0.25)) / 100000; // 25% COGS for herbs, silver, box, courier
    const eventCOGS = keynotesCount * 0.65; // Approx 65K travel/production per keynote
    const totalCOGS = soilCOGS + eventCOGS;
    const grossProfit = totalRevenue - totalCOGS;
    const grossMargin = (grossProfit / totalRevenue) * 100;

    // 5. Compute OpEx based on Tier
    let totalOpEx = 56.5; // Standard Tier
    if (opexTier === 'lean') totalOpEx = 12.0;
    if (opexTier === 'aggressive') totalOpEx = 105.0;

    const netProfit = grossProfit - totalOpEx;
    const netMargin = (netProfit / totalRevenue) * 100;
    const roiMultiplier = (totalRevenue - 75.0) / totalOpEx; // Incremental revenue over baseline 75L divided by OpEx

    // 6. Update UI
    if (document.getElementById('calcOutRevenue')) {
      document.getElementById('calcOutRevenue').innerText = '₹' + (totalRevenue / 100).toFixed(2) + ' Cr';
      document.getElementById('calcOutRevenueLakhs').innerText = '₹' + totalRevenue.toFixed(1) + ' Lakhs';
    }
    if (document.getElementById('calcOutGrossProfit')) {
      document.getElementById('calcOutGrossProfit').innerText = '₹' + grossProfit.toFixed(1) + ' Lakhs (' + grossMargin.toFixed(1) + '%)';
    }
    if (document.getElementById('calcOutOpEx')) {
      document.getElementById('calcOutOpEx').innerText = '₹' + totalOpEx.toFixed(1) + ' Lakhs';
    }
    if (document.getElementById('calcOutNetProfit')) {
      document.getElementById('calcOutNetProfit').innerText = '₹' + (netProfit / 100).toFixed(2) + ' Cr';
      document.getElementById('calcOutNetProfitLakhs').innerText = '₹' + netProfit.toFixed(1) + ' Lakhs (' + netMargin.toFixed(1) + '% Net Margin)';
    }
    if (document.getElementById('calcOutROI')) {
      document.getElementById('calcOutROI').innerText = (roiMultiplier > 0 ? roiMultiplier.toFixed(1) + '×' : '1.2×') + ' Digital ROI';
    }

    // Dynamic Scenario Badge
    const badge = document.getElementById('calcScenarioBadge');
    if (badge) {
      if (totalRevenue < 120) {
        badge.innerText = 'Conservative Floor Model';
        badge.className = 'px-3 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-800 border border-amber-300';
      } else if (totalRevenue >= 120 && totalRevenue < 250) {
        badge.innerText = 'Target Base Plan (Achievable)';
        badge.className = 'px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300';
      } else {
        badge.innerText = 'High-Velocity Scaling Model';
        badge.className = 'px-3 py-1 text-xs font-bold rounded-full bg-purple-100 text-purple-800 border border-purple-300';
      }
    }
  }
};
