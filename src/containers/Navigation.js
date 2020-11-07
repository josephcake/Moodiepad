import React, {useState} from 'react'
import {HOME, secondaryNavigationConstants} from "../constant/navigation-constant"
import {NavigationItems} from '../components/NavigationItems'

export const Navigation = () =>{

    const [page, setPage] = useState(HOME)
    console.log(page)
    return (
        <div className="navigation">
            <div className="navigation__item__left">
                <div className="navigation__item">
                    <button onClick={(e)=>setPage(e.target.innerText)} className="navigation__item-btn">
                        HOME
                    </button>
                </div>
            </div>
            <div className="navigation__item__right">
                {
                    secondaryNavigationConstants.map(items=><NavigationItems value={items} setPage={setPage}/>)
                }            
            </div>
        </div>

    )
}