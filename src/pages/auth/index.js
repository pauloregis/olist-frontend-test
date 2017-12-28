import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Logotype from 'components/Logotype'
import { Divider } from 'components/Layout'
import rem from 'utils/rem'

const BaseLayout = styled.div`
  background-color: #F5F5FB;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`

const AuthCard = styled.div`
  padding: ${rem(60)} ${rem(70)} ${rem(48)} ${rem(70)};
  background-color: white;
  border: ${rem(3)} solid #F2F2F2;
  box-sizing: border-box;
  max-width: ${rem(515)};
  width: 100%;
`

const Title = styled.h1`
  font-size: ${rem(22)};
  font-weight: normal;
  line-height: ${rem(31)};
  color: #312F4F;
  margin: 0;
  text-align: center;
`

const Auth = ({ hasLogotype, title, children }) => (
  <BaseLayout>
    <AuthCard>
      {hasLogotype && (
        <Divider>
          <Logotype align='center' />
        </Divider>
      )}
      <Divider>
        <Title>{title}</Title>
      </Divider>
      {React.cloneElement(children)}
    </AuthCard>
  </BaseLayout>
)

Auth.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  hasLogotype: PropTypes.bool
}

Auth.defaultProps = {
  children: <div>Auth content</div>,
  title: 'Page title',
  hasLogotype: true
}

export default Auth
