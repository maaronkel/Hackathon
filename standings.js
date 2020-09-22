let table = document.querySelector("#table");
let main = document.querySelector("main");
main.appendChild(table);

function deleteChildren() {
  let first = table.firstElementChild;
  while (first) {
    first.remove();
    first = table.firstElementChild;
  }
}

let getData = (country = "PL") => {
  axios
    .get(`https://api.football-data.org/v2/competitions/${country}/standings`, {
      headers: {
        "X-Auth-Token": "bebca4b77c9d4d58849ac24ee825106a",
      },
    })
    .then((response) => {
      deleteChildren();
      for (let i in response.data.standings[0].table) {
        createTable(response.data.standings[0].table, i);
      }
    })
    .catch((err) => console.log(err));
};

createTable = (data, i) => {
  // console.log(response, i)
  let team = document.createElement("ul");
  team.className = "staTeam";
  let teamName = document.createElement("li");
  teamName.className = "staName";
  let teamPos = document.createElement("li");
  teamPos.className = "staPos";
  let teamPoints = document.createElement("li");
  teamPoints.className = "staPoints";
  let teamCrest = document.createElement("img");
  teamCrest.className = "staCrest";
  let teamPlayed = document.createElement("li");
  teamPlayed.className = "staPlayed";
  let teamGD = document.createElement("li");
  teamGD.className = "staGD";
  table.appendChild(team);
  team.appendChild(teamPos);
  team.appendChild(teamCrest);
  team.appendChild(teamName);
  team.appendChild(teamPoints);
  team.appendChild(teamPlayed);
  team.appendChild(teamGD);
  teamPos.textContent = data[i].position;
  teamCrest.src = data[i].team.crestUrl;
  teamName.textContent = data[i].team.name;
  teamPoints.textContent = data[i].points;
  teamPlayed.textContent = data[i].playedGames;
  teamGD.textContent = data[i].goalDifference;
};

document.getElementById("PL").addEventListener("click", () => getData("PL"));
document.getElementById("PD").addEventListener("click", () => getData("PD"));
document.getElementById("SA").addEventListener("click", () => getData("SA"));
document.getElementById("FL1").addEventListener("click", () => getData("FL1"));
document.getElementById("BL1").addEventListener("click", () => getData("BL1"));

getData();
