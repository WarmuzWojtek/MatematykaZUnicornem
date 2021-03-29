const header = document.querySelector("header");
const startAdventureBtn = document.querySelector(".intro");
const unicornText = document.querySelector("div.unicornText");
const yesBtn = document.querySelector("button.yes");
const noBtn = document.querySelector("button.no");
const withPleasureBtn = document.querySelector("button.withPleasure");
const nonoBtn = document.querySelector("button.nono");
const chooseBtn = document.querySelector("button.choose");
const sectionLevel = document.querySelector("section.level");
const levelInput = document.querySelector("#level");
const sectionChalenge = document.querySelector("section.chalenge");
const firstNumber = document.querySelector(".first");
const action = document.querySelector(".action");
const secondNumber = document.querySelector(".second");
const wynik = document.querySelector("#wynik");
const start = document.querySelector(".start");
const sectionReload = document.querySelector("section.reload");
const closeReloadBtn = document.querySelector("button.closeReload");
const sectionAnime1 = document.querySelector("section.anime1");
const sectionAnime2 = document.querySelector("section.anime2");
const sectionAnime3 = document.querySelector("section.anime3");
const sectionAnime4 = document.querySelector("section.anime4");
const forward1Btn = document.querySelector(".forward1");
const forward2Btn = document.querySelector(".forward2");
const forward3Btn = document.querySelector(".forward3");
const forward4Btn = document.querySelector(".forward4");
const skipBtn = document.querySelector(".skip");
const alertSec = document.querySelector("section.alert");
const alertBtn = document.querySelector("section.alert button");
let chanceNumber = 10;
let comment = document.querySelector(".comment");
const positiveCmts = [
  "Brawo!",
  "Świetnie!",
  "Dokładnie tak!",
  "Masz rację!",
  "Spoko!",
  "Rządzisz!",
  "Główka pracuje!",
  "Łatwizna!",
  "Dobra odpowiedź!",
];
const negativeCmts = [
  "No coś Ty???",
  "Lepiej się zastanów...",
  "Chyba śnisz!",
  "Źle!",
  "Chyba jednak nie...",
  "Przemyśl to jeszcze",
  "To nie to...",
  "Weź się ogarnij!",
];

const currentPoints = document.querySelector("span");
let points = 0;

// intro part 1
startAdventureBtn.addEventListener("click", function () {
  unicornText.classList.add("show");
  unicornText.classList.remove("hide");
  startAdventureBtn.classList.remove("show");
  startAdventureBtn.classList.add("hide");
  yesBtn.classList.remove("hide");
  yesBtn.classList.add("show");
  noBtn.classList.remove("hide");
  noBtn.classList.add("show");
});

// intro part 2
yesBtn.addEventListener("click", function () {
  console.log("heheh");
  yesBtn.classList.remove("show");
  yesBtn.classList.add("hide");
  noBtn.classList.remove("show");
  noBtn.classList.add("hide");
  withPleasureBtn.classList.remove("hide");
  withPleasureBtn.classList.add("show");
  nonoBtn.classList.remove("hide");
  nonoBtn.classList.add("show");

  unicornText.style.backgroundImage = "url(img/haze3.png)";
});

// intro part 3
withPleasureBtn.addEventListener("click", function () {
  withPleasureBtn.classList.remove("show");
  withPleasureBtn.classList.add("hide");
  nonoBtn.classList.remove("show");
  nonoBtn.classList.add("hide");
  unicornText.style.backgroundImage = "url(img/haze4.png)";
  chooseBtn.classList.remove("hide");
  chooseBtn.classList.add("show");
  const bcgiChange = () => {
    unicornText.style.backgroundImage = "url(img/haze5.png)";
  };
  window.setTimeout(bcgiChange, 8000);
});

// intro do wyboru poziomu
chooseBtn.addEventListener("click", function () {
  chooseBtn.classList.remove("show");
  chooseBtn.classList.add("hide");
  sectionLevel.classList.remove("hide");
  sectionLevel.classList.add("show");
  unicornText.style.display = "none";
  skipBtn.classList.remove("show");
  skipBtn.classList.add("hide");

  levelInput.value = "";
});

skipBtn.addEventListener("click", function () {
  chooseBtn.classList.remove("show");
  chooseBtn.classList.add("hide");
  yesBtn.classList.remove("show");
  yesBtn.classList.add("hide");
  noBtn.classList.remove("show");
  noBtn.classList.add("hide");
  withPleasureBtn.classList.remove("show");
  withPleasureBtn.classList.add("hide");
  nonoBtn.classList.remove("show");
  nonoBtn.classList.add("hide");
  startAdventureBtn.classList.remove("show");
  startAdventureBtn.classList.add("hide");
  skipBtn.classList.add("hide");
  sectionLevel.classList.remove("hide");
  sectionLevel.classList.add("show");
  unicornText.style.display = "none";
  levelInput.value = "";
});

