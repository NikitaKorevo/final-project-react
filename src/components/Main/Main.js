import React, { Component } from "react";
import Data from "./../../dummy_data/users.json"
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
    localStorage.setItem('Data', JSON.stringify(Data));

    if (this.props.page !== this.state.whichPageNow) {
     /*  console.log(this.state.whichPageNow); */
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
      /* console.log(this.props.InputSearchValue) */
      this.setState({InputSearchValue: this.props.InputSearchValue}, function() {
        this.updateComponentDidMount();
      });
    }
  }

  updateComponentDidMount = () => {
    this.componentDidMount();
  }

  componentDidMount() {
    const apiKey = '7bbcabd7451880efd46ec7f3f3b268c2';
    let whichSortingNow = this.state.whichSortingNow;
    let whichPageNow = this.props.page;

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

  qwer = (e) => {
    const node = e.target.offsetParent;
    /* console.log(node.children[3].innerText); */
    this.props.getTitleFilm(node.children[3].innerText);
    this.props.getCopyFilm(this.state.films);
  }

  render() {
    const { error, isLoaded, films } = this.state;

    if (error) {
      return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p> Loading...</p>
    } else {
      return (
        <main className="main">
          <ul onClick={this.qwer} id="myUl" className="main__all-cards">
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
}

export default Main;