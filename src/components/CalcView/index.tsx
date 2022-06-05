import { StyleSheet, Text, View } from "react-native";
import { Container, CurrentNumber, LastNumber, TextContainer } from "./styles";

interface CalcViewProps {
  currentNumbers: string;
  lastNumbers: string;
}

export default function CalcView({ currentNumbers, lastNumbers } : CalcViewProps) {
  return (
    <Container>
      <TextContainer>
        <LastNumber>{lastNumbers}</LastNumber>
        <CurrentNumber>{currentNumbers}</CurrentNumber>
      </TextContainer>
    </Container>
  )
}