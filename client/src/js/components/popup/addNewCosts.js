import React from "react";
import {changeStateAddNewCostPopupAction, addNewCostToCurrentMonthAction} from "../../actions";
import {connect} from "react-redux";


class AddNewCostsPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date().toISOString().substr(0, 10),
            description: '',
            sum: '',
            category: '',
            typeCosts: ''
        };

        this.StateValue = this.StateValue.bind(this);
        this.addNewCostsAction = this.addNewCostsAction.bind(this);
    }

    addNewCostsAction(e) {
        e.preventDefault();
        let newData = {
            "date": this.state.date,
            "description": this.state.description,
            "sum": this.state.sum,
            "category": this.state.category,
            "typeCosts": this.state.type
        };

        // let newData1 = {
        //     "date":  new Date().toISOString().substr(0, 10),
        //     "description": 'sad',
        //     "sum": 12341,
        //     "category": 'test1',
        //     "typeCosts": 'testtype'
        // };
        fetch(`http://localhost:3170/addcosts`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "no-cors"
            },
            method: 'POST',
            body: JSON.stringify(newData)
        })
            .then(function (response) {
                return response.json();
                console.log(json);
            }).then((json) => {
            console.log(json);
            // this.props.addNewCostToCurrentMonthAction(newData);
        })
    }

    StateValue(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="popup">
                <div className="popup-wrapper">
                    <h3>
                        Добавьте новую запись о расходах
                    </h3>

                    <form onSubmit={this.addNewCostsAction}>
                        <label>
                            <span>Дата</span>
                            <input type="date"
                                   name="date"
                                   id="date"
                                   value={this.state.date}
                                   onChange={this.StateValue}
                            />
                        </label>
                        <label>
                            <span>Описание</span>
                            <input type="text"
                                   name="description"
                                   id="description"
                                   onChange={this.StateValue}
                            />
                        </label>

                        <label>
                            <span>Сумма</span>
                            <input type="number"
                                   name="sum"
                                   id="sum"
                                   onChange={this.StateValue}/>
                        </label>

                        <label>
                            <span>Категория</span>
                            <select name="category"
                                    onChange={this.StateValue}
                                    value={this.state.category}
                            >
                                <option value="Продукты">Продукты</option>
                                <option value="Коммунальные услуги">Коммунальные услуги</option>
                                <option value="Одежда/обувь">Одежда/обувь</option>
                                <option value="Хозтовары">Хозтовары</option>
                                <option value="Спорт">Спорт</option>
                                <option value="Развлечения">Развлечения</option>
                                <option value="Авто">Авто</option>
                            </select>
                        </label>

                        <label>
                            <span>Тип расходов</span>
                            <select name="type"
                                    onChange={this.StateValue}
                                    value={this.state.typeCosts}
                            >
                                <option value="Ежемесячный">Ежемесячный</option>
                                <option value="Годовой">Годовой</option>
                                <option value="Непредвиденный">Непредвиденный</option>
                            </select>
                        </label>

                        <button type="submit">Добавить</button>
                    </form>


                    <button className="popup-wrapper__close" onClick={() => {
                        this.props.changeStateAddNewCostPopupAction(false)
                    }}/>
                </div>

            </div>

        )
    }
};

const mapStateToProps = (store) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    changeStateAddNewCostPopupAction: boolean => dispatch(changeStateAddNewCostPopupAction(boolean)),
    addNewCostToCurrentMonthAction: object => dispatch(addNewCostToCurrentMonthAction(object)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCostsPopup);
