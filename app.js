// $.ajax({
//   headers: { "X-Auth-Token": "bebca4b77c9d4d58849ac24ee825106a" },
//   url: "https://api.football-data.org/v2/competitions/PL/matches?matchday=2",
//   dataType: "json",
//   type: "GET",
// }).done(function (response) {

  // let body = document.querySelector("body");

//   for (let i in response.matches) {
//     let match = document.createElement("div");
//     let video = document.createElement('div');
//     let scoreH = document.createElement("p");
//     let scoreA = document.createElement("p");
//     let teamH = document.createElement("p");
//     let teamA = document.createElement("p");
//     teamH.textContent = response.matches[i].homeTeam.name;
//     teamA.textContent = response.matches[i].awayTeam.name;
//     scoreH.textContent = response.matches[i].score.fullTime.homeTeam;
//     scoreA.textContent = response.matches[i].score.fullTime.awayTeam;
//     body.appendChild(match);
//     match.appendChild(video);
//     match.appendChild(scoreH);
//     match.appendChild(scoreA);
//     match.appendChild(teamH);
//     match.appendChild(teamA);

//   }
  
// });




let getFootballVid = () => {
  axios
  .get("https://www.scorebat.com/video-api/v1/")
  .then(console.log("asdf"))
  .then((response) => {
  //   for (i = 0; i < 5; i++) {console.log(response.data[i].videos[0]) }
  // // console.log(response.data[1].video)
  fixtureVids(response)
  })
  .catch((err) => console.log(err));
  };


fixtureVids = (response) => {
  
  let body = document.querySelector("body");

  for (let i in response.data) {
    if ( response.data[i].competition.id == 15) {
      let match = document.createElement("div");
      let video = document.createElement('div');
      let teams = document.createElement("p");

      teams.textContent = response.data[i].title;
      video.innerHTML = response.data[i].videos[0].embed;

      body.appendChild(match);
      match.appendChild(video);
      match.appendChild(teams);
    }
  }


}

getFootballVid()