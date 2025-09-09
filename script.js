const texto = document.getElementById("texto");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const exibeLista = document.getElementById("exibeLista");

const tarefas = [];

function exibirTarefas() {
  while (exibeLista.firstChild) {
    exibeLista.removeChild(exibeLista.firstChild);
  }

  for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement("li");
    li.textContent = tarefas[i] + " ";

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.dataset.index = i;

    li.appendChild(botaoExcluir);
    exibeLista.appendChild(li);
  }
}

function adicionarTarefa() {
  const tarefa = texto.value.trim();

  switch (tarefa) {
    case "":
      alert("A tarefa não pode estar vazia!");
      break;
    case "exemplo":
      alert("Essa é uma tarefa de exemplo. Adicione algo real!");
      break;
    default:
      tarefas.push(tarefa);
      texto.value = "";
      exibirTarefas();
  }
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

texto.addEventListener("keydown", (e) => {
  if (e.key === "Enter") adicionarTarefa();
});

exibeLista.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = parseInt(e.target.dataset.index, 10);
    if (!isNaN(index)) {
      tarefas.splice(index, 1);
      exibirTarefas();
    }
  }
});
