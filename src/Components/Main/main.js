import React, { useState } from "react";
import './main.css'

const Main = () => {

    return (
        <div className="containerMain">
            <div className="welcomeText">
                <div className="privet">
                    <p>
                        Данная программа создана для
                        автоматизированной проверки одного документа
                        или целого комлекта.

                    </p>
                </div>
                <div className="grid2">
                    <p>
                        Для продолжения войдите в
                        свой аккаунт
                    </p>
                    <div className="registration">
                        <form className='Form'>
                            <input className='Pole' type="text" name="name" placeholder="Логин" id="name" required />
                            <input type="text" name="name" placeholder="Пароль" id="name" required />
                            <button type="submit">Войти</button>
                        </form>
                        <a href="#"> Зарегестрироваться </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;