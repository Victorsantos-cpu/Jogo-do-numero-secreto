let listadeNumerosSecretos = [];
let limiteNumeroSecreto = 100;
let numeroSecreto = geradorNumeroAleatorio();
let tentativas = 1;

mensagemInicial();
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {exibirTextoNaTela('p', 'o número é menor');}
            else{exibirTextoNaTela('p', 'o número é maior');}
    tentativas++;
    limparCampo();
        }
}
function mensagemInicial(){  
    exibirTextoNaTela('h1', 'Jogo secreto');
    exibirTextoNaTela('p', 'escolha um numero de 1 a 100');

}

function geradorNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* limiteNumeroSecreto + 1);
    let quantidadeDeElementosNaLista = listadeNumerosSecretos.length;
        if(quantidadeDeElementosNaLista == limiteNumeroSecreto){
            listadeNumerosSecretos = []}
        if(listadeNumerosSecretos.includes(numeroEscolhido)){
            return geradorNumeroAleatorio();
        } else {
            listadeNumerosSecretos.push(numeroEscolhido);
            return numeroEscolhido;    
        }
    }

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarNovoJogo() {
    numeroSecreto = geradorNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}