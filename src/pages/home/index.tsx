import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';

import CalcView from '../../components/CalcView';

import { Background, ButtonContainer, Container } from './styles';

export default function Home() {
  const buttons = ['C', 'square', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', 'DEL', '=']
  const unicode = {
    '/': '\u00F7',
    'square': '\u221A'
  }



  const [current, setCurrent] = useState('');
  const [last, setLast] = useState('');

  function calculator() {
    const splitNumbers = current.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch (operator) {
      case '+':
        setCurrent((fistNumber + lastNumber).toString())
        return
      case '-':
        setCurrent((fistNumber - lastNumber).toString())
        return
      case 'x':
        setCurrent((fistNumber * lastNumber).toString())
        return
      case '/':
        setCurrent((fistNumber / lastNumber).toString())
        return
    }

  }

  function handleOperation(button: string) {

    if (button === 'x' ||button === '+' || button === '-' || button === '%') {
      setCurrent(current + " " + button + " ")
      return
    }

    if (button === '/' || button === 'square') {
      setCurrent(current + " " + unicode[button] + " ")
      return
    }

    switch (button) {
      case 'C':
        setCurrent("")
        setLast("")
        return
      case 'DEL':
        setCurrent(current.substring(0, (current.length - 1)))
        return
      case '=':
        setLast(current)
        calculator()
        return
    }

    setCurrent(current + button)
  }


  return (
    <Background>
      <Container>
        <CalcView currentNumbers={current} lastNumbers={last} />
        <ButtonContainer>
          {buttons.map((button) =>
            button === '-' || button === '+' || button === '='  || button === 'x' ?
              <Button
                title={button}
                backgroundColor="orange"
                onPress={() => handleOperation(button)}
              />
              :
              button === '0' ?
                <Button
                  title={button}
                  width="110px"
                  onPress={() => handleOperation(button)}
                />
                :
                button === 'DEL' ?
                  <Button
                    title={button}
                    fontSize="18px"
                    onPress={() => handleOperation(button)}
                  />
                  :
                  button === '/' || button === 'square' ?
                    <Button
                      title={unicode[button]}
                      fontSize="28px"
                      backgroundColor={button !== 'square' ? 'orange' : 'darkGray'}
                      onPress={() => handleOperation(button)}
                    />

                    :
                    <Button
                      title={button}
                      onPress={() => handleOperation(button)}
                    />
          )}
        </ButtonContainer>
      </Container>
    </Background>
  )
}
