import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function paginaSaposNorte(){
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username
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
                placeholder='Escreva no topico'
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
                    Sapos da America do Norte
                </Text>
                <Text>
                    {}
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                    />
            </Box>
        </>
    )
    }