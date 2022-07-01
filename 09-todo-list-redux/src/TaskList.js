import React from 'react';
import Task from './components/Task';
import AddNewTask from './components/AddNewTask';
import EditTask from './components/EditTask';
import ConfirmDelete from './components/ConfirmDelete';

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
        modifiedTaskDescription: "",
        taskBeingEdited: {},
        taskBeingDeleted: {}
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

    updateTaskDone = (task) => {
    const modifiedTask = {
        ...task, 
        done: !task.done //if task.done was true, it is now false} 
    }

    const index = this.state.tasks.findIndex(t => t._id === task._id);


    let cloned = [
        ...this.state.tasks.slice(0, index),
        modifiedTask,
        ...this.state.tasks.slice(index+1)
    ]
    this.setState({
        tasks: cloned
    })
}

beginEdit = (task) => {
    this.setState({
        taskBeingEdited: task,
        modifiedTaskDescription: task.description
    })
}

processUpdate = () => {
    const modifiedTask = {
        ...this.state.taskBeingEdited,
        description: this.state.modifiedTaskDescription
    }

    const index = this.state.tasks.findIndex( t => t._id === modifiedTask._id);
    //clone the array
    const cloned = this.state.tasks.slice();

    //starting at index (first argument), replace one element (second argument) with the modifiedTask (third argument)
    cloned.splice(index, 1, modifiedTask);

    this.setState({
        tasks: cloned,
        taskBeingEdited: {}
    })
}

confirmation = (task) => {
    this.setState({
        taskBeingDeleted: task
    })
}

delete = (task) => {
    const index = this.state.tasks.findIndex(t => t._id === task._id);
    const modified = [
        ...this.state.tasks.slice(0, index), //get all the elements before the index to delete
        ...this.state.tasks.slice(index+1) //get all the elements after the index to delete
        //spread operator has less priority than slice -> will slice first before spreading
    ]
    this.setState({
        tasks: modified,
        taskBeingDeleted:{}
    })
}

cancelDelete = () => {
    this.setState({
        taskBeingDeleted:{}
    })
}

    render() {
        return (
            <React.Fragment>
                <h1>Task List</h1>
                <ul className='list-group'>
                    {
                        this.state.tasks.map(t => {
                            if (this.state.taskBeingDeleted._id === t._id){
                                return <ConfirmDelete
                                task={t}
                                delete={this.delete}
                                cancel={this.cancelDelete}/>
                            }
                            else if (this.state.taskBeingEdited._id === t._id){
                        
                                return <EditTask key={t._id}
                                modifiedDescription={this.state.modifiedTaskDescription}
                                updateFormField={this.updateFormField}
                                processUpdate={this.processUpdate}/> //mocking
                            }
                            else{
                                return <Task 
                                task={t} 
                                key={t._id} 
                                updateTaskDone = {this.updateTaskDone}
                                beginEdit = {this.beginEdit}
                                confirmDelete={this.confirmation}
                                />
                
                            }
                        }

                        )

                    }
                </ul>
                <AddNewTask newTaskDescription={this.state.newTaskDescription}
                updateFormField={this.updateFormField}
                addTask={this.addTask}/>
            </React.Fragment>
        )
    }
}