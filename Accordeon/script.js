document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const target = document.getElementById(header.dataset.target);

            document.querySelectorAll('.accordion-content').forEach(panel => {
                if (panel !== target) {
                    panel.classList.remove('show');
                }
            });

            target.classList.toggle('show');
        });
    });
});
