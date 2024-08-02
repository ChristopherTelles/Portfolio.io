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
