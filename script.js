const track = document.querySelector('.gallery-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
 
next.addEventListener('click', () => {
  track.scrollLeft += 200;
});
 
prev.addEventListener('click', () => {
  track.scrollLeft -= 200;
});
const images = document.querySelectorAll('.gallery-track img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
 
images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});
 
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});