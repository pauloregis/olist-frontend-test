import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Rules from './index'
import Table, { Row, Column } from 'components/storybook/Table'
import { Title, SubHeader, Header, Container } from 'components/storybook/Layout'
import CodeExample from 'components/storybook/CodeExample'

const stories = storiesOf('Rules', module)
stories.addDecorator(withKnobs)

stories.add('guide', () => (
  <Container>
    <Title>Rules</Title>
    <Rules
      rules={['Some rule 1', 'Some rule 2', 'Some rule 3']}
      correctRules={['Some rule 1']}
      startedField
    />
    <CodeExample syntax='jsx'>
      {`<Rules
\trules={['Some rule 1', 'Some rule 2', 'Some rule 3']}
\tcorrectRules={['Some rule 1']}
\tstartedField
/>`}
    </CodeExample>
    <Table head={[ 'Propriedade', 'PropType', 'Default', 'Descrição' ]}>
      <Row>
        <Column>rules</Column>
        <Column>Array de string</Column>
        <Column>[]</Column>
        <Column>
          Regras que irão definir a validação.
        </Column>
      </Row>
      <Row>
        <Column>correctRules</Column>
        <Column>Array de string</Column>
        <Column>[]</Column>
        <Column>
          Regras verificadas como corretas.
          <strong>O texto deve ser o mesmo, levando em consideração a sua respectiva regra.</strong>
        </Column>
      </Row>
      <Row>
        <Column>startedField</Column>
        <Column>boolean</Column>
        <Column>false</Column>
        <Column>
          Define se as regras podem assumir o comportamento esperado.
          Ou seja, o circulo de cada regra só representará o estado de certo ou errado,
          se essa propriedade for definida como <strong>true</strong>.
        </Column>
      </Row>
    </Table>
    <Header>Outros casos:</Header>
    <SubHeader>startedField setado como false: </SubHeader>
    <Rules
      rules={['Some rule 1', 'Some rule 2', 'Some rule 3']}
      correctRules={['Some rule 1']}
      startedField={false}
    />
    <CodeExample syntax='jsx'>
      {`<Rules
\trules={['Some rule 1', 'Some rule 2', 'Some rule 3']}
\tcorrectRules={['Some rule 1']}
\tstartedField
/>`}
    </CodeExample>
    <p><i>"Note que essa propriedade leva prioridade no comportamento do componente"</i></p>
  </Container>
))

stories.add('playground', () => {
  const rules = [...Array(5)].map((item, index) => `Some rule ${index + 1}`)
  const correctRules = rules.filter(item => boolean(item, false))
  const startedField = boolean('field password was started?', false)

  return (
    <Container>
      <Title>Playground</Title>
      <Rules
        rules={rules}
        correctRules={correctRules}
        startedField={startedField}
      />
      <p>Experimente alterar as possibilidades ao lado</p>
    </Container>
  )
})
