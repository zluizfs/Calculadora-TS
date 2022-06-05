import styled from "styled-components/native";
import colors from "../../styles/theme";

export const Container = styled.View`
  width: 240px;
  height: 120px;
`

export const TextContainer = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
  height: 100%;
  background: ${colors.darkGray};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const CurrentNumber = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  text-align: right;
  padding-right: 5px;
`

export const LastNumber = styled.Text`
  font-size: 40px;
  color: ${colors.white};
  text-align: right;
`