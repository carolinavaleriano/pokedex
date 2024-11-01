import styled, { css } from "styled-components/native";

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width

export const Container = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    height: 200px;
    background: ${theme.colors.background}
    margin-left: -20px;
  `}
`;


export const TextWrapper = styled.View`
  flex: 1;
  margin-bottom: 20px;
  padding: 0px 40px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.dark_text}
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    margin-top: 40px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    margin-top: 10px;
    line-height: 19px;
    font-weight: normal;
    color: ${theme.colors.light_text}
  `}
`;