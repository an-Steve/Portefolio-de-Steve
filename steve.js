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

// EFFET HOVER SUR LE PARAGRAPHE - GLOW
function addParagraphHoverEffect() {
    const heroParagraph = document.querySelector('.hero p');
    
    if (!heroParagraph) {
        setTimeout(addParagraphHoverEffect, 500);
        return;
    }
    
    heroParagraph.addEventListener('mouseenter', function() {
        this.style.color = '#0ea5e9';
        this.style.textShadow = '0 0 10px #0ea5e9, 0 0 20px #0ea5e9';
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.3s ease';
        this.style.letterSpacing = '1px';
    });
    
    heroParagraph.addEventListener('mouseleave', function() {
        this.style.color = '';
        this.style.textShadow = '';
        this.style.transform = '';
        this.style.letterSpacing = '';
    });
}

setTimeout(addParagraphHoverEffect, 1000);

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

document.getElementById("linkedin-btn").addEventListener("click", () => {
    window.open(
        "https://www.linkedin.com/in/ansteve",
        "_blank"
    );
});

//chatbox  avec avatar
// Récupération des éléments
const chatboxToggle = document.getElementById('chatboxToggle');
const chatboxClose = document.getElementById('chatboxClose');
const chatbox = document.getElementById('chatbox');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const chatboxMessages = document.getElementById('chatboxMessages');
const chatboxHeader = document.querySelector('.chatbox-header');

// Variables pour le déplacement
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Ouvrir/Fermer la chatbox
chatboxToggle.addEventListener('click', () => {
    chatbox.classList.toggle('hidden');
});

chatboxClose.addEventListener('click', () => {
    chatbox.classList.add('hidden');
});

// Fonctions de déplacement
function dragStart(e) {
    if (e.target === chatboxHeader || e.target.closest('.chatbox-header')) {
        // Ignorer si c'est le bouton de fermeture
        if (e.target === chatboxClose || e.target.closest('.close-button')) {
            return;
        }
        
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        isDragging = true;
        chatboxHeader.style.cursor = 'grabbing';
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, chatbox);
    }
}

function dragEnd(e) {
    if (isDragging) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        chatboxHeader.style.cursor = 'grab';
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

// Événements de déplacement
chatboxHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

// Support tactile (mobile)
chatboxHeader.addEventListener('touchstart', dragStart);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', dragEnd);

// Indicateur visuel que le header est déplaçable
chatboxHeader.style.cursor = 'grab';

// Fonction pour ajouter un message
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? '👤' : '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatboxMessages.appendChild(messageDiv);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

// Envoyer un message
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        // Simuler une réponse du bot
        setTimeout(() => {
            addMessage('Merci pour votre message ! Un agent va vous répondre bientôt.');
        }, 1000);
    }
}

// Événements d'envoi
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});




// Boutons flottants GitHub et Email
const githubBtn = document.createElement("a");
githubBtn.id = "github-btn";
githubBtn.href = "https://github.com/an-steve";
githubBtn.target = "_blank";
githubBtn.setAttribute("aria-label", "GitHub");

githubBtn.innerHTML = '<i class="fab fa-github"></i>';

document.body.appendChild(githubBtn);

const mailBtn = document.createElement("a");
mailBtn.id = "mail-btn";
mailBtn.href = "mailto:antonsteve05@gmail.com";
mailBtn.setAttribute("aria-label", "Email");

mailBtn.innerHTML = '<i class="fas fa-envelope"></i>';

document.body.appendChild(mailBtn);

// Bouton rond avec changement de drapeau
const langBtn = document.getElementById('languageToggle');
const flagIcon = document.querySelector('.flag-icon');
let isFrench = true;

if (langBtn) {
    langBtn.addEventListener('click', function() {
        // Animation de changement
        this.classList.add('changing');
        
        // Changer le drapeau
        if (isFrench) {
            flagIcon.textContent = '🇬🇧'; // Drapeau anglais
            this.setAttribute('aria-label', 'Switch to French');
        } else {
            flagIcon.textContent = '🇫🇷'; // Drapeau français
            this.setAttribute('aria-label', 'Switch to English');
        }
        
        // Inverser l'état
        isFrench = !isFrench;
        
        // Retirer la classe d'animation
        setTimeout(() => {
            this.classList.remove('changing');
        }, 600);
    });
}

