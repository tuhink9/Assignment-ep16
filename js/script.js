const mbi = document.getElementById('mbi');
const navlinks = document.getElementById('nav-links');

mbi.addEventListener('click', () => {
    navlinks.classList.toggle('active');
})