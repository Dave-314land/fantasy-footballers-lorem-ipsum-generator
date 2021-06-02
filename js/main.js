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
const result = document.querySelector(".lorem-text");
const ballersArrayLength = loremIpsumDictionary.length;
const paragraphsRange = document.getElementById("numberOfParagraphsRange");
const paragraphsNumber = document.getElementById("numberOfParagraphsNumber");

// Load event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", (e) => {
    getUserLoremIpsum(e);
  });
  paragraphsNumber.addEventListener("input", syncParagraphNumbers);
  paragraphsRange.addEventListener("input", syncParagraphNumbers);
}

// Set the range slider and number input equal to the same value
function syncParagraphNumbers(e) {
  const value = e.target.value;
  paragraphsRange.value = value;
  paragraphsNumber.value = value;
}

// Generate random number based on the length of the ballers array
function getRandomNum(ballersArrayLength) {
  return Math.floor(Math.random() * ballersArrayLength);
}

function getUserLoremIpsum(e) {
  let tempArray = [];
  // Converting the paragraphsNumber.value variable into a number for later comparison
  const numParagraphs = parseInt(paragraphsNumber.value);
  // Setting the number of indecies to pull based on the number of paragraphs chosen by the user
  if (numParagraphs === 1) {
    textLength = 100;
  } else if (numParagraphs === 2) {
    textLength = 200;
  } else if (numParagraphs === 3) {
    textLength = 300;
  } else if (numParagraphs === 4) {
    textLength = 400;
  } else {
    textLength = 500;
  }

  // Until the number of indecies is reached, using the random number funtion to grab a random index from the ballers array and pushing it to a new array
  for (i = 0; i < textLength; i++) {
    let randomIndex = getRandomNum(ballersArrayLength);
    let wordToPush = loremIpsumDictionary[randomIndex];
    tempArray.push(wordToPush);
  }

  // Adding line breaks based on length of returned array to represent paragraphs
  if (tempArray.length === 200) {
    tempArray.splice(100, 0, "<br><br>");
  } else if (tempArray.length === 300) {
    tempArray.splice(100, 0, "<br><br>");
    tempArray.splice(201, 0, "<br><br>");
  } else if (tempArray.length === 400) {
    tempArray.splice(100, 0, "<br><br>");
    tempArray.splice(201, 0, "<br><br>");
    tempArray.splice(302, 0, "<br><br>");
  } else if (tempArray.length === 500) {
    tempArray.splice(100, 0, "<br><br>");
    tempArray.splice(201, 0, "<br><br>");
    tempArray.splice(302, 0, "<br><br>");
    tempArray.splice(403, 0, "<br><br>");
  }

  // adding spaces to the array by creating a new object via the join method
  let userIpsum = tempArray.join(" ");

  // adding the text to the DOM and removing the hidden class to display the user's Fantasy Footballers Ipsum text
  result.innerHTML = userIpsum;
  result.classList.remove("hidden");
  e.preventDefault();
}
