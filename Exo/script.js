let text = "Wilson-2";
let pointer = 0;
const main = document.querySelector("main");
let sectionWilson_2;
let sectionTimeSpend;
let timerSpend = 55;
function writeWilson_2() {
  if (document.querySelector(".wilson_2") === null) {
    sectionWilson_2 = document.createElement("section");
    sectionWilson_2.classList = "wilson_2";
    main.append(sectionWilson_2);
  }
  let span = document.createElement("span");
  span.innerHTML = text[pointer++];
  sectionWilson_2.appendChild(span);
  if (pointer == text.length) {
    clearInterval(1);
  }
}
function timeSpendHere() {
  if (document.querySelector(".TimeSpend") === null) {
    sectionTimeSpend = document.createElement("section");
    sectionTimeSpend.classList = "TimeSpend";
    main.append(sectionTimeSpend);
  }
  let span = document.createElement("span");
  if (timerSpend < 59) {
    span.innerHTML = `Vous avez passez ${++timerSpend} secondes ici`;
  } else {
    span.innerHTML = `Vous avez passez ${Math.floor(
      ++timerSpend / 60
    )} minute(s) et ${timerSpend % 60} seconde(s) ici`;
  }

  sectionTimeSpend.innerHTML = span.outerHTML;
}
setInterval(writeWilson_2, 1000);
setInterval(timeSpendHere, 1000);
