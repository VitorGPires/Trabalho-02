// Tarefa 1
document.getElementById('olaMundo').textContent = 'Olá Mundo!';

// Tarefa 2
function calcularSoma() {
    const numero1 = parseFloat(document.getElementById('numero1').value) || 0;
    const numero2 = parseFloat(document.getElementById('numero2').value) || 0;
    const resultado = numero1 + numero2;
    
    document.getElementById('resultadoSoma').textContent = 
        `Resultado: ${numero1} + ${numero2} = ${resultado}`;
}

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