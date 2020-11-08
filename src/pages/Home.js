import React, {useState} from 'react'
import {Task} from '../containers/Task'
import {Bar, Line} from 'react-chartjs-2'

export const Home = () =>{


    const [toggle, setToggle] = useState(false)
    return (
        <div className="home-container">            
            <div className="home-container__item">
                <Line
                    data={{
                        labels:[1,2,3,4,5],
                        datasets:[
                            {
                                label:"how moody",
                                data:[3,6,2,7,6],
                                backgroundColor:[
                                    'coral'
                                ],
                                borderColor:['black'],
                                borderWidth:2
                            }
                        ]

                    }}
                    height={400}
                    width={window.innerWidth}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            yAxes:[
                                {
                                    ticks:{
                                        beginAtZero:true,
                                    }
                                }
                            ]
                        }
                    }}
                />

                
            </div>
            <div className={`${toggle?'home-container__float-out':'home-container__float-in'}`}>
                <div 
                    className={"float-toggler"}
                    onClick={()=>setToggle(!toggle)}
                >
                    <img src={"https://www.freeiconspng.com/uploads/right-arrow-icon-27.png"} alt="arrow"/>
                </div>
                <Task/>
            </div>
        </div>
    )
}