                                                                                                                                                   // funação mais complicada
//let titulo = document.querySelector('h1')
//titulo.innerHTML = "Jogo do número Secreto ";

// let paragrafo = document.querySelector("p")
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

// variavel para o numero aleatorio
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

// função mais resumida de como colocar texto 
function exibirTextonaTela(tag, texto) { 
   let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMensagemInicial(){
exibirTextonaTela("h1", "Jogo do número Secreto");
exibirTextonaTela("p" , "Escolha um número de 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;


      if (chute==numeroSecreto)
{
  exibirTextonaTela ("h1", "acertou!");
  let palavraTentativa = tentativas > 1 ? `tentativas`: ` tentativa`;
  let mensagemTentativas = `você descrobriu o número secreto com ${tentativas} ${palavraTentativa}`;
  exibirTextonaTela ( "p", mensagemTentativas);
 document.getElementById('reiniciar').removeAttribute ('disabled');
} else { 
       if ( chute > numeroSecreto) {
      exibirTextonaTela( "p", " o número secreto é menor");
} else {
      exibirTextonaTela ("p", "número secreto é maior");
       }
       tentativas++;
       limparCampo ();
   }
}

function  gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista ==numeroLimite){
      listaDeNumerosSorteados = []
    }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
   } else{
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
   }
}
function limparCampo (){
   chute = document.querySelector('input');
   chute.value = '';
}

  function reiniciarJogo (){
   numeroSecreto= gerarNumeroAleatorio();
   limparCampo();
   tentativas= 1;
   exibirMensagemInicial ();
document.getElementById ("reiniciar").setAttribute("disabled" , true)
  }
