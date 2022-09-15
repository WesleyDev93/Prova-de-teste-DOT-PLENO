const trocaSimbolo = document.querySelectorAll ('.alteraSimbolo');

const botaoRoxo = document.querySelector ('.accordion-header')

//comportamentos




for (let index = 0; index < trocaSimbolo.length; index++) {
    const mudaSimbolo = trocaSimbolo[index];
    
    mudaSimbolo.addEventListener ( 'click', function troca () {
             mudaSimbolo.textContent = '-';
    });
};



