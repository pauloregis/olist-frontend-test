import React, { Component } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'
import 'prismjs/components/prism-jsx.min'

import rem from 'utils/rem'

const Wrapper = styled.div`
  margin-top: ${rem(20)};
`

const Pre = styled.pre`
  max-width: ${rem(800)};
`

class CodeExample extends Component {
  componentDidMount () {
    Prism.highlightAll()
  }

  render () {
    return (
      <Wrapper>
        <Pre className={'langjsx' + this.props.syntax}>
          <code
            className={'lang-' + this.props.syntax}
            style={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: Prism.highlight(this.props.children, Prism.languages[this.props.syntax]) }}
          />
        </Pre>
      </Wrapper>
    )
  }
}

export default CodeExample
