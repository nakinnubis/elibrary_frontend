import React, {useState } from "react";

let setUse = () => { }
export const AuthContext = React.createContext([{}, setUse]);

export const AuthProvider = (props) => {
    const [user, setUser] = useState({})
    return (
        <AuthContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthContext.Provider>
    )
}


// <[user:{}, setUser:Dispatch<SetStateAction<{}>>]>

