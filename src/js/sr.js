export default function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 700,
    desktop: true,
    mobile: true
  };

  /* Section Title */
  ScrollReveal().reveal('.section-title', {
    ...defaultProps,
    delay: 200,
    distance: '0px',
    origin: 'bottom'
  });

  /* Hero Section */
  ScrollReveal().reveal('.hero-title', {
    ...defaultProps,
    delay: 300,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('.hero-cta', {
    ...defaultProps,
    delay: 700,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });

  /* About Section */
  ScrollReveal().reveal('.about-wrapper__image', {
    ...defaultProps,
    delay: 300,
    origin: 'bottom'
  });
  ScrollReveal().reveal('.about-wrapper__info', {
    ...defaultProps,
    delay: 700,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });

  /* Projects Section */
  ScrollReveal().reveal('.project-wrapper__text', {
    ...defaultProps,
    delay: 200,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('.project-wrapper__image', {
    ...defaultProps,
    delay: 700,
    origin: window.innerWidth > 768 ? 'right' : 'bottom'
  });

  /* Contact Section */
  ScrollReveal().reveal('.contact-wrapper', {
    ...defaultProps,
    delay: 500,
    origin: 'bottom'
  });
}
