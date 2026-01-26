(function () {
  const track = document.querySelector('.carousel-track');
  const viewport = document.querySelector('.carousel-viewport');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dotsContainer = document.querySelector('.carousel-dots');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if (!track || !viewport) return;

  const slides = track.querySelectorAll('img');
  const total = slides.length;
  let index = 0;

  function goTo(i) {
    index = Math.max(0, Math.min(i, total - 1));
    const offset = (-index * 100) / total;
    track.style.transform = `translateX(${offset}%)`;
    updateDots();
    updateButtons();
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function updateButtons() {
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;
  }

  function buildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  prevBtn?.addEventListener('click', () => goTo(index - 1));
  nextBtn?.addEventListener('click', () => goTo(index + 1));

  buildDots();
  updateButtons();
  goTo(0);

  /* Lightbox al hacer clic en una imagen del carrusel */
  slides.forEach((img) => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  lightbox?.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  /* Sincronizar --total con el número real de slides */
  track.style.setProperty('--total', String(total));
})();
