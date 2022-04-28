import React, { useState, useContext } from "react";

export const authContext = React.createContext()
export default function authProvider(props){
    const [usuarioLogado, setUsuarioLogado] = useState({
        nome: "",
        avatar: ""
    })
    console.log(props)
    return (
    <authContext.Provider value={{usuarioLogado, setUsuarioLogado}}>
        {props}
    </authContext.Provider>
    )
}
export function useUsuario(){
    const context =  useContext(authContext)
    return context
}