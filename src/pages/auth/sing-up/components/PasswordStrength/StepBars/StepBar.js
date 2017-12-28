import styled from 'styled-components'
import rem from 'utils/rem'

const StepBar = styled.div`
  background-color: ${p => p.color};
  display: block;
  width: 100%;
  height: ${rem(8)};
  border-radius: ${rem(10)};
  margin: 0 ${rem(5)};
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
`

export default StepBar
