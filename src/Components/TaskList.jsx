import React, { Fragment } from 'react'

import Task from '../Components/Task'

const TaskList = (props) => {
    const { tasks, removeTask, changeState } = props

    return (
        <Fragment>
            {tasks.map((item) => {
                return (
                    <Task task={item} removeTask={removeTask} changeState={changeState} key={item.id}/>
                )
            })}
        </Fragment>
    )
}

export default TaskList
