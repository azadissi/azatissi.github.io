document.addEventListener("DOMContentLoaded", function () {
  //projelerim sayfasına gider
  var projectCard = document.querySelector(".card");
  projectCard.addEventListener("click", function () {
    window.location.href = "project-details.html";
  });

  //yukarıya dön butonunu çalıştırır
  var toTopButton = document.querySelector("#myBtn");
  //sayfada 100 piksel aşağı kaydırma olursa 'yukarıya dön' butonunu gösterir
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      toTopButton.style.display = "block";
    } else {
      toTopButton.style.display = "none";
    }
  });
  //yukarıya dön butonuna tıklandığında sayfanın üstüne kaydırır
  toTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //insta twitter açılır butonları
  var sliderContainers = document.querySelectorAll(".slider");
  sliderContainers.forEach(function (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", function () {
      sliderContainer.classList.add("active");
    });

    sliderContainer.addEventListener("mouseleave", function () {
      sliderContainer.classList.remove("active");
    });
  });
});
