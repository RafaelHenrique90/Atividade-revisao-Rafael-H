/* Rafael Henrique Braga de Morais */

document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    document.getElementById('wordCount').textContent = wordCount;
});
