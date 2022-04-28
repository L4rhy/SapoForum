import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';
import {firebase, auth} from "./firebase/firebase"
import Axios from "axios"
import { authContext } from './contesto/authContext';

export default function paginaSaposAfrica(){
    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")
    const [listaDePost, setListaDePost] = useState([])
    const {usuarioLogado, setUsuarioLogado} = useContext(authContext)
    console.log(usuarioLogado)
    function handleNovoPost( ){
        Axios.post("http://localhost:3001/saposAfrica", {
            nome: user.displayName,
            titulo: titulo,
            texto: texto,
            foto: user.photoURL
        })
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: "url(https://i.pinimg.com/564x/5e/e8/ca/5ee8cae49e26467bc13e0b1e214c0c62.jpg)",
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header usuarioLogado={usuarioLogado}/>
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                <TextField
                value={titulo}
                onChange={(event) => {
                    const valor = event.target.value;
                    setTitulo(valor);
                }}
                placeholder='Escreva o Titulo'
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals["200"],
                    mainColor: appConfig.theme.colors.neutrals["900"],
                    mainColorHighlight: appConfig.theme.colors.primary["500"],
                    backgroundColor: appConfig.theme.colors.neutrals["800"],
                  },
                }}
                />
                <TextField
                value={texto}
                onChange={(event) => {
                    const valor = event.target.value;
                    setTexto(valor);
                }}
                onKeyPress={(event) => {
                    if (event.key === 'Enter'){
                        event.preventDefault();
                        handleNovoPost(titulo, texto);
                    }
                }}
                placeholder='Escreva o Texto'
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals["200"],
                    mainColor: appConfig.theme.colors.neutrals["900"],
                    mainColorHighlight: appConfig.theme.colors.primary["500"],
                    backgroundColor: appConfig.theme.colors.neutrals["800"],
                  },
                }}
                />
                <Button 
                        onClick={() =>{
                            handleNovoPost(titulo, texto)
                        }
                        }
                        iconName="arrowRight"
                        styleSheet={{
                            borderRadius: '50%',
                            padding: '0 3px 0 0',
                            minWidth: '50px',
                            minHeight: '50px',
                            fontSize: '20px',
                            marginBottom: '8px',
                            lineHeight: '0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}  
                        buttonColors={{
                            contrastColor: appConfig.theme.colors.neutrals["000"],
                            mainColor: appConfig.theme.colors.primary["500"],
                            mainColorLight: appConfig.theme.colors.primary["400"],
                            mainColorStrong: appConfig.theme.colors.primary["600"],
                        }}/>
                </Box>
            </Box>
        </Box>
    )
    }

    function Header(props) {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Sapos da Africa
                </Text>
                <Image
                styleSheet={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px',
                }}
                src={props.usuarioLogado.photoURL}
                />
                <Text>
                {props.usuarioLogado.displayName}
                </Text>
                <Button
                    onClick={firebase.auth().signOut()}
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                    />
            </Box>
        </>
    )
    }