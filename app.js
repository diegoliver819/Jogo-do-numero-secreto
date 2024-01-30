let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;  
      responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
} 

function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'jogo do número secreto');
exibirTextoNaTela('p' , 'escolha um número entre 1 e 10');

}
    exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let messagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', messagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p' , 'O numero secreto é menor que o chute');
    } else {
        exibirTextoNaTela('p' , 'O numero secreto é maior que o chute');
    }
    tentativas++;
    limparCampo();
}
}

function gerarNumeroAleatorio() {
    let numeroEscolhindo = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroMaximo ) {
    listaDeNumerosSorteados = [];
}
    if (listaDeNumerosSorteados.includes(numeroEscolhindo)) {
        return gerarNumeroAleatorio();
    }   else {
        listaDeNumerosSorteados.push(numeroEscolhindo);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhindo;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true );
};