import { Component } from "react";

class SelectSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'popularity-decrease'
    };
  }
  qwer = (e) => {
    console.log(this.props.toggleSorting(e.target.value));
  }

  render() {
    return (
      <select onClick={this.qwer} name="SelectSorting" id="SelectSorting">
        <option value="popularity.desc">популярности (убывание)</option>
        <option value="popularity.asc">популярности (возрастание)</option>
        <option value="vote_average.desc">рейтингу (убывание)</option>
        <option value="vote_average.asc">рейтингу (возрастание)</option>
        <option value="release_date.desk">дате релиза (убывание)</option>
        <option value="release_date.asc">дате релиза (возрастание)</option>
      </select>
    );
  }
}

export default SelectSorting;