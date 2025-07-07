 document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".banner .slide");
    const dots = document.querySelectorAll(".dots span"); // opsional
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });

      if (dots.length) {
        dots.forEach((dot, i) => {
          dot.classList.remove("active");
          if (i === index) dot.classList.add("active");
        });
      }
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    }

    // Event Listener tombol
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Event Listener dot navigasi (opsional)
    if (dots.length) {
      dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
          slideIndex = idx;
          showSlide(slideIndex);
        });
      });
    }

    // Auto slide
    setInterval(nextSlide, 5000);

    // Tampilkan slide pertama
    showSlide(slideIndex);
  });

  // === SLIDER ===
let slideIndex = 0;
const slides = document.querySelectorAll(".banner img");
const dots = document.querySelectorAll(".dots span");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
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

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      slideIndex = idx;
      showSlide(slideIndex);
    });
  });
}

const autoSlide = setInterval(nextSlide, 10000);

// === POPUP PRODUK ===
const viewButtons = document.querySelectorAll(".view-detail");
const popup = document.getElementById("popup");

viewButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("popup-title").textContent = button.dataset.title;
    document.getElementById("popup-desc").textContent = button.dataset.desc;
    document.getElementById("popup-img1").src = button.dataset.img1;
    document.getElementById("popup-img2").src = button.dataset.img2;
    document.getElementById("popup-img3").src = button.dataset.img3;
    popup.classList.add("active");
  });
});

function closePopup() {
  popup.classList.remove("active");
}

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const toast = document.getElementById("toast");
    const notifSound = document.getElementById("notif-sound");
    const popupTitle = document.getElementById("popup-title");
    const popupDesc = document.getElementById("popup-desc");
    const popupImg1 = document.getElementById("popup-img1");
    const popupImg2 = document.getElementById("popup-img2");
    const popupImg3 = document.getElementById("popup-img3");
    const closeBtn = document.querySelector(".close-btn");
    const addToCartBtn = popup.querySelector(".btn");

    // Buka popup saat klik 'Lihat Produk'
    document.querySelectorAll(".view-detail").forEach((btn) => {
      btn.addEventListener("click", () => {
        popupTitle.textContent = btn.dataset.title;
        popupDesc.textContent = btn.dataset.desc;
        popupImg1.src = btn.dataset.img1;
        popupImg2.src = btn.dataset.img2;
        popupImg3.src = btn.dataset.img3;
        popup.classList.add("active");
      });
    });

    // Tutup popup
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });

    // Tombol 'Tambahkan ke Keranjang'
    addToCartBtn.addEventListener("click", () => {
      toast.classList.add("show");
      notifSound.currentTime = 0;
      notifSound.play();

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  });

  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const toast = document.getElementById("toast");
    const notifSound = document.getElementById("notif-sound");
    const popupTitle = document.getElementById("popup-title");
    const popupDesc = document.getElementById("popup-desc");
    const popupImg1 = document.getElementById("popup-img1");
    const popupImg2 = document.getElementById("popup-img2");
    const popupImg3 = document.getElementById("popup-img3");
    const closeBtn = document.querySelector(".close-btn");
    const addToCartBtn = popup.querySelector(".btn");

    // Buka popup saat klik 'Lihat Produk'
    document.querySelectorAll(".view-detail").forEach((btn) => {
      btn.addEventListener("click", () => {
        popupTitle.textContent = btn.dataset.title;
        popupDesc.textContent = btn.dataset.desc;
        popupImg1.src = btn.dataset.img1;
        popupImg2.src = btn.dataset.img2;
        popupImg3.src = btn.dataset.img3;
        popup.classList.add("active");
      });
    });

    // Tutup popup
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });

    // Tombol 'Tambahkan ke Keranjang'
    addToCartBtn.addEventListener("click", () => {
      toast.classList.add("show");
      notifSound.currentTime = 0;
      notifSound.play();

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  });