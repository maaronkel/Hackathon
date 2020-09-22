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

let getData = (country) => {
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
  let teamName = document.createElement("li");
  let teamPos = document.createElement("li");
  let teamPoints = document.createElement("li");
  let teamCrest = document.createElement("img");
  table.appendChild(team);
  team.appendChild(teamPos);
  team.appendChild(teamCrest);
  team.appendChild(teamName);
  team.appendChild(teamPoints);
  teamPos.textContent = data[i].position;
  teamCrest.src = data[i].team.crestUrl;
  teamName.textContent = data[i].team.name;
  teamPoints.textContent = data[i].points;
};

document.getElementById("eng").addEventListener("click", () => getData("PL"));
document.getElementById("spa").addEventListener("click", () => getData("PD"));
document.getElementById("ita").addEventListener("click", () => getData("SA"));
document.getElementById("fra").addEventListener("click", () => getData("FL1"));
document.getElementById("ger").addEventListener("click", () => getData("BL1"));

