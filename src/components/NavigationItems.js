import React from 'react'

export const NavigationItems = ({value, setPage}) => {
    return(
        <div className="navigation__item">
            <button onClick={(e)=>setPage(e.target.innerText)} className="navigation__item-btn" >{value}</button>
        </div>

    )
}