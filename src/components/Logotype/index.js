import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import logo from 'static/logo.svg'
import rem from 'utils/rem'

const Wrapper = styled.div`
  text-align: ${p => p.align};
`

const Img = styled.img`
  fill: #0C29D0;
  width: ${rem(87.83)};
`

const Logotype = (props) => (
  <Wrapper align={props.align}>
    <Img src={logo} />
  </Wrapper>
)

Logotype.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

Logotype.defaultProps = {
  align: 'left'
}

export default Logotype
