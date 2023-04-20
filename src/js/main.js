// loader
window.addEventListener("load", function () {
  var preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
  document.body.classList.remove("no-scroll"); // Menghapus kelas "no-scroll" dari elemen body saat loading selesai
});

// Animate 1
var clientsCount = document.getElementById("clients-count");
var clientsCounter = 0;
var clientsInterval = setInterval(function () {
  clientsCounter++;
  clientsCount.innerHTML = clientsCounter;
  if (clientsCounter == 15000) {
    clearInterval(clientsInterval);
  }
}, 1);

// Animate 2
var ourClientsCount = document.getElementById("our-clients-count");
var ourClientsCounter = 0;
var ourClientsInterval = setInterval(function () {
  ourClientsCounter++;
  ourClientsCount.innerHTML = ourClientsCounter;
  if (ourClientsCounter == 80000) {
    clearInterval(ourClientsInterval);
  }
}, 1);

// scrollup-btn
window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var clientHeight = document.documentElement.clientHeight;
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPosition >= clientHeight) {
    document.querySelector(".scroll-up-button").style.display = "block";
  } else {
    document.querySelector(".scroll-up-button").style.display = "none";
  }
});

// Fungsi untuk me-redirect ke halaman atas ketika tombol scroll up di klik
document
  .querySelector(".scroll-up-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
