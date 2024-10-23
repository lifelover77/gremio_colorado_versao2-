// Adiciona um ouvinte de evento que aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o elemento do formulário pelo seu ID
    const form = document.getElementById('responseForm');
    // Obtém a div onde os resultados serão exibidos pelo seu ID
    const resultDiv = document.getElementById('result');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', (e) => {
        // Previne o comportamento padrão do formulário, que é recarregar a página
        e.preventDefault(); 

        // Cria um objeto FormData a partir do formulário, que coleta todos os dados dos inputs
        const formData = new FormData(form);
        // Converte os dados do FormData em um objeto regular
        const dataObject = Object.fromEntries(formData.entries());

        // Converte o objeto de dados em uma string JSON
        const jsonData = JSON.stringify(dataObject);

        // Exibe uma mensagem na tela com os dados enviados pelo usuário
        resultDiv.innerHTML = `
            <h2>Resposta Enviada!</h2>
            <pre>${jsonData}</pre>
        `;
    });
});
