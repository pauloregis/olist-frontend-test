import styled from 'styled-components'
import lighten from 'polished/lib/color/lighten'

import { blue } from 'utils/colors'
import PropTypes from 'prop-types'
import { headerFont } from 'utils/fonts'
import rem from 'utils/rem'

const Button = styled.button`
  background-color: ${p => p.color};
  display: ${p => p.display === 'inline' ? 'inline-block' : p.display};
  width: ${p => p.display === 'inline' ? 'auto' : '100%'};
  color: white;
  font-size: ${rem(18)};
  font-family: ${headerFont};
  text-align: center;
  min-width: ${rem(100)};
  height: ${rem(52)};
  padding: 0 ${rem(15)};
  border: 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: ${p => lighten(0.10, p.color)};
    transition: all 0.3s ease-in-out;
  }
`

Button.propTypes = {
  color: PropTypes.string,
  display: PropTypes.oneOf(['inline', 'block'])
}

Button.defaultProps = {
  color: blue,
  display: 'inline'
}

Button.displayName = 'Button'

export default Button
