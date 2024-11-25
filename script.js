

document.addEventListener('DOMContentLoaded', () => {
    const avaliacoes = document.querySelectorAll('.estrelas');
    
    avaliacoes.forEach(avaliacao => {
        const estrelas = parseInt(avaliacao.getAttribute('data-avaliacao'));
        let estrelasHtml = '';

        for (let i = 0; i < 5; i++) {
            if (i < estrelas) {
                estrelasHtml += '★'; 
            } else {
                estrelasHtml += '☆'; 
            }
        }

        avaliacao.innerHTML = estrelasHtml;
    });
});
