function searchVid(name) {
  
    axios
      .get("https://www.scorebat.com/video-api/v1/")
      .then((response) => {
        
        teamVid(response, name);
      })
      .catch((err) => console.log(err));
};

function deleteChildren() {
let first = league.firstElementChild;
while (first) {
    first.remove();
    first = league.firstElementChild;
}
}

let createEle = (response, i) => {
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



let teamVid = (response, name) => {
  // console.log(response)
    deleteChildren();
    
    for (i in response.data) {
      
        if (matchTeam(response.data[i].side1.name, response.data[i].side2.name, name)) {
            createEle(response, i);
        }

    }
}

let matchTeam = (side1, side2, name) => {
  
  let s1 = side1.toLowerCase().replace(/ fc/g, "")
  let s2 = side2.toLowerCase().replace(/ fc/g, "")
  let newName = name.toLowerCase().replace(/ fc/g, "")

  if  (s1 == newName || s2 == newName) {
    
   return true
  }

} 

const name = new URLSearchParams(window.location.search).get("name")

searchVid(name)