// Seleção dos elementos do HTML
const likeBtn = document.getElementById('likeBtn');
const likeCountDisplay = document.getElementById('likeCount');

// Recupera os likes salvos no navegador ou começa do 0
let likes = parseInt(localStorage.getItem('blog_likes')) || 0;
likeCountDisplay.textContent = likes;

// Função executada ao clicar no botão
likeBtn.addEventListener('click', () => {
    likes++;
    likeCountDisplay.textContent = likes;
    
    // Salva no armazenamento local do navegador
    localStorage.setItem('blog_likes', likes);

    // Efeito de animação no número
    likeCountDisplay.classList.add('pulse-anim');
    
    // Remove a classe da animação após terminar para poder usar de novo
    setTimeout(() => {
        likeCountDisplay.classList.remove('pulse-anim');
    }, 300);
});
