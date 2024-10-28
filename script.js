document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Pesan Anda telah dikirim!");
});

const typedText = "And I am a Computer Scientist";
const textElement = document.getElementById("typed-text");
let index = 0;
let isDeleting = false;

function type() {
    if (isDeleting) {
        // Menghapus karakter
        textElement.textContent = typedText.substring(0, index--);
    } else {
        // Mengetik karakter
        textElement.textContent = typedText.substring(0, index++);
    }

    // Menentukan kapan untuk beralih antara mengetik dan menghapus
    if (!isDeleting && index === typedText.length) {
        setTimeout(() => {
            isDeleting = true; // Set ke menghapus
            type(); // Mulai menghapus
        }, 1000);
    } else if (isDeleting && index < 0) {
        isDeleting = false; // Set kembali ke mengetik
        index = 0; // Reset index untuk memulai kembali
        setTimeout(type, 500); // Jeda sebelum mulai mengetik lagi
    } else {
        setTimeout(type, isDeleting ? 50 : 80); // Kecepatan mengetik dan menghapus
    }
}

// Mulai efek mengetik
type();
