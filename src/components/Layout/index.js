import styled from 'styled-components'
import PropTypes from 'prop-types'

import rem from 'utils/rem'

export const Divider = styled.div`
  margin: ${p => p.margin};
`

Divider.propTypes = {
  margin: PropTypes.string
}

Divider.defaultProps = {
  margin: `0 0 ${rem(20)} 0`
}
