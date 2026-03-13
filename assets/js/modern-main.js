/**
 * Seker Textiles - Modern 2025 JS Components
 */

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.modern-nav');
  const scrollProgress = document.getElementById('scroll-progress');

  // 1. Sticky Header & Scroll Progress
  window.addEventListener('scroll', () => {
    // Navbar change
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (window.scrollY / windowHeight) * 100;
    if(scrollProgress) scrollProgress.style.width = scrollPercent + '%';
  });

  // 2. Smooth Scrolling for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Simple Image Lazy Loading Initializer
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          // Trigger browser native lazy load if needed or just handle classes
          image.classList.add('fade-in');
          observer.unobserve(image);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // 4. Offer Timer (Bonus: Demo 1h timer)
  const setupOfferTimer = () => {
    const timers = document.querySelectorAll('.offer-timer');
    timers.forEach(timer => {
      let seconds = 3600; 
      setInterval(() => {
        seconds--;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timer.textContent = `${mins}m ${secs}s`;
      }, 1000);
    });
  };
  setupOfferTimer();
});
