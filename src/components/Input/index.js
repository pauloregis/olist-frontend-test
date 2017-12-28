import React from 'react'
import styled from 'styled-components'

import { blue, grayLight1, grayLight2, redPastel } from 'utils/colors'
import rem from 'utils/rem'
import PropTypes from 'prop-types'

const Input = styled.input`
  border: ${rem(1)} solid ${p => p.borderColor || grayLight2};
  display: ${p => p.display === 'inline' ? 'inline-block' : p.display};
  width: ${p => p.display === 'inline' ? 'auto' : '100%'};
  color: ${grayLight1};
  font-size: ${rem(16)};
  padding: 0 ${rem(15)};
  height: ${rem(44)};
  box-shadow: inset 0 ${rem(3)} ${rem(3)} rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  
  &:focus {
    border-color: ${p => p.borderColor || blue};
    box-shadow: ${p => p.borderColor ? '0 0 1px ' + p.borderColor : '0 0 1px ' + blue};
    outline: none;
  }
`

const Error = styled.div`
  color: ${redPastel};
  font-size: ${rem(14)};
  margin-top: ${rem(8)};
`

const Wrapper = ({ errors, borderColor, ...rest }) => (
  <div>
    <Input
      {...rest}
      borderColor={errors ? redPastel : borderColor}
    />
    {errors && errors.length > 0 && (
      errors.map((error, index) => (
        <Error key={index}>{error}</Error>
      ))
    )}
  </div>
)

Input.propTypes = {
  display: PropTypes.oneOf(['inline', 'block']),
  borderColor: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string)
}

Input.defaultProps = {
  display: 'inline',
  borderColor: grayLight2
}

export default Wrapper
