// Mengambil nilai judul dan deskripsi dari query string
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const description = urlParams.get("description");

// Menampilkan judul dan deskripsi pada elemen HTML
const titleElement = document.getElementById("blog-title");
const descriptionElement = document.getElementById("blog-description");

titleElement.textContent = title;
descriptionElement.textContent = description;
