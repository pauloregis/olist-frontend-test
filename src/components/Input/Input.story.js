import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, array } from '@storybook/addon-knobs'

import Input from './index'
import Label from 'components/Label'
import { grayLight2, redPastel } from 'utils/colors'
import Table, { Row, Column } from 'components/storybook/Table'
import { Title, SubHeader, Header, Container } from 'components/storybook/Layout'
import CodeExample from 'components/storybook/CodeExample'

const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)

stories.add('guide', () => (
  <Container>
    <Title>Input</Title>
    <SubHeader>Default input: </SubHeader>
    <Input />
    <CodeExample syntax='jsx'>
      {
        `<Input />`
      }
    </CodeExample>
    <Table head={[ 'Propriedade', 'PropType', 'Default', 'Descrição' ]}>
      <Row>
        <Column>display</Column>
        <Column>String(inline ou block)</Column>
        <Column>inline</Column>
        <Column>
          Define se o input vai ser da largura do container em que se encontra ou não.
        </Column>
      </Row>
      <Row>
        <Column>borderColor</Column>
        <Column>String</Column>
        <Column>{grayLight2}</Column>
        <Column>
          Define a cor da borda.
        </Column>
      </Row>
      <Row>
        <Column>errors</Column>
        <Column>Array de strings</Column>
        <Column>-</Column>
        <Column>
          Define as mensagens de erro que aparecem logo abaixo do input.
        </Column>
      </Row>
    </Table>
    <Header>Outros casos:</Header>
    <SubHeader>Do tipo password: </SubHeader>
    <Input defaultValue='123456' type='password' />
    <CodeExample syntax='jsx'>
      {
        `<div>\n\t<Input defaultValue='123456' type='password' />\n</div>`
      }
    </CodeExample>
    <SubHeader>Com label: </SubHeader>
    <div>
      <Label>Nome completo</Label>
      <Input />
    </div>
    <CodeExample syntax='jsx'>
      {
        `<div>\n\t<Label>Nome completo</Label>\n\t<Input />\n</div>`
      }
    </CodeExample>
    <SubHeader>Com errors: </SubHeader>
    <div>
      <Label>Nome Completo</Label>
      <Input errors={['Something is wrong 1', 'Something is wrong 2']} />
    </div>
    <CodeExample syntax='jsx'>
      {
        `<div>\n\t<Label>Nome Completo</Label>\n\t<Input errors={['Something is wrong 1', 'Something is wrong 2']} />\n</div>`
      }
    </CodeExample>
    <p>
      <i>Caso não seja passado nenhum borderColor, por padrão, a borda assumira a cor {redPastel}</i>
    </p>
  </Container>
))

stories.add('playground', () => {
  const labelText = text('Texto da Label', 'Nome Completo')
  const value = array('Errors:(Array)', ['Something is wrong 1', 'Something is wrong 2'])

  return (
    <Container>
      <Title>Playground</Title>
      <div>
        <Label>{labelText}</Label>
        <Input errors={value} />
      </div>
      <p>Experimente alterar o texto da <strong>label</strong> no select ao lado e
      alterar o array de erros<i>(separando os itens por virgula)</i></p>
    </Container>
  )
})
