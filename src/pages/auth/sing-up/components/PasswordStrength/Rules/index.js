import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Rule from './Rule'
import { getRuleColor } from './../utils'

const Ul = styled.ul`
  padding-left: 0;
  margin: 0;
`

const normalizeRules = (rules, correctRules) => rules.map((rule, index) => ({
  index: index + 1,
  text: rule,
  isCorrect: correctRules.some(item => item === rule)
}))

const Rules = ({ rules, correctRules, startedField }) => (
  <Ul>
    {rules.length > 0 && (
      normalizeRules(rules, correctRules).map((item) => (
        <Rule key={item.index} color={getRuleColor(startedField, item.isCorrect)}>{item.text}</Rule>
      ))
    )}
  </Ul>
)

Rules.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.string),
  correctRules: PropTypes.arrayOf(PropTypes.string),
  startedField: PropTypes.bool
}

Rules.defaultProps = {
  rules: [],
  correctRules: [],
  startedField: false
}

export default Rules
