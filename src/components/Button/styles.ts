import styled from "styled-components/native";

import colors from '../../styles/theme';

interface PressableProps {
  backgroundColor: 'darkGray' | 'orange';
  isPressed: boolean;
  width: string;
}

interface TextProps {
  fontSize: string;
  color: 'white' | 'orange';
}

const btnColors = {
  darkGray: colors.darkGray,
  orange: colors.orange
}

const textColors = {
  white: colors.white,
  orange: colors.orange
}

export const Pressable = styled.Pressable<PressableProps>`
  width: ${props => props.width};
  height: 50px;
  background-color: ${props => btnColors[props.backgroundColor]};
  opacity: ${(props) => props.isPressed ? 0.8 : 1};
  border-radius: 50px;
  margin: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text<TextProps>`
  font-size: ${props => props.fontSize};
  font-weight: 400;
  text-align: center;
  color: ${props => textColors[props.color]}
`