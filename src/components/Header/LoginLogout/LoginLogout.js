import { Component } from "react";

class LoginLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <section class="header__login-logout">
      <a href="./authorization.html" target="_blank">Вход</a>
      <span>/</span>
      <a href="./registration.html" target="_blank">Регистрация</a>
    </section>
    );
  }
}

export default LoginLogout;