let loremIpsumDictionary = [
  `Abdullah Express`,
  `A.J. Villain`,
  `Andy`,
  `Andy's Almost Upset of the Week`,
  `Announcing...Jared Garf`,
  `Appstanding`,
  `Arizona`,
  `Awesome Eckler`,
  `Ballers`,
  `Big Herb`,
  `Big Montana`,
  `Blake the Snake`,
  `Bonjuour`,
  `Bonus`,
  `Booty Scootin Cam Newtown`,
  `Borgogen`,
  `Borland`,
  `Brandon Aiyuken`,
  `Brooks`,
  `Bruce Wayne Gallman`,
  `Cardinals`,
  `Carry on Johnson`,
  `Chris Goblin`,
  `Darnold Schwarzenegger`,
  `Derrick Yeti`,
  `Darren Wallerus`,
  `David Johnson woo-hoo-hoo`,
  `David Mopportunity`,
  `Devin 'S' Scrumptious`,
  `Dirty cake`,
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
  `Get to the touchdown`,
  `He is infinite, he is all`,
  `He was drafted to be great`,
  `Hey`,
  `Hey, don't forget about me, Mark Waltonburg`,
  `Hey, it's me, Dave`,
  `Hockstrap`,
  `Hockules`,
  `Hot Locket`,
  `I apologize for nothing`,
  `I've believe you've met my fitness consigliere, Sony Michele`,
  `It's football time`,
  `Jason`,
  `Jared Cuuuooke`,
  `Ja Rule - murrrder`,
  `Jay Grizz`,
  `Jimmy Grahmpa`,
  `Josh Stallion (excellent)`,
  `Judge Giamatti`,
  `Kenny Bills - Money money money money money`,
  `Kenny G (so smooth)`,
  `Lizard King`,
  `Mail bag`,
  `Major Payne`,
  `Man bun`,
  `Manilla Ice`,
  `Matty Ice`,
  `Matty Snapback`,
  `MEGALADON`,
  `Mike`,
  `Mock-a lock-a ding dong`,
  `Muscle Hamster`,
  `Mr. B-hole`,
  `Mr. Irresponsible`,
  `My Name is Jeff`,
  `News and Notes from around the league`,
  `New York City`,
  `Now you're a man, a man, man, man`,
  `Oh the Garbage Man can`,
  `One more big score`,
  `Pee River`,
  `Peter Piper Pizza PPR Pick of the Week`,
  `Phoenix`,
  `Pooped in his big boy pants`,
  `Red Dead Dixon`,
  `Reviewasaurus Rex`,
  `Rule 86`,
  `Sammy Biscuits`,
  `Say hi to your mother for me`,
  `Send in the Carr`,
  `Smash Jackson`,
  `Splash`,
  `TFFB`,
  `The Gas Man`,
  `The Fantasy Footballers`,
  `The Flying V`,
  `The Infinity Stone`,
  `This one comes in from`,
  `The moose is loose`,
  `Tony Meatballs`,
  `Trash Man`,
  `Turok, the dinosaur hunter, Cohen`,
  `T.Y. Houston`,
  `Unter Enry`,
  `Wanna play a game`,
  `Waterbet`,
  `Weeeeeelcome In`,
  `What's it going to be McFly? Are you in or out`,
  `Wheel of Water`,
  `Withstand Victories`,
];

// Define variables
const ballersArrayLength = loremIpsumDictionary.length;
const form = document.querySelector(".lorem-form");
const ipsumText = document.querySelector(".lorem-text");
const resetBtn = document.getElementById("reset-btn");
//const copyBtn = document.querySelector("#copy-btn"); // uncomment once innerHTML is recoded to remove line breaks
const checkbox = document.querySelector("#start-with");
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
  //copyBtn.addEventListener("click", copy);  // uncomment once innerHTML is recoded to remove line breaks
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

// Checking if checkbox is checked to use in getUserLoremIpsum function
function isChecked() {
  if (checkbox.checked) {
    return true;
  }
}

// Calling clearForm in index.html on reset button to reset the form, clear the user's ipsum text and hide the div
function clearForm() {
  ipsumText.innerHTML = "";
  ipsumText.classList.add("hidden");
  resetBtn.classList.add("hidden");
  form.reset();
}

/* Hiding for now until I recode the innerHTML to remove the line breaks when copy occurs

// Adding copy to clipboard functionality through the use of the Clipboard API
async function copy() {
  const copyText = ipsumText.innerHTML;
  await navigator.clipboard.writeText(copyText);
  setTimeout(alert("TFFB Ipsum copied"), 3000);
}
*/

function getUserLoremIpsum(e) {
  let tempArray = [];
  // Converting the paragraphsNumber.value variable into a number for later comparison
  const numParagraphs = parseInt(paragraphsNumber.value);
  // Setting the number of indecies to pull based on the number of paragraphs chosen by the user
  if (numParagraphs === 1) {
    textLength = 60;
  } else if (numParagraphs === 2) {
    textLength = 120;
  } else if (numParagraphs === 3) {
    textLength = 180;
  } else if (numParagraphs === 4) {
    textLength = 240;
  } else {
    textLength = 300;
  }
  console.log(isChecked());

  // If user selected "Start with 'It's Football Time - Hey!'", insert this phrase in the zero index of the tempArray.
  if (isChecked()) {
    tempArray = [`It's Football Time - Hey!`];

    // Until the number of indecies is reached, using the random number funtion to grab a random index from the ballers array and pushing it to a new array starting at the index of 1
    for (i = 1; i < textLength; i++) {
      let randomIndex = getRandomNum(ballersArrayLength);
      let wordToPush = loremIpsumDictionary[randomIndex];
      tempArray.push(wordToPush);
    }
  } else {
    // Until the number of indecies is reached, using the random number funtion to grab a random index from the ballers array and pushing it to a new array starting at the index of 0
    for (i = 0; i < textLength; i++) {
      let randomIndex = getRandomNum(ballersArrayLength);
      let wordToPush = loremIpsumDictionary[randomIndex];
      tempArray.push(wordToPush);
    }
  }

  // Adding line breaks based on length of returned array to represent paragraphs
  if (tempArray.length === 120) {
    tempArray.splice(60, 0, "<br><br>");
  } else if (tempArray.length === 180) {
    tempArray.splice(60, 0, "<br><br>");
    tempArray.splice(121, 0, "<br><br>");
  } else if (tempArray.length === 240) {
    tempArray.splice(60, 0, "<br><br>");
    tempArray.splice(121, 0, "<br><br>");
    tempArray.splice(182, 0, "<br><br>");
  } else if (tempArray.length === 300) {
    tempArray.splice(60, 0, "<br><br>");
    tempArray.splice(121, 0, "<br><br>");
    tempArray.splice(182, 0, "<br><br>");
    tempArray.splice(243, 0, "<br><br>");
  }

  // Adding spaces to the array by creating a new object via the join method
  let userIpsum = tempArray.join(" ");

  // Adding the text to the DOM and removing the hidden class to display the user's Fantasy Footballers Ipsum text
  ipsumText.innerHTML = userIpsum;
  ipsumText.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
  e.preventDefault();
}
