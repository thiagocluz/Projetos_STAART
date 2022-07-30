function revelarResposta() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardConteiner");
  pergunta.innerHTML = "";
  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__tada");

  cardDiv.innerHTML = ` 
  <div class="card-cabecalho centralizar">
     <h1 class="card-titulo">${proximaPergunta.title}</h1>
  </div>

  <div id="resposta" class="card-conteudo blur">
   <p>
      ${proximaPergunta.description}
    </p>
  </div>
`;
  pergunta.appendChild(cardDiv);
}

function buscarInformacao() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}
window.addEventListener("load", buscarInformacao);
