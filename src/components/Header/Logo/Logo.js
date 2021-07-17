import { Component } from "react";
import logotype from "../../../images/content/house.svg";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
     <a href="/"><img src={logotype} alt="logo"></img></a> 
    );
  }
}

export default Logo;