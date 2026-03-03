// Registra o Service Worker (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW registrado!', reg))
            .catch(err => console.error('Erro no SW', err));
    });
}

const formContainer = document.getElementById('form-container');
const printArea = document.getElementById('print-area');

// Gera o Documento
document.getElementById('cracha-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Captura valores
    const matricula = document.getElementById('matricula').value.trim();
    const nome = document.getElementById('nome').value.trim().toUpperCase();
    const funcao = document.getElementById('funcao').value.trim().toUpperCase();
    const via = document.getElementById('via').value;

    // Injeta valores
    document.getElementById('out-matricula').textContent = matricula;
    document.getElementById('out-nome').textContent = nome;
    document.getElementById('out-funcao').textContent = funcao;
    document.getElementById('out-via').textContent = via;

    // Formata a data atual
    const data = new Date();
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    document.getElementById('data-atual').textContent = `Volta Redonda, ${dia} de ${mes} de ${ano}.`;

    // Alterna visualização
    formContainer.style.display = 'none';
    printArea.style.display = 'block';
});

// Botão Voltar
document.getElementById('btn-voltar').addEventListener('click', function() {
    printArea.style.display = 'none';
    formContainer.style.display = 'flex';
});

// Botão Imprimir
document.getElementById('btn-imprimir').addEventListener('click', function() {
    window.print();
});