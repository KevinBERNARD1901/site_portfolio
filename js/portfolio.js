const block_zoom = document.querySelector('#block_zoom');
const image_zoom = document.querySelector('.image_zoom');
const images = document.querySelectorAll('img.media');
const close_button = document.querySelector('.close');
const fleche_gauche = document.querySelector('.fleche_gauche');
const fleche_droite = document.querySelector('.fleche_droite');
const media_hover = document.querySelector('.media_hover');
const media_hover_text = document.querySelector('#media_hover_text');

function getImageZoomIndex() {
    return Array.from(images).findIndex(image => image.src === image_zoom.src);
}

media_hover.addEventListener('mouseover', () => {
    media_hover.style.display = 'flex';
});
media_hover.addEventListener('mouseout', () => {
    media_hover.style.display = 'none';
});
media_hover.addEventListener('click', () => {
    block_zoom.style.display = 'flex';
    image_zoom.src = images[getImageZoomIndex()].src;
    setTimeout(() => {
        block_zoom.style.opacity = '1';
        image_zoom.style.opacity = '1';
    }, 100);
});

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image_zoom.src = image.src;
        image.style.opacity = '0.8';
        media_hover.style.display = 'flex';
        media_hover_text.innerHTML = image.src.split('/').pop().split('.')[0];
        media_hover.style.left = `${image.getBoundingClientRect().left}px`;
        media_hover.style.bottom = `${window.innerHeight - image.getBoundingClientRect().bottom}px`;
        media_hover.style.width = `${image.getBoundingClientRect().width}px`;
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = '1';
        media_hover.style.display = 'none';
    });
    image.addEventListener('click', () => {
        block_zoom.style.display = 'flex';
        setTimeout(() => {
            block_zoom.style.opacity = '1';
            image_zoom.style.opacity = '1';
        }, 100);
    });
});

close_button.onclick = () => {
    block_zoom.style.opacity = '0';
    image_zoom.style.opacity = '0';
    setTimeout(() => {
        block_zoom.style.display = 'none';
    }, 500);
};

fleche_gauche.onclick = (e) => {
    e.stopPropagation();
    let index_image_zoom = getImageZoomIndex();
    let max_index = images.length - 1;
    let index = index_image_zoom - 1;
    if (index < 0) {
        index = max_index;
    }
    image_zoom.src = images[index].src;
}

fleche_droite.onclick = (e) => {
    e.stopPropagation();
    let index_image_zoom = getImageZoomIndex();
    let max_index = images.length - 1;
    let index = index_image_zoom + 1;
    if (index > max_index) {
        index = 0;
    }
    image_zoom.src = images[index].src;
}

block_zoom.onclick = () => {
    block_zoom.style.opacity = '0';
    image_zoom.style.opacity = '0';
    setTimeout(() => {
        block_zoom.style.display = 'none';
    }, 500);
}

image_zoom.onclick = (e) => {
    e.stopPropagation();
}