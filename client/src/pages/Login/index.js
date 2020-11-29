import React, { useState } from 'react'

import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'

const Login = () => {
  return (
    <Background>
      <AccountPrompt
        text={'log in'}
        apiEndpoint={'login'}
        pageHeader={'SIGN IN TO YOUR ACCOUNT'}
        linkText={'SIGN UP FOR AN ACCOUNT'}
        link={'/signup'}
      />
    </Background>
  )
}

export default Login
