import React, { useState } from "react";

import { Pressable, Text } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  width?: string;  // PROPRIEDADE OPCIONAL É INDICADA COM UM "?", NO FINAL DA VARIAVEL
  backgroundColor?: 'darkGray' | 'orange';
  fontSize?: string;
  textColor?: 'white' | 'orange';
}

export function Button({ title, onPress, width, backgroundColor, fontSize, textColor }: ButtonProps) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  function onPressIn() {
    setIsPressed(true);
  }

  function onPressOut() {
    setIsPressed(false);
  }

  return (
    <Pressable
      onPress={onPress}
      width={width || '50px'}
      backgroundColor={backgroundColor || 'darkGray'}
      isPressed={isPressed}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Text
        fontSize={fontSize || '26px'}
        color={textColor || 'white'}
      >
        {title}
      </Text>
    </Pressable>
  )
}





