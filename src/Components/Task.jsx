import React, { Fragment } from 'react'

const Task = (props) => {

    const { task, removeTask, changeState } = props
    return (
        <div>
            <h2>Tarefa: {task.name}</h2> 
            <span>Descrição: {task.description}</span>
            <div>
            <button onClick={() => changeState(task)}>{task.status}</button>
            <button onClick={() => removeTask(task)}>Remover</button> 
            </div>
            <hr/>
            
        </div>
    )
}

export default Task
