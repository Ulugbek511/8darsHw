import React from 'react'
import { useSelector } from 'react-redux'

function TaskListItem() {
  const tasks = useSelector((state) => state.tasks)
    return (
    <div>
        {
            tasks.map((t) => (
                <p key={t.id}>{t.text}</p>
            ))
        }
    </div>
  )
}

export default TaskListItem
