function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }

  // Dropdown toggle di HP
  document.querySelectorAll('.nav-links .dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  });

  // === BANNER SLIDER ===
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".banner-slider .slide");
  const dots = document.querySelectorAll(".banner-slider .dot");
  const nextBtn = document.querySelector(".banner-slider .next");
  const prevBtn = document.querySelector(".banner-slider .prev");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });

    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === index) dot.classList.add("active");
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  // Tombol panah
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Dots
  if (dots.length) {
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        slideIndex = i;
        showSlide(slideIndex);
      });
    });
  }

  // Auto slide setiap 5 detik
  setInterval(nextSlide, 5000);

  // Inisialisasi pertama
  showSlide(slideIndex);
});
