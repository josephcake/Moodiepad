import React, {createContext, useState, useEffect} from 'react';

export const UserContext = createContext()

export const UserProvider = (props) =>{
    const [user, setUser] = useState("Test")

    useEffect(()=>{
        console.log(localStorage.token)
        setUser(JSON.parse(localStorage.token))        
    },[])
    
    // console.log(user)
    return (
        <UserContext.Provider 
            value={
                [user, setUser],
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

