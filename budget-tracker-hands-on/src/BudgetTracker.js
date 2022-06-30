import React from 'react';

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
        editingExpense: null
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

    displayExpenses = () => {
        return (
            <React.Fragment>
                {this.state.expenses.map(e =>
                    <div>
                        <ul>
                            <li>date: {e.date}</li>
                            <li>description: {e.description}</li>
                            <li>category: {e.category}</li>
                            <li>amount: {e.amount}</li>
                            <li>reconciled: <input type='checkbox'
                                checked={e.reconciled}
                                onChange={() => this.updateReconciled(e)} /></li>
                        </ul>
                        <button>edit</button>
                        <button>delete</button>
                    </div>)}
            </React.Fragment>
        )
    }

    displayEditExpenses = () => {
        return (
            <React.Fragment>
                {this.state.expenses.map(e =>
                    <div>

                    </div>)}
            </React.Fragment>
        )
    }


    render() {
        return (
            <React.Fragment>
                <h1>expense tracker</h1>
                <div>
                    <h2>view past expenses</h2>
                    {this.displayExpenses()}
                </div>
                <div>
                    <h2>adding a new expense</h2>
                    <div>
                        <label>date: </label>
                        <input type='text' value={this.state.date} name='date' onChange={this.updateFormField} />
                    </div>
                    <div>
                        <label>description: </label>
                        <input type='text' value={this.state.description} name='description' onChange={this.updateFormField} />
                    </div>
                    <div>
                        <label>category: </label>
                        <select name='category' value={this.state.category} onChange={this.updateFormField}>
                            <option value='transport'>transport</option>
                            <option value='entertainment'>entertainment</option>
                            <option value='food'>food</option>
                            <option value='bills'>bills</option>
                            <option value='loans'>loans</option>
                            <option value='others'>others</option>
                        </select>
                    </div>
                    <div>
                        <label>amount: </label>
                        <input type='text' value={this.state.amount} name='amount' onChange={this.updateFormField} />
                    </div>
                    {/* <div>
                        <label>reconciled: </label>
                        <input type='checkbox' value={this.state.reconciled} name='reconciled' onChange={() => this.selected}/>
                    </div> */}
                    <button onClick={this.addNewExpense}>submit</button>
                </div>
            </React.Fragment>
        )
    }
}