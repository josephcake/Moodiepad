import React, {createContext, useState} from 'react';

export const UserContext = createContext()

export const UserProvider = (props) =>{
    const [user, setUser] = useState("Test")
    
    return (
        <UserContext.Provider 
            value={
                [pagusere, setUser],
                {
                user:user,
                setUser,setUser                
                }
            }
        >
            {props.children}
        </UserContext.Provider>
    )

}

