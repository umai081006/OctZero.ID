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
  
//  dibawah ini khusus interaksi
const gambarList = [
      "artikel1_front.jpeg",
      "artikel1_back.jpeg",
      "Detail_Mcr1.png",
      "Detail_Mcr2.png"
    ];

    let currentIndex = 0;

    function updatePreview() {
      const preview1 = document.getElementById("preview");
      const preview2 = document.getElementById("preview2");
      preview1.setAttribute("src", gambarList[currentIndex]);
      const nextIndex = (currentIndex + 1) % gambarList.length;
      preview2.setAttribute("src", gambarList[nextIndex]);
    }

    function next() {
      currentIndex++;
      if (currentIndex >= gambarList.length) currentIndex = 0;
      updatePreview();
    }

    function back() {
      currentIndex--;
      if (currentIndex < 0) currentIndex = gambarList.length - 1;
      updatePreview();
    }

    function tambahdata() {
      const aboutSection = document.getElementById("about");
      if (aboutSection.childElementCount === 0) {
        const heading = document.createElement("h1");
        heading.textContent = "T-Shirt OverSize OctZero X MCR";
        const pharagraf = document.createElement("p");
        pharagraf.textContent = "Bahan menggunakan cotton combed 20s, menggunakan print plastisol.";
        aboutSection.append(heading, pharagraf);
      }
    }

    // PREVIEW KEDUA
const gambarListA = [
  "artikel2_front.jpeg",
  "artikel2_back.jpeg",
  "Detail_Mcr1.png",
  "Detail_Mcr2.png"
];

let currentIndexA = 0;

function updatePreviewA() {
  const preview1A = document.getElementById("previewA");
  const preview2A = document.getElementById("previewA2");
  preview1A.setAttribute("src", gambarListA[currentIndexA]);
  const nextIndexA = (currentIndexA + 1) % gambarListA.length;
  preview2A.setAttribute("src", gambarListA[nextIndexA]);
}

function nextA() {
  currentIndexA++;
  if (currentIndexA >= gambarListA.length) currentIndexA = 0;
  updatePreviewA();
}

function backA() {
  currentIndexA--;
  if (currentIndexA < 0) currentIndexA = gambarListA.length - 1;
  updatePreviewA();
}

function tambahdataA() {
  const aboutSectionA = document.getElementById("aboutA");
  if (aboutSectionA.childElementCount === 0) {
    const headingA = document.createElement("h1");
    headingA.textContent = "T-Shirt Sadcore Burn Edition";
    const pharagrafA = document.createElement("p");
    pharagrafA.textContent = "Bahan cotton combed 24s dengan sablon DTG kualitas tinggi.";
    aboutSectionA.append(headingA, pharagrafA);
  }
}
