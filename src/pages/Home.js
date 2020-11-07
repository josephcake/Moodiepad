import React from 'react'
import {Task} from '../containers/Task'

export const Home = () =>{
    return (
        <div className="home-container">            
            <div className="home-container__item">
                pie/graph chart of your history
            </div>
            <div className="home-container__item">
                daily tasks, adding new tasks

            </div>
        </div>
    )
}