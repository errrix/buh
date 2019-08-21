import React from "react";
import SideBar from "../../components/sidebar";

class AppPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allcosts: []
        };

        // this.getPopularCard = this.getPopularCard.bind(this);
    }

    componentDidUpdate() {
        fetch(`http://localhost:3170/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(function (response) {
                return response.json();
            }).then((json) => {
            this.setState({
                allcosts: json
            })
            console.log(json);
            // this.props.addNewCostToCurrentMonthAction(newData);
        })
    }

    componentDidMount() {
        fetch(`http://localhost:3170/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(function (response) {
                return response.json();
            }).then((json) => {
            this.setState({
                allcosts: json
            })
            console.log(json);
            // this.props.addNewCostToCurrentMonthAction(newData);
        })
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
                        {
                            this.state.allcosts.map((item) => {
                                return <tr key={item._id}>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                    <td>{item.sum}</td>
                                    <td>{item.category}</td>
                                    <td> {item.typeCosts}</td>
                                </tr>
                            })
                        }
                        </tbody>

                    </table>
                </div>
            </div>

        )
    }
};

export default AppPage;
