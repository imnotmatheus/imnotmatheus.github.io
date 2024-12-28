document.querySelectorAll('.link-contenido').forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const contenido = document.getElementById(targetId);
        const isVisible = contenido.style.display == 'block';

        document.querySelectorAll('.contenido').forEach(sub => {
            sub.style.display = 'none';
        });

        if (!isVisible) {
            contenido.style.display = 'block';
        }
    });
});