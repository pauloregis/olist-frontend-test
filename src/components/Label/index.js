import styled from 'styled-components'

import { gray } from 'utils/colors'
import rem from 'utils/rem'

const Label = styled.label`
  font-size: ${rem(16)};
  line-height: ${rem(26)};
  color: ${gray};
  display: block;
`

export default Label
