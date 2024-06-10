/* Rafael Henrique Braga de Morais */
const colorAnimationButton = document.getElementById('colorAnimationButton');
const animatedElement = document.getElementById('animatedElement');

let isAnimating = false;

colorAnimationButton.addEventListener('click', () => {
  if (!isAnimating) {
    animatedElement.classList.add('color-animation');
    isAnimating = true;
  } else {
    // Forçar o browser a reprocessar a mudança de classe removendo e adicionando a classe novamente.
    animatedElement.classList.remove('color-animation');
    void animatedElement.offsetWidth; // Trigger reflow
    animatedElement.classList.add('color-animation');
  }
});
