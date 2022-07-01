import React from 'react';
import Task from './components/Task';

export default class TaskList extends React.Component {
    state = {
        tasks: [
            {
                _id: 1,
                description: 'wash the car',
                done: false
            },
            {
                _id: 2,
                description: 'clean the toilet',
                done: false
            },
            {
                _id: 3,
                description: 'pay the bills',
                done: false
            }
        ],
        newTaskDescription: "",
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTask = (event) => {
        let newTask = {
            _id: Math.floor(Math.random() * 10000 + 10000),
            description: this.state.newTaskDescription,
            done: false
        }
        //clone the existing array from the state
        const cloned = this.state.tasks.slice();

        //modify the clone
        cloned.push(newTask);

        this.setState({
            tasks: cloned
        })

        //elegant solution:
        //this.setState({
        //     tasks: [...this.state.tasks, newTask]
        // })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Task List</h1>
                <ul className='list-group'>
                    {
                        this.state.tasks.map(t => <Task task={t} key={t._id}/>
                        )

                    }
                </ul>

                <h2>add new task</h2>
                <div>
                    <label>description: </label>
                    <input type='text' value={this.state.newTaskDescription}
                    name='newTaskDescription' onChange={this.updateFormField}/><br/>
                    <button className='btn btn-primary mt-3 btn-sm' onClick={this.addTask}>add new task</button>
                </div>
            </React.Fragment>
        )
    }
}