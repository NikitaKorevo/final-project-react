import { Component } from "react";

class UlFilms extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let src ="https://image.tmdb.org/t/p/w300/" + this.props.poster_path;

    return (
      <li>
        <img src={src} alt="poster"></img>
        <p className="all-cards-card__rating">{this.props.vote_average}</p>
        <p className="all-cards-card__release">{this.props.release_date}</p>
        <h2 className="all-cards-card__title">{this.props.title}</h2>
      </li>
    );
  }
}

export default UlFilms;