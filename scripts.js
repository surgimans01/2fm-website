
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
function changeLanguage(lang) {
  if (lang === 'id') {
    document.getElementById('title').innerText = 'Token 2FM';
    document.getElementById('subtitle').innerText = 'Mengubah ekonomi staking terdesentralisasi';
    document.getElementById('tokenomicsTitle').innerText = 'Distribusi Token';
  } else {
    document.getElementById('title').innerText = '2FM Token';
    document.getElementById('subtitle').innerText = 'Reshaping decentralized staking economy';
    document.getElementById('tokenomicsTitle').innerText = 'Token Supply & Tokenomics';
  }
}
