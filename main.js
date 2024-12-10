// JavaScript to trigger animations when elements are in view and fade out when out of view
const elementsToAnimate = document.querySelectorAll('.home-info, .about-info, .business-info, .contact-info, .pictures-grid img');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            entry.target.classList.remove('fade-out-hidden');
        } else {
            entry.target.classList.add('fade-out-hidden');
            entry.target.classList.remove('fade-in-visible');
        }
    });
}, { threshold: 0.5 });

elementsToAnimate.forEach(element => {
    observer.observe(element);
});