// ========================================
// SYSTÈME DE CHANGEMENT DE LANGUE
// ========================================

// Objet contenant toutes les traductions
const translations = {
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-formations': 'Formations',
        'nav-experience': 'Expériences',
        'nav-projects': 'Projets',
        'nav-skills': 'Compétences',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Steve ANTON NELCON',
        'hero-subtitle': 'Étudiant en Big Data & IA',
        'btn-projects': 'Voir mes projets',
        'btn-contact': 'Me contacter',
        'btn-cv': 'Télécharger mon CV',
        
        // Sections
        'section-about': 'À propos',
        'section-formations': 'Formations Scolaires',
        'section-experience': 'Expériences Professionnelles',
        'section-projects': 'Projets Académiques',
        'section-skills': 'Compétences',
        'section-contact': 'Contact',
        
        // About
        'about-location': '<i class="fas fa-map-marker-alt"></i> Localisation',
        'about-location-value': 'Paris, Île-de-France',
        'about-email': '<i class="fas fa-envelope"></i> Email',
        'about-phone': '<i class="fas fa-phone"></i> Téléphone',
        'about-formation': '<i class="fas fa-graduation-cap"></i> Formation',
        'about-formation-value': 'Master Informatique et Big Data',
        'about-github': '🔗 Github',
        'about-linkedin': '🔗 LinkedIn',
        'about-more-info': '📋 Informations supplémentaires',
        'about-interests': ' Centres d\'intérêt ',
        'about-interests-value': 'Bénévolat',
        'about-languages': ' Langues ',
        'about-languages-value': 'Français  Anglais  Espagnol  Tamoul',
        'about-qualities': ' Qualités ',
        'about-qualities-value': 'Ponctuel, Travail en équipe, Motivé',
        'about-certifications': ' Certifications ',
        'about-certifications-value': 'CACES, PIX, TOEIC, KET',
        
        // Formations
        'formation-dnb': 'Diplôme National du Brevet',
        'formation-dnb-school': 'Collège Paul Langevin - Drancy (93) ',
        'formation-bac': 'Baccalauréat STI2D',
        'formation-bac-school': 'Lycée Paul LeRolland - Drancy (93)',
        'formation-bts': 'BTS Systèmes Numériques',
        'formation-bts-school': 'Lycée Paul Eluard - Saint Denis',
        'formation-licence': 'Licence Informatique des systèmes embarqués et interactif',
        'formation-licence-school': 'Université Paris 8',
        'formation-master': 'Master Informatique et Big Data',
        'formation-master-school': 'Université Paris 8',
        
        // Expériences
        'exp-subtitle-stages': 'Stages Académiques',
        'exp-subtitle-pro': 'Parcours professionnel',
        'exp-subtitle-benevole': 'Bénévolat',
        
        // Stage TiqTec
        'exp-tiqtec-badge': 'Stage académique Licence 3',
        'exp-tiqtec-title': 'Développeur Web & Application',
        'exp-tiqtec-date': '12 mai au 04 juillet 2025',
        'exp-tiqtec-company': 'TiqTec',
        'exp-tiqtec-location': 'La Courneuve',
        'exp-tiqtec-task1': 'Développement site web WordPress avec Laragon',
        'exp-tiqtec-task2': 'Application Android en Kotlin',
        'exp-tiqtec-task3': 'Tests et gestion base de données MySQL',
        'exp-tiqtec-report-text': 'Voir le rapport de projet',
        'exp-streamvision-report-text': 'Voir le rapport de projet',

        // Stage StreamVision
        'exp-stream-badge': 'Stage académique BTS',
        'exp-stream-title': 'Développeur Informatique',
        'exp-stream-date': '29 mai au 04 juillet 2023',
        'exp-stream-company': 'StreamVision',
        'exp-stream-location': 'Paris',
        'exp-stream-task1': 'Affichage dynamique pour hôtel JO 2024',
        'exp-stream-task2': 'Interface interactive (HTML, CSS, JavaScript)',
        'exp-stream-task3': 'Compte à rebours animé en JavaScript',
        
        // Stage 3ème
        'exp-3eme-badge': 'Stage académique 3ème',
        'exp-3eme-title': 'Stage d\'observations de 3ème',
        'exp-3eme-date': '29 mai au 04 juillet 2023',
        'exp-3eme-company': 'Ecole Maternelle Paul Langevin',
        'exp-3eme-location': 'Drancy',
        
        // Carrefour
        'exp-carrefour-badge': 'Intérim',
        'exp-carrefour-title': 'Préparateur de Commandes',
        'exp-carrefour-date': 'juillet 2022 - Actuel',
        'exp-carrefour-company': 'Carrefour Supply Chain',
        'exp-carrefour-location': 'La Courneuve',
        'exp-carrefour-task1': 'Préparation commandes magasins',
        'exp-carrefour-task2': 'Construction palettes selon normes',
        'exp-carrefour-task3': 'CACES obtenu juillet 2022',
        'project-ml-video': '▶ Regarder la vidéo',
        
        // Diocèse
        'exp-diocese-badge': 'Bénévolat',
        'exp-diocese-title': 'Animateur',
        'exp-diocese-date': 'Septembre 2024 - Actuel',
        'exp-diocese-company': 'Diocèse de Saint Denis',
        'exp-diocese-location': 'Saint Denis',
        'exp-diocese-task1': 'Animation et encadrement d\'activités pour enfants',
        'exp-diocese-task2': 'Organisation d\'événements',
        
        // Projets
        'project-ml-badge': 'Machine Learning',
        'project-ml-title': 'Prédiction des taux de natalité mondiaux par Machine Learning',
        'project-ml-desc1': '→ Collecte et prétraitement des données (fertility_rate, 187 pays, 1960–2020).',
        'project-ml-desc2': '→ Implémentation et comparaison de modèles de régression (Random Forest).',
        'project-ml-desc3': '→ Validation croisée et évaluation des performances (R², RMSE, MAE).',
        'project-ml-desc4': '→ Segmentation des pays par profils démographiques via clustering (K-Means)',
        'project-ml-desc5': '→ Génération de prédictions pour la décennie 2021–2030',
        'project-ml-link': 'Accéder au Github',
        
        'project-dl-badge': 'Deep Learning',
        'project-dl-title': 'Reconnaissance d\'émotions faciales par Deep Learning',
        'project-dl-desc1': '→ Conception et entraînement d\'un modèle CNN (Convolutional Neural Network)',
        'project-dl-desc2': '→ Réalisation de prédictions sur des émotions telles que joie, colère, tristesse etc',
        'project-dl-desc3': '→ Visualisation des prédictions et vérités dans une grille',
        'project-dl-desc4': '→ Analyse des erreurs du modèle',
        'project-dl-link': 'Accéder au Github',
        
        'project-game-badge': 'Jeux Python',
        'project-game-title': 'Jeu d\'arcade en 2D/3D',
        'project-game-desc1': '→ Jeu Mario avec obstacles à éviter, pièces à ramasser, et carapaces à lancer',
        'project-game-desc2': '→ Fonctions : mouvements, collisions, audio, double langue, mode clair/sombre',
        'project-game-link': 'Accéder au Github',
        'jeupython-report-text': 'Voir le rapport de projet',
        
        'project-web-badge': 'Site Web',
        'project-web-title': 'Site Web E-Commerce',
        'project-web-desc': '→ Site web informatif pour commerce en ligne avec interface moderne et responsive.',
        'project-web-link': 'Accéder au Github',
        
        'project-android-badge': 'Application Android',
        'project-android-title': 'Application Android de réservation de vol d\'avion',
        'project-android-desc': '→ Recherche de vols par destination, date et compagnie aérienne.',
        'project-android-link': 'Accéder au Github',
        
        'github-btn': 'Accéder à mon GitHub',
        
        // Skills
        'skill-web': 'Développement Web',
        'skill-app': 'Développement d\'application',
        'skill-ai': 'Intelligence Artificielle',
        'skill-db': 'Bases de Données',
        'skill-network': 'Réseaux et Routage',
        'skill-system': 'Programmation Système',
        'skill-hardware': 'Matériels',
        'skill-cms': 'CMS',
        'skill-os': 'Système d\'exploitation',
        'skill-ide': 'IDE',
        
        // Contact
        'contact-name': 'Nom',
        'contact-name-placeholder': 'Votre nom',
        'contact-email': 'Email',
        'contact-email-placeholder': 'votre@email.com',
        'contact-subject': 'Sujet',
        'contact-subject-placeholder': 'Sujet du message',
        'contact-message': 'Message',
        'contact-message-placeholder': 'Votre message...',
        'contact-send': 'Envoyer',
        'contact-form-btn': 'Ouvrir le formulaire',
        'contact-info-email': 'Email',
        'contact-info-phone': 'Téléphone',
        'contact-info-location': 'Localisation',
        'contact-info-linkedin': 'LinkedIn',
        
        // Footer
        'footer-text': '© 2026 Steve ANTON NELCON.',
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-formations': 'Education',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Steve ANTON NELCON',
        'hero-subtitle': 'Big Data & AI Student',
        'btn-projects': 'View my projects',
        'btn-contact': 'Contact me',
        'btn-cv': 'Download my CV',
        
        // Sections
        'section-about': 'About',
        'section-formations': 'Education',
        'section-experience': 'Professional Experience',
        'section-projects': 'Academic Projects',
        'section-skills': 'Skills',
        'section-contact': 'Contact',
        
        // About
        'about-location': '<i class="fas fa-map-marker-alt"></i> Location',
        'about-location-value': 'Paris, Île-de-France',
        'about-email': '<i class="fas fa-envelope"></i> Email',
        'about-phone': '<i class="fas fa-phone"></i>Phone',
        'about-formation': '<i class="fas fa-graduation-cap"></i>Formation',
        'about-formation-value': 'Master in Computer Science and Big Data',
        'about-github': '🔗 Github',
        'about-linkedin': '🔗 LinkedIn',
        'about-more-info': '📋 Additional Information',
        'about-interests': ' Interests',
        'about-interests-value': 'Volunteering',
        'about-languages': ' Languages',
        'about-languages-value': 'French  English  Spanish  Tamil',
        'about-qualities': ' Qualities',
        'about-qualities-value': 'Punctual, Teamwork, Motivated',
        'about-certifications': ' Certifications',
        'about-certifications-value': 'CACES, PIX, TOEIC, KET',
        
        // Formations
        'formation-dnb': 'National Diploma of the Brevet',
        'formation-dnb-school': 'Paul Langevin Middle School -Drancy',
        'formation-bac': 'STI2D Baccalaureate',
        'formation-bac-school': 'Paul LeRolland High School - Drancy',
        'formation-bts': 'Digital Systems BTS',
        'formation-bts-school': 'Paul Eluard High School - Saint Denis',
        'formation-licence': 'Bachelor in Embedded and Interactive Systems',
        'formation-licence-school': 'Paris 8 University',
        'formation-master': 'Master in Computer Science and Big Data',
        'formation-master-school': 'Paris 8 University',
        
        // Expériences
        'exp-subtitle-stages': 'Academic Internships',
        'exp-subtitle-pro': 'Professional Experience',
        'exp-subtitle-benevole': 'Volunteering',
        
        // Stage TiqTec
        'exp-tiqtec-badge': 'Bachelor 3 Academic Internship',
        'exp-tiqtec-title': 'Web & Application Developer',
        'exp-tiqtec-date': 'May 12 to July 4, 2025',
        'exp-tiqtec-company': 'TiqTec',
        'exp-tiqtec-location': 'La Courneuve',
        'exp-tiqtec-task1': 'WordPress website development with Laragon',
        'exp-tiqtec-task2': 'Android application in Kotlin',
        'exp-tiqtec-task3': 'Testing and MySQL database management',
        'exp-tiqtec-report-text': 'View project report',
        'exp-streamvision-report-text': 'View project report',


        
        // Stage StreamVision
        'exp-stream-badge': 'BTS Academic Internship',
        'exp-stream-title': 'IT Developer',
        'exp-stream-date': 'May 29 to July 4, 2023',
        'exp-stream-company': 'StreamVision',
        'exp-stream-location': 'Paris',
        'exp-stream-task1': 'Dynamic display for 2024 Olympics hotel',
        'exp-stream-task2': 'Interactive interface (HTML, CSS, JavaScript)',
        'exp-stream-task3': 'Animated countdown in JavaScript',
        
        // Stage 3ème
        'exp-3eme-badge': '9th Grade Academic Internship',
        'exp-3eme-title': '9th Grade Observation Internship',
        'exp-3eme-date': 'december 17 to december 23, 2017',
        'exp-3eme-company': 'Paul Langevin Kindergarten',
        'exp-3eme-location': 'Drancy',
        
        // Carrefour
        'exp-carrefour-badge': 'Temporary Work',
        'exp-carrefour-title': 'Order Picker',
        'exp-carrefour-date': 'July 2022 - Present',
        'exp-carrefour-company': 'Carrefour Supply Chain',
        'exp-carrefour-location': 'La Courneuve',
        'exp-carrefour-task1': 'Store order preparation',
        'exp-carrefour-task2': 'Pallet construction according to standards',
        'exp-carrefour-task3': 'CACES obtained July 2022',
        'project-ml-video': '▶ Watch the video',
        
        // Diocèse
        'exp-diocese-badge': 'Volunteering',
        'exp-diocese-title': 'Activity Leader',
        'exp-diocese-date': 'September 2024 - Present',
        'exp-diocese-company': 'Diocese of Saint Denis',
        'exp-diocese-location': 'Saint Denis',
        'exp-diocese-task1': 'Children\'s activity facilitation and supervision',
        'exp-diocese-task2': 'Event organization',
        
        // Projets
        'project-ml-badge': 'Machine Learning',
        'project-ml-title': 'Global Birth Rate Prediction by Machine Learning',
        'project-ml-desc1': '→ Data collection and preprocessing (fertility_rate, 187 countries, 1960–2020).',
        'project-ml-desc2': '→ Implementation and comparison of regression models (Random Forest).',
        'project-ml-desc3': '→ Cross-validation and performance evaluation (R², RMSE, MAE).',
        'project-ml-desc4': '→ Country segmentation by demographic profiles via clustering (K-Means)',
        'project-ml-desc5': '→ Prediction generation for the decade 2021–2030',
        'project-ml-link': 'Access Github',
        
        'project-dl-badge': 'Deep Learning',
        'project-dl-title': 'Facial Emotion Recognition by Deep Learning',
        'project-dl-desc1': '→ Design and training of a CNN model (Convolutional Neural Network)',
        'project-dl-desc2': '→ Prediction of emotions such as joy, anger, sadness, etc.',
        'project-dl-desc3': '→ Visualization of predictions and ground truth in a grid',
        'project-dl-desc4': '→ Model error analysis',
        'project-dl-link': 'Access Github',
        
        'project-game-badge': 'Python Games',
        'project-game-title': '2D/3D Arcade Game',
        'project-game-desc1': '→ Mario game with obstacles to avoid, coins to collect, and shells to throw',
        'project-game-desc2': '→ Features: movements, collisions, audio, bilingual, light/dark mode',
        'project-game-link': 'Access Github',
        'jeupython-report-text': 'View project report',
        
        'project-web-badge': 'Website',
        'project-web-title': 'E-Commerce Website',
        'project-web-desc': '→ Informative website for online commerce with modern and responsive interface.',
        'project-web-link': 'Access Github',
        
        'project-android-badge': 'Android Application',
        'project-android-title': 'Flight Booking Android Application',
        'project-android-desc': '→ Flight search by destination, date and airline.',
        'project-android-link': 'Access Github',
        
        'github-btn': 'Access my GitHub',
        
        // Skills
        'skill-web': 'Web Development',
        'skill-app': 'Application Development',
        'skill-ai': 'Artificial Intelligence',
        'skill-db': 'Databases',
        'skill-network': 'Networks and Routing',
        'skill-system': 'System Programming',
        'skill-hardware': 'Hardware',
        'skill-cms': 'CMS',
        'skill-os': 'Operating Systems',
        'skill-ide': 'IDE',
        
        // Contact
        'contact-name': 'Name',
        'contact-name-placeholder': 'Your name',
        'contact-email': 'Email',
        'contact-email-placeholder': 'your@email.com',
        'contact-subject': 'Subject',
        'contact-subject-placeholder': 'Message subject',
        'contact-message': 'Message',
        'contact-message-placeholder': 'Your message...',
        'contact-send': 'Send',
        'contact-form-btn': 'Open form',
        'contact-info-email': 'Email',
        'contact-info-phone': 'Phone',
        'contact-info-location': 'Location',
        'contact-info-linkedin': 'LinkedIn',
        
        // Footer
        'footer-text': '© 2026 Steve ANTON NELCON.',
    }
};

