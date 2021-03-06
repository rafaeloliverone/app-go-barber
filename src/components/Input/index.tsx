import React, { useEffect, useCallback, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  secureText?: boolean;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, secureText, ...rest}) => {
  const inputElementRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue});

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputValueRef.current.value) {
      setIsFilled(true);
    } else {
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      clearValue(ref: any) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref: any, value: string) {
        ref.setNativeProps({ text: value });
        inputValueRef.current.value = value;
      },
      getValue(ref: any) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);


  return (
    <Container isFocused={isFocused} isErrored={!!error}>

      <Icon name={icon} size={20} color={isFocused || isFilled ? '#ff9000' : "#666360" } />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        secureTextEntry={secureText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        onChangeText={value => {
          if (inputValueRef.current) {
            inputValueRef.current.value = value;
          }
        }}
        {...rest}
      />

    </Container>
  )
}

export default Input;
