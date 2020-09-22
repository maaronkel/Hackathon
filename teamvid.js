export default function searchVid(teamName) {
    axios
      .get("https://www.scorebat.com/video-api/v1/")
      .then((response) => {
        fixtureVids(response, country);
      })
      .catch((err) => console.log(err));
  };