const gambarList = [
      "Crewneck.png",
      "artikel2_back.jpeg",
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

    // ini bagian 2
