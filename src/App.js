import { Component } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import AboutFilm from "./components/Main/AboutFilm/AboutFilm";
import Registration from "./components/Main/Registration/Registration";
import Authorization from "./components/Main/Authorization/Authorization";

import "./scss/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichPageNow: 1,
      whichSortingNow: 'popularity.desc',
      InputSearchValue: '',
      copyFilms: [],
      titleFilm: '',
      showAboutFilm: false,
      showRegistartion: false,
    };
  }

  getPage = (page) => {
    this.setState({whichPageNow: page});
  }

  toggleSorting = (x) => {
    /* console.log(x); */
    this.setState({whichSortingNow: x});
  }

  getInputSearchValue = (InputSearchValue) => {
    this.setState({InputSearchValue: InputSearchValue});
  }

  getTitleFilm = (titleFilm) => {
    this.setState({titleFilm: titleFilm});
  }

  getCopyFilm = (x) => {
    this.setState({copyFilms: x});
    this.setState({showAboutFilm: true});
  }

  toggleShowAboutFilm = () => {
    this.setState({showAboutFilm: false});
  }

  render() {
    if (!this.state.showAboutFilm) {
      return (
        <div>
          { !this.state.showAboutFilm && <Header getInputSearchValue={this.getInputSearchValue} toggleSorting={this.toggleSorting}/> }
          { !this.state.showAboutFilm && <Main getCopyFilm={this.getCopyFilm} getTitleFilm={this.getTitleFilm} InputSearchValue={this.state.InputSearchValue} whichSortingNow={this.state.whichSortingNow} page={this.state.whichPageNow} /> }
          { !this.state.showAboutFilm && <Nav getPage={this.getPage} /> }
        </div>
      );
    }

    if (this.state.showAboutFilm) {
      return (
        <div>
        { this.state.showAboutFilm && <AboutFilm toggleShowAboutFilm={this.toggleShowAboutFilm} titleFilm={this.state.titleFilm} copyFilms={this.state.copyFilms} /> }
      </div>
      );
    }
  }
}

export default App;