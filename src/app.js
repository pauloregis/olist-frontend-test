import React from 'react'

import Auth from 'pages/auth'
import SignUpPage from 'pages/auth/sing-up'

const App = () => (
  <Auth
    title='Crie sua conta'
    hasLogotype
  >
    <SignUpPage />
  </Auth>
)

export default App
