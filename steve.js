// Traductions
const translations = {
    fr: {
        "nav_about": "À propos",
        "nav_experience": "Expérience",
        "nav_projects": "Projets",
        "nav_education": "Formation",
        "nav_skills": "Compétences",
        "nav_contact": "Contact",
        
        "about_title": "À propos",
        "about_text": "Étudiant passionné par le développement web et mobile, actuellement en recherche d'un stage de 3 mois à partir de mars 2026 pour mon Master en Informatique et Big Data.",

        "experience_title": "Expérience professionnelle",
        "exp1_title": "Développeur de site web et d'application (Stage L3 ISEI)",
        "exp1_company": "TigTec - LaCourneuve",
        "exp1_point1": "Développement d'un site web vitrine avec WordPress et Laragon",
        "exp1_point2": "Développement d'une application Android avec Kotlin pour l'entreprise",
        "exp1_point3": "Tests de fonctionnalités en tant que testeur de logiciel",
        "exp1_point4": "Gestion de la base de données PhpMyAdmin de MySQL",
        
        "exp2_title": "Développeur informatique (Stage BTS)",
        "exp2_company": "StreamVision - Paris",
        "exp2_point1": "Création d'un affichage dynamique pour un hôtel pendant les JO 2024",
        "exp2_point2": "Développement d'une interface interactive (HTML, CSS, JavaScript)",
        "exp2_point3": "Intégration d'un compte à rebours animé en JavaScript",
        
        "exp3_title": "Préparateur de commandes (Intérim)",
        "exp3_company": "Carrefour SupplyChain - Lacourneuve",
        "exp3_point1": "Préparation des commandes des magasins",
        "exp3_point2": "Construction de palettes selon les normes",
        "exp3_point3": "CACES obtenu en juillet 2022",
        
        "projects_title": "Projets académiques",
        "project1_title": "Capteur à ultrasons avec interface Arduino",
        "project1_desc": "Détection d'obstacles et affichage de la distance en temps réel. Transmission des données vers une interface web et une application mobile.",
        "project2_title": "Jeu d'arcade en 2D/3D",
        "project2_desc": "Jeu Mario avec obstacles à éviter, pièces à ramasser, et carapaces à lancer. Fonctions : mouvements, collisions, audio, double langue, mode clair/sombre.",
        "project3_title": "Application Android de restauration",
        "project3_desc": "Conception et développement d'une application de commande sur mobile/tablette. Gestion d'une base de données utilisateurs et commandes.",
        "project4_title": "Site web pour un commerce en ligne",
        "project4_desc": "Conception d'un site informatif pour un commerce en ligne.",
        
        "education_title": "Formation",
        "edu1_title": "Master Informatique et Big Data",
        "edu1_school": "Université Paris & Vincennes - Saint-Denis",
        "edu1_desc": "Intelligence artificielle et bases de données",
        "edu2_title": "Licence 3 Informatique des systèmes embarqués et interactifs",
        "edu2_school": "Université Paris & Vincennes - Saint-Denis",
        "edu2_desc": "Programmation : C, C++, Java, Python. Architectures embarquées : microcontrôleurs. Développement mobile Android et iOS. Bases de données et bus de communication.",
        "edu3_title": "BTS Système Numérique option Informatique et réseaux",
        "edu3_school": "Lycée Paul Éluard, Saint Denis",
        "edu3_desc": "Programmation : HTML, CSS, Javascript, QML. Réseaux : IP4, IPv6. Bases de données : SQL, PHPMyAdmin.",
        
        "skills_title": "Compétences",
        "skills_web": "Développement Web",
        "skills_app": "Développement d'application",
        "skills_db": "Bases de Données",
        "skills_network": "Réseaux et Routage",
        "skills_hardware": "Matériels",
        "skills_cms": "CMS",
        "skills_lang": "Langues",
        "lang_fr": "Français (Langue maternelle)",
        "lang_en": "Anglais (B1 - TOEIC, KET)",
        "lang_tm": "Tamoul (Langue maternelle)",
        "lang_es": "Espagnol (A1)",
        
        "contact_title": "Contact",
        "contact_name": "Nom",
        "contact_email": "Email",
        "contact_subject": "Sujet",
        "contact_message": "Message",
        "contact_submit": "Envoyer",
        
        "footer_rights": "Tous droits réservés."
    },
    en: {
        "nav_about": "About",
        "nav_experience": "Experience",
        "nav_projects": "Projects",
        "nav_education": "Education",
        "nav_skills": "Skills",
        "nav_contact": "Contact",
        
        "about_title": "About",
        "about_text": "Student passionate about web and mobile development, currently looking for a 3-month internship starting March 2026 for my Master's in Computer Science and Big Data.",
        "header-title":"Student in Big Data",

        "experience_title": "Professional Experience",
        "exp1_title": "Web and Application Developer (L3 ISEI Internship)",
        "exp1_company": "TigTec - LaCourneuve",
        "exp1_point1": "Development of a showcase website with WordPress and Laragon",
        "exp1_point2": "Development of an Android application with Kotlin for the company",
        "exp1_point3": "Functionality testing as a software tester",
        "exp1_point4": "Management of MySQL PhpMyAdmin database",
        
        "exp2_title": "Computer Developer (BTS Internship)",
        "exp2_company": "StreamVision - Paris",
        "exp2_point1": "Creation of a dynamic display for a hotel during the 2024 Olympics",
        "exp2_point2": "Development of an interactive interface (HTML, CSS, JavaScript)",
        "exp2_point3": "Integration of an animated countdown in JavaScript",
        
        "exp3_title": "Order Picker (Temporary Work)",
        "exp3_company": "Carrefour SupplyChain - Lacourneuve",
        "exp3_point1": "Preparation of store orders",
        "exp3_point2": "Pallet construction according to standards",
        "exp3_point3": "Forklift license obtained in July 2022",
        
        "projects_title": "Academic Projects",
        "project1_title": "Ultrasonic Sensor with Arduino Interface",
        "project1_desc": "Obstacle detection and real-time distance display. Data transmission to a web interface and mobile application.",
        "project2_title": "2D/3D Arcade Game",
        "project2_desc": "Mario-style game with obstacles to avoid, coins to collect, and shells to throw. Features: movements, collisions, audio, dual language, light/dark mode.",
        "project3_title": "Android Restaurant Application",
        "project3_desc": "Design and development of a mobile/tablet ordering application. Management of a user and order database.",
        "project4_title": "E-commerce Website",
        "project4_desc": "Design of an informational website for an online store.",
        
        "education_title": "Education",
        "edu1_title": "Master in Computer Science and Big Data",
        "edu1_school": "University of Paris & Vincennes - Saint-Denis",
        "edu1_desc": "Artificial intelligence and databases",
        "edu2_title": "Bachelor's Degree in Embedded and Interactive Systems",
        "edu2_school": "University of Paris & Vincennes - Saint-Denis",
        "edu2_desc": "Programming: C, C++, Java, Python. Embedded architectures: microcontrollers. Android and iOS mobile development. Databases and communication buses.",
        "edu3_title": "BTS Digital Systems - IT and Networks Option",
        "edu3_school": "Paul Éluard High School, Saint Denis",
        "edu3_desc": "Programming: HTML, CSS, Javascript, QML. Networks: IP4, IPv6. Databases: SQL, PHPMyAdmin.",
        
        "skills_title": "Skills",
        "skills_web": "Web Development",
        "skills_app": "Application Development",
        "skills_db": "Databases",
        "skills_network": "Networking and Routing",
        "skills_hardware": "Hardware",
        "skills_cms": "CMS",
        "skills_lang": "Languages",
        "lang_fr": "French (Native)",
        "lang_en": "English (B1 - TOEIC, KET)",
        "lang_tm": "Tamil (Native)",
        "lang_es": "Spanish (A1)",
        
        "contact_title": "Contact",
        "contact_name": "Name",
        "contact_email": "Email",
        "contact_subject": "Subject",
        "contact_message": "Message",
        "contact_submit": "Send",
        
        "footer_rights": "All rights reserved."
    },
    es: {
        "nav_about": "Sobre mí",
        "nav_experience": "Experiencia",
        "nav_projects": "Proyectos",
        "nav_education": "Formación",
        "nav_skills": "Habilidades",
        "nav_contact": "Contacto",
        
        "about_title": "Sobre mí",
        "about_text": "Estudiante apasionado por el desarrollo web y móvil, actualmente buscando unas prácticas de 3 meses a partir de marzo de 2026 para mi Máster en Informática y Big Data.",
        "header-title":"Estudiante en Big Data",

        "experience_title": "Experiencia profesional",
        "exp1_title": "Desarrollador web y de aplicaciones (Prácticas L3 ISEI)",
        "exp1_company": "TigTec - LaCourneuve",
        "exp1_point1": "Desarrollo de un sitio web vitrina con WordPress y Laragon",
        "exp1_point2": "Desarrollo de una aplicación Android con Kotlin para la empresa",
        "exp1_point3": "Pruebas de funcionalidades como tester de software",
        "exp1_point4": "Gestión de la base de datos MySQL con PhpMyAdmin",
        
        "exp2_title": "Desarrollador informático (Prácticas BTS)",
        "exp2_company": "StreamVision - París",
        "exp2_point1": "Creación de una pantalla dinámica para un hotel durante los JJOO 2024",
        "exp2_point2": "Desarrollo de una interfaz interactiva (HTML, CSS, JavaScript)",
        "exp2_point3": "Integración de una cuenta atrás animada en JavaScript",
        
        "exp3_title": "Preparador de pedidos (Trabajo temporal)",
        "exp3_company": "Carrefour SupplyChain - Lacourneuve",
        "exp3_point1": "Preparación de pedidos para tiendas",
        "exp3_point2": "Construcción de palés según normas",
        "exp3_point3": "Carnet de carretillero obtenido en julio 2022",
        
        "projects_title": "Proyectos académicos",
        "project1_title": "Sensor ultrasónico con interfaz Arduino",
        "project1_desc": "Detección de obstáculos y visualización de la distancia en tiempo real. Transmisión de datos a una interfaz web y aplicación móvil.",
        "project2_title": "Juego arcade en 2D/3D",
        "project2_desc": "Juego estilo Mario con obstáculos, monedas y caparazones. Funciones: movimientos, colisiones, audio, idiomas, modo claro/oscuro.",
        "project3_title": "Aplicación Android de restauración",
        "project3_desc": "Diseño y desarrollo de una app de pedidos para móvil/tablet. Gestión de base de datos de usuarios y pedidos.",
        "project4_title": "Sitio web para comercio electrónico",
        "project4_desc": "Diseño de un sitio informativo para una tienda online.",
        
        "education_title": "Formación",
        "edu1_title": "Máster en Informática y Big Data",
        "edu1_school": "Universidad de París & Vincennes - Saint-Denis",
        "edu1_desc": "Inteligencia artificial y bases de datos",
        "edu2_title": "Licenciatura en Sistemas Embebidos e Interactivos",
        "edu2_school": "Universidad de París & Vincennes - Saint-Denis",
        "edu2_desc": "Programación: C, C++, Java, Python. Arquitecturas embebidas. Desarrollo móvil Android/iOS. Bases de datos y buses de comunicación.",
        "edu3_title": "BTS Sistemas Digitales - Opción Informática y Redes",
        "edu3_school": "Liceo Paul Éluard, Saint Denis",
        "edu3_desc": "Programación: HTML, CSS, Javascript, QML. Redes: IP4, IPv6. Bases de datos: SQL, PHPMyAdmin.",
        
        "skills_title": "Habilidades",
        "skills_web": "Desarrollo Web",
        "skills_app": "Desarrollo de aplicaciones",
        "skills_db": "Bases de datos",
        "skills_network": "Redes y enrutamiento",
        "skills_hardware": "Hardware",
        "skills_cms": "CMS",
        "skills_lang": "Idiomas",
        "lang_fr": "Francés (Nativo)",
        "lang_en": "Inglés (B1 - TOEIC, KET)",
        "lang_tm": "Tamil (Nativo)",
        "lang_es": "Español (A1)",
        
        "contact_title": "Contacto",
        "contact_name": "Nombre",
        "contact_email": "Correo electrónico",
        "contact_subject": "Asunto",
        "contact_message": "Mensaje",
        "contact_submit": "Enviar",
        
        "footer_rights": "Todos los derechos reservados."
        
    },
    ta: {
        "nav_about": "என்னைப் பற்றி",
        "nav_experience": "அனுபவம்",
        "nav_projects": "திட்டங்கள்",
        "nav_education": "கல்வி",
        "nav_skills": "திறன்கள்",
        "nav_contact": "தொடர்பு",
        
        "about_title": "என்னைப் பற்றி",
        "about_text": "வலை மற்றும் மொபைல் உருவாக்கத்தில் ஆர்வமுள்ள மாணவர், மார்ச் 2026 முதல் 3 மாத இடைநிலைப் பயிற்சிக்காக தேடுகிறேன்.",
        "header-title":"பிக் டேட்டாவில் மாணவர்",

        "experience_title": "தொழில் அனுபவம்",
        "exp1_title": "வலைத்தளம் மற்றும் பயன்பாட்டு உருவாக்குநர் (L3 ISEI பயிற்சி)",
        "exp1_company": "TigTec - LaCourneuve",
        "exp1_point1": "WordPress மற்றும் Laragon உடன் வலைத்தள உருவாக்கம்",
        "exp1_point2": "Android பயன்பாட்டை Kotlinல் உருவாக்குதல்",
        "exp1_point3": "மென்பொருள் சோதனையாளராக பரிசோதனை",
        "exp1_point4": "MySQL PhpMyAdmin தரவுத்தள மேலாண்மை",
        
        "exp2_title": "கணினி உருவாக்குநர் (BTS பயிற்சி)",
        "exp2_company": "StreamVision - பாரிஸ்",
        "exp2_point1": "2024 ஒலிம்பிக்ஸுக்கான ஹோட்டல் டிஸ்ப்ளே உருவாக்கம்",
        "exp2_point2": "உரையாடல் இடைமுக உருவாக்கம் (HTML, CSS, JavaScript)",
        "exp2_point3": "JavaScriptல் அனிமேஷன் கவுண்ட்டவுன்",
        
        "exp3_title": "ஆர்டர் பிரிப்பவர் (தற்காலிக வேலை)",
        "exp3_company": "Carrefour SupplyChain - Lacourneuve",
        "exp3_point1": "கடை ஆர்டர்கள் தயாரித்தல்",
        "exp3_point2": "தரப்படுத்தப்பட்ட பாலட்டுகள் கட்டுதல்",
        "exp3_point3": "ஜூலை 2022ல் ஃபோர்க்லிப்ட் உரிமம் பெற்றது",
        
        "projects_title": "கல்வித் திட்டங்கள்",
        "project1_title": "Arduino இடைமுகத்துடன் அல்ட்ராசோனிக் சென்சார்",
        "project1_desc": "தடைகளை கண்டறிதல் மற்றும் நேரடி தூரம் காண்பித்தல். தரவை வலை இடைமுகம் மற்றும் மொபைல் பயன்பாட்டிற்கு அனுப்புதல்.",
        "project2_title": "2D/3D ஆர்கேட் விளையாட்டு",
        "project2_desc": "மாரியோ விளையாட்டு - தடைகள், நாணயங்கள், ஓடுகள். இயக்கங்கள், மோதல்கள், ஒலி, இருமொழி, வெளிச்ச/இருள் முறை.",
        "project3_title": "Android உணவக பயன்பாடு",
        "project3_desc": "மொபைல்/டேப்லெட் ஆர்டர் பயன்பாடு. பயனர் மற்றும் ஆர்டர் தரவுத்தள மேலாண்மை.",
        "project4_title": "இணைய வணிகத்திற்கான வலைத்தளம்",
        "project4_desc": "ஒரு ஆன்லைன் ஸ்டோருக்கான தகவல் வலைத்தள வடிவமைப்பு.",
        
        "education_title": "கல்வி",
        "edu1_title": "கணினி அறிவியல் மற்றும் பிக் டேட்டா முதுகலை",
        "edu1_school": "பாரிஸ் & வின்சென்னெஸ் பல்கலைக்கழகம் - செயின்ட் டெனிஸ்",
        "edu1_desc": "செயற்கை நுண்ணறிவு மற்றும் தரவுத்தளங்கள்",
        "edu2_title": "எம்பெடட் மற்றும் ஊடாடும் அமைப்புகள் இளங்கலை",
        "edu2_school": "பாரிஸ் & வின்சென்னெஸ் பல்கலைக்கழகம் - செயின்ட் டெனிஸ்",
        "edu2_desc": "நிரலாக்கம்: C, C++, Java, Python. எம்பெடட் கட்டமைப்புகள். Android/iOS மொபைல் உருவாக்கம். தரவுத்தளங்கள் மற்றும் தகவல் தொடர்பு பஸ்கள்.",
        "edu3_title": "BTS டிஜிட்டல் அமைப்புகள் - கணினி மற்றும் நெட்வொர்க்குகள்",
        "edu3_school": "பால் எலூவார்ட் உயர்நிலைப் பள்ளி, செயின்ட் டெனிஸ்",
        "edu3_desc": "நிரலாக்கம்: HTML, CSS, Javascript, QML. நெட்வொர்க்குகள்: IP4, IPv6. தரவுத்தளங்கள்: SQL, PHPMyAdmin.",
        
        "skills_title": "திறன்கள்",
        "skills_web": "வலை உருவாக்கம்",
        "skills_app": "பயன்பாட்டு உருவாக்கம்",
        "skills_db": "தரவுத்தளங்கள்",
        "skills_network": "நெட்வொர்க்கிங் மற்றும் ரூட்டிங்",
        "skills_hardware": "வன்பொருள்",
        "skills_cms": "CMS",
        "skills_lang": "மொழிகள்",
        "lang_fr": "பிரெஞ்சு (தாய்மொழி)",
        "lang_en": "ஆங்கிலம் (B1 - TOEIC, KET)",
        "lang_tm": "தமிழ் (தாய்மொழி)",
        "lang_es": "ஸ்பானிஷ் (A1)",
        
        "contact_title": "தொடர்பு",
        "contact_name": "பெயர்",
        "contact_email": "மின்னஞ்சல்",
        "contact_subject": "விஷயம்",
        "contact_message": "செய்தி",
        "contact_submit": "அனுப்பு",
        
        "footer_rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
};

// Gestion du thème sombre
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Vérifier le thème au chargement
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Basculer entre les thèmes
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Gestion des langues
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'fr';

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        langButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        // Changer la langue
        currentLang = button.dataset.lang;
        translatePage(currentLang);
    });
});

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Animation au défilement
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .project-card, .timeline-item, .skills-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Ici, vous pourriez ajouter une logique pour envoyer le formulaire
        // Par exemple avec fetch() vers un serveur ou un service comme Formspree
        
        // Pour l'instant, affichons simplement une alerte
        alert(currentLang === 'fr' ? 
            `Merci ${name}, votre message a été envoyé!` :
            currentLang === 'en' ?
            `Thank you ${name}, your message has been sent!` :
            currentLang === 'es' ?
            `¡Gracias ${name}, tu mensaje ha sido enviado!` :
            `நன்றி ${name}, உங்கள் செய்தி அனுப்பப்பட்டது!`);
        
        // Réinitialiser le formulaire
        contactForm.reset();
    });
}

// Mettre à jour l'année dans le footer
document.getElementById('current-year').textContent = new Date().getFullYear();