// Langue par défaut
let currentLang = localStorage.getItem('language') || 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Mettre à jour tous les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            // Pour les inputs et textareas, changer le placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Changer l'icône du drapeau
    const flagIcon = document.querySelector('#languageToggle .flag-icon');
    if (flagIcon) {
        flagIcon.textContent = lang === 'fr' ? '🇫🇷' : '🇬🇧';
    }
    
    // Ajouter classe d'animation
    document.getElementById('languageToggle').classList.add('changing');
    setTimeout(() => {
        document.getElementById('languageToggle').classList.remove('changing');
    }, 600);
}

// Initialiser la langue au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLang);
    
    // Event listener pour le bouton de langue
    const langBtn = document.getElementById('languageToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            changeLanguage(newLang);
        });
    }
});

// Ajouter ce script dans ton fichier JS ou avant la balise </body>
document.addEventListener('DOMContentLoaded', function() {
    // Mapping des compétences vers leurs icônes Font Awesome
    const iconMap = {
        // Développement Web
        'HTML': 'fab fa-html5',
        'CSS': 'fab fa-css3-alt',
        'JavaScript': 'fab fa-js',
        'TypeScript': 'fab fa-js',
        'React': 'fab fa-react',
        'Next.js': 'fab fa-react',
        'Node.js': 'fab fa-node-js',
        'PHP': 'fab fa-php',
        'Laravel': 'fab fa-laravel',
        'Symfony': 'fab fa-symfony',
        
        // Développement d'application
        'React Native': 'fab fa-react',
        'Flutter': 'fas fa-mobile-alt',
        'Android': 'fab fa-android',
        'Java': 'fab fa-java',
        'Kotlin': 'fab fa-android',
        'Swift': 'fab fa-swift',
        'QML': 'fas fa-cubes'
,
        
        // Intelligence Artificielle
        'Python': 'fab fa-python',
        'Machine Learning': 'fas fa-brain',
        'Deep Learning': 'fas fa-brain',
        'Scikit-learn': 'fab fa-python',
        'OpenCV': 'fas fa-camera',
        
        // Bases de Données
        'SQL': 'fas fa-database',
        'PostgreSQL': 'fas fa-database',
        'MongoDB': 'fas fa-database',
        'Redis': 'fas fa-database',
        'SQLite': 'fas fa-database',
        'Laragon': 'fas fa-dragon',
        'phpMyAdmin': 'fas fa-database',


        
        // Réseaux
        'Cisco': 'fas fa-network-wired',
        'IPv4': 'fas fa-network-wired',
        'IPv6': 'fas fa-network-wired',
        'OSPF': 'fas fa-network-wired',
        'BGP': 'fas fa-network-wired',
        
        // Programmation Système
        'C': 'fas fa-code',
        'C++': 'fas fa-code',
        'Bash': 'fas fa-terminal',
        'Assembly': 'fas fa-microchip',
        
        // Matériels
        'Arduino': 'fas fa-microchip',
        'Raspberry Pi': 'fab fa-raspberry-pi',
        'STM32': 'fas fa-microchip',
        'ESP32': 'fas fa-microchip',
        'Microcontrôleur': 'fas fa-microchip',

        
        // CMS
        'WordPress': 'fab fa-wordpress',
        'Joomla': 'fab fa-joomla',
        'Drupal': 'fab fa-drupal',
        
        // Système d'exploitation
        'Linux': 'fab fa-linux',
        'Ubuntu': 'fab fa-ubuntu',
        'Windows': 'fab fa-windows',
        'macOS': 'fab fa-apple',
        'Debian': 'fab fa-linux',
        
        // IDE et Outils
        'Visual Studio Code': 'fas fa-code',
        'IntelliJ': 'fas fa-code',
        'Eclipse': 'fas fa-code',
        'Git': 'fab fa-git-alt',
        'GitHub': 'fab fa-github',
        'GitLab': 'fab fa-gitlab',
        'Docker': 'fab fa-docker',
        'Kubernetes': 'fas fa-dharmachakra',
        'Android Studio': 'fab fa-android',
        'Qt Creator': 'fas fa-cubes',

    };
    
    // Parcourir tous les skill-items
    document.querySelectorAll('.skill-item').forEach(item => {
        const skillName = item.querySelector('.skill-name span');
        if (skillName) {
            const text = skillName.textContent.trim();
            
            // Chercher une correspondance dans le mapping
            if (iconMap[text]) {
                // Créer l'icône
                const icon = document.createElement('i');
                icon.className = iconMap[text] + ' skill-icon';
                
                // Ajouter l'icône dans le skill-name
                item.querySelector('.skill-name').appendChild(icon);
            }
        }
    });
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

