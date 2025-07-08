document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navList.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- Scroll Animations ---
    const animationOptions = {
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, animationOptions);

    // Observe elements with .animate-on-scroll
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // --- Initial Load Animations ---
    const loadElements = document.querySelectorAll('.animate-on-load');
    loadElements.forEach(el => el.classList.add('is-visible'));

});
