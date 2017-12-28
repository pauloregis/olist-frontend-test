import styled from 'styled-components'
import { gray } from 'utils/colors'
import rem from 'utils/rem'

const Rule = styled.li`
  font-size: ${rem(16)};
  line-height: ${rem(26)};
  color: ${gray};
  list-style: none;
  
  &:before {
    content: '';
    background-color: ${p => p.color};
    height: ${rem(10)};
    width: ${rem(10)};
    border-radius: 50%;
    display: inline-block;
    margin-right: ${rem(10)};
  }
`

export default Rule
