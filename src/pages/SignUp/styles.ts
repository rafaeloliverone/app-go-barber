import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { isIphoneX, getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 30px ${Platform.OS === 'android' ? 200: 100}px;

`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;

`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #312e38;
  border-top-width: 1px;
  border-top-color: #232129;
  padding: 16px 0;
  ${
    isIphoneX() ? `padding-bottom: ${16 + getBottomSpace()}px` : `padding-bottom: 16px`
  }

`;

export const BackToSignInText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #F4EDE8;
  margin-left: 16px;

`;
