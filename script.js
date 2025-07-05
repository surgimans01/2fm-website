document.getElementById('theme-toggle').onclick = () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
};

document.getElementById('language-toggle').onchange = function() {
  const lang = this.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
};

// Dummy BscScan stats
document.getElementById('bsc-stats').innerHTML = `
  <p><strong>Holders:</strong> 1,024</p>
  <p><strong>Total Transfers:</strong> 12,540</p>
  <p><strong>Current Supply:</strong> 1,000,000</p>
`;

// Dummy chart data
const ctx = document.getElementById('priceChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: '2FM Price (USD)',
      data: [0.012, 0.015, 0.014, 0.016, 0.018],
      borderColor: '#58a6ff',
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: false }
    }
  }
});