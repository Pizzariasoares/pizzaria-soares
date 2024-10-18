// Seleciona todos os botões de tamanho
const tamanhoButtons = document.querySelectorAll('.tamanho');

// Função para definir o tamanho e redirecionar
tamanhoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tamanhoValue = button.getAttribute('data-value');
        document.getElementById('tamanho').value = tamanhoValue;

        // Salva o tamanho no Local Storage
        localStorage.setItem('tamanhoPizza', tamanhoValue);

        // Redireciona para a página de sabores
        window.location.href = 'sabores.html'; // Altere para o nome correto do seu arquivo de sabores
    });
});
button.addEventListener('click', () => {
    const tamanhoValue = button.getAttribute('data-value');
    alert(`Tamanho selecionado: ${tamanhoValue}`); // Adicione esta linha para testar
    document.getElementById('tamanho').value = tamanhoValue;

    localStorage.setItem('tamanhoPizza', tamanhoValue);
    window.location.href = 'sabores.html';
});
