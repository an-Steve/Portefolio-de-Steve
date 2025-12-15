// Système de particules animées
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Connexions entre particules
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

// Redimensionnement canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Navigation scrollée
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animation timeline au scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Animation barres de compétences
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.skill-progress');
            const value = progress.dataset.progress;
            setTimeout(() => {
                progress.style.width = value + '%';
            }, 200);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// Animation cartes projet au survol
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02) rotateZ(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
    });
});

document.querySelectorAll('.about-wrapper').forEach(block => {
    block.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
    });
});

// Sélectionne l'image dans la zone photo
const photo = document.querySelector('.about-photo img');

if (photo) {
  photo.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)'; // zoom léger
    this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)'; // ombre plus forte
    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });

  photo.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)'; // retour normal
    this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'; // ombre normale
  });
  
}


// Effet parallaxe sur hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Form validation et animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Envoi en cours...';
    btn.style.background = 'var(--secondary)';
    
    setTimeout(() => {
        btn.textContent = 'Message envoyé ✓';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            form.reset();
            btn.textContent = 'Envoyer';
            btn.style.background = 'var(--gradient)';
        }, 2000);
    }, 1500);
});

// Effet de typing pour le titre
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// EFFET HOVER SUR LE TITRE - à ajouter après ton effet typeWriter

function addHoverEffect() {
    const heroTitle = document.querySelector('.hero h1, .hero-title, h1.text-4xl');
    
    if (!heroTitle) {
        console.log("Titre non trouvé pour hover effect");
        setTimeout(addHoverEffect, 500);
        return;
    }
    
    // Effet au survol
    heroTitle.addEventListener('mouseenter', function() {
        this.style.color = '#00ffff';
        this.style.textShadow = '0 0 15px #00ffff, 0 0 30px #00ffff';
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.3s ease';
    });
    
    // Effet quand la souris quitte
    heroTitle.addEventListener('mouseleave', function() {
        this.style.color = ''; // Retour à la couleur originale
        this.style.textShadow = '';
        this.style.transform = '';
    });
    
    console.log("✅ Effet hover ajouté au titre");
}

// Démarrer l'effet hover
setTimeout(addHoverEffect, 1000); // Attendre que la page soit chargée

// ========================================
// MODE CLAIR (ORIGINAL) / SOMBRE VERT
// ========================================

