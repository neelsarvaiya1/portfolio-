// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
        contactForm.reset();
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .about-content, .contact-content');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
document.querySelectorAll('.project-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Name and Enrollment Number (console log)
console.log("Name: Neel Sarvaiya");
console.log("Enrollment Number: 240905040062");
