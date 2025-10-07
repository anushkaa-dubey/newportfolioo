document.addEventListener("DOMContentLoaded", function () {
    // Modal functionality
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    const navButtons = document.querySelectorAll('.nav-btn');
    const resumeBtn = document.querySelector('.resume-btn');
    const certificatesBtn = document.getElementById('certificates-btn');

    // Function to load content into modal
    async function loadModalContent(modalType) {
        try {
            const response = await fetch(`${modalType}.html`);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const content = doc.querySelector('.inner-box');
            
            if (content) {
                modalBody.innerHTML = content.innerHTML;
                modalContainer.classList.add('active');
            }
        } catch (error) {
            console.error('Error loading modal content:', error);
        }
    }

    // Event listeners for nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modalType = button.getAttribute('data-modal');
            if (modalType) {
                loadModalContent(modalType);
            }
        });
    });

    // Certificates button click handler
    certificatesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const certificatesSection = document.querySelector('.certificates-section');
        certificatesSection.classList.add('visible');
        certificatesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Resume button click handler
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadModalContent('resume');
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modalContainer.classList.remove('active');
    });

    // Close modal when clicking outside
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.classList.remove('active');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
            modalContainer.classList.remove('active');
        }
    });

    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Navigation functionality
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            if (section) {
                const targetSection = document.getElementById(section);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Theme Switcher
    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('click', () => {
        body.classList.toggle('gta-theme');
        
        // Update button title
        const isGTATheme = body.classList.contains('gta-theme');
        themeSwitch.setAttribute('data-title', isGTATheme ? 'Switch to Aesthetic Mode' : 'Switch to GTA Mode');
        
        // Update icon
        const icon = themeSwitch.querySelector('img');
        icon.src = isGTATheme ? 'icons/aesthetic-switch.png' : 'icons/gta-switch.png';
    });
});
