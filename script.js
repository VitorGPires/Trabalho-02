// Tarefa 1
document.getElementById('olaMundo').textContent = 'Olá Mundo!';

// Tarefa 2
const a = 15;
const b = 25;
document.getElementById('resultadoSoma').textContent = `Soma: ${a + b}`;

// Tarefa 3
function alterarPorId() {
    const elemento = document.getElementById('textoPorId');
    elemento.classList.toggle('texto-vermelho');
}

// Tarefa 4
function alterarPorName() {
    const elementos = document.getElementsByName('textoPorName');
    elementos[0].classList.toggle('fundo-amarelo');
}

// Tarefa 5
function alterarPorClass() {
    const elementos = document.getElementsByClassName('classe-exemplo');
    for (let elemento of elementos) {
        elemento.classList.toggle('texto-grande-azul');
    }
}