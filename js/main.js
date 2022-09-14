// botoes

const botao01 = document.querySelector ('.botao01');



const botao02 = document.querySelector ('.botao02');



const botao03 = document.querySelector ('.botao03');




// textos
const texto01 = document.querySelector ('.posicaoTexto01');


const texto02 =  document.querySelector ('.posicaoTexto02');


const texto03 = document.querySelector ('.posicaoTexto03');


// eventos


botao01.addEventListener ('click', () =>{
     texto01.style.display = 'block';
     texto02.style.display = 'none';
     texto03.style.display = 'none';
});


botao02.addEventListener ('click', () =>{
    texto01.style.display = 'none';
    texto02.style.display = 'block';
    texto03.style.display = 'none';
});


botao03.addEventListener ('click', () =>{
    texto01.style.display = 'none';
    texto02.style.display = 'none';
    texto03.style.display = 'block';
});
