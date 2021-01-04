import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  secureText?: boolean;
}

const Input: React.FC<InputProps> = ({ name, icon, secureText, ...rest}) => {
  return (
    <Container >

      <Icon name={icon} size={20} color="#666360"/>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        secureTextEntry={secureText}
        {...rest}
      />

    </Container>
  )
}

export default Input;
