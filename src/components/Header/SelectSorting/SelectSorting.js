import { Component } from "react";

class SelectSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <select name="SelectSorting" id="SelectSorting">
        <option value="popularity-decrease">популярности (убывание)</option>
        <option value="popularity-increase">популярности (возрастание)</option>
        <option value="rating-decrease">рейтингу (убывание)</option>
        <option value="rating-increase">рейтингу (возрастание)</option>
        <option value="release-decrease">дате релиза (убывание)</option>
        <option value="release-increase">дате релиза (возрастание)</option>
      </select>
    );
  }
}

export default SelectSorting;