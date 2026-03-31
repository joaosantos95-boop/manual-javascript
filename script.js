
let nome = "João";
const idade = 18;


function mudarTexto() {
  document.getElementById("texto").innerText = "Texto alterado";
}


function mostrarNome() {
  let valor = document.getElementById("nome").value;
  document.getElementById("resultado").innerText = "Olá " + valor;
}


function verificarIdade() {
  let idadeDigitada = document.getElementById("idade").value;

  if (idadeDigitada >= 18) {
    document.getElementById("respostaIdade").innerText = "Maior de idade";
  } else {
    document.getElementById("respostaIdade").innerText = "Menor de idade";
  }
}

function contar() {
  let lista = document.getElementById("lista");

  lista.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    let item = document.createElement("li");
    item.innerText = i;
    lista.appendChild(item);
}
}

let soma = 2 + 3;
console.log("Soma:", soma);

console.log(5 == "5");
console.log(5 === "5");