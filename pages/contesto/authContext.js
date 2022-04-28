import React, { createContext, useContext, useState } from "react";

const authContext = createContext({})
export default function authContextProvider(props){
    const [usuarioLogado, setUsuarioLogado] = useState()
    return (
    <authContext.Provider value={{usuarioLogado, setUsuarioLogado}}>
        {props.children}
    </authContext.Provider>
    )
}