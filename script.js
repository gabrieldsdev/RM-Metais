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

// Funções para alternar as imagens da galeria
function showCompras() {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = `
        <img src="images/compras1.jpg" alt="Foto 1" class="foto" onclick="openModal(this)">
        <img src="images/compras2.jpg" alt="Foto 2" class="foto" onclick="openModal(this)">
        <img src="images/compras3.jpg" alt="Foto 3" class="foto" onclick="openModal(this)">
        <img src="images/compras4.jpg" alt="Foto 4" class="foto" onclick="openModal(this)">
        <img src="images/compras5.jpg" alt="Foto 5" class="foto" onclick="openModal(this)">
        <img src="images/compras6.jpg" alt="Foto 6" class="foto" onclick="openModal(this)">
        <img src="images/compras7.jpg" alt="Foto 7" class="foto" onclick="openModal(this)">
        <img src="images/compras8.jpg" alt="Foto 8" class="foto" onclick="openModal(this)">
        <img src="images/compras9.jpg" alt="Foto 9" class="foto" onclick="openModal(this)">
        <img src="images/compras10.jpg" alt="Foto 10" class="foto" onclick="openModal(this)">
        <img src="images/compras11.jpg" alt="Foto 11" class="foto" onclick="openModal(this)">
        <img src="images/compras12.jpg" alt="Foto 12" class="foto" onclick="openModal(this)">
        
    `;
}

function showReaproveitados() {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = `
        <img src="images/reaproveitadas1.jpg" alt="Foto 1" class="foto" onclick="openModal(this)">
        <img src="images/reaproveitadas2.jpg" alt="Foto 2" class="foto" onclick="openModal(this)">
        <img src="images/reaproveitadas3.jpg" alt="Foto 3" class="foto" onclick="openModal(this)">
        <img src="images/reaproveitadas4.jpg" alt="Foto 4" class="foto" onclick="openModal(this)">
        <img src="images/reaproveitadas5.jpg" alt="Foto 5" class="foto" onclick="openModal(this)">
        <img src="images/reaproveitadas6.jpg" alt="Foto 6" class="foto" onclick="openModal(this)">
        <img src="images/reaproveitadas7.jpg" alt="Foto 7" class="foto" onclick="openModal(this)">
        <img src="images/reaproveitadas8.jpg" alt="Foto 8" class="foto" onclick="openModal(this)">
        
    `;
}

// Exibe "Compras" por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', showCompras);
