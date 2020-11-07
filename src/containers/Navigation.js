import React from 'react'

export const Navigation = () =>{
    return (
        <div className="navigation">
            <div className="navigation__item__left">
                <div className="navigation__item">Home</div>
            </div>
            <div className="navigation__item__right">
                <div className="navigation__item">Task</div>
                <div className="navigation__item">History</div>
                <div className="navigation__item">Profile</div>
                <div className="navigation__item">Themes</div>
            </div>
        </div>

    )
}