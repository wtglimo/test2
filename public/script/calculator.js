function toggleRateType() {
    const rateType = document.getElementById('rate-type').value;
    const hoursGroup = document.getElementById('hours-group');
    const byobHoursGroup = document.getElementById('byob-hours-group');
    const includeAlcohol = document.getElementById('include-alcohol').checked;

    if (rateType === 'fixed') {
        hoursGroup.style.display = 'none';
        byobHoursGroup.style.display = includeAlcohol ? 'block' : 'none';
    } else {
        hoursGroup.style.display = 'block';
        byobHoursGroup.style.display = 'none';
    }
}

function toggleBYOB() {
    const includeAlcohol = document.getElementById('include-alcohol').checked;
    const rateType = document.getElementById('rate-type').value;
    const byobHoursGroup = document.getElementById('byob-hours-group');

    if (includeAlcohol && rateType === 'fixed') {
        byobHoursGroup.style.display = 'block';
    } else {
        byobHoursGroup.style.display = 'none';
    }
}


function calculateCustomTotal() {
    const rateType = document.getElementById('rate-type').value;
    const baseRate = parseFloat(document.getElementById('custom-base-rate').value) || 0;
    const hours = rateType === 'hourly' ? (parseFloat(document.getElementById('custom-hours').value) || 0) : 0;
    const gasFee = parseFloat(document.getElementById('custom-gas-fee').value) || 0;

    const stc = 0.10; // 10%
    const gratuity = 0.15; // 15%

    const baseTotal = rateType === 'hourly' ? baseRate * hours : baseRate;
    const stcAmount = baseTotal * stc;
    const gratuityAmount = baseTotal * gratuity;
    const totalCost = baseTotal + stcAmount + gratuityAmount + gasFee;

    document.getElementById('custom-total-cost').value = totalCost.toFixed(2);
}
