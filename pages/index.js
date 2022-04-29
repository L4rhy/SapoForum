import { Box, Button, Text, TextField } from "@skynexui/components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import { firebase, auth } from "./firebase/firebase";
import { useUsuario } from "./contexto/authContext";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
export default function PaginaInicial() {
  
  const { usuarioLogado, setUsuarioLogado } = useUsuario();
  console.log(usuarioLogado);
  console.log(setUsuarioLogado);

  const [email, setEmail] = React.useState("");
  const [password, setPassord] = React.useState("");
  const [some, setSome] = React.useState("0");
  const roteamento = useRouter();

  const handlerGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
  };
  const handlerGitHub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const result = await auth.signInWithPopup(provider);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        const { displayName, photoURL } = user;
        setUsuarioLogado({
          nome: displayName,
          avatar: photoURL,
        })
        console.log("usuario logou");
        roteamento.push("/foruns");
      } else {
        console.log("sem usuario");
      }
    });
  }, []);

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary["500"],
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
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals["700"],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log("Alguém submeteu o form");
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => console.log("login feito"))
                .catch((error) => console.log(error));
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Bem Vinde! ao Sapo Forum</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals["300"],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              placeholder="email"
              value={email}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                const valor = event.target.value;
                setEmail(valor);
                if (valor.length > 2) {
                  setSome("0");
                } else {
                  setSome("1");
                }
                console.log(some);
              }}
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
              type="password"
              placeholder="senha"
              value={password}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                const valor = event.target.value;
                setPassord(valor);
                if (valor.length > 2) {
                  setSome("0");
                } else {
                  setSome("1");
                }
                console.log(some);
              }}
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
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary["500"],
                mainColorLight: appConfig.theme.colors.primary["400"],
                mainColorStrong: appConfig.theme.colors.primary["600"],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              gap: "25px 25px",
            }}
          >
            <Button
              onClick={() => roteamento.push("/cadastro")}
              label="Cadastrar"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary["500"],
                mainColorLight: appConfig.theme.colors.primary["400"],
                mainColorStrong: appConfig.theme.colors.primary["600"],
              }}
            />
            <Button
              onClick={handlerGoogle}
              label="Google"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary["500"],
                mainColorLight: appConfig.theme.colors.primary["400"],
                mainColorStrong: appConfig.theme.colors.primary["600"],
              }}
            />
            <Button
              onClick={handlerGitHub}
              label="GitHub"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary["500"],
                mainColorLight: appConfig.theme.colors.primary["400"],
                mainColorStrong: appConfig.theme.colors.primary["600"],
              }}
            />
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
