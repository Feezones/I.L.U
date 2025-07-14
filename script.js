// Configura as imagens do slideshow
const images = ["imagens/us.jpg", "imagens/us2.jpg", "imagens/us3.jpg", "imagens/us4.jpg"];
let currentIndex = 0;
const imageElement = document.getElementById('image');

// Troca de imagens a cada X milissegundos
const imageChangeInterval = 5000; // 5 segundos

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}, imageChangeInterval);

// Configura a data inicial do contador
const startDate = new Date('2025-06-15T17:00:00'); // Data Y
const timerElement = document.getElementById('timer');

// Atualiza o contador a cada segundo
setInterval(() => {
    const now = new Date();
    const diffMs = now - startDate;

    const seconds = Math.floor(diffMs / 1000) % 60;
    const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
    const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    timerElement.textContent = `${days} dias, ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
