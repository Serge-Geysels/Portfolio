// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll for Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Skills Marquee - Duplicate content for infinite scroll
const marqueeContent = document.getElementById('marqueeContent');
const skills = [
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'PHP', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Python', icon: '🐍' }
];

// Create skill cards HTML
const skillsHTML = skills.map(skill => `
    <div class="skill-card">
        <div class="skill-icon">${skill.icon}</div>
        <span>${skill.name}</span>
    </div>
`).join('');

// Duplicate the content twice for seamless infinite scroll
marqueeContent.innerHTML = skillsHTML + skillsHTML;

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
    const body = encodeURIComponent(`Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`);
    const mailtoLink = `mailto:230554@student.scalda.nl?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
        alert('Je email programma wordt geopend. Bedankt voor je bericht!');
        contactForm.reset();
    }, 500);
}); // Active Navigation Highlighting on Scroll
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// Add floating animation to cards on scroll
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

// Observe all cards
const cards = document.querySelectorAll('.glow-card, .project-card, .skill-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

console.log('Portfolio loaded successfully!');

// Project Modal Functions
const projectData = {
    planChill: {
        title: 'Plan & Chill',
        description: 'Een innovatieve app die je helpt om de perfecte avond te plannen. Kies een restaurant en een film in één app, gebaseerd op jouw locatie en voorkeuren. De app vindt automatisch restaurants en bioscopen bij jou in de buurt.',
        images: [
            'images/plan&chill 1.png',
            'images/plan&chill 2.png',
            'images/plan&chill 3.png'
        ]
    }
};

let currentSlideIndex = 0;

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];

    if (!project) return;

    currentSlideIndex = 0;

    let slidesHTML = '';
    project.images.forEach((img, index) => {
        slidesHTML += `
            <div class="slide ${index === 0 ? 'active' : ''}">
                <img src="${img}" alt="${project.title} screenshot ${index + 1}">
            </div>
        `;
    });

    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        <div class="slider-container">
            <div class="slider">
                ${slidesHTML}
            </div>
            ${project.images.length > 1 ? `
                <button class="slider-btn prev" onclick="changeSlide(-1)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button class="slider-btn next" onclick="changeSlide(1)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
                <div class="slider-dots">
                    ${project.images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>`).join('')}
                </div>
            ` : ''}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if (slides.length === 0) return;

    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');

    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if (slides.length === 0) return;

    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');

    currentSlideIndex = index;

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
const projectModal = document.getElementById('projectModal');
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target.id === 'projectModal') {
            closeProjectModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});