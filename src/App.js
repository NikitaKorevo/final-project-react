import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import "./scss/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichPageNow: 1,
      whichSortingNow: 'popularity.desc',
      InputSearchValue: ''
    };
  }

  getPage = (page) => {
    /* console.log('click'); */
    this.setState({whichPageNow: page});
  }

  toggleSorting = (x) => {
    console.log(x);
    this.setState({whichSortingNow: x});
  }

  getInputSearchValue = (InputSearchValue) => {
    /* console.log(x); */
    this.setState({InputSearchValue: InputSearchValue});
  }

  render() {
    return (
      <div>
        <Header getInputSearchValue={this.getInputSearchValue} toggleSorting={this.toggleSorting}/>
        <Main InputSearchValue={this.state.InputSearchValue} whichSortingNow={this.state.whichSortingNow} page={this.state.whichPageNow} />
        <Nav getPage={this.getPage} />
      </div>
    );
  }
}

export default App;