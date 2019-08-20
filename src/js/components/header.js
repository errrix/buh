import React from "react";
import {Link} from "react-router-dom"

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        // this.handleLogout = this.handleLogout.bind(this);
    }

    render() {
        return (
            <div>
                <header className="main-header">
                    <div className="wrapper">
                        <ul>
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <a href="#">Цены</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Фичи</a>
                            </li>
                        </ul>
                        <div className="button-block">
                            <button>Логин</button>
                            <a href="#">Регистрация</a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};


export default Header;