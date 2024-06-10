/* Rafael Henrique Braga de Morais */
function addComment() {
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== "") {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.textContent = commentText;

        const commentsList = document.getElementById('commentsList');
        commentsList.appendChild(comment);

        document.getElementById('commentText').value = "";
    } else {
        alert('Por favor, escreva um comentário antes de adicionar.');
    }
}
