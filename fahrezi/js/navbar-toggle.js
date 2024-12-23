function toggleMenu(button) {
    const navbarCollapse = document.getElementById('ftco-nav');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        // Jika menu sedang terbuka, tutup menu
        navbarCollapse.classList.remove('show');
        button.setAttribute('aria-expanded', 'false');
    } else {
        // Jika menu sedang tertutup, buka menu
        navbarCollapse.classList.add('show');
        button.setAttribute('aria-expanded', 'true');
    }
} 