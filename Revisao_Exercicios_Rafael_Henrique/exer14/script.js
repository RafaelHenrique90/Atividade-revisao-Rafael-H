/* Rafael Henrique Braga de Morais */

function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        if (category === 'Todos') {
            image.style.display = 'block';
        } else {
            if (image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    });
}

filterImages('Todos');
