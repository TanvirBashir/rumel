// setup team objects
// setup 2 random scores in 2 variables
// winner of g1 playes with winner of g2 winner
// if team 1 score is > team 2 console.log("Won")
// if team 1 score is < team 2 console.log("Lost")

let qualifier = [
  {
    group: "A",
    teams: [
      { name: "Real Madrid", score: Math.floor(Math.random() * 6) },
      { name: "Barca", score: Math.floor(Math.random() * 6) },
    ],
    winner: { name: null, score: null },
  },
  {
    group: "B",
    teams: [
      { name: "Man U", score: Math.floor(Math.random() * 6) },
      { name: "Liverpool", score: Math.floor(Math.random() * 6) },
    ],
    winner: { name: null, score: null },
  },
];

// Finding group A winner
let groupA = qualifier[0].teams;

let groupAWinnerScores = Math.max(...groupA.map((s) => s.score));

let groupAwinner = groupA
  .filter((w) => w.score == groupAWinnerScores)
  .map((w) => w);

// Finding group B winner

let groupB = qualifier[1].teams;

let groupBWinnerScores = Math.max(...groupB.map((s) => s.score));

let groupBwinner = groupB
  .filter((w) => w.score == groupBWinnerScores)
  .map((w) => w);

console.log("Group A qualifier", groupA);
console.log("Group B qualifier", groupB);

// Final match
groupAwinner[0].score = Math.floor(Math.random() * 6);
groupBwinner[0].score = Math.floor(Math.random() * 6);

if (
  groupA[0].score !== groupA[1].score &&
  groupB[0].score !== groupB[1].score
) {
  let finals = groupAwinner.concat(groupBwinner);
  // console.log(groupAwinner);

  // finals.map((w) => w.score == Math.floor(Math.random() * 6));

  let finalsWinnerScores = Math.max(...finals.map((s) => s.score));

  let finalswinner = finals
    .filter((w) => w.score == finalsWinnerScores)
    .map((w) => w);

  console.log("Final score:", finals);
  console.log("Winner:", finalswinner);
} else {
  console.log("Draw");
  return;
}