class ThemeToggle {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'blue';
    this.particlesCanvas = null;
    this.particlesCtx = null;
    this.particles = [];
    this.animationId = null;
    this.originalStyles = new Map();
    this.init();
  }

  init() {
    this.setupDarkModeStyles();
    this.createToggleButton();
    this.applyTheme(this.currentTheme);
  }

  setupDarkModeStyles() {
    const style = document.createElement('style');
    style.id = 'dark-mode-styles';
    style.textContent = `
      /* Canvas pour les particules VERTES en mode sombre */
      #particles-canvas-green {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      
      #particles-canvas-green.active {
        opacity: 1;
      }
      
      /* MODE SOMBRE VERT */
      body.dark-theme {
        background: linear-gradient(135deg, #0a0e0a 0%, #1a2e1a 50%, #0d1f0d 100%) !important;
        background-attachment: fixed !important;
      }
      
      /* Cacher les particules bleues originales en mode sombre */
      body.dark-theme #particles-js {
        display: none !important;
      }
      
      /* Header en mode sombre */
      body.dark-theme header,
      body.dark-theme nav {
        background: rgba(0, 30, 0, 0.95) !important;
        backdrop-filter: blur(10px);
        border-bottom: 2px solid rgba(0, 255, 0, 0.3) !important;
        box-shadow: 0 4px 20px rgba(0, 255, 0, 0.2) !important;
      }
      
      body.dark-theme nav a {
        color: #00ff88 !important;
        text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
        transition: all 0.3s ease;
      }
      
      body.dark-theme nav a:hover,
      body.dark-theme nav a.active {
        color: #00ff00 !important;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
      }
      
      /* Section Hero */
      body.dark-theme #home {
        background: transparent !important;
      }
      
      body.dark-theme #home h1 {
        color: #00ff00 !important;
        text-shadow: 0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.5) !important;
      }
      
      body.dark-theme #home p {
        color: #b0ffb0 !important;
        text-shadow: 0 0 10px rgba(176, 255, 176, 0.3);
      }
      
      /* Boutons */
      body.dark-theme .btn,
      body.dark-theme button:not(#theme-toggle) {
        background: linear-gradient(135deg, #003300, #006600) !important;
        border: 2px solid #00ff00 !important;
        color: #00ff00 !important;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.4) !important;
        text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
      }
      
      body.dark-theme .btn:hover,
      body.dark-theme button:not(#theme-toggle):hover {
        background: linear-gradient(135deg, #004400, #008800) !important;
        box-shadow: 0 0 30px rgba(0, 255, 0, 0.8) !important;
        transform: translateY(-3px);
      }
      
      /* Sections */
      body.dark-theme section {
        background: rgba(10, 20, 10, 0.7) !important;
        backdrop-filter: blur(10px);
      }
      
      /* Cartes */
      body.dark-theme .card,
      body.dark-theme .about-card,
      body.dark-theme .experience-card,
      body.dark-theme .project-card,
      body.dark-theme .skill-card {
        background: linear-gradient(135deg, rgba(0, 40, 0, 0.6), rgba(0, 60, 0, 0.4)) !important;
        backdrop-filter: blur(15px);
        border: 1px solid rgba(0, 255, 0, 0.3) !important;
        box-shadow: 0 8px 32px rgba(0, 255, 0, 0.15) !important;
        transition: all 0.3s ease;
      }
      
      body.dark-theme .card:hover,
      body.dark-theme .about-card:hover,
      body.dark-theme .experience-card:hover,
      body.dark-theme .project-card:hover,
      body.dark-theme .skill-card:hover {
        border-color: rgba(0, 255, 0, 0.6) !important;
        box-shadow: 0 12px 40px rgba(0, 255, 0, 0.3) !important;
        transform: translateY(-5px);
      }
      
      /* Titres */
      body.dark-theme h1,
      body.dark-theme h2,
      body.dark-theme h3,
      body.dark-theme h4 {
        color: #00ff00 !important;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.6);
      }
      
      /* Texte */
      body.dark-theme p,
      body.dark-theme li,
      body.dark-theme span {
        color: #b0ffb0 !important;
      }
      
      /* Liens */
      body.dark-theme a:not(nav a) {
        color: #00ff88 !important;
        text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
      }
      
      body.dark-theme a:not(nav a):hover {
        color: #00ff00 !important;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.6);
      }
      
      /* Formulaires */
      body.dark-theme input,
      body.dark-theme textarea,
      body.dark-theme select {
        background: rgba(0, 40, 0, 0.5) !important;
        border: 2px solid rgba(0, 255, 0, 0.3) !important;
        color: #00ff00 !important;
      }
      
      body.dark-theme input::placeholder,
      body.dark-theme textarea::placeholder {
        color: rgba(0, 255, 0, 0.5) !important;
      }
      
      body.dark-theme input:focus,
      body.dark-theme textarea:focus {
        border-color: #00ff00 !important;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.4) !important;
        outline: none;
      }
      
      /* Barres de progression */
      body.dark-theme .skill-bar {
        background: rgba(0, 40, 0, 0.5) !important;
        border: 1px solid rgba(0, 255, 0, 0.3);
      }
      
      body.dark-theme .skill-progress {
        background: linear-gradient(90deg, #003300, #00ff00) !important;
        box-shadow: 0 0 15px rgba(0, 255, 0, 0.6);
      }
      
      /* Tags */
      body.dark-theme .tag,
      body.dark-theme .tech-tag {
        background: rgba(0, 80, 0, 0.5) !important;
        border: 1px solid rgba(0, 255, 0, 0.4) !important;
        color: #00ff88 !important;
      }
      
      /* Footer */
      body.dark-theme footer {
        background: rgba(0, 20, 0, 0.95) !important;
        border-top: 2px solid rgba(0, 255, 0, 0.3) !important;
        color: #b0ffb0 !important;
      }
      
      /* Scrollbar personnalisée */
      body.dark-theme::-webkit-scrollbar {
        width: 12px;
      }
      
      body.dark-theme::-webkit-scrollbar-track {
        background: #0a0e0a;
      }
      
      body.dark-theme::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #003300, #00ff00);
        border-radius: 6px;
      }
      
      body.dark-theme::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #004400, #00ff88);
      }
      
      /* Icônes */
      body.dark-theme i,
      body.dark-theme .icon {
        color: #00ff88 !important;
        filter: drop-shadow(0 0 5px rgba(0, 255, 136, 0.5));
      }
      
      /* Images avec effet vert */
      body.dark-theme img {
        filter: brightness(0.9) contrast(1.1);
        border: 2px solid rgba(0, 255, 0, 0.2) !important;
      }
      
      body.dark-theme img:hover {
        filter: brightness(1) contrast(1.2);
        border-color: rgba(0, 255, 0, 0.5) !important;
      }
      
      /* Animation du bouton */
      #theme-toggle {
        transition: all 0.3s ease;
      }
      
      #theme-toggle:hover {
        transform: scale(1.15) rotate(15deg) !important;
      }
      
      #theme-toggle:active {
        transform: scale(0.95) !important;
      }
    `;
    
    document.head.appendChild(style);
  }

  createParticlesCanvas() {
    if (document.getElementById('particles-canvas-green')) {
      return;
    }

    this.particlesCanvas = document.createElement('canvas');
    this.particlesCanvas.id = 'particles-canvas-green';
    this.particlesCtx = this.particlesCanvas.getContext('2d');
    
    document.body.insertBefore(this.particlesCanvas, document.body.firstChild);
    
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    
    this.initParticles();
  }

  resizeCanvas() {
    if (!this.particlesCanvas) return;
    this.particlesCanvas.width = window.innerWidth;
    this.particlesCanvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.particlesCanvas.width,
        y: Math.random() * this.particlesCanvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.6 + 0.2,
        color: `rgba(0, ${Math.floor(Math.random() * 100 + 155)}, 0, `
      });
    }
  }

  animateParticles() {
    if (!this.particlesCtx || !this.particlesCanvas) return;
    
    this.particlesCtx.clearRect(0, 0, this.particlesCanvas.width, this.particlesCanvas.height);
    
    this.particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x < 0 || particle.x > this.particlesCanvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > this.particlesCanvas.height) {
        particle.speedY *= -1;
      }
      
      this.particlesCtx.beginPath();
      this.particlesCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.particlesCtx.fillStyle = particle.color + particle.opacity + ')';
      this.particlesCtx.shadowBlur = 15;
      this.particlesCtx.shadowColor = particle.color + '0.9)';
      this.particlesCtx.fill();
    });
    
    // Connexions entre particules
    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.particlesCtx.beginPath();
          this.particlesCtx.strokeStyle = `rgba(0, 255, 0, ${0.2 * (1 - distance / 120)})`;
          this.particlesCtx.lineWidth = 1;
          this.particlesCtx.moveTo(p1.x, p1.y);
          this.particlesCtx.lineTo(p2.x, p2.y);
          this.particlesCtx.stroke();
        }
      });
    });
    
    this.animationId = requestAnimationFrame(() => this.animateParticles());
  }

  createToggleButton() {
    if (document.getElementById('theme-toggle')) {
      return;
    }

    const btn = document.createElement('button');
    btn.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
    btn.id = 'theme-toggle';
    btn.setAttribute('aria-label', 'Changer de thème');
    btn.setAttribute('title', this.currentTheme === 'dark' ? 'Retour au mode original' : 'Mode Matrix 🟢');
    
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '65px',
      height: '65px',
      borderRadius: '50%',
      border: this.currentTheme === 'dark' ? '2px solid #00ff00' : '2px solid rgba(255,255,255,0.3)',
      background: this.currentTheme === 'dark' 
        ? 'linear-gradient(135deg, #003300, #00ff00)' 
        : 'linear-gradient(135deg, rgba(0,100,255,0.8), rgba(0,150,255,0.9))',
      color: '#fff',
      fontSize: '2rem',
      cursor: 'pointer',
      boxShadow: this.currentTheme === 'dark'
        ? '0 0 30px rgba(0, 255, 0, 0.7), inset 0 0 20px rgba(0, 255, 0, 0.3)'
        : '0 8px 25px rgba(0, 100, 255, 0.4)',
      zIndex: '10000',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)'
    });

    btn.addEventListener('click', () => this.toggleTheme());
    document.body.appendChild(btn);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'blue' ? 'dark' : 'blue';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.style.transform = 'rotate(360deg) scale(1.2)';
      
      setTimeout(() => {
        btn.style.transform = 'rotate(0deg) scale(1)';
        btn.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        btn.setAttribute('title', this.currentTheme === 'dark' ? 'Retour au mode original' : 'Mode Matrix 🟢');
        
        if (this.currentTheme === 'dark') {
          btn.style.background = 'linear-gradient(135deg, #003300, #00ff00)';
          btn.style.border = '2px solid #00ff00';
          btn.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.7), inset 0 0 20px rgba(0, 255, 0, 0.3)';
        } else {
          btn.style.background = 'linear-gradient(135deg, rgba(0,100,255,0.8), rgba(0,150,255,0.9))';
          btn.style.border = '2px solid rgba(255,255,255,0.3)';
          btn.style.boxShadow = '0 8px 25px rgba(0, 100, 255, 0.4)';
        }
      }, 300);
    }
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      // MODE SOMBRE VERT
      document.body.classList.add('dark-theme');
      
      // Créer et animer les particules VERTES
      this.createParticlesCanvas();
      const canvas = document.getElementById('particles-canvas-green');
      if (canvas) {
        canvas.classList.add('active');
      }
      this.animateParticles();
      
      console.log('🟢 Mode Matrix activé !');
      
    } else {
      // MODE BLEU ORIGINAL (ne rien toucher)
      document.body.classList.remove('dark-theme');
      
      // Désactiver les particules VERTES
      const canvas = document.getElementById('particles-canvas-green');
      if (canvas) {
        canvas.classList.remove('active');
      }
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
      
      console.log('🔵 Mode bleu original restauré !');
    }
  }
}


// Fonctionnalité du bouton "Plus d'informations"
document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const moreInfoSection = document.getElementById('moreInfoSection');
    
    if (moreInfoBtn && moreInfoSection) {
        moreInfoBtn.addEventListener('click', function() {
            moreInfoSection.classList.toggle('active');
            
            // Change le symbole du bouton
            if (moreInfoSection.classList.contains('active')) {
                moreInfoBtn.textContent = '−';
                moreInfoBtn.style.transform = 'rotate(180deg)';
            } else {
                moreInfoBtn.textContent = '+';
                moreInfoBtn.style.transform = 'rotate(0deg)';
            }
        });
    }
});

// ========================================
// INITIALISATION
// ========================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeToggle = new ThemeToggle();
  });
} else {
  window.themeToggle = new ThemeToggle();
}

setTimeout(() => {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    console.log('✅ Bouton créé : Mode clair 🔵 ↔️ Mode Matrix 🟢');
  } else {
    console.error('❌ Erreur de création du bouton');
    window.themeToggle = new ThemeToggle();
  }
}, 1000);

setTimeout(typeWriter, 500);