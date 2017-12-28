import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StepBar from './StepBar'
import { grayLight3 } from 'utils/colors'
import { getColor } from './../utils'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const StepBars = ({ totalSteps, currentStep }) => (
  <Wrapper>
    {[...Array(currentStep)].map((elem, index) => (
      <StepBar key={index} color={getColor(currentStep, totalSteps, grayLight3)} />
    ))}
    {[...Array(totalSteps - currentStep)].map((elem, index) => (
      <StepBar key={index} color={grayLight3} />
    ))}
  </Wrapper>
)

StepBars.propTypes = {
  totalSteps: PropTypes.number,
  currentStep: (props, propName, componentName) => {
    const { currentStep, totalSteps } = props
    if (currentStep !== parseInt(currentStep)) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Should be a integer.`
      )
    }

    if (currentStep > totalSteps) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Should be a integer less than ${totalSteps}.`
      )
    }

    if (currentStep < 0) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Should be a integer greater than 0.`
      )
    }
  }
}

StepBars.defaultProps = {
  totalSteps: 3,
  currentStep: 0
}

export default StepBars
