import React from 'react'
import PropTypes from 'prop-types'

import Label from 'components/Label'
import { Divider } from 'components/Layout'
import Input from 'components/Input'
import StepBars from './StepBars'
import Rules from './Rules'
import { grayLight2, redPastel } from 'utils/colors'
import { getColor } from './utils'

const PasswordStrength = (props) => {
  const {
    rules,
    correctRules,
    value,
    touched,
    onChange,
    onBlur
  } = props

  return (
    <div>
      <Divider margin='0 0 10px 0'>
        <Label>Senha</Label>
        <Input
          name='password'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type='password'
          display='block'
          borderColor={(
            touched && value.length === 0
              ? redPastel
              : getColor(correctRules.length, rules.length, grayLight2)
          )}
        />
      </Divider>
      <StepBars
        totalSteps={rules.length}
        currentStep={correctRules.length}
      />
      <Rules
        rules={rules}
        correctRules={correctRules}
        startedField={touched || value.length > 0}
      />
    </div>
  )
}

PasswordStrength.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.string),
  correctRules: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  touched: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

PasswordStrength.defaultProps = {
  rules: [],
  correctRules: [],
  value: ''
}

export default PasswordStrength
