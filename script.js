const texto = document.getElementById("texto");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const exibeLista = document.getElementById("exibeLista");

const tarefas = [];

function exibirTarefas() {
  exibeLista.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement("li");
    li.textContent = tarefas[i] + " ";

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.setAttribute("data-index", i);
    li.appendChild(botaoExcluir);

    exibeLista.appendChild(li);
  }
}

botaoAdicionar.addEventListener("click", () => {
  const textoLista = texto.value;

  if (textoLista !== "") {
    tarefas.push(textoLista);
    texto.value = "";
    exibirTarefas();
  } else {
    alert("Por favor, digite uma tarefa!");
  }
});

exibeLista.addEventListener("click", (event) => {
  const elementoClicado = event.target;
  const acao = elementoClicado.textContent;

  switch (acao) {
    case "Excluir":
      const index = parseInt(elementoClicado.getAttribute("data-index"));

      if (index >= 0) {
        tarefas.splice(index, 1);
        exibirTarefas();
      }
      break;

    default:
      console.log("Nenhuma ação válida foi detectada.");
      break;
  }
});
