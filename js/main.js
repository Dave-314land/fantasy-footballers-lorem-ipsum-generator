let loremIpsumDictionary = [
  `Abdullah Express`,
  `Andy`,
  `Andy's Almost Upset of the Week`,
  `Arizona`,
  `Ballers`,
  `Bonjuour`,
  `Bonus`,
  `Booty Scootin Cam Newtown`,
  `Cardinals`,
  `David Johnson woo-hoo-hoo`,
  `Don't hear what I'm not saying`,
  `Double Stuff Oreos`,
  `FF Hitman`,
  `Fantasy`,
  `Fantasy Hitman`,
  `Fantasy Reaper`,
  `Fantasy Studmuffins`,
  `Fifty-Five`,
  `Footballers`,
  `Footclan`,
  `Footclan Assemble`,
  `He was drafted to be great`,
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
  `New York City`,
  `Oh the Garbage Man can`,
  `Oreos`,
  `Peter Piper Pizza PPR Pick of the Week`,
  `Phoenix`,
  `Pooped in his big boy pants`,
  `Reviewasaurus Rex`,
  `Sammy Biscuits`,
  `Splash`,
  `TFFB`,
  `This one comes in from`,
  `Tony Meatballs`,
  `Wanna play a game`,
  `Waterbet`,
  `Weeeeeelcome In`,
  `What's it going to be McFly? Are you in or out`,
  `Wheel of Water`,
  `Withstand Victories`,
];

let ballersArrayLength = loremIpsumDictionary.length;
let text = 100;

function getRandomNum(ballersArrayLength) {
  return Math.floor(Math.random() * ballersArrayLength);
}

function getUserLoremIpsum() {
  let userIpsumArray = [];
  for (i = 0; i < text; i++) {
    let randomIndex = getRandomNum(ballersArrayLength);
    let wordToPush = loremIpsumDictionary[randomIndex];
    console.log(wordToPush);
    userIpsumArray.push(wordToPush);
  }
  console.log(userIpsumArray);
}

getUserLoremIpsum();
