import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class BudgetTracker extends React.Component {

    state = {
        expenses: [
            {
                _id: Math.floor(Math.random() * 10000 + 1),
                date: "29-06-2022",
                description: "chicken rice",
                category: "food",
                amount: 3,
                reconciled: true
            },
            {
                _id: Math.floor(Math.random() * 10000 + 1),
                date: "29-06-2022",
                description: "mrt",
                category: "transport",
                amount: 4,
                reconciled: false
            },
            {
                _id: Math.floor(Math.random() * 10000 + 1),
                date: "29-06-2022",
                description: "phone bills",
                category: "bills",
                amount: 50,
                reconciled: true
            }
        ],
        date: "",
        description: "",
        category: "transport",
        amount: 0,
        reconciled: false,
        editingExpense: 0,
        modifiedDate: "",
        modifiedDescription: "",
        modifiedCategory: "transport",
        modifiedAmount: 0,
        modifiedReconciled: false,
        deleteExpense: 0
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateReconciled = (record) => {
        let clonedE = { ...record, reconciled: !record.reconciled };
        let index = this.state.expenses.findIndex(function (t) {
            if (t._id === clonedE._id) {
                return true;
            }
            else {
                return false;
            }
        })
        this.setState({
            expenses: [
                ...this.state.expenses.slice(0, index),
                clonedE,
                ...this.state.expenses.slice(index + 1)
            ]
        })
    }

    addNewExpense = () => {
        let newExpense = {
            _id: Math.floor(Math.random() * 10000 + 1),
            date: this.state.date,
            description: this.state.description,
            category: this.state.category,
            amount: Number(this.state.amount),
            reconciled: false
        }
        let clone = this.state.expenses.slice();
        clone.push(newExpense)
        this.setState({
            expenses: clone
        })
    }

    displayExpenses = (e) => {
        return (
            <div className='card mt-3 mb-3' style={{ 'width': '18rem' }} key={e._id}>
                <div className='card-body'>
                    <h4 className='card-title'>
                        {e.description}
                    </h4>
                    <p className='card-text'>
                        <b>date</b>: {e.date}<br />
                        <b>category</b>: {e.category}<br />
                        <b>amount</b>: ${e.amount}<br />
                        <b>reconciled</b>: <input type='checkbox'
                            checked={e.reconciled}
                            onChange={() => this.updateReconciled(e)} /><br />
                    </p>
                    <div className='d-flex'>
                        <button className='btn btn-warning btn-sm w-50' onClick={() => { this.beginEditExpense(e) }}>edit</button>
                        <button className='btn btn-danger btn-sm w-50' onClick={() => { this.setState({ deleteExpense: e._id }) }}>delete</button>
                    </div>
                </div>
            </div>
        )
    }

    beginEditExpense = (expense) => {
        this.setState({
            editingExpense: expense,
            modifiedDate: expense.date,
            modifiedDescription: expense.description,
            modifiedCategory: expense.category,
            modifiedAmount: expense.amount,
            modifiedReconciled: expense.reconciled,
        })
    }

    displayEditExpenses = (e) => {
        return (
            <React.Fragment>
                <div className='card mt-3 mb-3' style={{ 'width': '18rem' }}>
                    <div className='card-body'>
                        <h4 className='card-title'>
                            <input type='text' className='form-control' value={this.state.modifiedDescription} name='modifiedDescription' onChange={this.updateFormField} />
                        </h4>

                        <p className='card-text'>
                            <div>
                                <label><b>date: </b></label>
                                <input type='text' class='form-control' value={this.state.modifiedDate} name='modifiedDate' onChange={this.updateFormField} />
                            </div>

                            <div>
                                <label><b>category: </b> </label>
                                <select value={this.state.modifiedCategory} className='form-select' name='modifiedCategory' onChange={this.updateFormField}>
                                    <option value='transport'>transport</option>
                                    <option value='entertainment'>entertainment</option>
                                    <option value='food'>food</option>
                                    <option value='bills'>bills</option>
                                    <option value='loans'>loans</option>
                                    <option value='others'>others</option>
                                </select>
                            </div>

                            <div>
                                <label><b>amount: </b></label>
                                <input type='text' className='form-control' value={this.state.modifiedAmount} name='modifiedAmount' onChange={this.updateFormField} />
                            </div>

                            <b>reconciled</b>:
                            <input type='checkbox'
                                checked={this.state.modifiedReconciled}
                                onChange={() => this.updateReconciled(e)} /><br />
                        </p>
                        <button className='btn btn-sm btn-warning' onClick={this.processEditExpense}>edit</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    processEditExpense = () => {
        let modifiedExpense = {
            ...this.state.editingExpense,
            date: this.state.modifiedDate,
            description: this.state.modifiedDescription,
            category: this.state.modifiedCategory,
            amount: this.state.modifiedAmount,
            reconciled: this.state.modifiedReconciled
        }
        let index = this.state.expenses.findIndex(function (e) {
            if (e._id === modifiedExpense._id) {
                return true
            }
            else {
                return false
            }
        })
        let cloned = this.state.expenses.slice();
        cloned.splice(index, 1, modifiedExpense);
        this.setState({
            expenses: cloned,
            editingExpense: 0
        })
    }

    beginDeleteExpense = (e) => {
        return (
            <div className='card mt-3 mb-3' style={{ 'width': '18rem' }}>
                <div className='card-body'>
                    <h4 className='card-title'>
                        {e.description}
                    </h4>
                    <p className='card-text'>
                        are you sure you want to delete this entry?
                    </p>
                    <div className='d-flex'>
                        <button className='btn btn-danger btn-sm w-50' onClick={() => { this.deleteExpense(e) }}>delete</button>
                        <button className='btn btn-warning btn-sm w-50' onClick={() => { this.setState({ deleteExpense: 0 }) }}>cancel</button>
                    </div>
                </div>
            </div>
        )
    }

    deleteExpense = (expense) => {
        let index = this.state.expenses.findIndex(function (e) {
            if (e._id === expense._id) {
                return true
            }
            else {
                return false
            }
        })
        let cloned = [
            ...this.state.expenses.slice(0, index),
            ...this.state.expenses.slice(index + 1)]
        this.setState({
            expenses: cloned
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <h1>expense tracker</h1>

                    <h2>view past expenses</h2>
                    <div className='container d-flex flex-row flex-wrap justify-content-evenly'>
                        {this.state.expenses.map(e => {
                            return (
                                <React.Fragment>
                                    {
                                        (
                                            () => {
                                                if (this.state.deleteExpense && this.state.deleteExpense === e._id) {
                                                    return this.beginDeleteExpense(e)
                                                }
                                                else if (this.state.editingExpense && this.state.editingExpense._id === e._id){ 
                                                    return this.displayEditExpenses(e) 
                                                }
                                                else {
                                                    return this.displayExpenses(e)
                                                }
                                            })()
                                    }
                                </React.Fragment>
                            )
                        })
                        }
                    </div>

                    <div className='container' style={{ 'height': 'auto', 'border': '1px solid black' }}>
                        <h2>add a new expense</h2>
                        <div className='container'>
                            <div>
                                <label><b>description: </b> </label>
                                <input type='text' className='form-control' value={this.state.description} name='description' onChange={this.updateFormField} />
                            </div>
                            <div>
                                <label><b>date: </b> </label>
                                <input type='text' className='form-control' value={this.state.date} name='date' onChange={this.updateFormField} />
                            </div>

                            <div>
                                <label><b>category: </b> </label>
                                <select name='category' className='form-select' value={this.state.category} onChange={this.updateFormField}>
                                    <option value='transport'>transport</option>
                                    <option value='entertainment'>entertainment</option>
                                    <option value='food'>food</option>
                                    <option value='bills'>bills</option>
                                    <option value='loans'>loans</option>
                                    <option value='others'>others</option>
                                </select>
                            </div>
                            <div>
                                <label><b>amount: </b> </label>
                                <input type='text' className='form-control' value={this.state.amount} name='amount' onChange={this.updateFormField} />
                            </div>
                            <button className='btn btn-sm btn-success mt-3 mb-3' onClick={this.addNewExpense}>submit</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}