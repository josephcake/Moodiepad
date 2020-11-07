import React from 'react'
// import {HOME, secondaryNavigationConstants} from "../constant/navigation-constant"
import {NavigationItems} from '../components/NavigationItems'
import {NavigationContext} from '../context/NavigationContext'

export const Navigation = () =>{

    // const [page, setPage] = useContext(NavigationContext)
    // console.log(page)
    return (
        <NavigationContext.Consumer>
            {({setPage, HOME, secondaryNavigationConstants})=>{                             
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
                            secondaryNavigationConstants.map(items=><NavigationItems key={items} value={items} setPage={setPage}/>)
                        }            
                    </div>
                </div>
                )}}
        </NavigationContext.Consumer>


    )
}