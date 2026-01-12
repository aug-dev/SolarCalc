console.log("conectado com sucesso");

const form = document.getElementById("formSolar");
form.addEventListener("submit", function(event){
    event.preventDefault();

console.log("botao calcular clicado");

const estadoInput = document.getElementById("estado");
const estadoSigla = estadoInput.value.trim().toUpperCase();
const cidade = document.getElementById("cidade");
const inputValor = document.getElementById("gastoMensal");
const gastoMensal = Number(inputValor.value);

const resultadoSection = document.getElementById("resultado");
if(resultadoSection){
   resultadoSection.hidden = false;
   console.log("resultado apareceu");
}

const hspPorEstado = {
AM: 5.5,
SP: 5.4,
RJ: 5.1

}
const perdas = 0.75;
const hsp = hspPorEstado[estadoSigla];
const pot = gastoMensal/(hsp*30*perdas);
let qntPaineil = pot/0.55; //a potencia total dividido por uma potencia individual de um painel de 550w
qntPaineil = Math.round(qntPaineil);
const temp = document.getElementById("qntPaineis");
temp.innerText = `Vai precisar de ${qntPaineil} paineis solares`;


console.log(hsp);
});

