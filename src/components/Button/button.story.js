import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Button from './index'
import { green, blue } from 'utils/colors'
import Table, { Row, Column } from 'components/storybook/Table'
import { Title, SubHeader, Header, Container } from 'components/storybook/Layout'
import CodeExample from 'components/storybook/CodeExample'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

stories.add('guide', () => (
  <Container>
    <Title>Button</Title>
    <SubHeader>Default button: </SubHeader>
    <Button>Default button</Button>
    <CodeExample syntax='jsx'>
      {
        `<Button>\n\tDefault button\n</Button>`
      }
    </CodeExample>
    <Table head={[ 'Propriedade', 'PropType', 'Default', 'Descrição' ]}>
      <Row>
        <Column>color</Column>
        <Column>String</Column>
        <Column>{blue}</Column>
        <Column>
          Define o bg-color do botão.
        </Column>
      </Row>
      <Row>
        <Column>display</Column>
        <Column>String(inline ou block)</Column>
        <Column>inline</Column>
        <Column>
          Define se o botão vai ser da largura do container em que se encontra ou não.
        </Column>
      </Row>
    </Table>
    <Header>Outros casos:</Header>
    <SubHeader>Success button: </SubHeader>
    <Button color={green}>Success button</Button>
    <CodeExample syntax='jsx'>
      {
        `<Button color={green}>\n\tDefault button\n</Button>`
      }
    </CodeExample>
    <SubHeader>With display prop: </SubHeader>
    <Button display='block'>Display: block</Button>
    <CodeExample syntax='jsx'>
      {
        `<Button display='block'>\n\tDefault button\n</Button>`
      }
    </CodeExample>
  </Container>
))

stories.add('playground', () => {
  const displayOptions = select('Display options', ['inline', 'block'], 'inline')
  return (
    <Container>
      <Title>Playground</Title>
      <Button display={displayOptions}>Display: {displayOptions}</Button>
      <p>Experimente alterar a propriedade display no select ao lado</p>
    </Container>
  )
})
