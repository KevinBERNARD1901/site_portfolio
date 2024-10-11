const liens = document.querySelectorAll('nav ul li a');
const barre = document.querySelector('.barre_mouvante');

function change_lien_hover(lien){
    liens.forEach((lien_) => {
        lien_.style.fontWeight = '100';
    });
    lien.style.fontWeight = '500';

    const lien_rect = lien.getBoundingClientRect();
    const navRect = document.querySelector('nav').getBoundingClientRect();

    barre.style.width = `${lien_rect.width}px`;
    barre.style.left = `${lien_rect.left - navRect.left}px`;
}

function set_active_link(){
    const current_page = window.location.pathname.split('/').pop();

    liens.forEach((lien) => {
        const lien_href = lien.getAttribute('href');
        if (lien_href === current_page) {
            change_lien_hover(lien);
        }
    });
}

liens.forEach((lien) => {
    lien.addEventListener('mouseover', () => {
        change_lien_hover(lien);
    });
});

document.querySelector('nav').addEventListener('mouseout', () => {
    set_active_link();
});

set_active_link();