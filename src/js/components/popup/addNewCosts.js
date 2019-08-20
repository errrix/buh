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
            type: ''
        };

        this.addNewCost = this.addNewCost.bind(this);
        this.StateValue = this.StateValue.bind(this);
    }

    addNewCost(e) {
        e.preventDefault();
        let newData = {
            date: this.state.date,
            description: this.state.description,
            sum: this.state.sum,
            category: this.state.category,
            type: this.state.type
        };

        console.log(newData);

        this.props.addNewCostToCurrentMonthAction(newData);
    }


    StateValue(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }


    render() {
        return (
            <div className="popup">
                <div className="popup-wrapper">
                    <h3>
                        Добавьте новую запись о расходах
                    </h3>

                    <form onSubmit={this.addNewCost}>
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
                                <option value="1">Продукты</option>
                                <option value="2">Коммунальные услуги</option>
                                <option value="3">Одежда/обувь</option>
                                <option value="4">Хозтовары</option>
                                <option value="5">Спорт</option>
                                <option value="6">Развлечения</option>
                                <option value="7">Авто</option>
                            </select>
                        </label>

                        <label>
                            <span>Тип расходов</span>
                            <select name="type"
                                    onChange={this.StateValue}
                                    value={this.state.type}
                            >
                                <option value="1">Ежемесячный</option>
                                <option value="2">Годовой</option>
                                <option value="3">Непредвиденный</option>
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
