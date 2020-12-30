import React from 'react';
import { Button, Image } from 'react-native';

import { Container, Title } from './styles';
import logoImg from '../../assets/logo.png';


const SignIn: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')}></Button>
      <Image source={logoImg}></Image>
      <Title>Faça seu login</Title>
    </Container>
  )
}

export default SignIn;
