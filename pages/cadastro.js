import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';
import {firebase, app, auth} from "./firebase/firebase"

  function Titulo(props) {
    const Tag = props.tag || 'h1';
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
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassord] = React.useState("");
    const [some,setSome] = React.useState("0");
    const roteamento = useRouter();
    
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary["500"],
            backgroundImage: "url(https://i.pinimg.com/564x/5e/e8/ca/5ee8cae49e26467bc13e0b1e214c0c62.jpg)",
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals["700"],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault()
                console.log('Alguém submeteu o form')
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(()=> alert("usuario castrado"))
                .catch((error)=> console.log(error))
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(()=> alert("usuario logado"))
                .catch((error)=> console.log(error))
                const user =firebase.auth().currentUser
                user.updateProfile({
                    displayName : username,
                    photoURL : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F10%2F05%2F22%2F37%2Fblank-profile-picture-973460_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fpt%2Fvectors%2Ffoto-de-perfil-em-branco-973460%2F&tbnid=ScRGRFGMiXHWfM&vet=12ahUKEwjs67_FtrL3AhUTMLkGHaAmDn0QMygAegQIARBG..i&docid=CaqOTE768pk6hM&w=640&h=640&q=foto%20usuario%20vazia&client=opera-gx&ved=2ahUKEwjs67_FtrL3AhUTMLkGHaAmDn0QMygAegQIARBG"
                })
                .then(()=>alert("usuario completo"))
                .catch((error)=> console.log(error))
                roteamento.push("/foruns")
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Cadastro no sapo forum</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals["300"] }}>
                {appConfig.name}
              </Text>
              <TextField
                placeholder='nome'
                value={username}
                onChange={function (event) {
                  console.log('usuario digitou', event.target.value)
                  const valor = event.target.value
                  setUsername(valor)
                    if(valor.length>2){
                      setSome("0")
                    }else{
                      setSome("1")
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
                placeholder='email'
                value={email}
                onChange={function (event) {
                  console.log('usuario digitou', event.target.value)
                  const valor = event.target.value
                  setEmail(valor)
                    if(valor.length>2){
                      setSome("0")
                    }else{
                      setSome("1")
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
                placeholder='senha'
                type='password'
                value={password}
                onChange={function (event) {
                  console.log('usuario digitou', event.target.value)
                  const valor = event.target.value
                  setPassord(valor)
                    if(valor.length>2){
                      setSome("0")
                    }else{
                      setSome("1")
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
                type='submit'
                label='Entrar'
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
          </Box>
        </Box>
      </>
    );
  }