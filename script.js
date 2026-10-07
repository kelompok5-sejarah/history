// 1. EFEK FLIP CARD (DEKRIT PRESIDEN)
function toggleFlip(cardElement) {
  cardElement.classList.toggle('flipped');
}

// 2. EFEK TAB INTERAKTIF (PETA KEKUATAN POLITIK)
function openTab(event, tabId) {
  // Sembunyikan semua konten tab
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active-content');
  });

  // Hapus class 'active' dari semua tombol tab
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Tampilkan tab yang dipilih & set tombol menjadi active
  document.getElementById(tabId).classList.add('active-content');
  event.currentTarget.classList.add('active');
}

// 3. EFEK ACCORDION (CIRI & PENYIMPANGAN)
function toggleAccordion(buttonElement) {
  const accordionItem = buttonElement.parentElement;
  
  // Tutup item accordion lain yang sedang terbuka
  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach(item => {
    if (item !== accordionItem) {
      item.classList.remove('active');
    }
  });

  // Toggle status item yang diklik
  accordionItem.classList.toggle('active');
}

// 4. ANIMASI SCROLL HALUS SAAT NAVBAR DIKLIK
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});