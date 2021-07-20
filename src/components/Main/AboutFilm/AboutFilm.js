import { Component } from "react";
import "../../../scss/aboutfilm.scss";
import house from "../../../images/content/house.svg";
import notFoundImage from "../../../images/content/notFoundImage.jpg";

class AboutFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '7bbcabd7451880efd46ec7f3f3b268c2',
      genre: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=ru-RU&api_key=${this.state.apiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            genre: result.genres
          });
        }
      )
  }

  transferToggleShowAboutFilm = () => {
    this.props.toggleShowAboutFilm(false);
  }

  render() {
    let copyFilms = this.props.copyFilms;
    let thisFilm = 0;

    for (let i = 0; i < copyFilms.length; i++) {
      if (copyFilms[i].title === this.props.titleFilm) {
        thisFilm = copyFilms[i];
        /* console.log(thisFilm); */
      }
    }
    /* console.log(copyFilms); */

    let genre = '';
     for (let i = 0; i < thisFilm.genre_ids.length; i++) {
      for (let j = 0; j < this.state.genre.length; j++) {
        if ( thisFilm.genre_ids[i] === this.state.genre[j].id) {
          genre += this.state.genre[j].name + ", " ;
          /* console.log(genre); */
        }
      }
    }
    genre = genre.slice(0, -2);

    let src ="https://image.tmdb.org/t/p/w300/" + thisFilm.poster_path;
    if (thisFilm.poster_path === null) {
      src = notFoundImage;
    }

    return (
     <main id="mainAboutFilm" className="main-aboutfilm">
      <a onClick={this.transferToggleShowAboutFilm} href="/"><img className="main-aboutfilm__link-home" src={house} alt="home"></img></a>
      <img src={src} className="main-aboutfilm__poster" alt="poster"></img>
      <article className="main-aboutfilm__content">
        <h2 className="main-aboutfilm-content__title">{thisFilm.title}</h2>
        <p className="main-aboutfilm-content__genre">Жанры: {genre}</p>
        <p className="main-aboutfilm-content__description">{thisFilm.overview}</p>
        <p className="main-aboutfilm-content__release-date">Дата релиза: {thisFilm.release_date}</p>
        <p className="main-aboutfilm-content__rating">Рейтинг: {thisFilm.vote_average}</p>
        <p className="main-aboutfilm-content__voted">Проголосовало: {thisFilm.vote_count}</p>
        <p className="main-aboutfilm-content__popularity-index">Очков популярности: {thisFilm.popularity}</p>
      </article>
    </main>
    )
  }
}

export default AboutFilm;