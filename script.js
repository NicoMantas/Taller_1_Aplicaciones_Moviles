document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close mobile menu when clicking outside
  mobileMenu.addEventListener('click', function (e) {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Close mobile menu when clicking on links
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeSearch = document.getElementById('closeSearch');

  searchBtn.addEventListener('click', function () {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeSearch.addEventListener('click', function () {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close search when clicking outside
  searchOverlay.addEventListener('click', function (e) {
    if (e.target === searchOverlay) {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Search form submission
  const searchSubmit = document.querySelector('.search-submit');
  const searchInput = document.querySelector('.search-input input');

  searchSubmit.addEventListener('click', function () {
    if (searchInput.value.trim()) {
      alert(`Searching for: ${searchInput.value}`);
      searchOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      alert(`Searching for: ${searchInput.value}`);
      searchOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Country selector modal
  const countryBtn = document.querySelector('.country-btn');
  const countryModal = document.getElementById('countryModal');
  const closeCountry = document.getElementById('closeCountry');

  countryBtn.addEventListener('click', function () {
    countryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeCountry.addEventListener('click', function () {
    countryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close country modal when clicking outside
  countryModal.addEventListener('click', function (e) {
    if (e.target === countryModal) {
      countryModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Country selection
  const countryItems = document.querySelectorAll('.country-item');
  countryItems.forEach(item => {
    item.addEventListener('click', function () {
      countryItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');

      // Update flag icon
      const selectedCountry = this.querySelector('span').textContent;
      if (selectedCountry === 'United States') {
        countryBtn.innerHTML = '<i class="fas fa-flag-usa"></i>';
      } else if (selectedCountry === 'Canada') {
        countryBtn.innerHTML = '<i class="fas fa-flag"></i>';
      } else if (selectedCountry === 'Mexico') {
        countryBtn.innerHTML = '<i class="fas fa-flag"></i>';
      } else if (selectedCountry === 'United Kingdom') {
        countryBtn.innerHTML = '<i class="fas fa-flag"></i>';
      }

      setTimeout(() => {
        countryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }, 500);
    });
  });

  // Cart functionality
  const cartIcon = document.querySelector('.cart-icon');
  const cartCount = document.querySelector('.cart-count');
  const mobileCartCount = document.querySelector('.mobile-cart-count');

  cartIcon.addEventListener('click', function (e) {
    e.preventDefault();
    let count = parseInt(cartCount.textContent);
    count++;
    cartCount.textContent = count;
    mobileCartCount.textContent = count;
  });

  // Wishlist functionality
  const heartIcon = document.querySelector('.heart-icon');

  heartIcon.addEventListener('click', function (e) {
    e.preventDefault();
    if (heartIcon.querySelector('i').classList.contains('far')) {
      heartIcon.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      heartIcon.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
});