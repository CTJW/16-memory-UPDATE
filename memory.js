let arrOfPairs = [
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
  `<img src="1">`,
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

document.querySelector("#boxes").innerHTML = arrOfPairsHtml;
