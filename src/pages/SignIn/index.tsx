import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Title } from './styles';


const SignIn: React.FC = ({ navigation }) => {
  return (
    <Container>
      {/* <Button title="SignUp" onPress={() => navigation.navigate('SignUp')}></Button> */}
      <Image source={logoImg}></Image>
      <Title>Faça seu login</Title>

      <Input name="email" icon="mail" placeholder="E-mail"/>
      <Input name="password" type="password" icon="lock" placeholder="Senha" secureText={true}/>
      <Button onPress={() => {console.log('Entrando')}}>Entrar</Button>
    </Container>
  )
}

export default SignIn;
