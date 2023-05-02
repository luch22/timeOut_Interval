function getRandomMole() {
  return Math.floor(Math.random() * 13);
}
const sectionGame = document.querySelector(".gameWhackaMole");
let divGame = sectionGame.querySelectorAll("div");
let score = 0;
divGame.forEach((element) => {
  element.addEventListener("click", (e) => {});
});

function getNewMole() {
  let value = getRandomMole();
  switch (value) {
    case 1:
      console.log(value);
      score++;
      break;
    case 2:
      console.log(value);
      score++;
      break;
    case 3:
      console.log(value);
      score++;
      break;
    case 4:
      console.log(value);
      score++;
      break;
    case 5:
      console.log(value);
      score++;
      break;
    case 6:
      console.log(value);
      score++;
      break;
    case 7:
      console.log(value);
      score++;
      break;
    case 8:
      console.log(value);
      score++;
      break;
    case 9:
      console.log(value);
      score++;
      break;
    case 10:
      console.log(value);
      score++;
      break;
    case 11:
      console.log(value);
      score++;
      break;
    case 12:
      console.log(value);
      score++;
      break;
    default:
      break;
  }
}
setInterval(getNewMole, 3000);
