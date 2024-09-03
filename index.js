const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const textoFinal = document.getElementById("texto");
const opcoes = ['rock', 'paper', 'scissors'];
const computador = document.getElementById("computador");


rock.onclick = function(){
    let escolha = opcoes[Math.floor(Math.random()*opcoes.length)];
    console.log(escolha);
    if (escolha === "rock") {
        textoFinal.textContent = "Deu empate :/";
        computador.textContent = "Computador escolheu: rock";
    } else if (escolha === "paper"){
        computador.textContent = "Computador escolheu: paper";
        textoFinal.textContent = "Você perdeu :(";
    } else if (escolha === "scissors"){
        computador.textContent = "Computador escolheu: scissors";
        textoFinal.textContent = "Você ganhou :)";
    }
}
paper.onclick = function(){
    let escolha = opcoes[Math.floor(Math.random()*opcoes.length)];
    console.log(escolha);
    if (escolha === "paper") {
        computador.textContent = "Computador escolheu: paper";
        textoFinal.textContent = "Deu empate :/";
    } else if (escolha === "scissors"){
        computador.textContent = "Computador escolheu: scissors";
        textoFinal.textContent = "Você perdeu :(";
    } else if (escolha === "rock"){
        computador.textContent = "Computador escolheu: rock";
        textoFinal.textContent = "Você ganhou :)";
    }
}
scissors.onclick = function(){
    let escolha = opcoes[Math.floor(Math.random()*opcoes.length)];
    console.log(escolha);
    if (escolha === "scissors") {
        computador.textContent = "Computador escolheu: scissors";
        textoFinal.textContent = "Deu empate :/";
    } else if (escolha === "rock"){
        computador.textContent = "Computador escolheu: rock";
        textoFinal.textContent = "Você perdeu :(";
    } else if (escolha === "paper"){
        computador.textContent = "Computador escolheu: paper";
        textoFinal.textContent = "Você ganhou :)";
    }
}