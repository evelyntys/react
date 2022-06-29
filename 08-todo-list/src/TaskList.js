import React from 'react';

export default class TaskList extends React.Component {
    state = {
        tasks: [
            {
                _id: 1,
                description: 'walk the dog',
                done: false
            },
            {
                _id: 2,
                description: 'water the plants',
                done: false
            },
            {
                _id: 3,
                description: 'pay the bills',
                done: false
            }
        ], 
        newTaskName: "",
    }
    
    updateFormField = (event) => {
        this.setState({
        //event.target will contain the element that the event happened on 
        //event.target.value will contain the value of the target element
        //event.target.name should contain the name of the key that we want to modify in the state
        [event.target.name]: event.target.value
        })
    }

    addNewTask = () => {
        let newTask = {
            _id: Math.floor(Math.random() * 10000 + 1),
            description: this.state.newTaskName,
            done: false
        }
        //step 1: clone the array
        let clone = this.state.tasks.slice();
        //step 2: modify the cloned array
        clone.push(newTask);
        //step 3: replace the cloned array into the state
        this.setState({
            tasks: clone
        })
    }

    render() {
        return (
        <React.Fragment>
            <h1>Todo List</h1>
            {
                this.state.tasks.map(t => (
                    <React.Fragment key={t._id}>
                        <li>{t.description}
                        <input type='checkbox' className='form-check-input ms-3' checked={t.done}/>
                        </li>
                    </React.Fragment>
                ))
            }

            <h2 className='mt-3'>Add a new Task</h2>
            <div>
                <label>
                    Task Name:
                </label>
                <input type='text' className='form-control' name='newTaskName' value={this.state.newTaskName} onChange={this.updateFormField}/>
                <button className='mt-1 btn btn-primary' onClick={this.addNewTask}>Add</button>
            </div>
        </React.Fragment>
        )

    }
}