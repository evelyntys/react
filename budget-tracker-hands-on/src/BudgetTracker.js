import React from 'react';

export default class BudgetTracker extends React.Component{

    state={
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
        reconciled: false
    }

    updateFormField = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>expense tracker</h1>
                <div>
                    <h2>view past expenses</h2>
                    {this.state.expenses.map(e => 
                    <ul>
                        <li>date: {e.date}</li>
                        <li>description: {e.description}</li>
                        <li>category: {e.category}</li>
                        <li>amount: {e.amount}</li>
                        <li>reconciled: {e.reconciled}</li>
                    </ul>)}
                </div>
                <div>
                    <h2>adding a new expense</h2>
                    <div>
                        <label>date: </label>
                        <input type='text' value={this.state.date} name='date' onChange={this.updateFormField}/>
                    </div>
                    <div>
                        <label>description: </label>
                        <input type='text' value={this.state.description} name='description' onChange={this.updateFormField}/>
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
                        <input type='text' value={this.state.amount} name='amount' onChange={this.updateFormField}/>
                    </div>
                    <div>
                        <label>reconciled: </label>
                        <input type='checkbox' value={this.state.description} name='reconciled' onChange={this.updateFormField}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}