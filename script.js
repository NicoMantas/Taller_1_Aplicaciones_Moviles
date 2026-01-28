document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Search
  const searchBtn = document.querySelector('.search-btn');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeSearch = document.getElementById('closeSearch');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeSearch && searchOverlay) {
    closeSearch.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  const searchSubmit = document.querySelector('.search-submit');
  const searchInput = document.querySelector('.search-input input');

  if (searchSubmit && searchInput && searchOverlay) {
    const performSearch = () => {
      if (searchInput.value.trim()) {
        alert(`Searching for: ${searchInput.value}`);
        searchOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    };

    searchSubmit.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }

  // Country selector
  const countryBtn = document.querySelector('.country-btn');
  const countryModal = document.getElementById('countryModal');
  const closeCountry = document.getElementById('closeCountry');

  if (countryBtn && countryModal) {
    countryBtn.addEventListener('click', () => {
      countryModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeCountry && countryModal) {
    closeCountry.addEventListener('click', () => {
      countryModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (countryModal) {
    countryModal.addEventListener('click', (e) => {
      if (e.target === countryModal) {
        countryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  const countryItems = document.querySelectorAll('.country-item');
  if (countryItems.length > 0 && countryBtn) {
    countryItems.forEach(item => {
      item.addEventListener('click', function () {
        countryItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        const flagElement = this.querySelector('img');
        if (flagElement) {
          countryBtn.innerHTML = '';
          const newFlag = document.createElement('img');
          newFlag.src = flagElement.getAttribute('src');
          newFlag.alt = flagElement.getAttribute('alt');
          newFlag.className = 'flag-icon';
          newFlag.style.width = '24px';
          newFlag.style.height = '16px';
          countryBtn.appendChild(newFlag);
        }

        setTimeout(() => {
          if (countryModal) {
            countryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        }, 300);
      });
    });
  }

  // Cart functionality
  const cartIcon = document.querySelector('.cart-icon');
  const cartCount = document.querySelector('.cart-count');
  const mobileCartCount = document.querySelector('.mobile-cart-count');
  const addToCartBtn = document.querySelector('.add-to-cart-btn');

  const updateCartCount = () => {
    let count = parseInt(cartCount.textContent) || 0;
    count++;
    cartCount.textContent = count;
    mobileCartCount.textContent = count;
    alert('Stardew Valley has been added to your cart!');
  };

  if (cartIcon && cartCount && mobileCartCount) {
    cartIcon.addEventListener('click', (e) => {
      e.preventDefault();
      updateCartCount();
    });
  }

  if (addToCartBtn && cartCount && mobileCartCount) {
    addToCartBtn.addEventListener('click', updateCartCount);
  }

  // Wishlist
  const heartIcon = document.querySelector('.heart-icon');
  const heartIconPrize = document.querySelector('.heart-icon-prize');

  if (heartIcon) {
    heartIcon.addEventListener('click', function (e) {
      e.preventDefault();
      const icon = this.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.replace('far', 'fas');
        icon.style.color = '#E60012';
      } else {
        icon.classList.replace('fas', 'far');
        icon.style.color = '#333';
      }
    });
  }

  if (heartIconPrize) {
    heartIconPrize.addEventListener('click', function (e) {
      e.preventDefault();
      const icon = this.querySelector('i');
      icon.classList.toggle('far');
      icon.classList.toggle('fas');
      this.classList.toggle('active');
    });
  }

  // Version selection
  const versionOptions = document.querySelectorAll('.version-option');
  if (versionOptions.length > 0) {
    versionOptions.forEach(option => {
      option.addEventListener('click', function () {
        versionOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        const radioInput = this.querySelector('input[type="radio"]');
        if (radioInput) radioInput.checked = true;
      });
    });
  }

  // Game images carousel
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const carouselPrev = document.querySelector('.carousel-prev');
  const carouselNext = document.querySelector('.carousel-next');
  const currentSlideElement = document.getElementById('currentSlide');
  const totalSlidesElement = document.getElementById('totalSlides');

  if (carouselSlides.length > 0) {
    let currentSlide = 0;
    const totalSlides = carouselSlides.length;

    if (totalSlidesElement) {
      totalSlidesElement.textContent = totalSlides;
    }

    const updateCarousel = () => {
      carouselSlides.forEach(slide => slide.classList.remove('active'));
      carouselSlides[currentSlide].classList.add('active');

      thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentSlide);
      });

      if (currentSlideElement) {
        currentSlideElement.textContent = currentSlide + 1;
      }
    };

    if (carouselPrev) {
      carouselPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
      });
    }

    if (carouselNext) {
      carouselNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      });
    }

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });

    updateCarousel();
  }

  // Games carousel
  const games = [
    { title: "The Legend of Zelda: Breath of the Wild", price: "$59.99", platform: "Nintendo Switch", image: "img/Leyenda_Zelda.avif" },
    { title: "Super Mario Odyssey", price: "$59.99", platform: "Nintendo Switch", image: "img/Super_Mario_Odyssey.avif" },
    { title: "Animal Crossing: New Horizons", price: "$59.99", platform: "Nintendo Switch", image: "img/Animal_Crossing.avif" },
    { title: "Mario Kart 8 Deluxe", price: "$59.99", platform: "Nintendo Switch", image: "img/Mario_Kart_8_Deluxe.avif" },
    { title: "Pokémon Scarlet", price: "$59.99", platform: "Nintendo Switch", image: "img/pokemon_scarlet.avif" }
  ];

  const carouselTrack = document.querySelector('.carousel-track');
  const carouselDots = document.querySelector('.carousel-dots');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (carouselTrack && carouselDots) {
    let currentIndex = 0;
    let itemsPerView = 4;

    const updateItemsPerView = () => {
      if (window.innerWidth <= 768) {
        itemsPerView = window.innerWidth <= 480 ? 1 : 2;
      } else if (window.innerWidth <= 1100) {
        itemsPerView = 3;
      } else {
        itemsPerView = 4;
      }
    };

    const updateCarouselPos = () => {
      const itemWidth = 100 / itemsPerView;
      carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}%)`;

      document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };

    const initCarousel = () => {
      updateItemsPerView();
      carouselTrack.innerHTML = '';
      carouselDots.innerHTML = '';

      games.forEach((game, index) => {
        const gameElement = document.createElement('div');
        gameElement.className = 'carousel-item';
        gameElement.setAttribute('data-index', index);

        gameElement.innerHTML = `
          <img src="${game.image}" alt="${game.title}">
          <div class="carousel-item-content">
            <h3 class="carousel-item-title">${game.title}</h3>
            <div class="carousel-item-price">${game.price}</div>
            <div class="carousel-item-platform">
              <i class="fas fa-gamepad"></i>
              <span>${game.platform}</span>
            </div>
          </div>
        `;

        gameElement.addEventListener('click', () => {
          alert(`You clicked on: ${game.title}`);
        });

        carouselTrack.appendChild(gameElement);

        if (index % itemsPerView === 0) {
          const dot = document.createElement('button');
          dot.className = 'carousel-dot';
          if (carouselDots.children.length === 0) dot.classList.add('active');
          dot.addEventListener('click', () => {
            currentIndex = carouselDots.children.length - 1;
            updateCarouselPos();
          });
          carouselDots.appendChild(dot);
        }
      });

      updateCarouselPos();
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarouselPos();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxIndex = Math.ceil(games.length / itemsPerView) - 1;
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateCarouselPos();
        }
      });
    }

    initCarousel();
    window.addEventListener('resize', initCarousel);
  }

  // Sticky purchase bar
  const stickyBar = document.getElementById('stickyPurchaseBar');
  const stickySpacer = document.getElementById('stickySpacer');
  const purchaseSection = document.querySelector('.purchase-section');

  if (stickyBar && purchaseSection && stickySpacer) {
    const calculateActivationPoint = () => {
      const rect = purchaseSection.getBoundingClientRect();
      return window.scrollY + rect.top + (rect.height * 0.8);
    };

    let activationPoint = calculateActivationPoint();

    const checkStickyBar = () => {
      const isActive = window.scrollY > activationPoint;
      stickyBar.classList.toggle('active', isActive);
      stickySpacer.classList.toggle('active', isActive);
      document.body.style.paddingTop = isActive ? `${stickyBar.offsetHeight}px` : '0';
    };

    window.addEventListener('scroll', checkStickyBar);
    window.addEventListener('resize', () => {
      activationPoint = calculateActivationPoint();
      checkStickyBar();
    });

    const stickyAddToCartBtn = stickyBar.querySelector('.sticky-add-to-cart-btn');
    if (stickyAddToCartBtn && cartCount && mobileCartCount) {
      stickyAddToCartBtn.addEventListener('click', updateCartCount);
    }

    checkStickyBar();
  }

  // Read more/less functionality
  const readMoreBtn = document.getElementById('readMoreBtn');
  const multiplayerText = document.getElementById('multiplayerText');

  if (readMoreBtn && multiplayerText) {
    readMoreBtn.addEventListener('click', function () {
      multiplayerText.classList.toggle('expanded');
      this.classList.toggle('expanded');

      if (multiplayerText.classList.contains('expanded')) {
        multiplayerText.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
});