// przejście do zadań

levelInput.addEventListener("change", function () {
  let check = levelInput.value * 1;
  if (!isNaN(check)) {
    sectionLevel.classList.remove("show");
    sectionLevel.classList.add("hide");
    sectionChalenge.classList.remove("hide");
    sectionChalenge.classList.add("show");
    currentPoints.textContent = "0";
    chooseFunction();
  } else {
    alertSec.classList.remove("hide");
    levelInput.value = "";
  }
});

alertBtn.addEventListener("click", function () {
  alertSec.classList.add("hide");
  levelInput.value = "";
});

const chooseFunction = () => {
  if (currentPoints.textContent * 1 < 10) {
    addFunction();
  } else if (currentPoints.textContent * 1 == 10) {
    sectionAnime1.classList.remove("hide");
    sectionAnime1.classList.add("show");
    header.classList.add("hide");
    subFunction();
  } else if (
    currentPoints.textContent * 1 > 10 &&
    currentPoints.textContent * 1 < 20
  ) {
    subFunction();
  } else if (currentPoints.textContent * 1 == 20) {
    sectionAnime2.classList.remove("hide");
    sectionAnime2.classList.add("show");
    header.classList.add("hide");
    if (Math.floor(Math.random() * 100) % 2 == 0) {
      addFunction();
    } else {
      subFunction();
    }
  } else if (currentPoints.textContent * 1 > 20) {
    if (Math.floor(Math.random() * 100) % 2 == 0) {
      addFunction();
    } else {
      subFunction();
    }
  }

  // else if (currentPoints.textContent * 1 == 30) {
  //     sectionAnime3.classList.remove('hide');
  //     sectionAnime3.classList.add('show');
  //     header.classList.add('hide');
  //     addFunction()
  // }
};
forward1Btn.addEventListener("click", function () {
  sectionAnime1.classList.remove("show");
  sectionAnime1.classList.add("hide");
  header.classList.remove("hide");
  header.classList.add("show");
});
forward2Btn.addEventListener("click", function () {
  sectionAnime2.classList.remove("show");
  sectionAnime2.classList.add("hide");
  header.classList.remove("hide");
  header.classList.add("show");
});
forward4Btn.addEventListener("click", function () {
  sectionAnime3.classList.remove("show");
  sectionAnime3.classList.add("hide");
  sectionAnime4.classList.remove("hide");
  sectionAnime4.classList.add("show");
});

start.addEventListener("click", chooseFunction);

const addFunction = () => {
  let points = currentPoints.textContent;
  start.classList.remove("show");
  start.classList.add("hide");
  action.innerText = "+";
  wynik.value = "";
  comment.innerText = "";
  let maxNumber = levelInput.value;
  let num1 = Math.floor(Math.random() * maxNumber);
  let num2 = Math.floor(Math.random() * (maxNumber - num1));
  firstNumber.textContent = num1;
  secondNumber.textContent = num2;
  wynik.focus();

  wynik.addEventListener("change", () => {
    // losowanie komentarza

    const positiveCom =
      positiveCmts[Math.floor(Math.random() * positiveCmts.length)];
    const negativeCom =
      negativeCmts[Math.floor(Math.random() * negativeCmts.length)];

    // sprawdzenie prawidłowości wyniku i przypisanie wylosowanego wyżej komentarza

    if (wynik.value == num1 + num2) {
      comment.innerText = positiveCom;
      points = points * 1 + 1;
      currentPoints.innerText = points;
      if (currentPoints.textContent * 1 == 30) {
        sectionAnime3.classList.remove("hide");
        sectionAnime3.classList.add("show");
        header.classList.add("hide");
        sectionChalenge.classList.remove("show");
        sectionChalenge.classList.add("hide");

        addFunction();
      }
    } else {
      comment.innerText = negativeCom;
    }
    start.classList.remove("hide");
    start.classList.add("show");
  });
};

const subFunction = () => {
  let points = currentPoints.textContent;
  start.classList.remove("show");
  start.classList.add("hide");
  action.innerText = "-";
  wynik.value = "";
  comment.innerText = "";
  let maxNumber = levelInput.value;
  let num1 = Math.floor(Math.random() * maxNumber);
  let num2 = Math.floor(Math.random() * num1);
  firstNumber.textContent = num1;
  secondNumber.textContent = num2;
  wynik.focus();

  wynik.addEventListener("change", () => {
    // losowanie komentarza

    const positiveCom =
      positiveCmts[Math.floor(Math.random() * positiveCmts.length)];
    const negativeCom =
      negativeCmts[Math.floor(Math.random() * negativeCmts.length)];

    // sprawdzenie prawidłowości wyniku i przypisanie wylosowanego wyżej komentarza

    if (wynik.value == num1 - num2) {
      comment.innerText = positiveCom;
      points = points * 1 + 1;
      currentPoints.innerText = points;
      if (currentPoints.textContent * 1 == 30) {
        sectionAnime3.classList.remove("hide");
        sectionAnime3.classList.add("show");
        header.classList.add("hide");
        addFunction();
      }
    } else {
      comment.innerText = negativeCom;
      currentPoints.innerText = points;
    }
  });
};

