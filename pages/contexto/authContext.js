import React, { createContext, useState, useContext } from "react";

export const authContext = createContext();
export function authProvider(props) {
  const [usuarioLogado, setUsuarioLogado] = useState({
    nome: "",
    avatar: "",
  });
  console.log(props);
  return (
    <authContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      {props.children}
    </authContext.Provider>
  );
}
export function useUsuario() {
  const context = useContext(authContext);
  const { usuarioLogado, setUsuarioLogado } = context;
  return context;
}
