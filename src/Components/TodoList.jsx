import React, { Component, Fragment } from 'react'

import CreateTaskForm from '../Components/CreateTaskForm'
import TaskList from '../Components/TaskList'

export default class TodoList extends Component {
    state = {
        tasks: [
            {
                name: 'bla',
                description: 'sadadasdsada',
                status: 'TODO',
                id: 1,
            },
            {
                name: 'bla',
                description: 'sadadasdsada',
                status: 'DONE',
                id: 2,
            },
            {
                name: 'bla',
                description: 'sadadasdsada',
                status: 'IN PROGRESS',
                id: 3,
            }
        ]
    }

    insertTask = (task) => {
       let newTasks = this.state.tasks
       newTasks.push(task)

       this.setState({
           tasks: newTasks.slice()
       }
       )
    }
        

    changeState = (task) => {
        const AVAILABLE_STATUSES = ['TODO', 'DONE', 'IN PROGRESS']
        const actualIndex = AVAILABLE_STATUSES.indexOf(task.status)

        const status = actualIndex + 1 >= AVAILABLE_STATUSES.length ? AVAILABLE_STATUSES[0] : AVAILABLE_STATUSES[actualIndex+1]
        
        const newTasks = this.state.tasks.map(item => {
            if (item === task) {
                item.status = status
            }
            return item
        })
        this.setState({
            tasks: newTasks,
        })
    }

    removeTask = (task) => {
        console.log("Remove task called")
        this.setState({
            tasks: this.state.tasks.filter((item) => (
                item !== task
            ))
        })
    } 

    render () {
        return (
        <Fragment>
            <CreateTaskForm insertTask={this.insertTask} />
            <h1> Lista de ToDos</h1>
            <TaskList tasks={this.state.tasks} removeTask={this.removeTask} changeState={this.changeState}/>
        </Fragment>       
        )
    }
}