var botoes = document.querySelectorAll('.botao');

botoes.forEach(function(botao) {
    botao.addEventListener('mouseover', function() {
        this.classList.add('hovered'); // Adiciona a classe quando o mouse passa sobre o botão
    });

    botao.addEventListener('mouseout', function() {
        this.classList.remove('hovered'); // Remove a classe quando o mouse deixa o botão
    });
});