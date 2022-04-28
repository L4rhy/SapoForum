import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import { firebase, auth } from "./firebase/firebase";
import useUsuario from "./contexto/authContext";

export default function paginaTopicos() {
  /*const roteamento = useRouter();
  const usuario = useUsuario();
  console.log(usuario);
  const { usuarioLogado, SetUsuarioLogado } = usuario;
  console.log(usuarioLogado);
  console.log(SetUsuarioLogado);*/

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage:
          "url(https://i.pinimg.com/564x/5e/e8/ca/5ee8cae49e26467bc13e0b1e214c0c62.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header usuarioLogado={usuario} />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            gap: "25px 25px",
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <Button
            onClick={() => {
              roteamento.push(`/saposAfrica`);
            }}
            label="Sapos da Africa"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
              margin: 25,
            }}
          />
          <Button
            onClick={() => {
              roteamento.push(`/saposAmericaNorte`);
            }}
            label="Sapos da America do Norte"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
            }}
          />
          <Button
            onClick={() => {
              roteamento.push(`/saposAmericaSul`);
            }}
            label="Sapos da America do Sul"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
            }}
          />
          <Button
            onClick={() => {
              roteamento.push(`/saposAsia`);
            }}
            label="Sapos da Asia"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
              margin: 25,
            }}
          />
          <Button
            onClick={() => {
              roteamento.push(`/saposEuropa`);
            }}
            label="Sapos da Europa"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
              margin: 25,
            }}
          />
          <Button
            onClick={() => {
              roteamento.push(`/saposOceania`);
            }}
            label="Sapos da Oceania"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
              margin: 25,
            }}
          />
          <Button
            onClick={() => {
              roteamento.push(`/saposExoticos`);
            }}
            label="Sapos de aparencia Exotica"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
              margin: 25,
            }}
          />
          <Button
            onClick={() => {
              roteamento.push(`/saposSuper`);
            }}
            label="Sapos com super poderes"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary["500"],
              mainColorLight: appConfig.theme.colors.primary["400"],
              mainColorStrong: appConfig.theme.colors.primary["600"],
              margin: 25,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function Header(props) {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Topicos</Text>
        <Image
          styleSheet={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "8px",
          }}
          src={props.usuarioLogado.avatar}
        />
        <Text>{props.usuarioLogado.nome}</Text>
        <Button
          onClick={firebase.auth().signOut()}
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}
