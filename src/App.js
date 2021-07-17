import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import "./scss/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichPageNow: 1
    };
  }

  getPage = (page) => {
    /* console.log('click'); */
    this.setState({whichPageNow: page});
  }

  render() {
    return (
      <div>
        <Header />
        <Main page={this.state.whichPageNow} />
        <Nav getPage={this.getPage} />
      </div>
    );
  }
}

export default App;