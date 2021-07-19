import { Component } from "react";
import '../../../scss/authorizationRegistartion.scss';

class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main>
        <form action="" id="form-authorization" className="forms">
          <div className="forms__wraper">

            <p className="forms__title">Авторизация</p>

            <input type="email" placeholder="E-mail"></input>
            <input type="password" placeholder="Пароль"></input>

            <div className="forms__container-buttons">
              <button className="forms__button-finish">Войти</button>
              <button className="forms__button-link">Зарегистрироваться</button>
            </div>
          </div>
        </form>
      </main>
    );
  }
}

export default Authorization;