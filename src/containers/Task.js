import React, {useEffect, useState} from 'react'
import {TaskItem} from '../components/TaskItem'

export const Task = () => {    



    const [input, setInput] = useState()
    const [taskList, setTaskList] = useState([
        {
            value:"dummy",
            completed:false
        }, 
        {
            value:"data",
            completed:false
        },
        {
            value:"test",
            completed:false
        },
        {
            value:"strike",
            completed:false
        },
    ])
 
    const checkList = (value) => {       
        if(!value.trim().length){
            return setInput("")
        }
        if(!value === undefined){
            return
        }

        let newTask = {
            value:value,
            completed:false
        }                
        setTaskList([...taskList, newTask])
    }

    const deleteTaskList = (e) =>{
        // debugger
        let newTaskList = taskList
        let completedTask = newTaskList.find((task)=>{return task.value === e.target.innerText})
        completedTask.completed = true
        console.log(taskList)
        // setTaskList((ps)=>{
        //     return newTaskList
        // })
    }

    console.log('rerendered')
    return (
        <div className="task-container">
            <div className="task-container__inner">
                <div className="task-container__date">
                    today's date
                </div>
                <div className="task-container__add-task" >
                    <input 
                        type="text"
                        placeholder="What to do?" 
                        value={input} 
                        onChange={e=>setInput(e.target.value)}
                        onKeyPress={e=>{
                            if(e.key === "Enter"){
                                checkList(input)
                            }
                        }}
                    />
                </div>
            </div>
            
            <div className="task-container__tasks">                
                {
                    taskList.map(data => <TaskItem data={data} deleteTaskList={deleteTaskList}/>)
                }

            </div>

        </div>
    )
}