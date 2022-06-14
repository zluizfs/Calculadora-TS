import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';

import CalcView from '../../components/CalcView';

import { Background, ButtonContainer, Container } from './styles';

export default function Home() {
  const buttons = ['C', '√', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', 'DEL', '^', '=']
  const unicode = {
    '/': '\u00F7',
    '√': '\u221A'
  }



  const [current, setCurrent] = useState('');
  const [last, setLast] = useState('');

  function calculator() {
    const splitNumbers = current.split(' ')
    const firstNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch (operator) {
      case '+':
        setCurrent((firstNumber + lastNumber).toString())
        return
      case '-':
        setCurrent((firstNumber - lastNumber).toString())
        return
      case 'x':
        setCurrent((firstNumber * lastNumber).toString())
        return
      case unicode['/']:
        if(firstNumber === 0 && lastNumber === 0) {
          setCurrent('Impos. dividir por 0');
          return
        }
        
        setCurrent((firstNumber / lastNumber).toString())
        return
      case '√':
        setCurrent((Math.sqrt(firstNumber)).toString())
        return
      case '%':
          setCurrent((firstNumber / 100).toString())
          return
      case '^':
        setCurrent((Math.pow(firstNumber, lastNumber)).toString())
        return
    }
  }

  function handleOperation(button: string) {

    if (button === 'x' || button === '+' || button === '-' || button === '%' || button === '^') {
      setCurrent(current + " " + button + " ")
      return
    }

    if (button === '/' || button === '√') {
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
        <CalcView currentNumbers={current !== 'NaN' ? current : 'Oper. não suportada'} lastNumbers={last} />
        <ButtonContainer>
          {buttons.map((button) =>
            button === '-' || button === '+' || button === '='  || button === 'x' ?
              <Button
                title={button}
                backgroundColor="orange"
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
                  button === '/' || button === '√' ?
                    <Button
                      title={unicode[button]}
                      fontSize="28px"
                      backgroundColor={button !== '√' ? 'orange' : 'darkGray'}
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
