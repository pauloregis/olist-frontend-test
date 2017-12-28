import styled from 'styled-components'

import { headerFont } from 'utils/fonts'
import { grayLight4 } from 'utils/colors'
import { gray } from '../../utils/colors'
import rem from 'utils/rem'

export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: #312F4F;
  font-size: ${rem(42)};
  font-weight: bold;
  font-family: ${headerFont};
  border-bottom: ${rem(2)} solid ${grayLight4};
`

export const Header = styled.h2`
  font-size: ${rem(32)};
  font-weight: 500;
  font-family: ${headerFont};
  padding-bottom: ${rem(5)};
  border-bottom: ${rem(2)} solid ${grayLight4};
`

export const SubHeader = styled.h3`
  display: block;
  margin: ${rem(35)} 0 ${rem(22)} 0;
  font-size: ${rem(20)};
  font-weight: 500;
  font-family: ${headerFont};
  color: ${gray};
`

export const Container = styled.div`
  position: relative;
  max-width: ${rem(800)};
  margin: 0 auto;
  padding: ${rem(20)} ${rem(15)} ${rem(15)} ${rem(15)};
`
