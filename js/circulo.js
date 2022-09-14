const botaoAmelo = document.querySelector ('.posicao_circulo01');
const botaoCinza = document.querySelector ('.posicao_circulo02');
const botaoVermelho = document.querySelector ('.posicao_circulo03');



const TrocaTexto = document.querySelector ('.alteraTexto');
const alteraCirculo = document.querySelector ('.alteraCirculo');

const textoBotoes = document.querySelector ('.alteraTexto02');

//comportamentos

botaoAmelo.addEventListener ('click', ()=>{
    TrocaTexto.textContent = "“Este texto é referente ao botão que está sobre a flecha Amarela!”."
    alteraCirculo.style.background = '#ffcc33';
    textoBotoes.textContent = "Tudo começa pela conceitualização, onde nossa equipe fornece um planejamento pedagógico que garante cursos de alta qualidade e eficazes que  incorporam elementos críticos como a aprendizagem ativa. Nosso método é flexível para que juntos possamos desenvolver uma solução que atenda às suas necessidades.";
});



botaoCinza.addEventListener ('click', ()=>{
    TrocaTexto.textContent = "“Este texto é referente ao botão que está sobre a flecha Cinza!”."
    alteraCirculo.style.background = '#707070';
    textoBotoes.textContent = "O WhatsApp está instalado em cerca de 99% dos smartphones do Brasil e cerca de 79% das pessoas utilizam o aplicativo como principal fonte de informação. Nada melhor do que  adotar um canal digital popular para levar a educação corporativa para públicos com pouco acesso a computador.";
});


botaoVermelho.addEventListener ('click', ()=>{
    TrocaTexto.textContent = "“Este texto é referente ao botão que está sobre a flecha Vermelho!”."
    alteraCirculo.style.background = '#ff3737';
    textoBotoes.textContent = "Jogos educacionais são onde as características e princípios de jogos são incorporados dentro das atividades de aprendizado em um projeto de Educação Corporativa Digital. Os jogos promovem o engajamento e a motivação do aluno para aprender.";
});