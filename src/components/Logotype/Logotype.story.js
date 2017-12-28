import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Logotype from './index'
import Table, { Row, Column } from 'components/storybook/Table'
import { Title, SubHeader, Header, Container } from 'components/storybook/Layout'
import CodeExample from 'components/storybook/CodeExample'

const stories = storiesOf('Logotype', module)
stories.addDecorator(withKnobs)

stories.add('guide', () => (
  <Container>
    <Title>Button</Title>
    <SubHeader>Default button: </SubHeader>
    <Logotype />
    <CodeExample syntax='jsx'>
      {
        `<Logotype />`
      }
    </CodeExample>
    <Table head={[ 'Propriedade', 'PropType', 'Default', 'Descrição' ]}>
      <Row>
        <Column>align</Column>
        <Column>String(left, center ou right)</Column>
        <Column>left</Column>
        <Column>
          Define o alinhamento do logotipo.
        </Column>
      </Row>
    </Table>
    <Header>Outros casos:</Header>
    <SubHeader>Alinhado ao centro: </SubHeader>
    <Logotype align='center' />
    <CodeExample syntax='jsx'>
      {
        `<Logotype align='center' />`
      }
    </CodeExample>
  </Container>
))

stories.add('playground', () => {
  const showOptional = select('Align options', ['left', 'center', 'right'], 'center')
  return (
    <Container>
      <Title>Playground</Title>
      <Logotype align={showOptional} />
      <p>Experimente alterar a propriedade <strong>align</strong> no select ao lado</p>
    </Container>
  )
})
