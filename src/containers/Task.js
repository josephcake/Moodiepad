import React from 'react'

export const Task = () => {
    return (
        <div className="task-container">
            <div className="task-container__date">
                today's date
            </div>
            <div className="task-container__add-task">
                <input type="text" placeholder="What to do?"/>
            </div>
            <div className="task-container__tasks">
                <div className="task">eat</div>
                <div className="task">sleep</div>
                <div className="task">tennis</div>
                <div className="task">doctor</div>
                <div className="task">coffee</div>
            </div>

        </div>
    )
}