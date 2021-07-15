import { Component } from "react";
import Logo from "./Logo/Logo";
import InputSearch from "./InputSearch/InputSearch";
import SelectSorting from "./SelectSorting/SelectSorting";
import LoginLogout from "./LoginLogout/LoginLogout";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <header className="header">
        <h1 className="header__background-title">Каталог фильмов</h1>
        <section className="header__sorting">
        <Logo />
        <InputSearch />
        <p>Сортировать по:</p>
        <SelectSorting />
        </section>
        <LoginLogout />
      </header>
    );
  }
}

export default Header;