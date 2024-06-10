/* Rafael Henrique Braga de Morais */
function toggleMenu() {
    const nav = document.querySelector('.nav');
    const bars = document.querySelectorAll('.bar');
    nav.classList.toggle('menu-open');
    bars.forEach(bar => bar.classList.toggle('menu-open'));
  }
  