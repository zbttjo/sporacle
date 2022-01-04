import { Home } from "../components/Home";
 
function getData(){
    //get the live games data from API FOOTBALL
    const fetchApi = fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "51493ff820msha432a5b48cd0373p1c5b8fjsn5b21dddef2b7",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => response.json().then(data =>{
	var matchesList = data['response'];

	//get the data

	var fixture = matchesList[0]['fixture'];
	var goals = matchesList[0]['goals'];
	var teams = matchesList[0]['teams'];


	//Render data in the page
    Home.elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
	console.log(Home.elapsedTime);
	console.log(fixture['status']['elapsed'] + "'");
	console.log("hello");

}))
.catch(err => {
	console.error(err);
})


}

getData();