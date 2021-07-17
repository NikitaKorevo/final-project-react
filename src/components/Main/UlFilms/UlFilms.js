import { Component } from "react";
import notFoundImage from "../../../images/content/notFoundImage.jpg";

class UlFilms extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let src ="https://image.tmdb.org/t/p/w300/" + this.props.poster_path;
    if (this.props.poster_path === null) {
      src = notFoundImage;
    }
    return (
      <li className="all-cards__card">
        <img className="all-cards-card__img" src={src} alt="poster"></img>
        <p className="all-cards-card__rating">Рейтинг: {this.props.vote_average}</p>
        <p className="all-cards-card__release">Дата релиза: {this.props.release_date}</p>
        <h2 className="all-cards-card__title">{this.props.title}</h2>
      </li>
    );
  }
}

export default UlFilms;