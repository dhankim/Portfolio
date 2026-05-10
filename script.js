// =========================
// CURSOR GLOW
// =========================

const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});


// =========================
// REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(
  '.hero-container, .about-left, .about-card, .featured-project, .small-project-card, .skills-grid, .contact-box'
);

reveals.forEach(el => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }

  });

}, {
  threshold: 0.12
});

reveals.forEach(el => observer.observe(el));


// =========================
// SMOOTH SCROLL FIX
// =========================

document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target =
      document.querySelector(
        this.getAttribute('href')
      );

    if(target){

      target.scrollIntoView({
        behavior: 'smooth'
      });

    }

  });

});