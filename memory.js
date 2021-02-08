let arrOfPairs = [
  `<div id="icon1"><img src="1"></div>`,
  `<div id="icon1"><img src="1"></div>`,
  `<div id="icon2"><img src="1"></div>`,
  `<div id="icon2"><img src="1"></div>`,
  `<div id="icon3"><img src="1"></div>`,
  `<div id="icon3"><img src="1"></div>`,
  `<div id="icon4"><img src="1"></div>`,
  `<div id="icon4"><img src="1"></div>`,
  `<div id="icon5"><img src="1"></div>`,
  `<div id="icon5"><img src="1"></div>`,
  `<div id="icon6"><img src="1"></div>`,
  `<div id="icon6"><img src="1"></div>`,
  `<div id="icon7"><img src="1"></div>`,
  `<div id="icon7"><img src="1"></div>`,
  `<div id="icon8"><img src="1"></div>`,
  `<div id="icon8"><img src="1"></div>`,
  `<div id="icon9"><img src="1"></div>`,
  `<div id="icon9"><img src="1"></div>`,
];

arrOfPairs = shuffle(arrOfPairs);
console.log(arrOfPairs);

let arrOfPairsHtml = arrOfPairs
  .map(function (item) {
    return `<div class="squares">${item}</div>`;
  })
  .join("");

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

addEventListener()



document.querySelector("#boxes").innerHTML = arrOfPairsHtml;
