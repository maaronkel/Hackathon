
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

$.ajax({
  headers: { "X-Auth-Token": "bebca4b77c9d4d58849ac24ee825106a" },
  url: `https://api.football-data.org/v2/competitions/${country}/standings`,
  dataType: "json",
  type: "GET",
}).done(function (response) {

    deleteChildren()    
//     // tableData = response.standings
  for (let i in response.standings[0].table) {

    // console.log(response.standings[0].table)
    createTable(response.standings[0].table, i)

    }
});

createTable = (data, i) => {
    // console.log(response, i)
    let team = document.createElement("ul");
    let teamName = document.createElement("li");
    let teamPos = document.createElement("li");
    let teamPoints = document.createElement("li");
    let teamCrest = document.createElement("img");
    table.appendChild(team)
    team.appendChild(teamPos)
    team.appendChild(teamCrest)
    team.appendChild(teamName)
    team.appendChild(teamPoints)
    teamPos.textContent = data[i].position
    teamCrest.src = data[i].team.crestUrl
    teamName.textContent = data[i].team.name
    teamPoints.textContent = data[i].points
    
}


//SA
//PL
//BL1
//PD
//FL1