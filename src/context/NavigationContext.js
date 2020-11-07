import React, {createContext, useState} from 'react';
import {HOME, TASK, HISTORY, PROFILE, THEME, secondaryNavigationConstants} from '../constant/navigation-constant';

export const NavigationContext = createContext()

export const NavigationProvider = (props) =>{
    const [page, setPage] = useState(HOME)
    // console.log(page)
    return (
        <NavigationContext.Provider 
            value={
                [page, setPage],
                {
                page:page,
                setPage,setPage,
                HOME:HOME, 
                secondaryNavigationConstants:secondaryNavigationConstants
                }
            }
        >
            {props.children}
        </NavigationContext.Provider>
    )

}

