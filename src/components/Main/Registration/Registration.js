import { Component } from "react";
import '../../../scss/authorizationRegistartion.scss';

class Registartion extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <main>
        <form action="" id="form-registration" className="forms">
          <div className="forms__wraper" >
            <p className="forms__title">Регистрация</p>
      
            <input type="text" placeholder="Имя"></input>
            <input type="text" placeholder="Фамилия"></input>
            <input type="password" placeholder="Пароль"></input>
            <input type="password" placeholder="Подтвердите пароль"></input>
            <input type="email" placeholder="E-mail"></input>
      
            <div className="forms__container-buttons">
              <button className="forms__button-finish">Зарегистрироваться</button>
              <button type="reset" className="forms__button-link">Отмена</button>
            </div>
          </div>
        </form>
      </main>
    );
  }
}

export default Registartion;