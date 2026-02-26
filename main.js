import './style.css';

// Animation Logic
document.addEventListener('DOMContentLoaded', () => {

  // Hero Entry Animations
  const heroElements = document.querySelectorAll('.fade-in-up');
  heroElements.forEach((el, index) => {
    // Add small stagger based on index if no specific delay class
    if (!el.classList.contains('delay-1') && !el.classList.contains('delay-2') && !el.classList.contains('delay-3')) {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 100 + 100);
    } else {
      // Let CSS delays handle it, just trigger the base state
      requestAnimationFrame(() => {
        el.classList.add('visible');
      });
    }
  });

  // Scroll Reveal Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach(el => {
    observer.observe(el);
  });

  // Image Modal Logic
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("modal-caption");
  const workflowFrame = document.querySelector(".workflow-frame");

  if (workflowFrame) {
    workflowFrame.onclick = function () {
      const img = this.querySelector("img");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
      document.body.style.overflow = "hidden"; // Prevent scroll
    }
  }

  const span = document.getElementsByClassName("modal-close")[0];
  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  if (modal) {
    modal.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  }
});
