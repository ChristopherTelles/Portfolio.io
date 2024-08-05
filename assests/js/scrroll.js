// Aguarda o carregamento completo do conteúdo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

    // Cria uma instância de IntersectionObserver para monitorar os elementos de destino
    const observer = new IntersectionObserver(entries => {

        // Itera sobre cada entrada (entry) que o observer está monitorando
        entries.forEach(entry => {

            // Verifica se o elemento está visível no viewport
            if (entry.isIntersecting) {
                // Se o elemento está visível, adiciona a classe para removê-lo do estado inicial oculto
                entry.target.classList.add('init-hidden-off');
            } else {
                // Se o elemento não está visível, remove a classe para voltar ao estado inicial oculto
                entry.target.classList.remove('init-hidden-off');
            }
        });
    }, {
        // Define o threshold, indicando a porcentagem de visibilidade necessária para ativar o callback
        threshold: 0.4 // Quando 50% do elemento está visível, o callback é acionado
    });

    // Seleciona todos os elementos com a classe 'init-hidden'
    document.querySelectorAll('.init-hidden').forEach(element => {
        // Observa cada elemento selecionado, aplicando o IntersectionObserver
        observer.observe(element);
    });
});


//                 CARROCEL

        // Adiciona um ouvinte de evento que executa o código quando o DOM está completamente carregado
        document.addEventListener('DOMContentLoaded', () => {
            // Seleciona o botão para ir para a esquerda (anterior) no carousel
            const prevButton = document.querySelector('.seta-esquerda');
            // Seleciona o botão para ir para a direita (próximo) no carousel
            const nextButton = document.querySelector('.seta-direita');
            // Seleciona o container que contém os blocos do carousel
            const slider = document.querySelector('.todos-blocos');
            // Obtém a largura visível do carousel (viewport)
            const viewportWidth = document.querySelector('.op-habilidades').offsetWidth;

            // Define as posições específicas para onde o carousel deve pular
            const positions = [0, -840, -1665];
            // Índice atual da posição no array de posições
            let currentIndex = 0;

            // Função para atualizar a posição do carousel
            function updateCarousel() {
                // Define a transformação do slider para a posição atual
                slider.style.transform = `translateX(${positions[currentIndex]}px)`;
            }

            // Adiciona um ouvinte de evento de clique no botão "próximo"
            nextButton.addEventListener('click', () => {
                // Avança para a próxima posição no array de posições
                currentIndex = (currentIndex + 1) % positions.length;
                // Atualiza a posição do carousel
                updateCarousel();
            });

            // Adiciona um ouvinte de evento de clique no botão "anterior"
            prevButton.addEventListener('click', () => {
                // Volta para a posição anterior no array de posições
                currentIndex = (currentIndex - 1 + positions.length) % positions.length;
                // Atualiza a posição do carousel
                updateCarousel();
            });

            // Inicializa a posição do carousel quando a página é carregada
            updateCarousel();
        });
