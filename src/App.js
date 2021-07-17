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
      whichSortingNow: 'popularity.desc'
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

  render() {
    return (
      <div>
        <Header toggleSorting={this.toggleSorting}/>
        <Main whichSortingNow={this.state.whichSortingNow} page={this.state.whichPageNow} />
        <Nav getPage={this.getPage} />
      </div>
    );
  }
}

export default App;