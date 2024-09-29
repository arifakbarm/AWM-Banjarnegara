// JavaScript Interaktif untuk Pengelolaan Web
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page fully loaded and ready');

    // ScrollSpy (untuk navigasi smooth scroll pada navbar)
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Placeholder untuk peta interaktif atau elemen lain yang bisa ditambahkan
});
