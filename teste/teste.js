const arrowButton = document.getElementById('arrowButton');
const image = document.getElementById('image');

arrowButton.addEventListener('click', () => {
    // Verifica qual é a imagem atual
    const currentImage = image.getAttribute('src');

    // Verifica se a imagem atual é imagem1.jpg e altera para imagem2.jpg, caso contrário, muda de volta para imagem1.jpg
    if (currentImage === 'imagem1.jpg') {
        image.setAttribute('src', '/arquivos_SVG/produtos/bermudacinza.svg');
    } else {
        image.setAttribute('src', '/arquivos_SVG/produtos/camisaCinza.svg');
    }
});