// setup team objects
// setup 2 random scores in 2 variables
// winner of g1 playes with winner of g2 winner
// if team 1 score is > team 2 console.log("Won")
// if team 1 score is < team 2 console.log("Lost")

let qualifier = {
  groupA: {
    team1: { name: "Real Madrid", score: Math.floor(Math.random() * 6) },
    team2: { name: "Barca", score: Math.floor(Math.random() * 6) },
    winner: { name: "", score: 0 },
  },
  groupB: {
    team1: { name: "Man U", score: Math.floor(Math.random() * 6) },
    team2: { name: "Liverpool", score: Math.floor(Math.random() * 6) },
    winner: { name: undefined, score: undefined },
  },
};

let groupA = qualifier.groupA;
let groupB = qualifier.groupB;

let realMadrid = groupA.team1;
let barca = groupA.team2;
let manU = groupB.team1;
let liverpool = groupB.team2;

// console.log(groupA);
// console.log(groupB);
// console.log(realMadrid.score);

function tournament() {
  groupAMatch();
  groupBMatch();
  function groupAMatch() {}
  function groupBMatch() {
    // check which team wins
    if (manU.score > liverpool.score) {
      console.log(manU.name + " won");
      //   qualifier.groupB.winner = qualifier.groupB.manU;
    } else if (manU.score < liverpool.score) {
      console.log(liverpool.name + " won");
      groupBWinner = liverpool.name;
    } else if (manU.score == liverpool.score && manU.score !== undefined) {
      console.log("Draw");
      groupBWinner = manU.name;
    }
    // console.log(groupBWinner);
  }
}

tournament();

// console.log(groupB);
