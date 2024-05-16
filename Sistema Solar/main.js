// Selecione o elemento .sol
const solElement = document.querySelector('.sol');

// Inicialize uma variável para rastrear o número de cliques
let clickCount = 0;

// Adicione um ouvinte de evento de clique ao elemento .sol
solElement.addEventListener('click', () => {
    // Incrementar o número de cliques
    clickCount++;

    // Se o número de cliques for ímpar (1ª, 3ª, 5ª...), duplique a velocidade da animação
    // Se o número de cliques for par (2ª, 4ª, 6ª...), mantenha a velocidade atual da animação
    switch (clickCount) {
        case 1:
            multiplyAnimationSpeed(2);
            break;
        case 3:
            multiplyAnimationSpeed(5);
            break;
        case 5:
            multiplyAnimationSpeed(10);
            break;
        case 7:
            // Retorne à velocidade original da animação após o quarto clique
            multiplyAnimationSpeed(1);
            // Resetar o contador de cliques
            clickCount = 0;
            break;
    }
});

// Função para multiplicar a velocidade da animação
function multiplyAnimationSpeed(factor) {
    // Selecione todos os elementos dentro de .container que possuem animação
    const animatedElements = document.querySelectorAll('.container > *');

    // Iterar sobre os elementos e atualizar a propriedade de animação
    animatedElements.forEach(element => {
        // Obter a duração atual da animação
        const currentAnimationDuration = window.getComputedStyle(element).animationDuration;

        // Remover 's' do final e converter para número
        const currentDurationValue = parseFloat(currentAnimationDuration);

        // Multiplicar a duração atual pela fator
        const newDurationValue = currentDurationValue * factor;

        // Atualizar a propriedade de animação com a nova duração
        element.style.animationDuration = `${newDurationValue}s`;
    });
}
