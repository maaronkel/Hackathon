$.ajax({
  headers: { "X-Auth-Token": "bebca4b77c9d4d58849ac24ee825106a" },
  url: "https://api.football-data.org/v2/competitions/PL/matches?matchday=2",
  dataType: "json",
  type: "GET",
}).done(function (response) {
  //console.log(response);
  //let x = document.getElementById("div1");
  //let y = document.getElementById("div2");
  //x.innerHTML = response.matches[6].score.fullTime.homeTeam; // score
  //y.innerHTML = response.matches[6].score.fullTime.awayTeam; // score
  //let xName = document.createElement("div");
  //let yName = document.createElement("div");
  let body = document.querySelector("body");
  //body.appendChild(xName);
  //body.appendChild(yName);
  //xName.innerHTML = response.matches[6].homeTeam.name; // team name
  //yName.innerHTML = response.matches[6].awayTeam.name; // team name
  //response.matches.map()
  //fixtureArray = []
  //console.log(response.matches);
  for (let i in response.matches) {
    let match = document.createElement("div");
    let scoreH = document.createElement("p");
    let scoreA = document.createElement("p");
    let teamH = document.createElement("p");
    let teamA = document.createElement("p");
    teamH.textContent = response.matches[i].homeTeam.name;
    teamA.textContent = response.matches[i].awayTeam.name;
    scoreH.textContent = response.matches[i].score.fullTime.homeTeam;
    scoreA.textContent = response.matches[i].score.fullTime.awayTeam;
    body.appendChild(match);
    match.appendChild(scoreH);
    match.appendChild(scoreA);
    match.appendChild(teamH);
    match.appendChild(teamA);
  }
});
