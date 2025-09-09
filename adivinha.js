const botaoJogar = document.getElementById("botaoJogar");
const frutas = [
  "abacate",
  "abacaxi",
  "açaí",
  "acerola",
  "ameixa",
  "amora",
  "atemoia",
  "banana",
  "biribá",
  "cacau",
  "cajá",
  "caju",
  "caqui",
  "carambola",
  "cereja",
  "ciriguela",
  "cupuaçu",
  "damasco",
  "durian",
  "figo",
  "framboesa",
  "goiaba",
  "graviola",
  "groselha",
  "jabuticaba",
  "jaca",
  "jambo",
  "kiwi",
  "laranja",
  "limão",
  "lichia",
  "mamão",
  "manga",
  "mangostão",
  "maracujá",
  "melancia",
  "melão",
  "mexerica",
  "mirtilo",
  "morango",
  "nectarina",
  "noni",
  "pera",
  "pêssego",
  "pinha",
  "pitanga",
  "physalis",
  "romã",
  "sapoti",
  "seriguela",
  "tamarindo",
  "tangerina",
  "toranja",
  "tomate",
  "uva",
];

botaoJogar.addEventListener("click", () => {
  digitaFruta();
});

function digitaFruta() {
  let tentativa = "";
  let acertou = false;
  let count = 3;

  alert("Tenho uma lista das principais frutas que existem");

  while (count > 0 && !acertou) {
    tentativa = prompt("Escreva o nome de uma fruta qualquer").toLowerCase();

    if (frutas.includes(tentativa)) {
      alert("Essa fruta existe (na minha lista)");
      acertou = true;
    } else {
      if (count === 1) {
        alert("Você não sabe mesmo nenhuma fruta");
      } else {
        alert("Essa fruta não existe (na minha lista). Tenta de novo");
      }
      count--;
    }
  }
}
