import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import { bodyFont } from 'utils/fonts'
import rem from 'utils/rem'
import SoleilRegularWoff from 'static/fonts/Soleil-Regular.woff'
import SoleilRegularEot from 'static/fonts/Soleil-Regular.eot'
import SoleilRegularTtf from 'static/fonts/Soleil-Regular.ttf'
import SoleilRegularSvg from 'static/fonts/Soleil-Regular.svg'
import SoleilBoldWoff from 'static/fonts/Soleil-Bold.woff'
import SoleilBoldEot from 'static/fonts/Soleil-Bold.eot'
import SoleilBoldTtf from 'static/fonts/Soleil-Bold.ttf'
import SoleilBoldSvg from 'static/fonts/Soleil-Bold.svg'

injectGlobal`
  ${normalize()}

  @font-face {
    font-family: 'Soleil';
    font-weight: normal;
    src: url(${SoleilRegularEot});
    src: url(${SoleilRegularEot + '#iefix'}) format('embedded-opentype'), 
      url(${SoleilRegularWoff}) format('woff'),
      url(${SoleilRegularTtf})  format('truetype'),
      url(${SoleilRegularSvg + '#svgFontName'}) format('svg')
  }
  
  @font-face {
    font-family: 'Soleil';
    font-weight: bold;
    src: url(${SoleilBoldEot});
    src: url(${SoleilBoldEot + '#iefix'}) format('embedded-opentype'), 
      url(${SoleilBoldWoff}) format('woff'),
      url(${SoleilBoldTtf})  format('truetype'),
      url(${SoleilBoldSvg + '#svgFontName'}) format('svg')
  }
  
  html, body, body > div {
    font-size: ${rem(16)};
    font-family: ${bodyFont};
    height: 100%;
    position: relative;
  }
`
