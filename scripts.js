
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

  if (lang === 'id') {
    document.getElementById('descTitle').innerText = 'Tentang 2FM';
    document.getElementById('descText').innerText = '2FM adalah token utilitas revolusioner yang dibangun di atas jaringan BNB Smart Chain. Token ini dirancang untuk mendukung platform staking terdesentralisasi dengan transparansi tinggi, kecepatan luar biasa, dan keamanan yang kuat. 2FM memberdayakan komunitas untuk memiliki kendali penuh atas aset mereka di dalam ekosistem yang terdesentralisasi.';
  } else {
    document.getElementById('descTitle').innerText = 'About 2FM';
    document.getElementById('descText').innerText = '2FM is a revolutionary utility token built on the BNB Smart Chain. It is designed to power decentralized staking platforms with high transparency, blazing speed, and strong security. 2FM empowers communities to take full control of their assets in a decentralized ecosystem.';
  }

  if (lang === 'id') {
    document.getElementById('tableHeader1').innerText = 'Fitur';
    document.getElementById('tableHeader2').innerText = 'Detail';
    document.getElementById('tableFeature1').innerText = 'Blockchain';
    document.getElementById('tableValue1').innerText = 'BNB Smart Chain';
    document.getElementById('tableFeature2').innerText = 'Tujuan';
    document.getElementById('tableValue2').innerText = 'Utilitas / Staking';
    document.getElementById('tableFeature3').innerText = 'Transparansi';
    document.getElementById('tableValue3').innerText = 'Smart Contract yang Terverifikasi';
  } else {
    document.getElementById('tableHeader1').innerText = 'Feature';
    document.getElementById('tableHeader2').innerText = 'Details';
    document.getElementById('tableFeature1').innerText = 'Blockchain';
    document.getElementById('tableValue1').innerText = 'BNB Smart Chain';
    document.getElementById('tableFeature2').innerText = 'Purpose';
    document.getElementById('tableValue2').innerText = 'Utility / Staking';
    document.getElementById('tableFeature3').innerText = 'Transparency';
    document.getElementById('tableValue3').innerText = 'Auditable Smart Contract';
  }
