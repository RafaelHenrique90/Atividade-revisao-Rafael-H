/* Rafael Henrique Braga de Morais */
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Pode-se adicionar aqui a lógica para enviar os dados para um servidor via AJAX
  
    // Exibindo SweetAlert de "envio com sucesso"
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Formulário enviado com sucesso!'
    });
  
    // Limpar os campos do formulário
    document.getElementById('meuFormulario').reset();
  });
  