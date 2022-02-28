import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function paginaTopicos(){
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
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
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposAmericaSul?username=${usuarioLogado}`)
                    }}
                    label='Sapos da America do Sul'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
                    }}
                    />
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposAmericaNorte?username=${usuarioLogado}`)
                    }}
                    label='Sapos da America do Norte'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
                    }}
                    />
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposAfrica?username=${usuarioLogado}`)
                    }}
                    label='Sapos da Africa'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
                    }}
                    />
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposAsia?username=${usuarioLogado}`)
                    }}
                    label='Sapos da Asia'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
                    }}
                    />
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposEuropa?username=${usuarioLogado}`)
                    }}
                    label='Sapos da Europa'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
                    }}
                    />
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposOceania?username=${usuarioLogado}`)
                    }}
                    label='Sapos da Oceania'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
                    }}
                    />
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposExoticos?username=${usuarioLogado}`)
                    }}
                    label='Sapos de aparencia Exotica'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
                    }}
                    />
                    <Button
                    onClick={ () => {
                    roteamento.push(`/saposSuper?username=${usuarioLogado}`)
                    }}
                    label='Sapos com super poderes'
                    fullWidth
                    buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary["500"],
                    mainColorLight: appConfig.theme.colors.primary["400"],
                    mainColorStrong: appConfig.theme.colors.primary["600"],
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
                    Topicos
                </Text>
                <Text>
                    {props.usuarioLogado}
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
