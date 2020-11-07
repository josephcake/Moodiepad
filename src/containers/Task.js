import React, {useEffect, useState} from 'react'

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

    console.log(input)
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
                    taskList.map(data=>{
                        return <div className="task">{data.value}</div>
                    })
                }

            </div>

        </div>
    )
}