noBtn.addEventListener("click", function () {
  sectionReload.classList.remove("hide");
  sectionReload.classList.add("show");
  yesBtn.classList.remove("show");
  yesBtn.classList.add("hide");
  noBtn.classList.remove("show");
  noBtn.classList.add("hide");
});

nonoBtn.addEventListener("click", function () {
  sectionReload.classList.remove("hide");
  sectionReload.classList.add("show");
  withPleasureBtn.classList.remove("show");
  withPleasureBtn.classList.add("hide");
  nonoBtn.classList.remove("show");
  nonoBtn.classList.add("hide");
});

closeReloadBtn.addEventListener("click", function () {
  window.location.reload(true);
});
forward3Btn.addEventListener("click", function () {
  window.location.reload(true);
});

// const funArr = [1, 2];
// const randomFunction = funArr[Math.floor(Math.random() * 2)];

// PRZY ODEJMOWANIU BŁĘDNYM ZALICZA PUNKTY

// const chooseFunction = () => {
//     if (points < 10) {
//         addFunction();
//     } else {
//         subFunction()
//     }
// };

// start.addEventListener('click', chooseFunction);

// DOBRZE PRZEŁĄCZA FUNKCJE TYLKO ŻLE NALICZA PUNKTY!!!!!!!!

// const subFunction = () => {
//     action.innerText = '-';
//     wynik.value = '';
//     comment.innerText = '';
//     let num1 = Math.floor(Math.random() * maxNumber);
//     let num2 = Math.floor(Math.random() * num1);
//     firstNumber.textContent = num1;
//     secondNumber.textContent = num2;

//     wynik.addEventListener('change', () => {

//         // losowanie komentarza

//         const positiveCom = positiveCmts[Math.floor(Math.random() * positiveCmts.length)];
//         const negativeCom = negativeCmts[Math.floor(Math.random() * negativeCmts.length)];

//         // sprawdzenie prawidłowości wyniku i przypisanie wylosowanego wyżej komentarza

//         if (wynik.value == num1 - num2) {
//             comment.innerText = positiveCom;

//         } else {
//             comment.innerText = negativeCom;
//         }
//     });
// //     // start.addEventListener('click', addFunction);

// // };

// start.addEventListener('click',
//     console.log('klik'))
//  addFunction);

// const addFunction = () => {

//     wynik.value = '';
//     comment.innerText = '';

//     let num1 = Math.floor(Math.random() * maxNumber);
//     let num2 = Math.floor(Math.random() * (maxNumber - num1));
//     firstNumber.textContent = num1;
//     secondNumber.textContent = num2;

//     wynik.addEventListener('change', () => {

//         // losowanie komentarza

//         const positiveCom = positiveCmts[Math.floor(Math.random() * positiveCmts.length)];
//         const negativeCom = negativeCmts[Math.floor(Math.random() * negativeCmts.length)];

//         // sprawdzenie prawidłowości wyniku i przypisanie wylosowanego wyżej komentarza

//         if (wynik.value == num1 + num2) {
//             comment.innerText = positiveCom;
//             points.push('punkt');
//             currentPoints.innerText = points.length;

//         } else {
//             comment.innerText = negativeCom;
//         }

//     });

// };

// const subFunction = () => {
//     action.innerText = '-';
//     wynik.value = '';
//     comment.innerText = '';
//     let num1 = Math.floor(Math.random() * maxNumber);
//     let num2 = Math.floor(Math.random() * num1);
//     firstNumber.textContent = num1;
//     secondNumber.textContent = num2;

//     wynik.addEventListener('change', () => {

//         // losowanie komentarza

//         const positiveCom = positiveCmts[Math.floor(Math.random() * positiveCmts.length)];
//         const negativeCom = negativeCmts[Math.floor(Math.random() * negativeCmts.length)];

//         // sprawdzenie prawidłowości wyniku i przypisanie wylosowanego wyżej komentarza

//         if (wynik.value == num1 - num2) {
//             comment.innerText = positiveCom;

//         } else {
//             comment.innerText = negativeCom;
//         }
//     });
//     start.addEventListener('click', addFunction);

// };

// start.addEventListener('click',
//     console.log('klik'))
// //  addFunction);
