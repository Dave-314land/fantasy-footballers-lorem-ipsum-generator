let loremIpsumDictionary = [
  `Abdullah Express`,
  `Andy`,
  `Andy's Almost Upset of the Week`,
  `Appstanding`,
  `Arizona`,
  `Ballers`,
  `Blake the Snake`,
  `Bonjuour`,
  `Bonus`,
  `Booty Scootin Cam Newtown`,
  `Borgogen`,
  `Borland`,
  `Brooks`,
  `Cardinals`,
  `David Johnson woo-hoo-hoo`,
  `Don't hear what I'm not saying`,
  `Double Stuff Oreos`,
  `Dynasty Download`,
  `FF Hitman`,
  `Fantasy`,
  `Fantasy Hitman`,
  `Fantasy Reaper`,
  `Fantasy Studmuffins`,
  `Fifty-Five`,
  `Footballers`,
  `Footclan`,
  `Footclan Assemble`,
  `Gas Man`,
  `He was drafted to be great`,
  `Hey`,
  `Hockstrap`,
  `I apologize for nothing`,
  `It's football time`,
  `Jason`,
  `Jay Grizz`,
  `Josh Stallion (excellent)`,
  `Judge Giamatti`,
  `Kenny G (so smooth)`,
  `Lizard King`,
  `Mail bag`,
  `Major Payne`,
  `Man bun`,
  `Manilla Ice`,
  `Matty Ice`,
  `Matty Snapback`,
  `Mike`,
  `Mock-a lock-a ding dong`,
  `Muscle Hamster`,
  `My Name is Jeff`,
  `News and Notes from around the league`,
  `New York City`,
  `Oh the Garbage Man can`,
  `Oreos`,
  `Pee River`,
  `Peter Piper Pizza PPR Pick of the Week`,
  `Phoenix`,
  `Pooped in his big boy pants`,
  `Reviewasaurus Rex`,
  `Sammy Biscuits`,
  `Smash Jackson`,
  `Splash`,
  `TFFB`,
  `The Fantasy Footballers`,
  `This one comes in from`,
  `Tony Meatballs`,
  `Trash Man`,
  `Wanna play a game`,
  `Waterbet`,
  `Weeeeeelcome In`,
  `What's it going to be McFly? Are you in or out`,
  `Wheel of Water`,
  `Withstand Victories`,
];

// Define variables
const form = document.querySelector(".lorem-form");
const numberofParagraphsRange = document.getElementById(
  "numberOfParagraphsRange"
);
const numberOfParagraphsNumber = document.getElementById(
  "numberOfParagraphsNumber"
);

const result = document.querySelector(".lorem-text");
const ballersArrayLength = loremIpsumDictionary.length;
let text = 100;

// Load event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", getUserLoremIpsum);
  numberOfParagraphsNumber.addEventListener("input", syncParagraphNumbers);
  numberofParagraphsRange.addEventListener("input", syncParagraphNumbers);
}

function syncParagraphNumbers(e) {
  const value = e.target.value;
  numberofParagraphsRange.value = value;
  numberofParagraphsNumber.value = value;
}

function getRandomNum(ballersArrayLength) {
  return Math.floor(Math.random() * ballersArrayLength);
}

function getUserLoremIpsum(e) {
  let tempArray = [];
  for (i = 0; i < text; i++) {
    let randomIndex = getRandomNum(ballersArrayLength);
    let wordToPush = loremIpsumDictionary[randomIndex];
    tempArray.push(wordToPush);
  }
  let userIpsumArray = tempArray.join(" ");
  result.innerHTML = userIpsumArray;
  result.classList.remove("hidden");
  e.preventDefault();
}
