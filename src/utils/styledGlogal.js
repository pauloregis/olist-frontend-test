import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import { bodyFont } from 'utils/fonts'
import rem from 'utils/rem'

injectGlobal`
  ${normalize()}
  
  html, body, body > div {
    font-size: ${rem(16)};
    font-family: ${bodyFont};
    height: 100%;
    position: relative;
  }
`
