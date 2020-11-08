import React, {createContext, useState, useEffect} from 'react';
import {HOME, TASK, HISTORY, PROFILE, THEME, secondaryNavigationConstants} from '../constant/navigation-constant';

export const NavigationContext = createContext()

export const NavigationProvider = (props) =>{
    const [page, setPage] = useState(HOME)
    const [theme, setTheme] = useState(true)
    
    useEffect(()=>{
        let root = window.document.getElementById("root")
        if(theme === false){
            root.style.backgroundColor = "black"
        }else{
            root.style.backgroundColor = "white"
        }
    })
    // console.log(page)
    return (
        <NavigationContext.Provider 
            value={
                [page, setPage],
                {
                page:page,
                setPage,setPage,
                theme:theme,
                setTheme:setTheme,
                HOME:HOME, 
                THEME:THEME,
                secondaryNavigationConstants:secondaryNavigationConstants
                }
            }
        >
            {props.children}
        </NavigationContext.Provider>
    )

}

