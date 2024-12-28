// seleciona todos os elementos menu-item, faz uma lista e itera
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
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