// Função para abrir o modal com a imagem ampliada
function openModal(imgElement) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    
    // Define a imagem do modal como a imagem clicada
    modalImg.src = imgElement.src;
    
    // Exibe o modal
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('lightbox-modal');
    
    // Esconde o modal
    modal.style.display = 'none';
}