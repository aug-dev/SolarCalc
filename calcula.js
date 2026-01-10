console.log("conectado com sucesso");

const form = document.getElementById("formSolar");
form.addEventListener("submit", function(event){
    event.preventDefault();

console.log("botao calcular clicado");

const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const inputValor = document.getElementById("gastoMensal");
const gastoMensal = Number(inputValor.value);

const resultadoSection = document.getElementById("resultado");
if(resultadoSection){
   resultadoSection.hidden = false;
   console.log("resultado apareceu");
}

const pot = gastoMensal/5*30;
const qntPaineil = pot/0.55;
console.log(qntPaineil);


});

