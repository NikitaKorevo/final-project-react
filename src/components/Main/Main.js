import { Component } from "react";
import UlFilms from "./UlFilms/UlFilms";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichSortingNow: 'popularity.desc',
      whichPageNow: 1,
      error: false,
      isLoaded: false,
      films: [],
      InputSearchValue: ''
    };
  }

  componentDidUpdate() {
    if (this.props.page !== this.state.whichPageNow) {
      console.log(this.state.whichPageNow);
      this.setState({ whichPageNow: this.props.page}, function () {
        this.componentDidMount();
      });
    }

    if (this.props.whichSortingNow !== this.state.whichSortingNow) {
      this.setState({whichSortingNow: this.props.whichSortingNow}, function() {
        this.updateComponentDidMount();
      });
    }

    if (this.props.InputSearchValue !== this.state.InputSearchValue) {
      console.log(this.props.InputSearchValue)
      this.setState({InputSearchValue: this.props.InputSearchValue}, function() {
        this.updateComponentDidMount();
      });
    }
  }

  updateComponentDidMount = () => {
    this.componentDidMount();
  }

  componentDidMount() {
    console.log('componentDidMount');
    const apiKey = '7bbcabd7451880efd46ec7f3f3b268c2';
    let whichSortingNow = this.state.whichSortingNow;
    let whichPageNow = this.props.page;
    /* let indexFilm = 0; */ // пусть побудет здесь

    if (this.props.InputSearchValue !== '') {
      fetch('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=ru-RU&query=' + this.state.InputSearchValue + '&page=1&include_adult=false')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            films: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      /* console.log(this.props.InputSearchValue); */

    } else {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=ru-RU&sort_by=' + whichSortingNow + '&include_adult=false&include_video=false&page=' + +whichPageNow)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            films: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    }
  
    /* fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=ru-RU&sort_by=' + whichSortingNow + '&include_adult=false&include_video=false&page=' + +whichPageNow)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            films: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } */

  render() {
    const { error, isLoaded, films } = this.state;

    if (error) {
      return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p> Loading...</p>
    } else {
      return (
        <main className="main">
          <ul id="myUl" className="main__all-cards">
            {films.map((el, i) => (
              <UlFilms poster_path={el.poster_path}
                vote_average={el.vote_average}
                release_date={el.release_date}
                title={el.title}
                key={i} />
              ))}
          </ul>
        </main>
      )
    }
  }
    
  /* render() {
    const { error, isLoaded, films, whichPageNow, whichSortingNow} = this.state;

    if (error) {
      return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p> Loading...</p>
    } else {
      return (
        <main className="main">
          <ul id="myUl" className="main__all-cards">
            {
              films.map(el => (
                <li>
                  <img src={"https://image.tmdb.org/t/p/w300/" + el.poster_path} alt="poster"></img>
                  <p className="all-cards-card__rating">{el.vote_average}</p>
                  <p className="all-cards-card__release">{el.release_date}</p>
                  <h2 className="all-cards-card__title">{el.title}</h2>
                </li>
              ))
            }
          </ul>
        </main>
      )
    }
  } */
}

export default Main;