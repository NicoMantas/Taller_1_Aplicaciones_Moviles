document.addEventListener('DOMContentLoaded', function () {
  // ===== FUNCIONES GENERALES =====

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Close mobile menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Close mobile menu when clicking on links
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeSearch = document.getElementById('closeSearch');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', function () {
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeSearch && searchOverlay) {
    closeSearch.addEventListener('click', function () {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Close search when clicking outside
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Search form submission
  const searchSubmit = document.querySelector('.search-submit');
  const searchInput = document.querySelector('.search-input input');

  if (searchSubmit && searchInput && searchOverlay) {
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
  }

  // Country selector modal
  const countryBtn = document.querySelector('.country-btn');
  const countryModal = document.getElementById('countryModal');
  const closeCountry = document.getElementById('closeCountry');

  if (countryBtn && countryModal) {
    countryBtn.addEventListener('click', function () {
      countryModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeCountry && countryModal) {
    closeCountry.addEventListener('click', function () {
      countryModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Close country modal when clicking outside
  if (countryModal) {
    countryModal.addEventListener('click', function (e) {
      if (e.target === countryModal) {
        countryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Country selection
  const countryItems = document.querySelectorAll('.country-item');
  if (countryItems.length > 0 && countryBtn) {
    countryItems.forEach(item => {
      item.addEventListener('click', function () {
        // Remove active class from all items
        countryItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        this.classList.add('active');

        // Get the country name
        const selectedCountry = this.querySelector('span').textContent;

        // Get flag element from the clicked item
        const flagElement = this.querySelector('img, i');

        // Clear the button content
        countryBtn.innerHTML = '';

        // Create new flag element based on what's in the modal
        if (flagElement) {
          if (flagElement.tagName === 'IMG') {
            const imgSrc = flagElement.getAttribute('src');
            const imgAlt = flagElement.getAttribute('alt') || selectedCountry;
            const newFlag = document.createElement('img');
            newFlag.src = imgSrc;
            newFlag.alt = imgAlt;
            newFlag.className = 'flag-icon';
            newFlag.style.width = '24px';
            newFlag.style.height = '16px';
            countryBtn.appendChild(newFlag);
          } else if (flagElement.tagName === 'I' && !flagElement.classList.contains('fa-check')) {
            const iconClass = flagElement.className;
            const newIcon = document.createElement('i');
            newIcon.className = iconClass;
            newIcon.style.fontSize = '18px';
            newIcon.style.color = '#333';
            countryBtn.appendChild(newIcon);
          }
        }

        // Close modal after delay
        setTimeout(() => {
          if (countryModal) {
            countryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        }, 300);
      });
    });
  }

  // ===== FUNCIONALIDAD DE CARRITO Y FAVORITOS =====

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
    cartIcon.addEventListener('click', function (e) {
      e.preventDefault();
      updateCartCount();
    });
  }

  if (addToCartBtn && cartCount && mobileCartCount) {
    addToCartBtn.addEventListener('click', function () {
      updateCartCount();
    });
  }

  // Wishlist functionality
  const heartIcon = document.querySelector('.heart-icon');
  const heartIconPrize = document.querySelector('.heart-icon-prize');

  if (heartIcon) {
    heartIcon.addEventListener('click', function (e) {
      e.preventDefault();
      const icon = this.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#E60012';
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
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

  // ===== SELECCIÓN DE VERSIÓN =====

  const versionOptions = document.querySelectorAll('.version-option');
  if (versionOptions.length > 0) {
    versionOptions.forEach(option => {
      option.addEventListener('click', function () {
        // Remove active class from all options
        versionOptions.forEach(opt => opt.classList.remove('active'));
        // Add active class to clicked option
        this.classList.add('active');

        // Update radio button
        const radioInput = this.querySelector('input[type="radio"]');
        if (radioInput) {
          radioInput.checked = true;
        }
      });
    });
  }

  // ===== CARRUSEL DE IMÁGENES DEL JUEGO =====

  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const carouselPrev = document.querySelector('.carousel-prev');
  const carouselNext = document.querySelector('.carousel-next');
  const currentSlideElement = document.getElementById('currentSlide');
  const totalSlidesElement = document.getElementById('totalSlides');

  if (carouselSlides.length > 0) {
    let currentSlide = 0;
    const totalSlides = carouselSlides.length;

    // Inicializar
    if (totalSlidesElement) {
      totalSlidesElement.textContent = totalSlides;
    }

    const updateCarousel = () => {
      // Ocultar todos los slides
      carouselSlides.forEach(slide => {
        slide.classList.remove('active');
      });

      // Mostrar slide actual
      carouselSlides[currentSlide].classList.add('active');

      // Actualizar thumbnails
      thumbnails.forEach((thumb, index) => {
        if (index === currentSlide) {
          thumb.classList.add('active');
        } else {
          thumb.classList.remove('active');
        }
      });

      // Actualizar contador
      if (currentSlideElement) {
        currentSlideElement.textContent = currentSlide + 1;
      }
    };

    // Navegación con botones
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

    // Navegación con thumbnails
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });

    // Inicializar carrusel
    updateCarousel();
  }

  // ===== CARRUSEL DE JUEGOS RECOMENDADOS =====

  const games = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      price: "$59.99",
      platform: "Nintendo Switch",
      image: "img/Leyenda_Zelda.avif"
    },
    {
      id: 2,
      title: "Super Mario Odyssey",
      price: "$59.99",
      platform: "Nintendo Switch",
      image: "img/Super_Mario_Odyssey.avif"
    },
    {
      id: 3,
      title: "Animal Crossing: New Horizons",
      price: "$59.99",
      platform: "Nintendo Switch",
      image: "img/Animal_Crossing.avif"
    },
    {
      id: 4,
      title: "Mario Kart 8 Deluxe",
      price: "$59.99",
      platform: "Nintendo Switch",
      image: "img/Mario_Kart_8_Deluxe.avif"
    },
    {
      id: 5,
      title: "Pokémon Scarlet",
      price: "$59.99",
      platform: "Nintendo Switch",
      image: "img/pokemon_scarlet.avif"
    }
  ];

  const carouselTrack = document.querySelector('.carousel-track');
  const carouselDots = document.querySelector('.carousel-dots');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (carouselTrack && carouselDots) {
    let currentIndex = 0;
    let itemsPerView = 4;

    // Calcular items por vista según el ancho de pantalla
    const updateItemsPerView = () => {
      if (window.innerWidth <= 768) {
        itemsPerView = window.innerWidth <= 480 ? 1 : 2;
      } else if (window.innerWidth <= 1100) {
        itemsPerView = 3;
      } else {
        itemsPerView = 4;
      }
    };

    // Inicializar el carrusel
    const initCarousel = () => {
      updateItemsPerView();

      // Limpiar el carrusel
      carouselTrack.innerHTML = '';
      carouselDots.innerHTML = '';

      // Crear elementos del carrusel
      games.forEach((game, index) => {
        // Crear elemento del juego
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

        // Agregar evento click a cada juego
        gameElement.addEventListener('click', function () {
          alert(`You clicked on: ${game.title}`);
        });

        carouselTrack.appendChild(gameElement);

        // Crear puntos de navegación
        if (index % itemsPerView === 0) {
          const dot = document.createElement('button');
          dot.className = 'carousel-dot';
          if (carouselDots.children.length === 0) {
            dot.classList.add('active');
          }
          dot.addEventListener('click', () => {
            goToSlide(carouselDots.children.length - 1);
          });
          carouselDots.appendChild(dot);
        }
      });

      updateCarousel();

      // Agregar eventos a los botones
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          const maxIndex = Math.ceil(games.length / itemsPerView) - 1;
          if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
          }
        });
      }
    };

    // Actualizar la posición del carrusel
    const updateCarousel = () => {
      const itemWidth = 100 / itemsPerView;
      const translateX = -(currentIndex * itemWidth);
      carouselTrack.style.transform = `translateX(${translateX}%)`;

      // Actualizar puntos activos
      const dots = document.querySelectorAll('.carousel-dot');
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    // Navegar a un slide específico
    const goToSlide = (slideIndex) => {
      currentIndex = slideIndex;
      updateCarousel();
    };

    // Inicializar el carrusel
    initCarousel();

    // Actualizar en cambio de tamaño de ventana
    window.addEventListener('resize', () => {
      updateItemsPerView();
      initCarousel();
    });
  }
});

// ===== BARRA STICKY PARA COMPRA RÁPIDA =====

const stickyBar = document.getElementById('stickyPurchaseBar');
const stickySpacer = document.getElementById('stickySpacer');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const purchaseSection = document.querySelector('.purchase-section');
const navbar = document.querySelector('.header');

if (stickyBar && addToCartBtn && purchaseSection && navbar && stickySpacer) {
  // Calcular el punto de activación (más simple)
  const calculateActivationPoint = () => {
    const purchaseSectionRect = purchaseSection.getBoundingClientRect();
    const scrollY = window.scrollY;

    // Distancia desde el top de la página hasta el purchaseSection
    const purchaseSectionTop = scrollY + purchaseSectionRect.top;

    // Altura del purchaseSection
    const purchaseSectionHeight = purchaseSectionRect.height;

    // Activar cuando el usuario haya pasado el 80% del purchaseSection
    return purchaseSectionTop + (purchaseSectionHeight * 0.8);
  };

  let activationPoint = calculateActivationPoint();

  // Función para verificar si se debe mostrar la barra sticky
  const checkStickyBar = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > activationPoint) {
      stickyBar.classList.add('active');
      stickySpacer.classList.add('active');

      // Agregar padding al body para que el contenido no quede oculto
      document.body.style.paddingTop = stickyBar.offsetHeight + 'px';
    } else {
      stickyBar.classList.remove('active');
      stickySpacer.classList.remove('active');

      // Quitar el padding cuando no hay barra sticky
      document.body.style.paddingTop = '0';
    }
  };

  // Evento de scroll
  window.addEventListener('scroll', checkStickyBar);

  // Recalcular en resize
  window.addEventListener('resize', () => {
    activationPoint = calculateActivationPoint();
    checkStickyBar();
  });

  // Botón de compra en la barra sticky
  const stickyAddToCartBtn = stickyBar.querySelector('.sticky-add-to-cart-btn');
  if (stickyAddToCartBtn) {
    stickyAddToCartBtn.addEventListener('click', function () {
      if (cartCount && mobileCartCount) {
        updateCartCount();
      }
    });
  }

  // Actualizar información si cambia la versión seleccionada
  const versionOptions = document.querySelectorAll('.version-option');

  if (versionOptions.length > 0) {
    versionOptions.forEach(option => {
      option.addEventListener('click', function () {
        const platformBadge = stickyBar.querySelector('.sticky-platform-badge');
        const versionName = this.querySelector('.version-name').textContent;

        if (platformBadge) {
          platformBadge.textContent = versionName;
        }
      });
    });
  }

  // Inicializar verificación
  checkStickyBar();
}

// ===== READ MORE / READ LESS FUNCTIONALITY =====
const readMoreBtn = document.getElementById('readMoreBtn');
const multiplayerText = document.getElementById('multiplayerText');

if (readMoreBtn && multiplayerText) {
  readMoreBtn.addEventListener('click', function () {
    // Toggle the expanded class
    multiplayerText.classList.toggle('expanded');
    this.classList.toggle('expanded');

    // Optional: Smooth scroll to keep button in view
    if (multiplayerText.classList.contains('expanded')) {
      multiplayerText.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  });
}