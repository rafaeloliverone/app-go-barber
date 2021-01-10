import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;

  ${props => props.isFocused && css`
    border-color: #ff9000;
  `}

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  margin: 0 10px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
