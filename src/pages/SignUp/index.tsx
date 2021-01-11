import React, { useRef, useCallback } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.png';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const squema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await squema.validate(data, {
          abortEarly: false,
        })

        api.post('/users', data);

        Alert.alert(
          'Cadastro realizado com sucesso',
          'Você já pode fazer login.'
        );

        navigation.goBack();

      } catch(err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          console.log(errors);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao cadastro, cheque os campos.'
        );
      }
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
            <Title>Crie sua conta</Title>

            <Form style={{width: '100%'}} ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
              />
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
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
              <Button onPress={() => formRef.current?.submitForm()}>Cadastrar</Button>
            </Form>

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
