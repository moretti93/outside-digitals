import React from "react";
import {Button, Checkbox, Input, Modal, Tag} from "./components";
import "./style.less";

export default class App extends React.Component<any, any> {
    state = {
        modal: false,
        salary: "",
        payments: [],
        max: 260000
    }
    calculate() {
        if(Number(this.state.salary) > 9999) {
            const deduction = (Number(this.state.salary) * 12) * 0.13;
            let res = [];
            for (let i = this.state.max; i > 0;) {
                let pay = i - deduction <= 0 ? i : deduction;
                i -= pay;
                res.push(pay)
            }
            this.setState({payments: res});
        }
    }
    render() {
        return (
            <>
                <div>
                    <div className="content">
                        <Button type={"outline"} onClick={() => this.setState({modal: !this.state.modal})}>Налоговый вычет</Button>
                    </div>
                    <Modal show={this.state.modal} onChange={e => this.setState({modal: e})} className={"tax-calculator"}>
                        <p className="header">Налоговый вычет</p>
                        <p className="description">Используйте налоговый вычет чтобы погасить ипотеку досрочно.{"\n"}Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
                        <p className="title">Ваша зарплата в месяц</p>
                        <Input placeholder={"Введите сумму"} value={this.state.salary} block onChange={e => this.setState({salary: String(e).replace(new RegExp("[^0-9]", "g"), "")})}/>
                        <Button type={"text"} onClick={() => this.calculate()}>Расчитать</Button>
                        {this.state.payments.length > 0 && (
                            <>
                                <p className="title" style={{marginTop: "16px"}}>Итого можете внести в качестве досрочных:</p>
                                <div className="payments">
                                    {this.state.payments.map((res, i) => (
                                        <li className={"payment"} key={i}>
                                            <Checkbox/>
                                            <p>{res}</p><p>в {i + 1} год</p>
                                        </li>
                                    ))}
                                </div>
                                <div className={"bottom"}>
                                    <div className="tags">
                                        <p className="title" style={{margin: 0}}>Что уменьшаем?</p>
                                        <Tag selected>Платёж</Tag>
                                        <Tag disabled>Срок</Tag>
                                    </div>
                                    <Button block size={"large"} onClick={() => this.setState({
                                        modal: false,
                                        salary: "",
                                        payments: [],
                                        max: 260000
                                    })}>Добавить</Button>
                                </div>
                            </>
                        )}
                    </Modal>
                </div>
            </>
        );
    }
}