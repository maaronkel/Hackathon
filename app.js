let getFootballVid = (country = 15) => {
  axios
    .get("https://www.scorebat.com/video-api/v1/")
    .then((response) => {
      fixtureVids(response, country);
    })
    .catch((err) => console.log(err));
};

let league = document.querySelector("#league");
let main = document.querySelector("main");
main.appendChild(league);

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

function deleteChildren() {
  let first = league.firstElementChild;
  while (first) {
    first.remove();
    first = league.firstElementChild;
  }
}

fixtureVids = (response, country) => {
  deleteChildren();
  for (let i in response.data) {
    if (response.data[i].competition.id == country) {
      createEle(response, i);
    }
  }
};

document
  .getElementById("eng")
  .addEventListener("click", () => getFootballVid(15));
document
  .getElementById("spa")
  .addEventListener("click", () => getFootballVid(14));
//document
//.getElementById("ger")
//.addEventListener("click", () => getFootballVid(9));
document
  .getElementById("ita")
  .addEventListener("click", () => getFootballVid(13));
document
  .getElementById("fra")
  .addEventListener("click", () => getFootballVid(10));

getFootballVid();

//document
//.getElementById("button")
//.addEventListener("click", () => getFootballVid(11));
