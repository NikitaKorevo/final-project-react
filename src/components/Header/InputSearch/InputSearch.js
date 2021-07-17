import { Component } from "react";

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  InputSearchValue = (e) => {
   /*  console.log(e.target.value); */
    this.props.getInputSearchValue(e.target.value);
  }

  render() {
    return (
      <input onChange={this.InputSearchValue} id="inputSearch" type="search" placeholder="Найти фильм..."></input>
    );
  }
}

export default InputSearch;