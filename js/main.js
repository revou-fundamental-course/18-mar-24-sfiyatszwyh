function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

    if (name.trim() == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email.trim() == "") {
        alert("Please enter your email address.");
        return false;
    }

    if (subject.trim() == "") {
        alert("Please select a subject.");
        return false;
    }

    return true;
}

// Ambil semua gambar di dalam elemen dengan kelas "image"
const images = document.querySelectorAll('.image img');

let currentIndex = 0;
const intervalTime = 2000; // Waktu antara setiap slide (dalam milidetik)

function nextSlide() {
    // Sembunyikan gambar saat ini
    images[currentIndex].style.display = 'none';

    // Pindah ke gambar selanjutnya
    currentIndex = (currentIndex + 1) % images.length;

    // Tampilkan gambar selanjutnya
    images[currentIndex].style.display = 'block';
}

// Panggil nextSlide setiap interval waktu
setInterval(nextSlide, intervalTime);