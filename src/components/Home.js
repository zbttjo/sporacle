import React from "react";
import UEFA from "../assets/UEFA-logo.png";
import user from "../assets/user.png";

let elapsedTime ="";
let homeTeamLogo ;
let homeTeamName ;
let awayTeamLogo ;
let awayTeamName ;
let homeTeamGoal;
let awayTeamGoal;

let elapsedTime2 ="";
let homeTeamLogo2 ;
let homeTeamName2 ;
let awayTeamLogo2 ;
let awayTeamName2 ;
let homeTeamGoal2;
let awayTeamGoal2;


function Home(props){
    //get the live games data from API FOOTBALL
    fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
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

    var fixture2 = matchesList[1]['fixture'];
	var goals2 = matchesList[1]['goals'];
	var teams2 = matchesList[3]['teams'];




	//Render data in the page
    elapsedTime = fixture['status']['elapsed'] + "'";
    homeTeamName = teams['home']['name'];
    homeTeamLogo = teams['home']['logo'];
    homeTeamGoal = goals['home'];



    awayTeamName = teams['away']['name'];
    awayTeamLogo = teams['away']['logo'];
    awayTeamGoal = goals['away'];

    elapsedTime2 = fixture2['status']['elapsed'] + "'";
    homeTeamName2 = teams2['home']['name'];
    homeTeamLogo2 = teams2['home']['logo'];
    homeTeamGoal2 = goals2['home'];



    awayTeamName2 = teams2['away']['name'];
    awayTeamLogo2 = teams2['away']['logo'];
    awayTeamGoal2 = goals2['away'];


}))
.catch(err => {
	console.error(err);
})

    return(
        <div className="home-container">
            <div className="presentation-section">
                <div className="img-section">
                    <img src={UEFA}></img>
                </div>
            </div>
            <div className="info-section">
                <div className="news-section">
                    <div className="news-title">
                        <h1>Sporacle will be ready on february 2022</h1>
                    </div>
                    <div className="news-img">
                        <img src={user}></img>
                    </div>

                </div>
                <div className="games-section">
                    <div className="game1">
                        <div className="game1-top">
                            <div className="team1-logo">
                                <img src={homeTeamName}></img>
                            </div>
                            <div className="team2-logo">
                            <img src={awayTeamLogo}></img>
                            </div>
                            <div className="live-minute">
                                <p>Live</p>
                                <p id="elapsed">{elapsedTime}</p>
                            </div>
                        </div>
                        <div className="game1-center">
                            <div className="teams-name">
                                <p id="homeName">{homeTeamName}</p>
                                <p id="awayName">{awayTeamName}</p>
                            </div>
                            <div className="teams-score">
                                <p>{homeTeamGoal}</p>
                                <p>{awayTeamGoal}</p>
                            </div>
                        </div>
                        <div className="game1-bottom">
                            <li><a href="/matches">Live Games</a></li>
                        </div>

                    </div>
                    <div className="game2">
                        <div className="game2-top">
                            <p>12/10</p>
                        </div>
                        <div className="game2-center">
                            <div className="game2-team1">
                                <div className="team1-logo2">
                                    <img src={homeTeamLogo2}></img>
                                </div>
                                <p>{homeTeamName2}</p>
                            </div>
                            <div className="game2-separation">
                                <div className="separation"></div>
                            </div>
                            <div className="game2-team2">
                                <div className="team2-logo2">
                                    <img src={awayTeamLogo2}></img>
                                </div>
                                <p>{awayTeamName2}</p>
                            </div>
                        </div>
                        <div className="game1-bottom">
                            <li><a href="/matches">Next Games</a></li>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};
export default Home;