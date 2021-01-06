import React, { useRef, useCallback } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';


import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';


const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: Object) => {
    console.log(data);
  }, [])

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

            <Form style={{width: '100%'}} ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <Input
                name="password"
                type="password"
                icon="lock"
                placeholder="Senha"
                secureText={true}
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
              />
              <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
            </Form>

            <ForgotPassword onPress={() => {console.log('esqueci')}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000"/>
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>


    </>

  )
}

export default SignIn;
