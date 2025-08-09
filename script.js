
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);

            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            pages.forEach(page => {
                if (page.id === target) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });
});
