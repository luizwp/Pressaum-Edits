// Seleciona o vídeo e o botão pelo ID
const video = document.getElementById('meuVideo');
const memoryButton = document.getElementById('memory');

// Adiciona um evento de clique ao botão
memoryButton.addEventListener('click', function() {
    // Alterna o estado de mute do vídeo
    video.muted = !video.muted;

    // Opcional: Mudar o texto do botão com base no estado de mute
    if (video.muted) {
        memoryButton.textContent = 'Desmutar';
    } else {
        memoryButton.textContent = 'Mutar';
    }
});