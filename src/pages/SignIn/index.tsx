import React from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';


const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}
        >
          <Container>
            <Image source={logoImg}></Image>
            <Title>Faça seu login</Title>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" type="password" icon="lock" placeholder="Senha" secureText={true} />
            <Button onPress={() => {console.log('Entrando')}}>Entrar</Button>

            <ForgotPassword onPress={() => {console.log('esqueci')}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => {console.log('criar conta')}}>
        <Icon name="log-in" size={20} color="#ff9000"/>
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>


    </>

  )
}

export default SignIn;
