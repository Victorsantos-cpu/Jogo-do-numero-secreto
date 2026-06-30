alert("bem vindo ao jogo do numero secreto");
let NumeroMaximo = 1000
let NumeroSecreto = parseInt(Math.random() * NumeroMaximo + 1);
console.log(NumeroSecreto);
let chute; 
let tentativa = 1


while (chute != NumeroSecreto)
    { chute = prompt(`escolha um numero entre 1 e ${NumeroMaximo}`);
    if (chute == NumeroSecreto) {
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        alert(`parabens voce ganhou em ${tentativa} ${palavraTentativa}`);}
    else {
        if (chute > NumeroSecreto) {alert(`O numero é menor ${chute}`)}
        else {alert(`O numero é maior ${chute}`)}
        tentativa++;
    }
}
