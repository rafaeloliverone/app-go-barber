import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from './styles';


const SignUp: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Button title="SignIn Voltar" onPress={() => navigation.navigate('SignIn')}></Button>

      <Text>SignUp aq</Text>
    </Container>
  )
}

export default SignUp;
