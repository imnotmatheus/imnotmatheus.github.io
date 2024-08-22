// ajuste para mobile
function moveSubmenus() {
    const submenus = document.querySelectorAll('.submenu');
    // Se for desktop ou tablet (tela > 768px), coloca os submenus fora do menu
    if (window.innerWidth > 768) {
        submenus.forEach(submenu => {
            document.body.appendChild(submenu);
        });
    }
}

window.addEventListener('load', moveSubmenus);

// seleciona todos os elementos menu-item, faz uma lista e itera
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const menuId = item.getAttribute('id');
        const targetId = item.getAttribute('data-target');
        const menu = document.getElementById(menuId);
        const submenu = document.getElementById(targetId);
        const isVisible = submenu.style.display == 'block';

        // esconde todos os submenus
        document.querySelectorAll('.submenu').forEach(sub => {
            sub.style.display = 'none';
        });

        // exibe o submenu clicado, se estava escondido
        if (!isVisible) {
            submenu.style.display = 'block';
        }
    });
});