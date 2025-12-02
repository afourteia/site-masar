/**
 * Toyota distributorship Static Website - Main JavaScript
 * Version 1.0
 */

// ============================================
// Utility Functions
// ============================================

/**
 * Get current language from URL path
 */
function getCurrentLang() {
  const path = window.location.pathname;
  if (path.includes('/ar/')) return 'ar';
  return 'en';
}

/**
 * Get current page from URL path
 */
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('services')) return 'services';
  if (path.includes('about')) return 'about';
  if (path.includes('contact')) return 'contact';
  return 'home';
}

/**
 * Get localized text from data object
 */
function getLocalizedText(obj, key, lang) {
  return obj[`${key}_${lang}`] || obj[key] || '';
}

// ============================================
// SEO Injection
// ============================================

/**
 * Inject SEO meta tags into page head
 */
function injectSEO() {
  const lang = getCurrentLang();
  const page = getCurrentPage();

  if (typeof SEOConfig === 'undefined') return;

  const seo = SEOConfig[lang]?.[page];
  if (!seo) return;

  // Update title
  document.title = seo.title;

  // Update or create meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', seo.description);

  // Update or create meta keywords
  if (seo.keywords && seo.keywords.length > 0) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords.join(', '));
  }

  // Update OG tags
  updateMetaProperty('og:title', seo.title);
  updateMetaProperty('og:description', seo.description);
  updateMetaProperty('og:image', SEOConfig.baseUrl + seo.ogImage);
  updateMetaProperty('og:url', window.location.href);
  updateMetaProperty('og:type', 'website');

  // Update Twitter Card tags
  updateMetaProperty('twitter:card', 'summary_large_image');
  updateMetaProperty('twitter:title', seo.title);
  updateMetaProperty('twitter:description', seo.description);
  updateMetaProperty('twitter:image', SEOConfig.baseUrl + seo.ogImage);
}

function updateMetaProperty(property, content) {
  let meta =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(
      property.startsWith('og:') ? 'property' : 'name',
      property
    );
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

// ============================================
// Navbar
// ============================================

/**
 * Initialize navbar functionality
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  // Sticky navbar on scroll
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Hamburger menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // Highlight current page link
  const currentPage = getCurrentPage();
  document.querySelectorAll('.navbar__link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (
      currentPage === 'home' &&
      (href.endsWith('/') || href.includes('index'))
    ) {
      link.classList.add('active');
    } else if (href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

// ============================================
// Carousel
// ============================================

/**
 * Initialize hero carousel
 */
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slidesContainer = carousel.querySelector('.carousel__slides');
  const slides = carousel.querySelectorAll('.carousel__slide');
  const prevBtn = carousel.querySelector('.carousel__nav--prev');
  const nextBtn = carousel.querySelector('.carousel__nav--next');
  const dotsContainer = carousel.querySelector('.carousel__dots');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoplayInterval;
  const autoplayDelay = 5000; // 5 seconds

  // Create dots
  if (dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel__dot');
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  const dots = dotsContainer?.querySelectorAll('.carousel__dot') || [];

  function goToSlide(index) {
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });

    // Reset autoplay
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  carousel.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - prev slide
        prevSlide();
      }
    }
  }

  // Pause autoplay on hover
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });

  carousel.addEventListener('mouseleave', () => {
    startAutoplay();
  });

  // Start autoplay
  startAutoplay();
}

// ============================================
// Analytics & Tracking (Optional)
// ============================================

/**
 * Track contact link clicks
 */
function initAnalytics() {
  // Track phone clicks
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => {
      console.log('[Analytics] Phone click:', link.href);
      // Add analytics call here if needed
    });
  });

  // Track email clicks
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener('click', () => {
      console.log('[Analytics] Email click:', link.href);
      // Add analytics call here if needed
    });
  });

  // Track map link clicks
  document.querySelectorAll('a[href*="maps.google"]').forEach((link) => {
    link.addEventListener('click', () => {
      console.log('[Analytics] Map click:', link.href);
      // Add analytics call here if needed
    });
  });

  // Track language switch
  document.querySelectorAll('.lang-switch').forEach((link) => {
    link.addEventListener('click', () => {
      console.log('[Analytics] Language switch clicked');
      // Add analytics call here if needed
    });
  });
}

// ============================================
// Error Monitoring
// ============================================

/**
 * Basic error logging
 */
function initErrorMonitoring() {
  window.addEventListener('error', (event) => {
    console.error('[Error]', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });
}

// ============================================
// Smooth Scroll
// ============================================

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// ============================================
// Lazy Loading Images
// ============================================

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach((img) => {
      img.src = img.dataset.src;
    });
  }
}

// ============================================
// Initialization
// ============================================

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inject SEO meta tags
  injectSEO();

  // Initialize components
  initNavbar();
  initCarousel();
  initSmoothScroll();
  initLazyLoading();
  initAnalytics();
  initErrorMonitoring();

  console.log('[Toyota Masar] Website initialized');
});
