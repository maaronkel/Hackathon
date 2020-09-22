export function searchVid(name) {
    axios
      .get("https://www.scorebat.com/video-api/v1/")
      .then((response) => {
        teamVid(response, name);
      })
      .catch((err) => console.log(err));
  };

function deleteChildren() {
let first = table.firstElementChild;
while (first) {
    first.remove();
    first = table.firstElementChild;
}
}

createEle = (response, i) => {
    let match = document.createElement("div");
    match.className = "highMatch";
    let video = document.createElement("div");
    video.className = "highVideo";
    let teams = document.createElement("p");
    teams.className = "highTeams";
    league.appendChild(match);
    match.appendChild(teams);
    match.appendChild(video);
    teams.textContent = response.data[i].title;
    video.innerHTML = response.data[i].videos[0].embed;
  };



teamVid = (response, name) => {
    deleteChildren();
    for (i in response.data) {
        if (response.data.side1 == name || response.data.side2 == name) {
            createEle(response, i);
        }

    }
}