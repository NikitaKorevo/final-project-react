import { Component } from "react";

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <input id="inputSearch" type="search" placeholder="Найти фильм..."></input>
    );
  }
}

export default InputSearch;