/* Rafael Henrique Braga de Morais */
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function() {
  preview.innerHTML = '';
  const files = this.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.classList.add('preview-item');
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  console.log('Arquivos selecionados:', formData.getAll('fileInput'));

});
