function getRandomMole() {
  return Math.floor(Math.random() * 12);
}

const sectionGame = document.querySelector(".gameWhackaMole");
let divGame = sectionGame.querySelectorAll("div");
let elementSelected;
let oldValue = 0;
let score = 0;
let countOfmole = prompt("Combien de Taupe voulez vous tapez ?");
let countOfmoleOrigine = countOfmole;

function getDisplayScore() {
  sectionGame.classList.add("scorePoint");
  const displayScore = document.querySelector(".score");
  score++;
  displayScore.innerHTML = `<span>SCORE:${score}</span>`;
}

function getNewMole() {
  let value = getRandomMole();
  sectionGame.classList.remove("scorePoint");
  divGame[oldValue].classList.remove("selected");
  oldValue = value;
  divGame[value].classList.add("selected");
  elementSelected = divGame[value];
  elementSelected.addEventListener("click", getDisplayScore, { once: true }); 
  if (countOfmole == 0) {
    clearInterval(1);
    sectionGame.innerHTML = `Vous avez obtenu ${score}/${countOfmoleOrigine}`;
  }
  countOfmole--;
}
setInterval(getNewMole, 1500);
