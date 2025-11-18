// === STICKY NAVBAR ON SCROLL ===
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// === MOBILE MENU TOGGLE ===
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// === HERO SLIDER (Right-to-Left) ===
const heroSlides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.hero-nav.prev');
const nextBtn = document.querySelector('.hero-nav.next');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i === index) {
            slide.classList.add('active');
        } else if (i < index) {
            slide.classList.add('prev');
        }
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });

    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % heroSlides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(prev);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        stopAutoSlide();
        startAutoSlide();
    });
});

startAutoSlide();

// === PRODUCTS SLIDER (Horizontal Auto-Scroll) ===
const productsSlider = document.querySelector('.products-slider');
const prevProductBtn = document.querySelector('.prev-product');
const nextProductBtn = document.querySelector('.next-product');

if (prevProductBtn && productsSlider) {
    prevProductBtn.addEventListener('click', () => {
        productsSlider.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    });
}

if (nextProductBtn && productsSlider) {
    nextProductBtn.addEventListener('click', () => {
        productsSlider.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    });
}

// Auto-scroll products on hover (optional enhancement)
let productScrollInterval;

function startProductAutoScroll() {
    productScrollInterval = setInterval(() => {
        if (productsSlider) {
            const maxScroll = productsSlider.scrollWidth - productsSlider.clientWidth;
            if (productsSlider.scrollLeft >= maxScroll) {
                productsSlider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                productsSlider.scrollBy({ left: 2, behavior: 'auto' });
            }
        }
    }, 30);
}

function stopProductAutoScroll() {
    clearInterval(productScrollInterval);
}

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        }
    });
});

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .service-card, .industry-card, .client-logo').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// === STATS COUNTER ANIMATION ===
const stats = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.about-stats');

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const target = stat.textContent;
                    const isPlus = target.includes('+');
                    const cleanNum = parseInt(target.replace(/\D/g, ''));

                    if (!isNaN(cleanNum)) {
                        let current = 0;
                        const increment = cleanNum / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= cleanNum) {
                                stat.textContent = isPlus ? cleanNum + '+' : cleanNum;
                                clearInterval(timer);
                            } else {
                                stat.textContent = Math.floor(current) + (isPlus ? '+' : '');
                            }
                        }, 30);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// === FORM VALIDATION & ENHANCEMENT ===
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields');
        }
    });

    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '';
        });
    });
}

// === PARALLAX EFFECT FOR HERO (Disabled to prevent slider transform conflicts) ===

// === PRELOAD IMAGES ===
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.loading !== 'lazy') {
            img.loading = 'eager';
        }
    });
});

// === ACCESSIBILITY ENHANCEMENTS ===
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// === PERFORMANCE OPTIMIZATION ===
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

console.log('Rubi Technologies - Website Loaded Successfully');
