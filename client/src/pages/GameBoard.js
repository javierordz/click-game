import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Nav from "../components/Nav";
import "./GameBoard.css";

let moviesList = [{id: "shawshankRedemption", thumbnail: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", clicked: false},
                     {id: "theGodfather", thumbnail: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg", clicked: false},
                     {id: "theGodfather2", thumbnail: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,701,1000_AL_.jpg", clicked: false},
                     {id: "theDarkKnight", thumbnail: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", clicked: false},
                     {id: "twelveAngryMen", thumbnail: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,649,1000_AL_.jpg", clicked: false},
                     {id: "schindlersList", thumbnail: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg", clicked: false},
                     {id: "lotrReturnKing", thumbnail: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg", clicked: false},
                     {id: "pulpFiction", thumbnail: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg", clicked: false},
                     {id: "goodBadUgly", thumbnail: "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,656,1000_AL_.jpg", clicked: false},
                     {id: "fightClub", thumbnail: "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,676,1000_AL_.jpg", clicked: false},
                     {id: "lotrFellowship", thumbnail: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg", clicked: false},
                     {id: "forrestGump", thumbnail: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", clicked: false}
                    ];
let score = 0;
let topScore = 0;
let strikes = 0;
let msg = "";

class GameBoard extends Component {
  state = {
    cards: moviesList,
    strikes: 0,
    score: 0,
    topScore: 0,
    msg: ""
  };

  componentDidMount() {
    console.log(this.state.cards);
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  handleButtonClick = (event) => {
    moviesList.map( (cards) => {
      if (cards.id === event.target.id) {
        if (cards.clicked === true) {
          if (strikes < 2) {
            strikes++;
            let test = parseInt(3 - strikes);
            msg = "SORRY, " + test + " tries left...";
          } else {
            strikes = 0;
            score = 0;
            msg = "GAME OVER. Click again!"
            moviesList.map( (cards) => {
              cards.clicked = false;
            })
          }
        } else {
        cards.clicked = true;
        score++;
        (topScore < score) ? (topScore = score) : (topScore = topScore);
        msg = "CORRECT!";
        }
      }
    })
    
      //Shuffle the array
      moviesList = moviesList.sort(() => {return 0.5 - Math.random()});
      // Set the new state
      this.setState({
        cards: moviesList,
        msg: msg,
        score: score,
        strikes: strikes,
        topScore: topScore
    })
  }

  render() {
    return (
      <>
      <Nav msg = {this.state.msg}
          score = {this.state.score}
          topScore = {this.state.topScore} />
      <Jumbotron>
        <p className="description">Click fresh movies and earn points! Click on one twice and lose a chance...</p>
      </Jumbotron>
      <div className="container">
        <div className="row">
            {this.state.cards.slice(0,4).map( (cards) => {
              return (
                <div id={cards.id} className="col-md-3">
                  <Card key={cards.id} 
                  id = {cards.id} 
                  thumbnail = {cards.thumbnail} 
                  handleButtonClick = {this.handleButtonClick}/>
                </div>
              )
            })}
        </div>
        <div className="row">
            {this.state.cards.slice(4,8).map( (cards) => {
              return (
                <div className="col-md-3">
                  <Card key={cards.id} 
                  id = {cards.id} 
                  thumbnail = {cards.thumbnail} 
                  handleButtonClick = {this.handleButtonClick}/>
                </div>
              )
            })}
        </div>
      
        <div className="row">
            {this.state.cards.slice(8,12).map( (cards) => {
              return (
                <div className="col-md-3">
                  <Card key={cards.id} 
                  id = {cards.id} 
                  thumbnail = {cards.thumbnail} 
                  handleButtonClick = {this.handleButtonClick}/>
                </div>
              )
            })}
        </div>
      </div>
      </>
    );
}
}
export default GameBoard;