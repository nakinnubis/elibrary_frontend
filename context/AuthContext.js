import React, { useState, useEffect } from "react";

let user = {}

export const AuthContext = React.createContext([user,function setUser(){}]);

export const AuthProvider = (props) => {
    const [user, setUser] = useState({memberPeople:[{otherNames:""}]})
    return (
        <AuthContext.Provider value={[user, setUser]}>
            {props.children}
        </AuthContext.Provider>
    )
}




