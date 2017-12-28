import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import StepBars from './index'
import Table, { Row, Column } from 'components/storybook/Table'
import { Title, SubHeader, Header, Container } from 'components/storybook/Layout'
import CodeExample from 'components/storybook/CodeExample'

const stories = storiesOf('StepBars', module)
stories.addDecorator(withKnobs)

stories.add('guide', () => (
  <Container>
    <Title>Steps</Title>
    <SubHeader>Default Steps: </SubHeader>
    <StepBars />
    <CodeExample syntax='jsx'>
      {
        `<StepBars />`
      }
    </CodeExample>
    <Table head={[ 'Propriedade', 'PropType', 'Default', 'Descrição' ]}>
      <Row>
        <Column>currentStep</Column>
        <Column>Number</Column>
        <Column>0</Column>
        <Column>
          Define quantos steps ativarão, linearmente, o bg-color. Deve ser maior que 0 e menor ou igual ao currentSteps.
        </Column>
      </Row>
      <Row>
        <Column>totalSteps</Column>
        <Column>Number</Column>
        <Column>3</Column>
        <Column>
          Define o número de steps o componente mostrará.
        </Column>
      </Row>
    </Table>
    <Header>Outros casos:</Header>
    <SubHeader>Success button: </SubHeader>
    <StepBars currentStep={5} totalSteps={7} />
    <CodeExample syntax='jsx'>
      {
        `<StepBars currentStep={5} totalSteps={7} />`
      }
    </CodeExample>
    <StepBars currentStep={2} totalSteps={7} />
    <CodeExample syntax='jsx'>
      {
        `<StepBars currentStep={2} totalSteps={7} />`
      }
    </CodeExample>
    <StepBars currentStep={7} totalSteps={7} />
    <CodeExample syntax='jsx'>
      {
        `<StepBars currentStep={7} totalSteps={7} />`
      }
    </CodeExample>
    <p><i>Nota: O componente ajusta automaticamente a cor dependendo da razão entre as duas propriedades.</i></p>
  </Container>
))

stories.add('playground', () => {
  const steps = [...Array(7)].reduce((acc, cur, index) => ({
    ...acc,
    [String(index)]: `Step ${index}`
  }), {})
  const totalSteps = Object.keys(steps).length - 1
  const stepOptions = select('Steps', steps, '1')

  return (
    <Container>
      <Title>Playground</Title>
      <StepBars
        totalSteps={totalSteps}
        currentStep={+stepOptions}
      />
      <p>Experimente alterar as possibilidades ao lado</p>
    </Container>
  )
})
