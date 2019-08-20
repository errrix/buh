import React from "react";
import SideBar from "../../components/sidebar";

class AppPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        // this.getPopularCard = this.getPopularCard.bind(this);
    }


    componentDidMount() {
        console.log('mounted');
    }


    render() {
        return (
            <div className="wrapper app-wrapper">
                <SideBar/>
                <div className="main-list">
                    <h3>Расходы за текущий месяц</h3>
                    <table>
                        <tbody>
                        <tr>
                            <th>
                                Дата
                            </th>
                            <th>
                                Описание
                            </th>
                            <th>
                                Сумма
                            </th>
                            <th>
                                Категория
                            </th>
                            <th>
                                Тип
                            </th>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>

        )
    }
};

export default AppPage;
