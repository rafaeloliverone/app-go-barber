import React from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Title, ForgotPassword, ForgotPasswordText, BackToSignIn, BackToSignInText } from './styles';


const SignUp: React.FC = () => {
  const navigation = useNavigation();

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
            <Title>Crie sua conta</Title>

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" type="password" icon="lock" placeholder="Senha" secureText={true} />
            <Button onPress={() => {console.log('Entrando')}}>Cadastrar</Button>


          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#F4EDE8"/>
        <BackToSignInText>Voltar para o login</BackToSignInText>
      </BackToSignIn>


    </>

  )
}

export default SignUp;
