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
        taskBeingEdited: null, //alternatively, store the _id of the task that is being edited
        modifiedTaskName: ""
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

    updateTaskDone = (task) => {
        //how do we modify an object?
        //task.done = !task.done; => NOT ALLOWED TO MUTATE AN OBJECT DIRECTLY
        let clonedTask = { ...task, done: !task.done }; //=> over-writing, inverse 

        //replace an element into the middle of an array
        //1. find the index of the modified task
        // let index = -1;
        // for (let i=0; i<this.state.tasks.length; i++){
        //     if (this.state.tasks[i]._id === clonedTask._id){
        //         index = i;
        //         break
        //     }
        // }
        let index = this.state.tasks.findIndex(function (t) {
            if (t._id === clonedTask._id) {
                return true;
            } else {
                return false;
            }
        })

        //non-functional updating an array
        // let clonedTaskArray = this.state.tasks.slice();
        // clonedTaskArray[index] = clonedTask;
        // this.setState({
        //     tasks: clonedTaskArray
        // })

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index),
                clonedTask,
                ...this.state.tasks.slice(index + 1)
            ]
        })
    }

    beginEditTask = (task) => {
        this.setState({
            taskBeingEdited: task, //remember which task is being edited
            modifiedTaskName: task.description //store the description of the task taht is being edited (for 2 way binding textbox)
        })
    }

    displayTask = (task) => {
        return (
            <li className='mt-3'>{task.description}
                <input type='checkbox' className='form-check-input ms-3' checked={task.done} onChange={() => { this.updateTaskDone(task) }} />
                <button className='ms-3 btn btn-primary btn-sm' onClick={() => { this.beginEditTask(task) }}>Edit</button>
                <button className='ms-3 btn btn-danger btn-sm' onClick={() => { this.deleteTask(task) }}>Delete</button>
                {/* can also put the entire function here since is just one line */}
            </li>
        )
    }

    displayEditTask = () => {
        return (
            <li className='mt-3'>
                <input type='text' value={this.state.modifiedTaskName} name='modifiedTaskName' onChange={this.updateFormField}/>
                <button className='btn btn-sm btn-primary ms-3' onClick={this.updateTask}>Update</button>
            </li>
        )
    }

    updateTask = () => {
        let modifiedTask = {
            ...this.state.taskBeingEdited, //copy the key/value pairs from the original task object
            description: this.state.modifiedTaskName //update the description {if have 2 same keys in an object, the later key will take precedence and update}
        }

        // update in the middle of an array
        // 0. find the index of the task that we want to update {cannot use indexOf since array contains objects, indexOf only for primitive}
        // let index = this.state.tasks.findIndex(t => t._id === modifiedTask._id)

        let index = this.state.tasks.findIndex(function(t){
            if (t._id ===modifiedTask._id){
                return true;
            }
            else{
                return false
            }
        })

        // 1. clone the existing array
        let cloned = this.state.tasks.slice();
        // 2. modify the array
        cloned.splice(index, 1, modifiedTask)
        // 3. replace the original array in the state with the modified one
        this.setState({
            tasks: cloned,
            taskBeingEdited: null //to go back to showing normal display, if not will keep seeing the edit mode
        })
    }

    deleteTask = (task) => {
        //find the index of the task that we want to delete
        let index = this.state.tasks.findIndex(t => t._id === task._id);
        //remove from the middle technique
        const cloned = [
            ...this.state.tasks.slice(0, index),
            ...this.state.tasks.slice(index+1)
        ]

        this.setState({
            tasks: cloned
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                {
                    //map can take on 2 arguments, t and CurrentIndex
                    this.state.tasks.map(t => (
                        <React.Fragment key={t._id}>

                            {/* checking if the id of each object matches the id of the current task that you are editing */}
                            {this.state.taskBeingEdited === null || this.state.taskBeingEdited._id != t._id ?
                                this.displayTask(t)
                                :
                                this.displayEditTask(t)
                            }
                        </React.Fragment>

                    ))
                }

                <h2 className='mt-3'>Add a new Task</h2>
                <div>
                    <label>
                        Task Name:
                    </label>
                    <input type='text' className='form-control' name='newTaskName' value={this.state.newTaskName} onChange={this.updateFormField} />
                    <button className='mt-1 btn btn-primary' onClick={this.addNewTask}>Add</button>
                </div>
            </React.Fragment>
        )

    }
}